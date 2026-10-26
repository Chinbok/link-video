"use client";

import { useEffect, useRef, useState } from "react";

type VideoItem = {
  title: string;
  src: string;
};

type Section = {
  title: string;
  items?: VideoItem[];
  video?: VideoItem;
  link?: string;
};

const VIDEO_BASE = "https://erchuudiindelguur.mn/videos";

const sections: Section[] = [
  {
    title: "Багцын хэрэглэгчдэд өгөх зөвлөгөө +1",
    video: {
      title: "Зөвлөгөө +1",
      src: `${VIDEO_BASE}/+1.mp4`,
    },
  },
  {
    title: "Захиалга өгөх",
    link: "https://www.facebook.com/hotmongolia",
  },
];

export default function SoftDarkVideoPage() {
  const [mounted, setMounted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);

  // 1. Check local storage on mount to see if already verified
  useEffect(() => {
    setMounted(true);
    const savedVerification = localStorage.getItem("ageVerified");
    if (savedVerification === "true") {
      setIsVerified(true);
    }
  }, []);

  // 2. Safely trigger scroll and play AFTER the video element renders
  useEffect(() => {
    if (activeVideo && videoSectionRef.current && videoRef.current) {
      const player = videoRef.current;
      player.muted = false;
      player.volume = 1;
      player.currentTime = 0;

      // The promise catch handles browsers that block autoplay
      player.play().catch(() => console.log("Autoplay prevented"));

      videoSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeVideo]);

  const verifyAge = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  const playVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setOpenSection(null);
  };

  const handleSection = (section: Section, index: number) => {
    if (section.link) {
      window.location.href = section.link;
      return;
    }

    if (section.video) {
      playVideo(section.video);
      return;
    }

    if (section.items) {
      setOpenSection(openSection === index ? null : index);
    }
  };

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) return null;

  // 18+ НАС БАТАЛГААЖУУЛАХ
  if (!isVerified) {
    return (
      <div className="age-overlay">
        {/* Your existing styles omitted for brevity, but they stay exactly the same */}
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; background: #101010; font-family: system-ui, sans-serif; }
          .age-overlay { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; padding: 20px; background: #101010; z-index: 9999; }
          .age-card { width: 100%; max-width: 400px; padding: 36px 26px; background: #1b1b1d; border: 1px solid #303034; border-radius: 24px; text-align: center; box-shadow: 0 20px 70px #0007; }
          .age-icon { width: 76px; height: 76px; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid #f87171; color: #f87171; font-size: 27px; font-weight: 900; background: #f8717112; }
          .age-title { color: #fff; font-size: 21px; font-weight: 900; line-height: 1.4; margin: 0 0 14px; }
          .age-description { color: #aaaab2; font-size: 14px; line-height: 1.8; margin-bottom: 28px; }
          .age-actions { display: flex; gap: 12px; }
          .age-actions button { flex: 1; border: none; border-radius: 12px; padding: 15px 8px; font-weight: 800; font-size: 14px; cursor: pointer; }
          .age-yes { background: #f87171; color: #181818; }
          .age-no { background: #303034; color: #fff; }
        `}</style>

        <div className="age-card">
          <div className="age-icon">18+</div>
          <h2 className="age-title">НАСАНД ХҮРЭГЧДЭД ЗОРИУЛАВ</h2>
          <p className="age-description">
            Энэхүү хуудас нь насанд хүрэгчдийн контент агуулсан тул та зөвхөн 18
            буюу түүнээс дээш настай бол нэвтрэнэ үү.
          </p>
          <div className="age-actions">
            <button type="button" className="age-yes" onClick={verifyAge}>
              ТИЙМ, БИ 18+
            </button>
            <button
              type="button"
              className="age-no"
              onClick={() => {
                window.location.href = "https://google.com";
              }}
            >
              ҮГҮЙ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ҮНДСЭН ХУУДАС
  return (
    <main className="app-shell">
      {/* Your main page styles remain unchanged */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #101010; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
        .app-shell { min-height: 100vh; background: #101010; color: #fff; padding: 42px 0 70px; }
        .page-container { max-width: 520px; margin: 0 auto; padding: 0 18px; }
        /* Include the rest of your original CSS here... */
      `}</style>

      <div className="page-container">
        {/* ... Header and other components remain exactly the same ... */}

        {activeVideo && (
          <section ref={videoSectionRef} className="video-section">
            <div className="video-header">
              <span className="video-label">ОДОО ҮЗЭЖ БАЙНА</span>
              <h2>{activeVideo.title}</h2>
            </div>
            <div className="video-wrap">
              <video
                ref={videoRef}
                key={activeVideo.src}
                className="video-frame"
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
              />
            </div>
            <p className="video-note">
              Бичлэгийн дуу, хэмжээ болон бүтэн дэлгэцийн тохиргоог player-ээс
              удирдана.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
