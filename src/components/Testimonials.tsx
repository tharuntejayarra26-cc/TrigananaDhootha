import React from 'react';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Before meeting Baba Ji, I was stressed about everything. Now I'm stressed about different things. Truly transformative.",
    name: "Lolicon",
    title: "Aeroplane driver",
    avatar: "/public/testimonials/Lolicon.jpeg",
  },
  {
    quote: "Baba Ji told me to 'follow my heart.' My heart led me to the refrigerator. I've never felt more spiritually full.",
    name: "Migilipoina Abhinav",
    title: "hi",
    avatar: "/public/testimonials/abhi.jpeg",
  },
  {
    quote: "Once an underrated EP said it is son of your bussiness.",
    name: "Dr. Sama reddy",
    title: "Ex-Amazon",
    avatar: "/public/testimonials/DrSama.jpeg",
  },
  {
    quote: "The meditation sessions are amazing. I haven't learned how to meditate, but I've mastered the art of looking peaceful while napping.",
    name: "Peaceful Sleeper",
    title: "Accidental Yogi",
    avatar: "/public/testimonials/pawan.jpeg",
  },
  {
    quote: "Dhootha Ji's advice to get any girl 'puff lo ki sos entha mukhyamo naa life lo nv antha mukhyam",
    name: "Deadline Dodger",
    title: "Vibes Consultant",
    avatar: "/public/testimonials/tharun.jpeg",
  },
  {
    quote: "I came seeking answers. I left with more questions. But like, chill questions. Spiritual, you know?",
    name: "Questioning Soul",
    title: "Pegion file",
    avatar: "/public/testimonials/suresh.jpeg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-mystic/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">💬</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-spiritual">Words from Disciples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from definitely real people who definitely exist
            and definitely weren't made up five minutes ago.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border border-border shadow-card hover:shadow-spiritual transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote */}
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-2 text-4xl text-saffron/30">"</span>
                  <p className="text-foreground italic pl-4 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <span className="absolute -bottom-4 right-0 text-4xl text-saffron/30">"</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-spiritual flex items-center justify-center text-2xl">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-full object-cover border border-border"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Star rating joke */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            ⭐⭐⭐⭐⭐ 5/5 stars on Yelp (we wrote all the reviews ourselves)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
