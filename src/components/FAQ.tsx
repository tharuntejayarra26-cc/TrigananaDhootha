import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is Dhootha legit?",
    answer: "100% yes, one touch jeevitam total madda. Live examples: Subhash, suresh, pappa ko bolo etc..."
  },
  {
    question: "How did Dhootha become enlightened?",
    answer: "By birth adi puttagane calculation start, shani randa."
  },
  {
    question: "Where does the donation money actually go?",
    answer: "Nowhere! This is a parody website. No real money is collected. But spiritually? Your good vibes are being invested in the cosmic stock market of positivity."
  },
  {
    question: "Can I get a refund on my blessing?",
    answer: "All blessings are non-refundable, non-transferable, and non-functional. However, you can exchange one useless blessing for another equally useless blessing within 30 karmic cycles."
  },
  {
    question: "Is Dhootha available for private consultations?",
    answer: "Dhootha is always available in B-219 Kalam, midnight discussions are highly preferable."
  },
  {
    question: "How can I join Dhootha's ashram?",
    answer: "The ashram is currently his living room, and membership requires bringing snacks, telling gossips."
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-cream-dark/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">❓</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-spiritual">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            All your burning (and some lukewarm) questions, answered with
            approximately 12% accuracy.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-card data-[state=open]:shadow-spiritual transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom note */}
        <p className="text-center mt-12 text-sm text-muted-foreground">
          🤔 Have more questions? Meditate on them. The answers will come...
          or they won't. Such is life.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
