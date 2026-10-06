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
};

const VIDEO_BASE = "https://erchuudiindelguur.mn/videos";

const sections: Section[] = [
  {
    title: "Яагаад хэрэглэх ёстой вэ?",
    video: {
      title: "Яагаад хэрэглэх ёстой вэ?",
      src: `${VIDEO_BASE}/bugj_yagd.mp4`,
    },
  },
  {
    title: "Нуруутай шодойн бөгж үзэх бол энэ дээр дарна уу",
    video: {
      title: "Нуруутай шодойн бөгж заавар",
      src: `${VIDEO_BASE}/bugj_nurrutai.mp4`,
    },
  },
  {
    title: "Хэлүүний өдөөгчтэй шодойн бөгж үзэх бол энэ дээр дарна уу",
    video: {
      title: "Хэлүүний өдөөгчтэй шодойн бөгж заавар",
      src: `${VIDEO_BASE}/bugj_helu.mp4`,
    },
  },
  {
    title: "Түрүүн булчирхайн массажтай шодойн бөгж үзэх бол энэ дээр дарна уу",
    video: {
      title: "Түрүү булчирхайн массажтай шодойн бөгж заавар",
      src: `${VIDEO_BASE}/bugj_er_anal.mp4`,
    },
  },
  {
    title: "Хямд шодойн бөгж үзэх бол энэ дээр дарна уу",
    video: {
      title: "Хямд шодойн бөгж заавар",
      src: `${VIDEO_BASE}/bugj_hymd.mp4`,
    },
  },
  {
    title: "Хамт хэрэглэх бүтээгдэхүүн",
    items: [
      {
        title: "Чийгшүүлэгч",
        src: `${VIDEO_BASE}/bugj_chig.mp4`,
      },
      {
        title: "Саван",
        src: `${VIDEO_BASE}/bugj_savan.mp4`,
      },
      {
        title: "Эмэгтэй өдөөгч",
        src: `${VIDEO_BASE}/bugj_udugch.mp4`,
      },
      {
        title: "Угаадаг бэлгэвч",
        src: `${VIDEO_BASE}/bugj_belgewch.mp4`,
      },
    ],
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
          <div className="eyebrow">ШОДОЙ БӨГЖ ВИДЕО</div>
          <h1>ЗӨВХӨН НАСАНД ХҮРЭГЧИД</h1>
          <p>Захиалга өгөх дугаар: 7272-2002, 9910-5590.</p>
          <p>САЙТААР ЗАХИАЛГА ӨГӨХ: www.erchuudiindelguur.mn</p>
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

            {/* ВИДЕОГ 9:16 (БОСОО) БОЛГОЖ CSS ДАВХАРДЛЫГ АРИЛГАСАН ХЭСЭГ */}
            <div
              className="video-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "360px", // Босоо видеоны тохиромжтой өргөн
                aspectRatio: "9/16", // 9:16 босоо харьцаа
                margin: "0 auto",
                paddingTop: 0,
                paddingBottom: 0,
                height: "auto",
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "#000",
              }}
            >
              <video
                ref={videoRef}
                key={activeVideo.src}
                className="video-frame"
                src={activeVideo.src}
                controls
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Бичлэгийг таслахгүй бүтэн харуулна (хэрэв тайрч дүүргэх бол "cover" болгоно)
                  position: "relative",
                  top: "auto",
                  left: "auto",
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
