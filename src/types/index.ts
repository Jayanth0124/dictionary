export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface WordData {
  word: string;
  phonetic: string;
  audioUrl: string;
  meanings: Meaning[];
  synonyms: string[];
  etymology: string;
  origin: string;
}

export interface WordOfTheDayData {
  word: string;
  meaning: string;
  example: string;
  origin: string;
  partOfSpeech: string;
}