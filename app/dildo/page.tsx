"use client";

import { useRef, useState } from "react";

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
    title: "Яагаад хэрэглэх ёстой вэ?",
    video: {
      title: "Яагаад хэрэглэх ёстой вэ?",
      src: `${VIDEO_BASE}/Hiimel.mp4`,
    },
  },
  {
    title:
      "Анх удаа тоглоом хэрэглэх гэж байгаа бол энэ дээр дарна уу (8 төрлийн сонголт байгаа)",
    items: [
      { title: "боди шодой D-116", src: `${VIDEO_BASE}/bodi_shodoi_d116.mp4` },
      { title: "боди шодой D-111", src: `${VIDEO_BASE}/bodi_shodoi_d111.mp4` },
      { title: "боди шодой D-114", src: `${VIDEO_BASE}/bodi_shodoi_d114.mp4` },
      { title: "боди шодой D-117", src: `${VIDEO_BASE}/bodi_shodoi_d117.mp4` },
      {
        title: "Автомат шодой ND-157",
        src: `${VIDEO_BASE}/auto_shodoi_nd157.mp4`,
      },
      {
        title: "Автомат шодой ND-158",
        src: `${VIDEO_BASE}/auto_shodoi_nd158.mp4`,
      },
      {
        title: "Автомат шодой ND-146",
        src: `${VIDEO_BASE}/auto_shodoi_nd146.mp4`,
      },
      {
        title: "Автомат шодой ND-154",
        src: `${VIDEO_BASE}/auto_shodoi_nd154.mp4`,
      },
    ],
  },
  {
    title:
      "Чичиргээгүй боди шодойнуудыг үзэх бол энэ дээр дарна уу (7 төрлийн сонголт байгаа)",
    items: [
      { title: "боди шодой D-118", src: `${VIDEO_BASE}/bodi_shodoi_d118.mp4` },
      { title: "боди шодой D-119", src: `${VIDEO_BASE}/bodi_shodoi_d119.mp4` },
      { title: "боди шодой D-121", src: `${VIDEO_BASE}/bodi_shodoi_d121.mp4` },
      { title: "боди шодой B-112", src: `${VIDEO_BASE}/bodi_shodoi_b112.mp4` },
      { title: "боди шодой ND-40", src: `${VIDEO_BASE}/bodi_shodoi_nd40.mp4` },
      { title: "боди шодой ND-61", src: `${VIDEO_BASE}/bodi_shodoi_nd61.mp4` },
      { title: "боди шодой ND-43", src: `${VIDEO_BASE}/bodi_shodoi_nd43.mp4` },
    ],
  },
  {
    title:
      "Чичиргээтэй боди шодойнуудыг үзэх бол энэ дээр дарна уу (7 төрлийн сонголт байгаа)",
    items: [
      {
        title: "боди шодой ND-46A",
        src: `${VIDEO_BASE}/bodi_shodoi_nd46aA.mp4`,
      },
      { title: "боди шодой D-119", src: `${VIDEO_BASE}/bodi_shodoi_d119.mp4` },
      { title: "боди шодой D-121", src: `${VIDEO_BASE}/bodi_shodoi_d121.mp4` },
      { title: "боди шодой B-112", src: `${VIDEO_BASE}/bodi_shodoi_b112.mp4` },
      { title: "боди шодой ND-40", src: `${VIDEO_BASE}/bodi_shodoi_nd40.mp4` },
      { title: "боди шодой ND-61", src: `${VIDEO_BASE}/bodi_shodoi_nd61.mp4` },
      { title: "боди шодой ND-43", src: `${VIDEO_BASE}/bodi_shodoi_nd43.mp4` },
    ],
  },
  {
    title:
      "Автомат шодойнуудыг үзэх бол энэ дээр дарна уу (39 төрлийн сонголт байгаа)",
    items: [
      { title: "Автомат шодой ND-152", src: `${VIDEO_BASE}/A_first ND152.mp4` },
      { title: "Автомат шодой ND-6", src: `${VIDEO_BASE}/A_ND6.mp4` },
      { title: "Автомат шодой ND-8", src: `${VIDEO_BASE}/a_nd8.mp4` },
      { title: "Автомат шодой ND-12", src: `${VIDEO_BASE}/a_ND12.mp4` },
      { title: "Автомат шодой ND-24", src: `${VIDEO_BASE}/a_ND24.mp4` },
      { title: "Автомат шодой ND-65", src: `${VIDEO_BASE}/a_ND65.mp4` },
      { title: "Автомат шодой ND-66", src: `${VIDEO_BASE}/a_ND66.mp4` },
      { title: "Автомат шодой ND-67", src: `${VIDEO_BASE}/a_nd67.mp4` },
      { title: "Автомат шодой ND-69", src: `${VIDEO_BASE}/A_ND69.mp4` },
      { title: "Автомат шодой ND-70", src: `${VIDEO_BASE}/A_ND70.mp4` },
      { title: "Автомат шодой ND-71", src: `${VIDEO_BASE}/A_ND71.mp4` },
      { title: "Автомат шодой ND-99", src: `${VIDEO_BASE}/A_ND99.mp4` },
      { title: "Автомат шодой ND-101", src: `${VIDEO_BASE}/a_ND101.mp4` },
      { title: "Автомат шодой ND-105", src: `${VIDEO_BASE}/A_ND105.mp4` },
      { title: "Автомат шодой ND-123", src: `${VIDEO_BASE}/a_ND123.mp4` },
      { title: "Автомат шодой ND-126", src: `${VIDEO_BASE}/a_nd126.mp4` },
      { title: "Автомат шодой ND-140", src: `${VIDEO_BASE}/a_nd140.mp4` },
      { title: "Автомат шодой ND-143", src: `${VIDEO_BASE}/a_ND143.mp4` },
      { title: "Автомат шодой ND-144", src: `${VIDEO_BASE}/A_ND144.mp4` },
      { title: "Автомат шодой ND-145", src: `${VIDEO_BASE}/a_ND145.mp4` },
      { title: "Автомат шодой ND-146", src: `${VIDEO_BASE}/a_ND146.mp4` },
      { title: "Автомат шодой ND-147", src: `${VIDEO_BASE}/A_ND147.mp4` },
      { title: "Автомат шодой ND-149", src: `${VIDEO_BASE}/A_ND149.mp4` },
      { title: "Автомат шодой ND-150", src: `${VIDEO_BASE}/A_ND150.mp4` },
      { title: "Автомат шодой ND-151", src: `${VIDEO_BASE}/A_ND151.mp4` },
      { title: "Автомат шодой ND-153", src: `${VIDEO_BASE}/a_ND153.mp4` },
      { title: "Автомат шодой ND-154", src: `${VIDEO_BASE}/a_ND154.mp4` },
      { title: "Автомат шодой ND-155", src: `${VIDEO_BASE}/A_ND155.mp4` },
      { title: "Автомат шодой ND-156", src: `${VIDEO_BASE}/A_ND156.mp4` },
      { title: "Автомат шодой ND-157", src: `${VIDEO_BASE}/a_nd157.mp4` },
      { title: "Автомат шодой ND-158", src: `${VIDEO_BASE}/A_ND158.mp4` },
      { title: "Автомат шодой ND-159", src: `${VIDEO_BASE}/a_ND159.mp4` },
      { title: "Автомат шодой ND-161", src: `${VIDEO_BASE}/A_ND161.mp4` },
      { title: "Автомат шодой ND-162", src: `${VIDEO_BASE}/A_ND162.mp4` },
      { title: "Автомат шодой ND-163", src: `${VIDEO_BASE}/A_ND163.mp4` },
      { title: "Автомат шодой ND-164", src: `${VIDEO_BASE}/A_ND164.mp4` },
      { title: "Автомат шодой ND-165", src: `${VIDEO_BASE}/A_ND165.mp4` },
      { title: "Автомат шодой VIB-88", src: `${VIDEO_BASE}/a_VIB_88.mp4` },
      { title: "Автомат шодой VIB-97", src: `${VIDEO_BASE}/A_Vib97.mp4` },
    ],
  },
  {
    title: "Хамт хэрэглэх бүтээгдэхүүн",
    items: [
      {
        title: "Чийгшүүлэгч",
        src: `${VIDEO_BASE}/chig_v.mp4`,
      },
      {
        title: "Саван",
        src: `${VIDEO_BASE}/savan.mp4`,
      },
      {
        title: "Эмэгтэй өдөөгч",
        src: `${VIDEO_BASE}/e uduugch.mp4`,
      },
      {
        title: "Угаадаг бэлгэвч",
        src: `${VIDEO_BASE}/e_shodoi_belgeewch.mp4`,
      },
    ],
  },
  {
    title: "Захиалга өгөх",
    link: "https://www.facebook.com/profile.php?id=61584532924262",
  },
  {
    title: "Хэрэглэж байгаа бичлэг үзэх бол энэ дээр дарна уу",
    items: [
      {
        title: "Чичиргээгүй боди шодой ",
        src: `${VIDEO_BASE}/e toy porno.mp4`,
      },
      {
        title: "Чичиргээтэй боди шодой",
        src: `${VIDEO_BASE}/A_body_dildo1.mp4`,
      },
      {
        title: "Автомат шодой",
        src: `${VIDEO_BASE}/a_vibe_dildo.mp4`,
      },
    ],
  },
];

