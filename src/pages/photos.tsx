import React from "react";
import FloatingElements from '@/components/FloatingElements';


const selfiePhotos = [
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
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413290/WhatsApp_Image_2026-01-14_at_11.14.03_PM_v2kdfj.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413291/WhatsApp_Image_2026-01-14_at_11.17.10_PM_r4bzai.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413292/WhatsApp_Image_2026-01-14_at_11.21.00_PM_afuk97.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413262/img25_ucewce.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414814/WhatsApp_Image_2026-01-14_at_11.45.25_PM_3_wixhpb.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.23_PM_cdcxnq.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.22_PM_j2iicb.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.23_PM_2_hcorjo.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.23_PM_3_cnjyst.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.22_PM_2_mth9ma.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.21_PM_3_ihhn9c.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768219411/Dhootha1_pcikzp.jpg",

];

const landscapePhotos = [
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218014/WhatsApp_Image_2026-01-12_at_2.54.31_PM_qi9j06.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218012/WhatsApp_Image_2026-01-12_at_2.54.06_PM_iitr5f.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218012/WhatsApp_Image_2026-01-12_at_2.54.07_PM_1_gquons.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768412760/WhatsApp_Image_2026-01-12_at_2.54.07_PM_l6miyr.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218011/WhatsApp_Image_2026-01-12_at_2.54.04_PM_1_faqxy3.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218011/WhatsApp_Image_2026-01-12_at_2.54.03_PM_ihrkez.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218010/WhatsApp_Image_2026-01-12_at_2.48.54_PM_tgougy.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218016/WhatsApp_Image_2026-01-12_at_2.50.54_PM_aqizx3.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218014/WhatsApp_Image_2026-01-12_at_2.50.53_PM_lgmkkd.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218013/WhatsApp_Image_2026-01-12_at_2.50.54_PM_1_ipqqiz.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218022/WhatsApp_Image_2026-01-12_at_2.53.07_PM_fbk6df.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218022/WhatsApp_Image_2026-01-12_at_2.53.09_PM_1_sozbea.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218021/WhatsApp_Image_2026-01-12_at_2.53.10_PM_cf1vbm.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218021/WhatsApp_Image_2026-01-12_at_2.53.12_PM_cst8xv.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218022/WhatsApp_Image_2026-01-12_at_2.53.12_PM_1_nbliql.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218020/WhatsApp_Image_2026-01-12_at_2.53.10_PM_1_qhexx7.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218020/WhatsApp_Image_2026-01-12_at_2.53.11_PM_mt4lm6.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218020/WhatsApp_Image_2026-01-12_at_2.53.09_PM_w9qtyd.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218019/WhatsApp_Image_2026-01-12_at_2.53.08_PM_2_a5uwfg.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218020/WhatsApp_Image_2026-01-12_at_2.53.09_PM_w9qtyd.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218018/WhatsApp_Image_2026-01-12_at_2.53.08_PM_1_glbwqp.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413291/WhatsApp_Image_2026-01-14_at_11.15.05_PM_yqr4d9.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413289/WhatsApp_Image_2026-01-14_at_11.12.51_PM_cmoiqy.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413290/WhatsApp_Image_2026-01-14_at_11.13.37_PM_hpkr2c.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413288/WhatsApp_Image_2026-01-14_at_11.11.58_PM_ltlhbr.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413286/WhatsApp_Image_2026-01-14_at_11.10.04_PM_1_zarhzn.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768413286/WhatsApp_Image_2026-01-14_at_11.10.04_PM_3_pbmnrg.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218014/WhatsApp_Image_2026-01-12_at_2.55.32_PM_1_fseek1.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218015/WhatsApp_Image_2026-01-12_at_2.55.33_PM_1_pgehbh.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768218015/WhatsApp_Image_2026-01-12_at_2.55.33_PM_gcz8mq.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.21_PM_pmz5x8.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.25_PM_1_mhmzbs.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414814/WhatsApp_Image_2026-01-14_at_11.45.25_PM_zgdpm7.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414814/WhatsApp_Image_2026-01-14_at_11.45.25_PM_2_rb43s6.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414811/WhatsApp_Image_2026-01-14_at_11.45.20_PM_xvamd8.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.24_PM_2_cc48nc.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.24_PM_aycfay.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414813/WhatsApp_Image_2026-01-14_at_11.45.24_PM_1_p0rp5p.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414812/WhatsApp_Image_2026-01-14_at_11.45.21_PM_1_db1kkf.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768414811/WhatsApp_Image_2026-01-14_at_11.45.20_PM_1_nbioyf.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.19_PM_ocegzu.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415756/WhatsApp_Image_2026-01-09_at_1.06.20_PM_ps7nac.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.21_PM_fap5mv.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.21_PM_1_pkedrs.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415757/WhatsApp_Image_2026-01-09_at_1.06.22_PM_yho3cc.jpg",
    "https://res.cloudinary.com/dziklqu26/image/upload/v1768415837/WhatsApp_Image_2026-01-09_at_1.06.23_PM_s8ouoc.jpg",
    // "/photos/landscapes/land3.jpg",
    // "/photos/landscapes/land3.jpg",
    // "/photos/landscapes/land3.jpg",
    // "/photos/landscapes/land3.jpg",
];

const Photos: React.FC = () => {
    return (
        <div className="border-t-[10px] border-gold">
            <div className="min-h-screen bg-background relative overflow-hidden">
                <FloatingElements />
                <div className="relative z-10 min-h-screen px-6 py-12 max-w-7xl mx-auto">
                    {/* Page Title */}
                    <h1 className="text-6xl font-bold text-center mb-10 text-gradient-spiritual">
                        Dhootha Gallery
                    </h1>

                    {/* ================= SELFIES SECTION ================= */}
                    <section className="mb-14 flex justify-center items-center">


                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {selfiePhotos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`selfie-${index}`}
                                    className="w-[280px] h-[400px] object-cover rounded-xl shadow-md hover:scale-105 transition"
                                />
                            ))}
                        </div>
                    </section>

                    {/* ================= LANDSCAPE SECTION ================= */}
                    <section>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {landscapePhotos.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`landscape-${index}`}
                                    className="w-full h-72 object-cover rounded-xl shadow-md hover:scale-105 transition"
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Photos;
