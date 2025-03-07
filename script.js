async function searchWord() {
    const word = document.getElementById("wordInput").value.trim();
    const language = document.getElementById("language").value;

    if (!word) {
        alert("Please enter a word");
        return;
    }

    const resultDiv = document.getElementById("result");
    const wikipediaDiv = document.getElementById("wikipedia-info");
    const imageContainer = document.getElementById("imageContainer");

    resultDiv.innerHTML = "<p>Loading...</p>";
    wikipediaDiv.style.display = "none"; // Hide Wikipedia section initially
    imageContainer.innerHTML = "";

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
        const data = await response.json();

        if (!data[0]) {
            resultDiv.innerHTML = "<p>Word not found. Try another word.</p>";
            return;
        }

        const wordData = data[0];
        const meaning = wordData.meanings[0]?.definitions[0]?.definition || "No definition available";
        const phonetics = wordData.phonetics.length ? wordData.phonetics.map(p => p.text).join(", ") : "N/A";
        const synonyms = wordData.meanings[0]?.synonyms || [];

        let audioHTML = "";
        if (wordData.phonetics.length) {
            wordData.phonetics.forEach(p => {
                if (p.audio) {
                    audioHTML += `<button onclick="playAudio('${p.audio}')">🔊 ${p.text || "Play"}</button> `;
                }
            });
        }

        resultDiv.innerHTML = `
            <h2>${wordData.word}</h2>
            <p><strong>Phonetics:</strong> ${phonetics}</p>
            <div class="meaning-box">${meaning}</div>
            <p><strong>Synonyms:</strong> ${synonyms.length ? synonyms.join(", ") : "None"}</p>
            <div>${audioHTML}</div>
        `;

        fetchImage(word);
        fetchWikipediaInfo(word);
    } catch (error) {
        resultDiv.innerHTML = "<p>Failed to fetch word details. Try again later.</p>";
        console.error(error);
    }
}

// 🎤 Speech-to-Text Feature
function startSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
        document.getElementById("wordInput").value = event.results[0][0].transcript;
        searchWord();
    };
}

// 🔊 Play pronunciation audio
function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

// 🌍 Fetch Wikipedia Info (Only Show When Data Exists)
async function fetchWikipediaInfo(word) {
    const wikipediaDiv = document.getElementById("wikipedia-info");

    try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${word}`);
        const data = await response.json();

        if (data.extract) {
            wikipediaDiv.style.display = "block"; // Show Wikipedia section only if data exists
            wikipediaDiv.innerHTML = `
                <h3>📚 Wikipedia Summary</h3>
                <p>${data.extract}</p>
                <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
            `;
        } else {
            wikipediaDiv.style.display = "none"; // Hide Wikipedia section if no data
        }
    } catch (error) {
        wikipediaDiv.style.display = "none"; // Hide Wikipedia section on error
        console.error(error);
    }
}

// 🖼️ Fetch image using Pixabay API (Free & No CORS issues)
async function fetchImage(word) {
    const imageContainer = document.getElementById("imageContainer");
    const apiKey = "49225198-b26b6ba582761ca5a41815714"; // Your Pixabay API Key

    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${word}&image_type=photo`);
        const data = await response.json();

        if (data.hits.length > 0) {
            imageContainer.innerHTML = `<img src="${data.hits[0].webformatURL}" alt="${word}">`;
        } else {
            imageContainer.innerHTML = "<p>No image found.</p>";
        }
    } catch (error) {
        imageContainer.innerHTML = "<p>Failed to load image.</p>";
        console.error(error);
    }
}
