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
  link?: string;
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
    title: "Боди тоглоом (5 төрлийн сонголт байгаа)",
    items: [
      {
        title: "Боди тоглоом 760",
        src: `${VIDEO_BASE}/utree_tom760.mp4`,
      },
      {
        title: "Боди тоглоом 730",
        src: `${VIDEO_BASE}/utree_tom730.mp4`,
      },
      {
        title: "Боди тоглоом 761",
        src: `${VIDEO_BASE}/utree_tom761.mp4`,
      },
      {
        title: "Боди тоглоом 720",
        src: `${VIDEO_BASE}/utree_tom720.mp4`,
      },
      {
        title: "Боди тоглоом 709",
        src: `${VIDEO_BASE}/utree_tom709.mp4`,
      },
    ],
  },
  {
    title: "Жижиг үтрээ энгийн (7 төрлийн сонголт байгаа)",
    items: [
      {
        title: "Жижиг үтрээ 654",
        src: `${VIDEO_BASE}/utree_jijig654.mp4`,
      },
      {
        title: "Жижиг үтрээ 632",
        src: `${VIDEO_BASE}/UTREE_JIJIG632.mp4`,
      },
      {
        title: "Жижиг үтрээ 657",
        src: `${VIDEO_BASE}/utree_jijig657.mp4`,
      },
      {
        title: "Жижиг үтрээ 658",
        src: `${VIDEO_BASE}/utree_jijig658.mp4`,
      },
      {
        title: "Жижиг үтрээ 734",
        src: `${VIDEO_BASE}/utree_jijig734.mp4`,
      },
      {
        title: "Жижиг үтрээ 735",
        src: `${VIDEO_BASE}/utree_jijig735.mp4`,
      },
      {
        title: "Жижиг үтрээ 309",
        src: `${VIDEO_BASE}/utree_jijig309.mp4`,
      },
    ],
  },
  {
    title: "Онгон жижиг үтрээ (5 төрлийн сонголт байгаа)",
    items: [
      {
        title: "Онгон жижиг үтрээ 431",
        src: `${VIDEO_BASE}/utree_jijig431.mp4`,
      },
      {
        title: "Онгон жижиг үтрээ 642",
        src: `${VIDEO_BASE}/utree_jijig642.mp4`,
      },
      {
        title: "Онгон жижиг үтрээ 653",
        src: `${VIDEO_BASE}/utree_jijig653.mp4`,
      },
      {
        title: "Онгон жижиг үтрээ 655",
        src: `${VIDEO_BASE}/utree_jijig655.mp4`,
      },
      {
        title: "Онгон жижиг үтрээ 765",
        src: `${VIDEO_BASE}/utree_jijig765.mp4`,
      },
    ],
  },
  {
    title: "Аяган үтрээ (12 төрлийн сонголт байгаа)",
    items: [
      {
        title: "Хаадын тоглоом",
        src: `${VIDEO_BASE}/utree_haadiin_toy.mp4`,
      },
      {
        title: "Аяган үтрээ A35",
        src: `${VIDEO_BASE}/utree_a35.mp4`,
      },
      {
        title: "Аяган үтрээ A34",
        src: `${VIDEO_BASE}/utree_a34.mp4`,
      },
      {
        title: "Аяган үтрээ A33",
        src: `${VIDEO_BASE}/utree_a33.mp4`,
      },
      {
        title: "Аяган үтрээ A31",
        src: `${VIDEO_BASE}/utree_a31.mp4`,
      },
      {
        title: "Аяган үтрээ A28",
        src: `${VIDEO_BASE}/utree_a28.mp4`,
      },
      {
        title: "Аяган үтрээ A27",
        src: `${VIDEO_BASE}/utree_a27.mp4`,
      },
      {
        title: "Аяган үтрээ A4",
        src: `${VIDEO_BASE}/utree_a4.mp4`,
      },
      {
        title: "Аяган үтрээ A7",
        src: `${VIDEO_BASE}/utree_a7.mp4`,
      },
      {
        title: "Аяган үтрээ A8",
        src: `${VIDEO_BASE}/utree_a8.mp4`,
      },
      {
        title: "Аяган үтрээ A9",
        src: `${VIDEO_BASE}/utree_a9.mp4`,
      },
      {
        title: "Аяган үтрээ A25",
        src: `${VIDEO_BASE}/utree_a25.mp4`,
      },
    ],
  },
  {
    title: "Хамт хэрэглэх бүтээгдэхүүн (2 төрлийн сонголт байгаа)",
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
    title: "Захиалга өгөх",
    link: "https://www.facebook.com/profile.php?id=61584532924262",
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
        playPromise.catch((err) => {
          console.log("Video auto-play interrupted", err);
        });
      }
    }
  }, [activeVideo]);

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
                    <div
                      className="section-options"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "6px",
                        marginTop: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      {section.items?.map((item) => (
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
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            textAlign: "left",
                            minWidth: 0,
                            boxSizing: "border-box",
                            padding: "6px 4px",
                            gap: "4px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              overflow: "hidden",
                              flex: 1,
                              minWidth: 0,
                            }}
                          >
                            <span
                              className="sub-play"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "16px",
                                height: "16px",
                                border: "1px solid currentColor",
                                borderRadius: "50%",
                                marginRight: "6px",
                                flexShrink: 0,
                                fontSize: "8px",
                              }}
                            >
                              ▶
                            </span>
                            <span
                              className="sub-title"
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontSize: "11px",
                              }}
                            >
                              {item.title}
                            </span>
                          </div>
                          <span
                            className="sub-action"
                            style={{
                              fontSize: "14px",
                              marginLeft: "2px",
                              flexShrink: 0,
                            }}
                          >
                            &#8250;
                          </span>
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
