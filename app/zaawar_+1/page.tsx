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

// Нийт 2 товчлуур
const sections: Section[] = [
  {
    title: "Багцын хэрэглэгчдэд өгөх зөвлөгөө",
    items: [
      { title: "Зөвлөгөө +1", src: `${VIDEO_BASE}/Hiimel.mp4` },
      { title: "Зөвлөгөө +2", src: `${VIDEO_BASE}/zovlogoo_2.mp4` },
      { title: "Зөвлөгөө +3", src: `${VIDEO_BASE}/zovlogoo_3.mp4` },
    ],
  },
  {
    title: "Захиалга өгөх",
    link: "https://www.facebook.com/hotmongolia",
  },
];

export default function SoftDarkVideoPage() {
  const [isVerified, setIsVerified] = useState<boolean>(false);
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

    if (section.items) {
      setOpenSection(openSection === index ? null : index);
      return;
    }

    if (section.video) {
      playVideo(section.video);
      return;
    }
  };

  // 1. 18+ баталгаажуулах цонх
  if (!isVerified) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#121212",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          zIndex: 9999,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#1c1c1e",
            border: "1px solid #2c2c2e",
            padding: "40px 24px",
            borderRadius: "20px",
            textAlign: "center",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px solid #f87171",
                position: "relative",
                backgroundColor: "rgba(248, 113, 113, 0.05)",
              }}
            >
              <span
                style={{
                  color: "#f87171",
                  fontSize: "24px",
                  fontWeight: "800",
                }}
              >
                18
              </span>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#f87171",
                  transform: "rotate(-45deg)",
                }}
              ></div>
            </div>
          </div>

          <h2
            style={{
              color: "#f3f4f6",
              fontSize: "20px",
              fontWeight: "800",
              marginBottom: "12px",
              letterSpacing: "0.5px",
            }}
          >
            НАСАНД ХҮРЭГЧДЭД ЗОРИУЛАВ
          </h2>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "14px",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}
          >
            Энэхүү хуудас нь насанд хүрэгчдийн контент агуулсан тул та зөвхөн 18
            буюу түүнээс дээш настай бол нэвтрэнэ үү.
          </p>

          <div style={{ display: "flex", gap: "12px", width: "100%" }}>
            <button
              onClick={() => setIsVerified(true)}
              style={{
                flex: 1,
                backgroundColor: "#f87171",
                color: "#1c1c1e",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: "700",
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                WebkitAppearance: "none",
                appearance: "none",
              }}
            >
              ТИЙМ, БИ 18+
            </button>
            <button
              onClick={() => (window.location.href = "https://google.com")}
              style={{
                flex: 1,
                backgroundColor: "#2c2c2e",
                color: "#d1d5db",
                padding: "14px",
                borderRadius: "12px",
                fontWeight: "700",
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                WebkitAppearance: "none",
                appearance: "none",
              }}
            >
              ҮГҮЙ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Үндсэн сайт
  return (
    <main className="app-shell">
      {/* Бүх цагаан дэвсгэр гарах асуудлыг бүрэн шийдсэн CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body { background-color: #121212 !important; color: #e5e7eb !important; margin: 0; padding: 0; }
        
        /* Бүх товчлуурын background-ийг iPhone, Safari дээр хүчээр цэвэрлэх */
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

        .app-shell { background-color: #121212; min-height: 100vh; padding: 24px 0; font-family: system-ui, -apple-system, sans-serif; color: #e5e7eb; }
        .page-container { max-width: 480px; margin: 0 auto; padding: 0 16px; }
        
        .page-header { text-align: center; margin-bottom: 24px; }
        .eyebrow { color: #f87171; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 8px; text-transform: uppercase; opacity: 0.9; }
        .page-header h1 { color: #f3f4f6; font-size: 22px; font-weight: 800; margin-bottom: 12px; }
        .page-header p { color: #9ca3af; font-size: 13.5px; margin: 6px 0; font-weight: 400;}
        
        .guide-card { background-color: #1c1c1e; border: 1px solid #2c2c2e; border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .guide-heading { display: flex; flex-direction: column; margin-bottom: 12px; border-bottom: 1px solid #2c2c2e; padding-bottom: 16px; }
        .guide-heading span { color: #f87171; font-size: 15px; font-weight: 700; text-transform: uppercase; }
        .guide-heading small { color: #8b8b8d; font-size: 12px; margin-top: 4px; }
        
        .section-list { display: flex; flex-direction: column; }
        .guide-section { border-bottom: 1px solid #2c2c2e; padding: 6px 0; }
        .guide-section:last-child { border-bottom: none; padding-bottom: 0; }
        
        /* Үндсэн товчлуурын загвар */
        .section-button { 
          display: flex !important; 
          align-items: center !important; 
          width: 100% !important; 
          padding: 12px 0 !important; 
          cursor: pointer !important; 
          text-align: left !important; 
          color: inherit !important; 
          background: transparent !important; 
          background-color: transparent !important; 
        }
        .section-button:active { opacity: 0.7; }
        
        .section-number { background-color: rgba(248, 113, 113, 0.1) !important; color: #f87171; width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-right: 14px; font-size: 14px; border: 1px solid rgba(248, 113, 113, 0.2); }
        .section-text { flex: 1; display: flex; flex-direction: column; padding-right: 12px; }
        .section-text strong { font-size: 15px; margin-bottom: 4px; color: #f3f4f6; font-weight: 600; line-height: 1.4; }
        .section-text small { color: #9ca3af; font-size: 12px; font-weight: 400; }
        
        .section-icon { color: #6b7280; font-size: 14px; transition: transform 0.3s ease; }
        .section-icon.rotate { transform: rotate(180deg); color: #f87171; }
        
        /* Задардаг цэсний загвар */
        .section-options { display: flex; flex-direction: column; padding: 12px; background: #151515; border-radius: 16px; margin-top: 8px; margin-bottom: 8px; gap: 8px; border: 1px solid #2c2c2e; }
        
        /* Сонголт бүрийн товчлуур (Үүнд цагаан дэвсгэр орохоос сэргийлсэн) */
        .sub-option { 
          display: flex !important; 
          align-items: center !important; 
          background-color: #1c1c1e !important; 
          background: #1c1c1e !important; 
          border: 1px solid transparent !important; 
          padding: 14px 16px !important; 
          border-radius: 12px !important; 
          cursor: pointer !important; 
          text-align: left !important; 
          width: 100% !important;
        }
        .sub-option:active { background-color: #262629 !important; }
        .sub-option.active { border-color: #f87171 !important; background-color: rgba(248, 113, 113, 0.08) !important; }
        
        .sub-play { color: #f87171; margin-right: 14px; font-size: 12px; }
        .sub-title { flex: 1; font-size: 14px; font-weight: 500; color: #e5e7eb; }
        .sub-action { font-size: 12px; color: #f87171; font-weight: 600; opacity: 0.9; }

        .video-section { margin-top: 24px; background-color: #1c1c1e; border: 1px solid #2c2c2e; border-radius: 20px; padding: 20px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .video-label { color: #f87171; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; background: rgba(248, 113, 113, 0.1); padding: 4px 8px; border-radius: 6px;}
        .video-header h2 { color: #f3f4f6; font-size: 16px; margin: 12px 0 16px 0; font-weight: 600; line-height: 1.4; }
        .video-wrap video { width: 100%; border-radius: 12px; border: 1px solid #2c2c2e; outline: none; background: #0a0a0a; }
        .video-note { color: #8b8b8d; font-size: 12px; margin-top: 14px; text-align: center; line-height: 1.5; }
        `,
        }}
      />

      <div className="page-container">
        <header className="page-header">
          <div className="eyebrow">ЗААВАР БИЧЛЭГ</div>
          <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>
          <p>Захиалга өгөх дугаар: 7272-2002, 9910-5590</p>
          <p>САЙТААР ЗАХИАЛГА ӨГӨХ www.erchuudiindelguur.mn</p>
        </header>

        <section className="guide-card">
          <div className="guide-heading">
            <span>Зааврын төрөл</span>
            <small>Бичлэг үзэх бол доорх дээр дарна уу</small>
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
                      {isLink ? "↗" : hasDropdown ? "▼" : "▶"}
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
                            <span className="sub-action">
                              {isActive ? "Үзэж байна" : "Үзэх"}
                            </span>
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
