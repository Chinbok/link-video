"use client";

import { useEffect, useRef, useState } from "react";

type VideoItem = {
  title: string;
  src: string;
};

type Section = {
  title: string;
  subtitle?: string;
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
    title: "Хэлүү өдөөгч тоглоомууд",
    subtitle: "10 төрлийн сонголт",
    items: [
      { title: "VIB-96", src: `${VIDEO_BASE}/heluu_vib96.mp4` },
      { title: "VIB-93", src: `${VIDEO_BASE}/heluu_vib93.mp4` },
      { title: "VIB-92", src: `${VIDEO_BASE}/heluu_vib92.mp4` },
      { title: "VIB-91", src: `${VIDEO_BASE}/heluu_vib91.mp4` },
      { title: "VIB-89", src: `${VIDEO_BASE}/heluu_vib89.mp4` },
      { title: "VIB-86", src: `${VIDEO_BASE}/heluu_vib86.mp4` },
      { title: "VIB-51", src: `${VIDEO_BASE}/heluu_vib51.mp4` },
      { title: "VIB-43", src: `${VIDEO_BASE}/heluu_vib43.mp4` },
      { title: "VIB-41", src: `${VIDEO_BASE}/heluu_vib41.mp4` },
      { title: "VIB-15", src: `${VIDEO_BASE}/heluu_vib15.mp4` },
    ],
  },
  {
    title: "Хосын тоглоом",
    subtitle: "5 төрлийн сонголт",
    items: [
      { title: "H_hos3", src: `${VIDEO_BASE}/H_hos3.mp4` },
      { title: "H_hos4", src: `${VIDEO_BASE}/H_hos4.mp4` },
      { title: "H_hos5", src: `${VIDEO_BASE}/H_hos5.mp4` },
      { title: "H_hos7", src: `${VIDEO_BASE}/H_hos7.mp4` },
      { title: "H_hos6", src: `${VIDEO_BASE}/H_hos6.mp4` },
    ],
  },
  {
    title: "ӨНДӨГ ТОГЛООМ",
    subtitle: "10 төрлийн сонголт",
    items: [
      { title: "U_ND148", src: `${VIDEO_BASE}/U_ND148.mp4` },
      { title: "U_Undug10", src: `${VIDEO_BASE}/U_Undug10.mp4` },
      { title: "U_Undug11", src: `${VIDEO_BASE}/U_Undug11.mp4` },
      { title: "U_Undug31", src: `${VIDEO_BASE}/U_Undug31.mp4` },
      { title: "U_Undug32", src: `${VIDEO_BASE}/U_Undug32.mp4` },
      { title: "U_Undug36", src: `${VIDEO_BASE}/U_Undug36.mp4` },
      { title: "U_Undug37", src: `${VIDEO_BASE}/U_Undug37.mp4` },
      { title: "U_Undug38", src: `${VIDEO_BASE}/U_Undug38.mp4` },
      { title: "U_Undug41", src: `${VIDEO_BASE}/U_Undug41.mp4` },
      { title: "U_Undug4", src: `${VIDEO_BASE}/U_Undug4.mp4` },
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
    subtitle: "Эрчүүдийн дэлгүүрийн Facebook Page",
    link: "https://www.facebook.com/profile.php?id=61584532924262",
  },
  {
    title: "Хэрэглэж байгаа бичлэг үзэх бол энэ дээр дарна уу",
    items: [
      {
        title: "Чичиргээгүй боди шодой",
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
      {
        title: "Хосын тоглоом",
        src: `${VIDEO_BASE}/hos_togloom_heregleech1.mp4`,
      },
    ],
  },
];

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.4-6.5a1 1 0 0 0 0-1.7L9.53 4.65A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export default function HeluuVideoPage() {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const playVideo = (video: VideoItem) => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    videoRef.current?.pause();

    setVideoError(false);
    setActiveVideo(video);
    setOpenSection(null);

    timerRef.current = setTimeout(() => {
      const player = videoRef.current;

      if (player) {
        player.muted = false;
        player.volume = 1;

        if (player.readyState >= 1) {
          player.currentTime = 0;
        }

        void player.play().catch(() => {
          // Автомат тоглуулахыг хөтөч хориглосон бол
          // тоглуулагчийн Play товчийг дарж үзнэ.
        });
      }

      videoSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      timerRef.current = null;
    }, 120);
  };

  const handleSection = (section: Section, index: number) => {
    if (section.video) {
      playVideo(section.video);
      return;
    }

    setOpenSection((current) => (current === index ? null : index));
  };

  return (
    <main className={`vg-page ${!ageConfirmed ? "vg-gated" : ""}`}>
      {!ageConfirmed ? (
        <section
          className="vg-age-card"
          aria-labelledby="vg-age-title"
          aria-describedby="vg-age-description"
        >
          <div className="vg-age-badge" aria-hidden="true">
            18<span>+</span>
          </div>

          <div className="vg-eyebrow">НАСНЫ БАТАЛГААЖУУЛАЛТ</div>

          <h1 id="vg-age-title" className="vg-age-title">
            Та 18 нас хүрсэн үү?
          </h1>

          <p id="vg-age-description" className="vg-age-description">
            Энэ сайт зөвхөн насанд хүрэгчдэд зориулагдсан. Үргэлжлүүлэхийн тулд
            18 нас хүрсэн гэдгээ баталгаажуулна уу.
          </p>

          <div className="vg-age-actions">
            <button
              type="button"
              className="vg-age-enter"
              onClick={() => setAgeConfirmed(true)}
            >
              Тийм, би 18 нас хүрсэн
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              className="vg-age-exit"
              onClick={() => window.location.replace("about:blank")}
            >
              Үгүй, гарах
            </button>
          </div>

          <div className="vg-brand">ЭРЧҮҮДИЙН ДЭЛГҮҮР</div>
        </section>
      ) : (
        <div className="vg-container">
          <header className="vg-header">
            <div className="vg-eyebrow">ВИДЕО ЗААВАР</div>

            <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>

            <div className="vg-phones">
              <a href="tel:72722002">7272-2002</a>
              <span aria-hidden="true">·</span>
              <a href="tel:99105590">9910-5590</a>
            </div>

            <a
              className="vg-store"
              href="https://erchuudiindelguur.mn"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.erchuudiindelguur.mn
            </a>
          </header>

          <section className="vg-list" aria-label="Видео зааврын цэс">
            {sections.map((section, index) => {
              const isOpen = openSection === index;
              const hasDropdown = Array.isArray(section.items);
              const panelId = `vg-panel-${index}`;
              const buttonId = `vg-button-${index}`;

              return (
                <article
                  key={section.title}
                  className={`vg-card ${
                    isOpen ? "vg-open" : ""
                  } ${section.link ? "vg-order" : ""}`}
                >
                  {section.link ? (
                    <a className="vg-trigger" href={section.link}>
                      <span className="vg-number">{index + 1}</span>

                      <span className="vg-text">
                        <strong>{section.title}</strong>
                        <small>{section.subtitle}</small>
                      </span>

                      <span className="vg-external">
                        <ExternalLinkIcon />
                      </span>
                    </a>
                  ) : (
                    <button
                      id={buttonId}
                      type="button"
                      className="vg-trigger"
                      onClick={() => handleSection(section, index)}
                      aria-expanded={hasDropdown ? isOpen : undefined}
                      aria-controls={hasDropdown ? panelId : undefined}
                    >
                      <span className="vg-number">{index + 1}</span>

                      <span className="vg-text">
                        <strong>{section.title}</strong>

                        {section.subtitle && <small>{section.subtitle}</small>}
                      </span>

                      {section.video ? (
                        <span className="vg-main-play">
                          <PlayIcon />
                        </span>
                      ) : (
                        <span
                          className={`vg-chevron ${isOpen ? "vg-rotated" : ""}`}
                        >
                          <ChevronIcon />
                        </span>
                      )}
                    </button>
                  )}

                  {hasDropdown && (
                    <div
                      id={panelId}
                      className="vg-panel"
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      {section.items && section.items.length > 0 ? (
                        <div className="vg-options">
                          {section.items.map((item) => (
                            <button
                              key={item.src}
                              type="button"
                              className={`vg-option ${
                                activeVideo?.src === item.src ? "vg-active" : ""
                              }`}
                              onClick={() => playVideo(item)}
                              aria-label={`${item.title} бичлэг үзэх`}
                            >
                              <span className="vg-option-play">
                                <PlayIcon />
                              </span>

                              <span className="vg-option-title">
                                {item.title}
                              </span>

                              <span className="vg-option-arrow">
                                <ChevronIcon />
                              </span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="vg-empty">
                          Энэ цэсийн бичлэгүүд удахгүй нэмэгдэнэ.
                        </p>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </section>

          {activeVideo && (
            <section
              ref={videoSectionRef}
              className="vg-video-section"
              aria-label="Видео тоглуулагч"
            >
              <div className="vg-video-heading">
                <span>ОДОО ҮЗЭЖ БАЙНА</span>
                <h2>{activeVideo.title}</h2>
              </div>

              <div className="vg-video-wrap">
                <video
                  ref={videoRef}
                  key={activeVideo.src}
                  className="vg-video"
                  src={activeVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                  onLoadedData={() => setVideoError(false)}
                />
              </div>

              {videoError ? (
                <p className="vg-error" role="alert">
                  Бичлэг ачаалагдсангүй. Интернэт холболт болон видео файлын
                  холбоосыг шалгана уу.
                </p>
              ) : (
                <p className="vg-note">
                  Бичлэг эхлэхгүй бол ▶ товчийг дарна уу. Дуу болон бүтэн
                  дэлгэцийн тохиргоог тоглуулагчаас удирдана.
                </p>
              )}
            </section>
          )}

          <footer className="vg-brand">ЭРЧҮҮДИЙН ДЭЛГҮҮР</footer>
        </div>
      )}

      <style jsx>{`
        .vg-page,
        .vg-page * {
          box-sizing: border-box;
          font-family: "Segoe UI", Arial, sans-serif !important;
          font-style: normal;
        }

        .vg-page {
          min-height: 100vh;
          min-height: 100dvh;
          padding: 52px 20px 32px;
          color: #f5f5f7;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(255, 35, 72, 0.065),
              transparent 55%
            ),
            #0b0b0d;
          -webkit-font-smoothing: antialiased;
        }

        .vg-page.vg-gated {
          display: grid;
          place-items: center;
          padding: 24px 16px;
        }

        .vg-container {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }

        .vg-header {
          margin-bottom: 34px;
          text-align: center;
        }

        .vg-eyebrow {
          margin-bottom: 16px;
          color: #ff3457;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
        }

        .vg-header h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(25px, 4.8vw, 40px);
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: normal;
          text-wrap: balance;
        }

        .vg-phones {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 20px;
          color: #b5b5bd;
          font-size: 19px;
          font-weight: 600;
        }

        .vg-phones a {
          color: inherit;
          text-decoration: none;
        }

        .vg-store {
          display: inline-block;
          margin-top: 12px;
          color: #a0a0ab;
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .vg-list {
          display: grid;
          gap: 13px;
        }

        .vg-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: linear-gradient(120deg, #242426, #1b1b1e);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.12);
          transition: border-color 180ms ease;
        }

        .vg-card.vg-open {
          border-color: rgba(255, 35, 72, 0.35);
        }

        .vg-trigger {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
          min-height: 98px;
          margin: 0;
          padding: 22px;
          border: 0;
          color: #f5f5f7;
          background: transparent;
          font-size: 16px;
          text-align: left;
          text-decoration: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .vg-number {
          display: grid;
          flex: 0 0 52px;
          width: 52px;
          height: 52px;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
          font-size: 24px;
          font-weight: 700;
          line-height: 1;
        }

        .vg-open .vg-number {
          background: #e50930;
        }

        .vg-text {
          display: grid;
          flex: 1;
          min-width: 0;
          gap: 7px;
        }

        .vg-text strong {
          color: inherit;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: normal;
          overflow-wrap: anywhere;
        }

        .vg-text small {
          color: #aaaab3;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.6;
        }

        .vg-chevron,
        .vg-external {
          display: grid;
          flex: 0 0 30px;
          width: 30px;
          height: 32px;
          place-items: center;
          color: #b9b9c1;
        }

        .vg-chevron {
          transition: transform 200ms ease;
        }

        .vg-chevron.vg-rotated {
          transform: rotate(180deg);
          color: #fff;
        }

        .vg-main-play {
          display: grid;
          flex: 0 0 44px;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 2px solid #68686e;
          border-radius: 50%;
          color: #fff;
        }

        .vg-panel {
          padding: 0 18px 18px;
        }

        .vg-panel[hidden] {
          display: none;
        }

        .vg-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .vg-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          min-height: 65px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          color: #f5f5f7;
          background: rgba(255, 255, 255, 0.035);
          font-size: 15px;
          text-align: left;
          cursor: pointer;
          transition:
            border-color 180ms ease,
            background 180ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .vg-option-play {
          display: grid;
          flex: 0 0 36px;
          width: 36px;
          height: 36px;
          place-items: center;
          border: 2px solid #ff2348;
          border-radius: 50%;
          color: #ff2348;
        }

        .vg-option-title {
          flex: 1;
          min-width: 0;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .vg-option-arrow {
          display: grid;
          flex: 0 0 18px;
          width: 18px;
          place-items: center;
          color: #a4a4ae;
          transform: rotate(-90deg);
        }

        .vg-option.vg-active {
          border-color: rgba(255, 35, 72, 0.55);
          background: rgba(255, 35, 72, 0.09);
        }

        .vg-empty {
          margin: 0;
          padding: 12px 8px;
          color: #b4b4bd;
          font-size: 13px;
          line-height: 1.7;
        }

        .vg-card.vg-order {
          border-color: rgba(255, 75, 100, 0.5);
          background: linear-gradient(110deg, #e30931, #b70025);
          box-shadow: 0 8px 28px rgba(210, 0, 38, 0.12);
        }

        .vg-order .vg-number {
          background: rgba(90, 0, 18, 0.25);
        }

        .vg-order .vg-text small {
          color: rgba(255, 255, 255, 0.85);
        }

        .vg-order .vg-external {
          color: #fff;
        }

        .vg-video-section {
          margin-top: 24px;
          padding: 22px;
          scroll-margin-top: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          background: #1b1b1e;
        }

        .vg-video-heading {
          margin-bottom: 18px;
        }

        .vg-video-heading > span {
          color: #ff6982;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .vg-video-heading h2 {
          margin: 8px 0 0;
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .vg-video-wrap {
          overflow: hidden;
          border-radius: 13px;
          background: #000;
        }

        .vg-video {
          display: block;
          width: 100%;
          height: auto;
          max-height: 75vh;
          background: #000;
          object-fit: contain;
        }

        .vg-note,
        .vg-error {
          margin: 14px 0 0;
          color: #aaaab3;
          font-size: 12px;
          line-height: 1.7;
        }

        .vg-error {
          color: #ff9bae;
        }

        .vg-brand {
          margin-top: 30px;
          color: #9999a4;
          font-size: 11px;
          line-height: 1.7;
          letter-spacing: 1px;
          text-align: center;
        }

        .vg-age-card {
          width: 100%;
          max-width: 460px;
          padding: 42px 28px 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          background: linear-gradient(145deg, #222225, #151518);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
          text-align: center;
        }

        .vg-age-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 112px;
          height: 112px;
          margin: 0 auto 28px;
          border: 3px solid #ff2348;
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 35, 72, 0.07);
          font-size: 49px;
          font-weight: 700;
          line-height: 1;
        }

        .vg-age-badge span {
          margin-left: 3px;
          color: #ff3457;
          font-size: 32px;
        }

        .vg-age-title {
          margin: 0 0 16px;
          color: #fff;
          font-size: clamp(25px, 6vw, 32px);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: normal;
          text-wrap: balance;
        }

        .vg-age-description {
          margin: 0 auto;
          max-width: 350px;
          color: #b7b7c1;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        .vg-age-actions {
          display: grid;
          gap: 11px;
          margin-top: 30px;
        }

        .vg-age-actions button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 54px;
          padding: 15px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.6;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .vg-age-enter {
          border: 1px solid #f52c50;
          color: #fff;
          background: linear-gradient(110deg, #e30931, #b70025);
        }

        .vg-age-enter span {
          font-size: 22px;
          line-height: 1;
        }

        .vg-age-exit {
          border: 1px solid rgba(255, 255, 255, 0.13);
          color: #c8c8d0;
          background: rgba(255, 255, 255, 0.035);
        }

        .vg-page button:focus-visible,
        .vg-page a:focus-visible {
          outline: 2px solid #ff9caf;
          outline-offset: -4px;
        }

        @media (hover: hover) {
          .vg-card:hover {
            border-color: rgba(255, 255, 255, 0.23);
          }

          .vg-card.vg-open:hover {
            border-color: rgba(255, 35, 72, 0.5);
          }

          .vg-option:hover {
            border-color: rgba(255, 35, 72, 0.4);
            background: rgba(255, 35, 72, 0.07);
          }

          .vg-card.vg-order:hover,
          .vg-age-enter:hover {
            background: linear-gradient(110deg, #f0103a, #c8002b);
          }

          .vg-age-exit:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.08);
          }

          .vg-phones a:hover,
          .vg-store:hover {
            color: #fff;
          }
        }

        @media (max-width: 600px) {
          .vg-page {
            padding: 34px 12px 26px;
          }

          .vg-header {
            margin-bottom: 26px;
          }

          .vg-eyebrow {
            margin-bottom: 14px;
            font-size: 11px;
            letter-spacing: 1px;
          }

          .vg-phones {
            gap: 10px;
            margin-top: 16px;
            font-size: 17px;
          }

          .vg-list {
            gap: 11px;
          }

          .vg-card {
            border-radius: 16px;
          }

          .vg-trigger {
            gap: 13px;
            min-height: 88px;
            padding: 17px 14px;
          }

          .vg-number {
            flex-basis: 40px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .vg-text strong {
            font-size: 15px;
          }

          .vg-text small {
            font-size: 12px;
          }

          .vg-chevron,
          .vg-external {
            flex-basis: 24px;
            width: 24px;
          }

          .vg-main-play {
            flex-basis: 35px;
            width: 35px;
            height: 35px;
          }

          .vg-panel {
            padding: 0 10px 12px;
          }

          .vg-options {
            gap: 7px;
          }

          .vg-option {
            gap: 8px;
            min-height: 58px;
            padding: 10px;
            border-radius: 12px;
          }

          .vg-option-play {
            flex-basis: 29px;
            width: 29px;
            height: 29px;
          }

          .vg-option-title {
            font-size: 13px;
          }

          .vg-option-arrow {
            display: none;
          }

          .vg-video-section {
            padding: 15px;
            border-radius: 16px;
          }
        }

        @media (max-width: 380px) {
          .vg-age-card {
            padding: 32px 20px 24px;
            border-radius: 22px;
          }
        }

        @media (max-width: 359px) {
          .vg-options {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vg-card,
          .vg-chevron,
          .vg-option {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
