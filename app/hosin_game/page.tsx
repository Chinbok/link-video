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
    title: "Хосын тоглоом хэрэглэгч",
    video: {
      title: "Хос тоглоом хэрэглэгч 1",
      src: `${VIDEO_BASE}/hos_togloom_heregleech1.mp4`,
    },
  },
  {
    title: "Захиалга өгөх",
    link: "https://www.facebook.com/profile.php?id=61584532924262",
  },
];

export default function SoftDarkVideoPage() {
  const [mounted, setMounted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);

  // 1. Хэрэглэгч өмнө нь 18+ баталгаажуулсан эсэхийг шалгах
  useEffect(() => {
    setMounted(true);
    const savedVerification = localStorage.getItem("ageVerified");
    if (savedVerification === "true") {
      setIsVerified(true);
    }
  }, []);

  // 2. Бичлэг сонгогдох үед тоглуулах болон scroll хийх
  useEffect(() => {
    if (activeVideo && videoSectionRef.current && videoRef.current) {
      const player = videoRef.current;
      player.muted = false;
      player.volume = 1;
      player.currentTime = 0;

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

  if (!mounted) return null;

  // 18+ НАС БАТАЛГААЖУУЛАХ
  if (!isVerified) {
    return (
      <div className="age-overlay">
        <style>{`
          * { box-sizing: border-box; }

          body {
            margin: 0;
            background: #101010;
            font-family: system-ui, sans-serif;
          }

          .age-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: #101010;
            z-index: 9999;
          }

          .age-card {
            width: 100%;
            max-width: 400px;
            padding: 36px 26px;
            background: #1b1b1d;
            border: 1px solid #303034;
            border-radius: 24px;
            text-align: center;
            box-shadow: 0 20px 70px #0007;
          }

          .age-icon {
            width: 76px;
            height: 76px;
            margin: 0 auto 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 2px solid #f87171;
            color: #f87171;
            font-size: 27px;
            font-weight: 900;
            background: #f8717112;
          }

          .age-title {
            color: #fff;
            font-size: 21px;
            font-weight: 900;
            line-height: 1.4;
            margin: 0 0 14px;
          }

          .age-description {
            color: #aaaab2;
            font-size: 14px;
            line-height: 1.8;
            margin-bottom: 28px;
          }

          .age-actions {
            display: flex;
            gap: 12px;
          }

          .age-actions button {
            flex: 1;
            border: none;
            border-radius: 12px;
            padding: 15px 8px;
            font-weight: 800;
            font-size: 14px;
            cursor: pointer;
          }

          .age-yes {
            background: #f87171;
            color: #181818;
          }

          .age-no {
            background: #303034;
            color: #fff;
          }
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
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #101010; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
        .app-shell { min-height: 100vh; background: #101010; color: #fff; padding: 42px 0 70px; }
        .page-container { max-width: 520px; margin: 0 auto; padding: 0 18px; }

        /* HEADER */
        .page-header { text-align: center; margin-bottom: 32px; }
        .eyebrow { display: inline-flex; align-items: center; justify-content: center; background: #f8717114; border: 1px solid #f8717125; color: #f87171; padding: 8px 17px; border-radius: 100px; font-size: 12px; font-weight: 900; letter-spacing: 1.5px; margin-bottom: 20px; }
        .page-header h1 { color: #fff; font-size: clamp(22px, 5vw, 28px); font-weight: 900; line-height: 1.35; margin: 0 0 20px; letter-spacing: -0.5px; }
        .header-info { background: #1b1b1d; border: 1px solid #2b2b2e; border-radius: 16px; padding: 16px; }
        .header-info p { color: #c9c9cf; font-size: 13px; font-weight: 600; line-height: 1.7; margin: 4px 0; }
        .header-info strong { color: #fff; font-weight: 800; }

        /* MAIN CARD */
        .guide-card { background: #1b1b1d; border: 1px solid #303034; border-radius: 22px; padding: 22px; box-shadow: 0 12px 45px #0003; }
        .guide-heading { display: flex; flex-direction: column; gap: 7px; padding-bottom: 19px; margin-bottom: 15px; border-bottom: 1px solid #303034; }
        .guide-heading span { color: #f87171; font-size: 17px; font-weight: 900; }
        .guide-heading small { color: #a5a5af; font-size: 13px; font-weight: 500; line-height: 1.5; }

        /* BUTTON LIST */
        .section-list { display: flex; flex-direction: column; gap: 12px; }
        .guide-section { width: 100%; }
        .section-button { appearance: none; -webkit-appearance: none; display: flex; align-items: center; width: 100%; min-height: 88px; padding: 16px; border: 1px solid #35353a; border-radius: 16px; background: #242427; color: #fff; text-align: left; cursor: pointer; transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease; font-family: inherit; }
        .section-button:hover { background: #2b2b30; border-color: #f8717180; transform: translateY(-2px); }
        .section-button:active { transform: scale(0.99); }
        .section-button:focus-visible, .sub-option:focus-visible { outline: 2px solid #f87171; outline-offset: 3px; }
        .section-number { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 43px; height: 43px; margin-right: 15px; border-radius: 13px; border: 1px solid #f8717140; background: #f8717114; color: #f87171; font-size: 17px; font-weight: 900; }
        .section-text { display: flex; flex: 1; flex-direction: column; gap: 7px; min-width: 0; }
        .section-text strong { color: #fff; font-size: 15px; font-weight: 800; line-height: 1.45; }
        .section-text small { color: #a5a5af; font-size: 12px; font-weight: 600; }
        .section-icon { flex-shrink: 0; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; margin-left: 10px; border-radius: 50%; background: #f8717117; color: #f87171; font-size: 17px; font-weight: 800; }
        .section-icon svg { width: 16px; height: 16px; }

        /* TWO-COLUMN DROPDOWN */
        .section-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; padding: 14px 0 4px; }
        .sub-option { display: flex; align-items: center; gap: 8px; width: 100%; min-height: 65px; padding: 10px; border-radius: 12px; border: 1px solid #35353a; background: #28282b; color: #fff; cursor: pointer; text-align: left; font-family: inherit; transition: background 0.2s, border-color 0.2s; }
        .sub-option:hover { background: #323236; border-color: #f87171; }
        .sub-play { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #f871711c; color: #f87171; font-size: 11px; }
        .sub-title { flex: 1; min-width: 0; color: #fff; font-weight: 700; font-size: 12px; overflow-wrap: anywhere; }
        .sub-arrow { flex-shrink: 0; color: #f87171; font-size: 20px; }

        /* VIDEO PLAYER */
        .video-section { margin-top: 24px; background: #1b1b1d; border: 1px solid #303034; border-radius: 22px; padding: 20px; box-shadow: 0 12px 40px #0004; scroll-margin-top: 20px; }
        .video-label { display: inline-block; background: #f8717115; border-radius: 6px; color: #f87171; padding: 6px 10px; font-size: 11px; font-weight: 900; letter-spacing: 1px; }
        .video-header h2 { margin: 15px 0; font-size: 18px; font-weight: 800; line-height: 1.5; color: #fff; }
        .video-wrap video { display: block; width: 100%; height: auto; max-height: 75vh; border-radius: 12px; background: #050505; border: 1px solid #303034; outline: none; }
        .video-note { margin: 15px 0 0; text-align: center; color: #a5a5af; font-size: 12px; line-height: 1.7; }

        /* MOBILE */
        @media (max-width: 480px) {
          .app-shell { padding-top: 32px; }
          .page-container { padding: 0 14px; }
          .guide-card { padding: 16px; }
          .section-button { padding: 13px 11px; }
          .section-number { width: 38px; height: 38px; margin-right: 11px; }
          .section-text strong { font-size: 14px; }
          .section-icon { width: 32px; height: 32px; margin-left: 7px; }
          .sub-option { padding: 8px; gap: 5px; }
          .sub-title { font-size: 11px; }
        }
      `}</style>

      <div className="page-container">
        <header className="page-header">
          <div className="eyebrow">хэрэглээж байгааБИЧЛЭГ</div>
          <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>
          <div className="header-info">
            <p>
              Захиалга өгөх дугаар: <strong>7272-2002</strong>{" "}
              <strong>8810-9957</strong>
            </p>
            <p>
              САЙТААР ЗАХИАЛГА ӨГӨХ <strong>erchuudiindelguur.mn</strong>
            </p>
          </div>
        </header>

        <section className="guide-card">
          <div className="guide-heading">
            <span>ХОСЫН ТОГЛООМ </span>
            <small>Бичлэг үзэх бол доорх товчлуур дээр дарна уу</small>
          </div>
          <div className="section-list">
            {sections.map((section, index) => {
              const isLink = !!section.link;
              const hasDropdown = !!section.items;
              const isOpen = openSection === index;

              return (
                <div key={section.title} className="guide-section">
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
                          ? "Эрчүүдийн дэлгүүр Page"
                          : hasDropdown
                            ? "Бичлэгүүдийг харах"
                            : "Бичлэг үзэх"}
                      </small>
                    </span>

                    <span className="section-icon">
                      {isLink ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                      ) : hasDropdown ? (
                        <span>{isOpen ? "⌃" : "⌄"}</span>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {hasDropdown && isOpen && (
                    <div className="section-options">
                      {section.items?.map((item, itemIndex) => (
                        <button
                          type="button"
                          key={`${item.src}-${itemIndex}`}
                          className="sub-option"
                          onClick={() => playVideo(item)}
                        >
                          <span className="sub-play">▶</span>
                          <span className="sub-title">{item.title}</span>
                          <span className="sub-arrow">›</span>
                        </button>
                      ))}
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