export default function NdAvtoDildoPage() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);

  const playVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setOpenSection(null);

    setTimeout(() => {
      const player = videoRef.current;
      if (player) {
        player.muted = false;
        player.volume = 1;
        player.currentTime = 0;
        player.play().catch(() => {});
      }
      videoSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
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

    setOpenSection(openSection === index ? null : index);
  };

  return (
    <main className="app-shell">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body { background-color: #121212 !important; color: #ffffff !important; margin: 0; padding: 0; }
        
        button { 
          appearance: none !important; 
          -webkit-appearance: none !important; 
          -moz-appearance: none !important;
          background: transparent !important; 
          background-color: transparent !important; 
          border: none !important; 
          box-shadow: none !important;
          font-family: inherit; 
          outline: none !important; 
          -webkit-tap-highlight-color: transparent !important; 
        }

        .app-shell { background-color: #121212; min-height: 100vh; padding: 24px 0; font-family: system-ui, -apple-system, sans-serif; color: #ffffff; }
        .page-container { max-width: 480px; margin: 0 auto; padding: 0 16px; }
        
        .page-header { text-align: center; margin-bottom: 24px; }
        .eyebrow { color: #f87171; font-size: 13px; font-weight: 800; letter-spacing: 1.5px; margin-bottom: 8px; text-transform: uppercase; }
        .page-header h1 { color: #ffffff; font-size: 24px; font-weight: 900; margin-bottom: 12px; }
        .page-header p { color: #e5e7eb; font-size: 14px; margin: 6px 0; font-weight: 600;}
        
        .guide-card { background-color: #1c1c1e; border: 1px solid #2c2c2e; border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .guide-heading { display: flex; flex-direction: column; margin-bottom: 12px; border-bottom: 1px solid #2c2c2e; padding-bottom: 16px; }
        .guide-heading span { color: #f87171; font-size: 16px; font-weight: 800; text-transform: uppercase; }
        .guide-heading small { color: #d1d5db; font-size: 13px; margin-top: 4px; font-weight: 500; }
        
        .section-list { display: flex; flex-direction: column; }
        .guide-section { border-bottom: 1px solid #2c2c2e; padding: 8px 0; }
        .guide-section:last-child { border-bottom: none; padding-bottom: 0; }
        
        .section-button { 
          display: flex !important; 
          align-items: center !important; 
          width: 100% !important; 
          padding: 14px 0 !important; 
          cursor: pointer !important; 
          text-align: left !important; 
          color: #000000 !important; 
          background: transparent !important; 
          background-color: transparent !important; 
        }
        .section-button:active { opacity: 0.7; }
        
        .section-number { background-color: rgba(248, 113, 113, 0.15) !important; color: #f87171; width: 38px; height: 38px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 900; margin-right: 14px; font-size: 16px; border: 1px solid rgba(248, 113, 113, 0.3); }
        .section-text { flex: 1; display: flex; flex-direction: column; padding-right: 12px; }
        
        .section-text strong { color: #000000 !important; font-size: 17px !important; margin-bottom: 6px !important; font-weight: 900 !important; line-height: 1.4 !important; }
        .section-text small { color: #000000 !important; font-size: 14px !important; font-weight: 800 !important; }
        
        .section-icon { color: #f87171; font-size: 15px; transition: transform 0.3s ease; font-weight: bold; }
        .section-icon.rotate { transform: rotate(180deg); }
        
        /* Задардаг дэд цэсүүд (Зурган дээрхтэй ижил 2 баганатай загвар) */
        .section-options { 
          display: grid !important; 
          grid-template-columns: repeat(2, 1fr) !important; 
          gap: 10px !important; 
          padding: 12px 0 0 0 !important; 
          background: transparent !important; 
          border: none !important; 
          margin-top: 4px !important; 
        }
        
        .sub-option { 
          display: flex !important; 
          align-items: center !important; 
          justify-content: space-between !important;
          background-color: #1c1c1e !important; 
          border: 1px solid #2c2c2e !important; 
          padding: 10px !important; 
          border-radius: 12px !important; 
          cursor: pointer !important; 
          text-align: left !important; 
          width: 100% !important;
          min-width: 0 !important; 
        }
        .sub-option:active { opacity: 0.7 !important; background-color: #262629 !important; }
        .sub-option.active { border-color: #f87171 !important; background-color: rgba(248, 113, 113, 0.1) !important; }
        
        .sub-play { 
          color: #f87171 !important; 
          font-size: 10px !important; 
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 20px !important;
          height: 20px !important;
          border: 1px solid rgba(248, 113, 113, 0.5) !important;
          border-radius: 50% !important;
          margin-right: 8px !important;
          flex-shrink: 0 !important;
        }

        .sub-title { 
          flex: 1 !important; 
          font-size: 12px !important; 
          font-weight: 700 !important; 
          color: #ffffff !important; 
          white-space: nowrap !important; 
          overflow: hidden !important; 
          text-overflow: ellipsis !important; 
          text-align: left !important;
        }

        .sub-action { 
          color: #ffffff !important; 
          font-size: 16px !important; 
          font-weight: 300 !important; 
          opacity: 0.5 !important;
          flex-shrink: 0 !important;
          margin-left: 4px !important;
        }

        .video-section { margin-top: 24px; background-color: #1c1c1e; border: 1px solid #2c2c2e; border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .video-label { color: #f87171; font-size: 12px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; background: rgba(248, 113, 113, 0.15); padding: 4px 10px; border-radius: 6px;}
        .video-header h2 { color: #ffffff; font-size: 18px; margin: 12px 0 16px 0; font-weight: 800; line-height: 1.4; }
        .video-wrap video { width: 100%; border-radius: 12px; border: 1px solid #2c2c2e; outline: none; background: #0a0a0a; }
        .video-note { color: #d1d5db; font-size: 13px; margin-top: 14px; text-align: center; line-height: 1.5; font-weight: 500; }
        `,
        }}
      />

      <div className="page-container">
        <header className="page-header">
          <div className="eyebrow">ШОДОЙ ВИДЕО</div>
          <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>
          <p>Захиалга өгөх дугаар: 7272-2002 9910-5590.</p>
          <p>САЙТААР ЗАХИАЛГА ӨГӨХ www.erchuudiindelguur.mn</p>
        </header>

        <section className="guide-card">
          <div className="guide-heading">
            <span>Зааврын төрөл</span>
            <small>Сонголтоо дарж дэлгэрэнгүйг харна уу</small>
          </div>

          <div className="section-list">
            {sections.map((section, index) => {
              const isOpen = openSection === index;
              const hasDropdown = !!section.items;
              const isLink = !!section.link;

              return (
                <div
                  key={section.title}
                  className={`guide-section ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="section-button"
                    onClick={() => handleSection(section, index)}
                    aria-expanded={hasDropdown ? isOpen : undefined}
                  >
                    <span className="section-number">{index + 1}</span>
                    <span className="section-text">
                      <strong>{section.title}</strong>
                      <small>
                        {isLink
                          ? "Эрчүүдийн дэлгүүрийн Page"
                          : hasDropdown
                            ? "Сонголтуудыг харах"
                            : "Бичлэг үзэх"}
                      </small>
                    </span>
                    <span className={`section-icon ${isOpen ? "rotate" : ""}`}>
                      {isLink ? "↗" : hasDropdown ? "⌄" : "▶"}
                    </span>
                  </button>

                  {hasDropdown && isOpen && (
                    <div className="section-options">
                      {section.items!.map((item) => {
                        const isActive =
                          activeVideo?.src === item.src &&
                          activeVideo?.title === item.title;

                        return (
                          <button
                            key={item.src + item.title}
                            type="button"
                            className={`sub-option ${isActive ? "active" : ""}`}
                            onClick={() => playVideo(item)}
                          >
                            <span className="sub-play">▶</span>
                            <span className="sub-title">{item.title}</span>
                            <span className="sub-action">›</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {activeVideo && (
          <section ref={videoSectionRef} className="video-section">
            <div className="video-header">
              <div>
                <span className="video-label">ОДОО ҮЗЭЖ БАЙНА</span>
                <h2>{activeVideo.title}</h2>
              </div>
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
