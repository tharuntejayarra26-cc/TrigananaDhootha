import React from "react";
import FloatingElements from '@/components/FloatingElements';


const selfieVideos = [
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768219543/WhatsApp_Video_2026-01-12_at_3.00.42_PM_1_seemmw.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768219550/WhatsApp_Video_2026-01-12_at_3.00.42_PM_qcijqg.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768219542/WhatsApp_Video_2026-01-12_at_2.59.36_PM_rvvfak.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768219539/WhatsApp_Video_2026-01-12_at_2.59.03_PM_sggtlu.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768416606/WhatsApp_Video_2026-01-15_at_12.16.56_AM_czo0wn.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768416606/WhatsApp_Video_2026-01-15_at_12.17.26_AM_wsfina.mp4",
    "https://res.cloudinary.com/dziklqu26/video/upload/v1768416818/WhatsApp_Video_2026-01-15_at_12.17.27_AM_cx6rk8.mp4",
];

const Videos: React.FC = () => {
    return (
        <div className="border-t-[10px] border-gold min-h-screen bg-background relative overflow-hidden">
            <FloatingElements />
            <div className="relative z-10 min-h-screen px-6 py-10 max-w-7xl mx-auto">
                <h1 className="text-6xl font-bold text-center mb-12 text-gradient-spiritual">
                    Dhootha Videos
                </h1>

                {/* ================= SELFIE VIDEOS ================= */}
                <section className="mb-16">


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {selfieVideos.map((video, index) => (
                            <video
                                key={index}
                                src={video}
                                controls
                                className="w-full h-64 object-fit rounded-xl shadow-md"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Videos;
