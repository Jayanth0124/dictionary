import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Designed specifically for students and language learners who value deep, distraction-free study sessions.'
    },
    {
      icon: Heart,
      title: 'Calm Experience',
      description: 'Every interaction is crafted to be peaceful and supportive, reducing cognitive load while maximizing retention.'
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Whether you\'re a student, professional, or lifelong learner, our tools adapt to your learning style.'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Lightning-fast search with comprehensive results that include everything you need to truly understand a word.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white/50 to-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">
            About
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-medium">
              {" "}Word Sage
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">
              Word Sage was born from a simple belief: learning new words should be a calm, 
              focused experience that enhances understanding rather than overwhelming the mind.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              We've carefully crafted every detail to create a peaceful digital environment 
              where curiosity thrives and knowledge grows naturally. From the gentle color palette 
              to the smooth animations, everything is designed to support your learning journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200/50 
                       hover:bg-white/90 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl">
                  <value.icon className="w-6 h-6 text-indigo-700" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
            <h3 className="text-2xl font-medium text-slate-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-light">
              To make vocabulary learning accessible, enjoyable, and effective for learners worldwide. 
              We believe that the right tools, presented in the right way, can transform how people 
              discover and understand language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;