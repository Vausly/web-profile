import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'How did you start your journey?',
      answer: 'Well, actually my journey is very long and complicated, I can not describe it.'
    },
    {
      question: 'Who inspires your content?',
      answer: 'Top creators like Erpan1140 & Zenmatho from Minecraft Java, MC874 from Minecraft Bedrock, JessNoLimit from Mobile Legends, MiauAug, and many others.'
    },
    {
      question: 'How can I collaborate with you?',
      answer: 'I don`t know, maybe one day, or you can contact me :)'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-purple-400">{faq.question}</h3>
          <p className="text-gray-300">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};
  

export default FAQs;