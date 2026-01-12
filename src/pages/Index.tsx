import React from 'react';
import { Helmet } from 'react-helmet-async';
import FloatingElements from '@/components/FloatingElements';
import Hero from '@/components/Hero';
import Blessings from '@/components/Blessings';
import Donations from '@/components/Donations';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Carousel from "@/components/Carousel";
import Media from "@/components/media";

const images = [
  "/public/carousel/img1.jpeg",
  "/public/carousel/img2.jpeg",
  "/public/carousel/img3.jpeg",
  "/public/carousel/img4.jpeg",
  "/public/carousel/img5.jpeg",
  "/public/carousel/img6.jpeg",
  "/public/carousel/img7.jpeg",
  "/public/carousel/img8.jpeg",
  "/public/carousel/img9.jpeg",
  "/public/carousel/img10.jpeg",
  "/public/carousel/img11.jpeg",
  "/public/carousel/img12.jpeg",
  "/public/carousel/img13.jpeg",
  "/public/carousel/img14.jpeg",
  "/public/carousel/img15.jpeg",
  "/public/carousel/img16.jpeg",
  "/public/carousel/img17.jpeg",
  "/public/carousel/img18.jpeg",
  "/public/carousel/img19.jpeg",
  "/public/carousel/img20.jpeg",
  "/public/carousel/img21.jpeg",
  "/public/carousel/img22.jpeg",
  "/public/carousel/img23.jpeg",
  "/public/carousel/img24.jpeg",
  "/public/carousel/img25.jpeg",

];
const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Baba Ji - Accidentally Enlightened Spiritual Guide | Official Ashram</title>
        <meta
          name="description"
          content="Join Baba Ji's sacred journey of questionable wisdom, useless blessings, and premium chai breaks. Support the spiritual mission today!"
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        <FloatingElements />

        <main className="relative z-10">
          <Hero />
          <Blessings />
          <Donations />
          <Testimonials />
          <Carousel images={images} />
          <FAQ />
          <Media />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
