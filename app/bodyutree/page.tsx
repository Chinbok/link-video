"use client";

import { useRef, useState, useEffect } from "react";

type VideoItem = {
  title: string;
  src: string;
};

type Section = {
  title: string;
  items?: VideoItem[];
  video?: VideoItem;
};

const VIDEO_BASE = "https://erchuudiindelguur.mn/videos";

const sections: Section[] = [
  {
    title: "Яагаад хэрэглэх ёстой вэ?",
    video: {
      title: "Яагаад хэрэглэх ёстой вэ?",
      src: `${VIDEO_BASE}/utree_ygd.mp4`,
    },
  },
  {
    title: "Боди тоглоом",
    items: [
      {
        title: "Онгон хальстай боди",
        src: `${VIDEO_BASE}/utree_ongon_tom.mp4`,
      },
      {
        title: "Хөхдөг чичиргээтэй боди",
        src: `${VIDEO_BASE}/utree_tom_chich.mp4`,
      },
      {
        title: "Энгийн боди",
        src: `${VIDEO_BASE}/utree_engin.mp4`, // Видеоны файлын нэрээ солиорой
      },
    ],
  },
  {
    title: "Жижиг үтрээ",
    items: [
      {
        title: "Жижиг онгон хальстай үтрээ",
        src: `${VIDEO_BASE}/utree_jijig_ongon.mp4`,
      },
      {
        title: "Жижиг үтрээ",
        src: `${VIDEO_BASE}/utree_jijig_engiin.mp4`,
      },
    ],
  },
  {
    title: "Аяган үтрээ",
    items: [
      {
        title: "Автомат аяга",
        src: `${VIDEO_BASE}/utre_ayga_automat.mp4`,
      },
      {
        title: "Хагас автомат аяга",
        src: `${VIDEO_BASE}/utree_hagas.mp4`,
      },
      {
        title: "Тусгай хэрэгцээт иргэн",
        src: `${VIDEO_BASE}/utree_tusgai.mp4`, // Видеоны файлын нэрээ солиорой
      },
    ],
  },
  {
    title: "Хамт хэрэглэх бүтээгдэхүүн",
    items: [
      {
        title: "Чийгшүүлэгч",
        src: `${VIDEO_BASE}/utree_chig.mp4`,
      },
      {
        title: "Саван",
        src: `${VIDEO_BASE}/utree_savan.mp4`,
      },
    ],
  },
  {
    title: "Хэрэглэж байгаа бичлэг үзэх бол энэ дээр дарна уу",
    video: {
      title: "Хэрэглэж байгаа бичлэг",
      src: `${VIDEO_BASE}/utree_po.mp4`,
    },
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
      videoSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      const player = videoRef.current;
      player.load();

      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [activeVideo]);

  const handleSection = (section: Section, index: number) => {
    if (section.video) {
      playVideo(section.video);
      return;
    }
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <main className="app-shell">
      <div className="page-container">
        <header className="page-header">
          <div className="eyebrow">БОДИ ҮТРЭЭ ВИДЕО</div>
          <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>
          <p>Захиалга өгөх дугаар: 7272-2002 9910-5590.</p>
          <p>САЙТААР ЗАХИАЛГА ӨГӨХ: www.erchuudiindelguur.mn.</p>
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
                        {hasDropdown ? "Сонголтуудыг харах" : "Бичлэг үзэх"}
                      </small>
                    </span>
                    <span className={`section-icon ${isOpen ? "rotate" : ""}`}>
                      {hasDropdown ? "⌄" : "▶"}
                    </span>
                  </button>

                  {hasDropdown && isOpen && (
                    <div className="section-options">
                      {section.items!.map((item) => (
                        <button
                          key={item.src + item.title}
                          type="button"
                          className={`sub-option ${
                            activeVideo?.src === item.src &&
                            activeVideo?.title === item.title
                              ? "active"
                              : ""
                          }`}
                          onClick={() => playVideo(item)}
                        >
                          <span className="sub-play">▶</span>
                          <span className="sub-title">{item.title}</span>
                          <span className="sub-action">Үзэх</span>
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
              <div>
                <span className="video-label">ОДОО ҮЗЭЖ БАЙНА</span>
                <h2>{activeVideo.title}</h2>
              </div>
            </div>

            <div
              className="video-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "800px",
                aspectRatio: "16 / 9",
                margin: "0 auto",
                padding: 0,
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                backgroundColor: "#000",
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
            >
              <video
                ref={videoRef}
                className="video-frame"
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "16px",
                }}
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
