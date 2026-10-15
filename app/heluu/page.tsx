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
    title: "Хэлүү өдөөгч тоглоомууд (10 төрлийн сонголт байгаа)",
    items: [
      { title: "heluu_vib96", src: `${VIDEO_BASE}/heluu_vib96.mp4` },
      { title: "heluu_vib93", src: `${VIDEO_BASE}/heluu_vib93.mp4` },
      { title: "heluu_vib92", src: `${VIDEO_BASE}/heluu_vib92.mp4` },
      { title: "heluu_vib91", src: `${VIDEO_BASE}/heluu_vib91.mp4` },
      { title: "heluu_vib89", src: `${VIDEO_BASE}/heluu_vib89.mp4` },
      { title: "heluu_vib86", src: `${VIDEO_BASE}/heluu_vib86.mp4` },
      { title: "heluu_vib51", src: `${VIDEO_BASE}/heluu_vib51.mp4` },
      { title: "heluu_vib43", src: `${VIDEO_BASE}/heluu_vib43.mp4` },
      { title: "heluu_vib41", src: `${VIDEO_BASE}/heluu_vib41.mp4` },
      { title: "heluu_vib15", src: `${VIDEO_BASE}/heluu_vib15.mp4` },
    ],
  },
  {
    title: "Шинэ цэс 3 (Одоогоор хоосон)",
    items: [],
  },
  {
    title: "Шинэ цэс 4 (Одоогоор хоосон)",
    items: [],
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
    ],
  },
];

export default function HeluuVideoPage() {
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
        player.play().catch(() => {
          // Автоматаар тоглуулахыг хөтөч хоригловол Play дарж үзнэ.
        });
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

    setOpenSection((current) => (current === index ? null : index));
  };

  return (
    <main className="app-shell">
      <div className="page-container">
        <header className="page-header">
          <div className="eyebrow">ХЭЛҮҮ ӨДӨӨГЧ ТОГЛООМЫН ВИДЕО</div>
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
              const hasDropdown = Array.isArray(section.items);
              const isLink = Boolean(section.link);
              const isEmpty = hasDropdown && section.items?.length === 0;
              const optionsId = `section-options-${index}`;

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
                    aria-controls={hasDropdown ? optionsId : undefined}
                  >
                    <span className="section-number">{index + 1}</span>

                    <span className="section-text">
                      <strong>{section.title}</strong>
                      <small>
                        {isLink
                          ? "Эрчүүдийн дэлгүүрийн Page"
                          : isEmpty
                            ? "Удахгүй нэмэгдэнэ"
                            : hasDropdown
                              ? "Сонголтуудыг харах"
                              : "Бичлэг үзэх"}
                      </small>
                    </span>

                    <span
                      className={`section-icon ${isOpen ? "rotate" : ""}`}
                      aria-hidden="true"
                    >
                      {isLink ? "↗" : hasDropdown ? "⌄" : "▶"}
                    </span>
                  </button>

                  {hasDropdown && isOpen && (
                    <div id={optionsId} className="section-options">
                      {isEmpty ? (
                        <p className="video-note">
                          Энэ цэсийн бичлэгүүд удахгүй нэмэгдэнэ.
                        </p>
                      ) : (
                        section.items?.map((item) => {
                          const isActive =
                            activeVideo?.src === item.src &&
                            activeVideo?.title === item.title;

                          return (
                            <button
                              key={item.src + item.title}
                              type="button"
                              className={`sub-option ${
                                isActive ? "active" : ""
                              }`}
                              onClick={() => playVideo(item)}
                            >
                              <span className="sub-play" aria-hidden="true">
                                ▶
                              </span>
                              <span className="sub-title">{item.title}</span>
                              <span className="sub-action">Үзэх</span>
                            </button>
                          );
                        })
                      )}
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
