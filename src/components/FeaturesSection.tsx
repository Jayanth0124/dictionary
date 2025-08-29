import React from 'react';
import { 
  Search, 
  Volume2, 
  BookOpen, 
  Globe, 
  Image, 
  Mic,
  Copy,
  Lightbulb
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Word Search',
      description: 'Instantly find comprehensive definitions, meanings, and usage examples for any word.',
      color: 'from-emerald-100 to-teal-100',
      iconColor: 'text-emerald-700'
    },
    {
      icon: Volume2,
      title: 'Audio Pronunciation',
      description: 'Listen to correct pronunciation with US/UK accent variants for perfect learning.',
      color: 'from-blue-100 to-cyan-100',
      iconColor: 'text-blue-700'
    },
    {
      icon: Mic,
      title: 'Voice Search',
      description: 'Search hands-free using voice recognition for a seamless learning experience.',
      color: 'from-purple-100 to-pink-100',
      iconColor: 'text-purple-700'
    },
    {
      icon: BookOpen,
      title: 'Rich Definitions',
      description: 'Multiple meanings, parts of speech, and detailed explanations for complete understanding.',
      color: 'from-amber-100 to-orange-100',
      iconColor: 'text-amber-700'
    },
    {
      icon: Globe,
      title: 'Etymology & Origins',
      description: 'Discover the fascinating history and linguistic roots of every word you explore.',
      color: 'from-indigo-100 to-purple-100',
      iconColor: 'text-indigo-700'
    },
    {
      icon: Image,
      title: 'Visual Context',
      description: 'Related images and visual aids to enhance memory and understanding.',
      color: 'from-rose-100 to-pink-100',
      iconColor: 'text-rose-700'
    },
    {
      icon: Copy,
      title: 'Easy Sharing',
      description: 'Copy definitions and examples with one click for notes and study materials.',
      color: 'from-slate-100 to-gray-100',
      iconColor: 'text-slate-700'
    },
    {
      icon: Lightbulb,
      title: 'Daily Discovery',
      description: 'Learn something new every day with our carefully curated Word of the Day.',
      color: 'from-yellow-100 to-amber-100',
      iconColor: 'text-yellow-700'
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            Everything You Need to
            <span className="block text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-medium">
              Master Words
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Our comprehensive suite of tools makes learning new vocabulary engaging, effective, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/50 
                       hover:bg-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-lg font-medium text-slate-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;