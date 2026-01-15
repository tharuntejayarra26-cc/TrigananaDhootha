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
import Media from "@/components/Media";

const images = [
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768412049/WhatsApp_Image_2026-01-14_at_10.58.50_PM_xxpprq.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218018/WhatsApp_Image_2026-01-12_at_2.53.04_PM_opfvqr.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218018/WhatsApp_Image_2026-01-12_at_2.53.06_PM_dx7h8o.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218015/WhatsApp_Image_2026-01-12_at_2.53.05_PM_1_ecr2an.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218014/WhatsApp_Image_2026-01-12_at_2.53.05_PM_2_pppr8w.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218010/WhatsApp_Image_2026-01-12_at_2.49.47_PM_cptq7l.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218010/WhatsApp_Image_2026-01-12_at_2.49.46_PM_ss0ikw.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218017/WhatsApp_Image_2026-01-12_at_2.59.34_PM_1_jipt8q.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218018/WhatsApp_Image_2026-01-12_at_2.59.34_PM_n4cdis.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218926/img7_kprliu.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218010/WhatsApp_Image_2026-01-12_at_2.28.51_PM_dgwiyt.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218016/WhatsApp_Image_2026-01-12_at_2.59.33_PM_kraldc.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218016/WhatsApp_Image_2026-01-12_at_2.56.15_PM_sf9het.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218011/WhatsApp_Image_2026-01-12_at_2.54.04_PM_skjswh.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218015/WhatsApp_Image_2026-01-12_at_2.55.32_PM_slee36.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768218018/WhatsApp_Image_2026-01-12_at_2.59.35_PM_bvqmg7.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768219412/Dhootha_r8iyue.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768219411/Dhootha1_pcikzp.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.19_PM_ocegzu.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415756/WhatsApp_Image_2026-01-09_at_1.06.20_PM_ps7nac.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.21_PM_fap5mv.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.21_PM_1_pkedrs.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.22_PM_yho3cc.jpg",
  "https://res.cloudinary.com/dziklqu26/image/upload/v1768415837/WhatsApp_Image_2026-01-09_at_1.06.23_PM_s8ouoc.jpg",



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
