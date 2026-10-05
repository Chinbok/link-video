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
      src: `${VIDEO_BASE}/Hiimel.mp4`, // Өөрийн видеоны нэрээр солих
    },
  },
  {
    title: "Чичиргээгүй боди шодойнуудыг үзэх бол энэ дээр дарна уу",
    video: {
      title: "Чичиргээгүй боди шодой заавар",
      src: `${VIDEO_BASE}/chichirgeegui.mp4`, // Өөрийн видеоны нэрээр солих
    },
  },
  {
    title: "Чичиргээтэй боди шодойнуудыг үзэх бол энэ дээр дарна уу",
    video: {
      title: "Чичиргээтэй хиймэл шодой заавар",
      src: `${VIDEO_BASE}/nd-au.mp4`, // Өөрийн видеоны нэрээр солих
    },
  },
  {
    title: "Автомат шодойнуудыг үзэх бол энэ дээр дарна уу",
    video: {
      title: "Автомат шодой",
      src: `${VIDEO_BASE}/chichirgeetei.mp4`, // Өөрийн видеоны нэрээр солих
    },
  },
  {
    title: "Хамт хэрэглэх бүтээгдэхүүн",
    items: [
      {
        title: "Чийгшүүлэгч",
        src: `${VIDEO_BASE}/chiigshuulegch.mp4`, // Өөрийн видеоны нэрээр солих
      },
      {
        title: "Саван",
        src: `${VIDEO_BASE}/sawan.mp4`, // Өөрийн видеоны нэрээр солих
      },
      {
        title: "Эмэгтэй өдөөгч",
        src: `${VIDEO_BASE}/emegtei-odoogch.mp4`, // Өөрийн видеоны нэрээр солих
      },
      {
        title: "Угаадаг бэлгэвч",
        src: `${VIDEO_BASE}/e_shodoi_belgeewch.mp4.mp4`, // Өөрийн видеоны нэрээр солих
      },
    ],
  },
  {
    title: "Хэрэглэж байгаа бичлэг үзэх бол энэ дээр дарна уу",
    items: [
      {
        title: "Чичиргээгүй боди шодой ",
        src: `${VIDEO_BASE}/e toy porno.mp4`, // Өөрийн видеоны нэрээр солих
      },
      {
        title: "Чичиргээтэй боди шодой",
        src: `${VIDEO_BASE}/nd-au.mp4`, // Өөрийн видеоны нэрээр солих
      },
      {
        title: "Автомат шодой",
        src: `${VIDEO_BASE}/chichirgeetei.mp4`, // Өөрийн видеоны нэрээр солих
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
          <div className="eyebrow">ВИДЕО ЗААВАР</div>
          <h1>Бүтээгдэхүүн ашиглах заавар</h1>
          <p>Доорх хэсгээс сонирхож буй заавраа сонгон бичлэгийг үзээрэй.</p>
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
