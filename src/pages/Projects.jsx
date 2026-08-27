import { useEffect, useState } from "react";

import bciImage from "../../assets-images/bci pic.jpg";

import zivoraImage from "../../assets-images/zivora.png";
import zivoraLogo from "../../assets-images/zivora-logo.png";

import accessImage from "../../assets-images/access.png";
import accessLogo from "../../assets-images/access-logo.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const currentProject = {
    title: "BCI-Controlled Intelligent Wheelchair",
    description:
      "A brain-computer interface system that uses EEG motor imagery signals and machine learning to control an intelligent wheelchair. The project explores EEG signal processing, feature extraction, classification, explainable AI, and autonomous navigation.",
    github: "https://github.com/VivinAT04/bci-controlled-wheelchair",
    image: bciImage,
  };

  const projects = [
    {
      title: "BCI Wheelchair",
      year: "2026",
      description:
        "A brain-computer interface system that uses EEG motor imagery signals and machine learning to control an intelligent wheelchair. The project covers EEG preprocessing, feature extraction, cross-session and cross-subject classification, explainable AI, representation learning, and intelligent wheelchair navigation simulation.",
      technologies: [
        "Python",
        "EEG",
        "MNE",
        "CSP",
        "FBCSP",
        "LDA",
        "SVM",
        "Riemannian Geometry",
        "EEGNet",
        "Autoencoders",
        "SHAP",
        "Machine Learning",
      ],
      cardImage: bciImage,
      modalImage: bciImage,
      cardType: "image",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/VivinAT04/bci-controlled-wheelchair",
        },
      ],
    },

    {
      title: "Zivora",
      year: "2026",
      description:
        "An AI-powered platform for capturing workflows and automatically generating step-by-step guides and documentation. Zivora supports smart workflow capture, automatic guide creation, and PDF export through a modern web interface and browser extension.",
      technologies: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "Shell",
        "Browser Extension",
        "PDF Export",
      ],
      cardImage: zivoraLogo,
      modalImage: zivoraImage,
      cardType: "zivora",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/OCTOPUSPRODUCTION/zivora",
        },
        {
          label: "Live Website",
          url: "https://zivora-gold.vercel.app",
        },
      ],
    },

    {
      title: "Aksess",
      year: "2026",
      description:
        "An accessibility-focused platform designed to support users through a calm and inclusive digital experience. Aksess combines a modern frontend with a Python backend and includes wellbeing-focused features such as anxiety support and grounding tools.",
      technologies: [
        "TypeScript",
        "Python",
        "CSS",
        "JavaScript",
        "JWT",
        "Full-Stack Development",
        "Accessibility",
      ],
      cardImage: accessLogo,
      modalImage: accessImage,
      cardType: "logo",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/VivinAT04/access",
        },
        {
          label: "Live Website",
          url: "https://access-plum.vercel.app",
        },
      ],
    },
  ];

  return (
    <div className="projects-page">
      <style>
        {`
          .projects-page {
            background: #f7f7f5;
            min-height: 100vh;
            padding: 165px 0 70px;
            color: #111;
            font-family: Inter, Arial, sans-serif;
            overflow-x: hidden;
          }

          .projects-container {
            width: min(1160px, calc(100% - 64px));
            margin: 0 auto;
          }

          .section-title {
            font-size: 32px;
            font-weight: 800;
            margin: 0 0 24px;
            letter-spacing: -1px;
          }

          /* =====================================================
             CURRENT PROJECT
          ===================================================== */

          .current-grid {
            display: grid;
            grid-template-columns: 0.86fr 1.14fr;
            gap: 24px;
            align-items: stretch;

            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 18px;

            padding: 18px;
            margin-bottom: 72px;

            box-shadow: 0 12px 38px rgba(0, 0, 0, 0.055);
          }

          .current-card {
            padding: 30px 20px 24px 45px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            min-height: 375px;
          }

          .current-status {
            color: #555;
            font-weight: 700;
            margin: 0 0 18px;
            font-size: 14px;
          }

          .current-dot {
            display: inline-block;
            width: 7px;
            height: 7px;
            background: #66d58a;
            border-radius: 50%;
            margin-left: 8px;
          }

          .current-title {
            font-size: 40px;
            margin: 0 0 24px;
            line-height: 1.05;
            letter-spacing: -1.5px;
            max-width: 470px;
          }

          .current-description {
            color: #5f6470;
            font-size: 17px;
            line-height: 1.65;
            max-width: 470px;
            margin: 0;
            text-align: justify;
            text-justify: inter-word;
            hyphens: auto;
          }

          .current-preview {
            height: 405px;
            border-radius: 14px;
            overflow: hidden;
            background: #ffffff;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 2px;
          }

          .current-preview img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            display: block;
            transform: translateX(60px);
          }

          .current-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: fit-content;

            padding: 14px 26px;
            border-radius: 999px;

            text-decoration: none;

            font-weight: 800;
            font-size: 14px;

            background: #111;
            color: white;

            margin-top: 32px;

            transition:
              background 0.25s ease,
              transform 0.25s ease;
          }

          .current-btn:hover {
            background: #333;
            transform: translateY(-2px);
          }

          /* =====================================================
             PROJECTS
          ===================================================== */

          .projects-section {
            position: relative;
            margin-bottom: 58px;
          }

          .projects-track {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            justify-content: center;
            gap: 28px;
          }

          .project-card {
            width: 100%;
            height: 390px;

            border-radius: 18px;
            overflow: hidden;

            position: relative;

            border: none;
            cursor: pointer;

            color: white;
            background: #111;

            box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease;

            padding: 0;
          }

          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 22px 40px rgba(0, 0, 0, 0.16);
          }

          .project-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }

          .project-card:hover img {
            transform: scale(1.06);
          }

          .card-overlay {
            position: absolute;
            inset: 0;

            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.2) 42%,
              rgba(0, 0, 0, 0.55) 100%
            );

            pointer-events: none;
          }

          .card-content {
            position: absolute;
            top: 28px;
            left: 26px;
            right: 24px;

            text-align: left;
            z-index: 3;
          }

          .card-title {
            margin: 0;

            font-size: 28px;
            line-height: 1.08;
            font-weight: 800;
            letter-spacing: -1px;
            color: #ffffff;
          }

          /* =====================================================
             ZIVORA
          ===================================================== */

          .project-card.zivora-card {
            background: #ffffff;
          }

          .project-card.zivora-card img {
            position: absolute;

            width: 74%;
            height: auto;
            max-height: 120px;

            left: 50%;
            top: 55%;

            transform: translate(-50%, -50%);

            object-fit: contain;

            padding: 0;
            background: transparent;
          }

          .project-card.zivora-card:hover img {
            transform: translate(-50%, -50%) scale(1.04);
          }

          .project-card.zivora-card .card-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.48) 0%,
              rgba(0, 0, 0, 0.12) 23%,
              rgba(255, 255, 255, 0) 42%,
              rgba(255, 255, 255, 0) 100%
            );
          }

          /* =====================================================
             AKSESS
          ===================================================== */

          .project-card.logo-card {
            background: #f7f5ef;
          }

          .project-card.logo-card img {
            width: 100%;
            height: 100%;

            object-fit: contain;
            object-position: center;

            padding: 30px;
            box-sizing: border-box;

            background: #f7f5ef;
          }

          .project-card.logo-card:hover img {
            transform: scale(1.04);
          }

          .project-card.logo-card .card-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0.08) 34%,
              rgba(0, 0, 0, 0) 55%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          /* =====================================================
             MODAL
          ===================================================== */

          .modal-backdrop {
            position: fixed;
            inset: 0;

            background: rgba(0, 0, 0, 0.78);

            z-index: 10000;

            display: flex;
            justify-content: center;
            align-items: flex-start;

            overflow-y: auto;
            overscroll-behavior: contain;

            padding: 70px 24px;
          }

          .project-modal {
            width: min(980px, 100%);

            background: white;

            border-radius: 30px;
            padding: 54px;

            position: relative;

            animation: popIn 0.25s ease;
          }

          @keyframes popIn {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .modal-close {
            position: absolute;

            top: 20px;
            right: 20px;

            width: 44px;
            height: 44px;

            border: none;
            border-radius: 50%;

            background: #111;
            color: #fff;

            font-size: 24px;

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            transition:
              transform 0.25s ease,
              background 0.25s ease;
          }

          .modal-close:hover {
            transform: scale(1.08);
            background: #333;
          }

          .modal-title {
            margin: 0 0 34px;
            padding-right: 60px;

            font-size: 52px;
            line-height: 1;
            letter-spacing: -2px;

            color: #111;
          }

          .modal-info {
            background: #f1f1f3;

            border-radius: 24px;
            padding: 34px;

            margin-bottom: 34px;
          }

          .modal-year {
            margin: 0 0 24px;

            font-size: 17px;
            color: #777;
            font-weight: 800;
          }

          .modal-description {
            margin: 0 0 34px;

            font-size: 20px;
            line-height: 1.7;

            color: #222;
          }

          .tech-title {
            margin: 0 0 14px;

            font-size: 14px;

            color: #777;
            font-weight: 900;
            letter-spacing: 0.5px;
          }

          .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .tech-pill {
            background: #dedede;
            color: #333;

            padding: 9px 14px;

            border-radius: 999px;

            font-size: 14px;
            font-weight: 800;
          }

          .modal-links-title {
            margin: 10px 0 14px;
            color: #777;
            font-weight: 800;
          }

          .modal-links {
            display: flex;
            flex-direction: column;

            gap: 12px;
            margin-bottom: 28px;
          }

          .modal-link {
            display: flex;
            justify-content: space-between;
            align-items: center;

            background: #f1f1f3;

            padding: 18px 20px;
            border-radius: 14px;

            text-decoration: none;

            color: #111;
            font-weight: 700;

            transition:
              background 0.25s ease,
              transform 0.25s ease;
          }

          .modal-link:hover {
            background: #e5e5e7;
            transform: translateX(3px);
          }

          .modal-link-arrow {
            font-size: 22px;
            line-height: 1;
          }

          .modal-image-box {
            background: #f1f1f3;

            border-radius: 24px;

            overflow: hidden;

            padding: 24px;
          }

          .modal-image-box img {
            width: 100%;

            max-height: 620px;

            object-fit: contain;

            border-radius: 18px;

            display: block;
          }

          /* =====================================================
             LARGE LAPTOP
          ===================================================== */

          @media (max-width: 1200px) {
            .projects-container {
              width: min(1040px, calc(100% - 48px));
            }

            .projects-track {
              grid-template-columns: repeat(3, minmax(0, 280px));
              gap: 24px;
            }

            .project-card {
              height: 365px;
            }

            .current-card {
              padding-left: 32px;
            }

            .current-preview img {
              transform: translateX(25px);
            }
          }

          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 950px) {
            .projects-page {
              padding-top: 130px;
            }

            .projects-container {
              width: min(100% - 40px, 760px);
            }

            .current-grid {
              grid-template-columns: 1fr;
              gap: 8px;

              padding: 14px;

              margin-bottom: 60px;
            }

            .current-card {
              padding: 28px 24px;
              min-height: auto;
            }

            .current-preview {
              height: 420px;
            }

            .current-preview img {
              transform: none;
            }

            .current-title {
              font-size: 36px;
            }

            .projects-track {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 22px;
            }

            .project-card {
              height: 390px;
            }

            .project-card.zivora-card img {
              width: 64%;
              max-height: 135px;
            }

            .project-modal {
              padding: 40px 30px 30px;
            }

            .modal-title {
              font-size: 42px;
            }
          }

          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 700px) {
            .projects-page {
              padding-top: 105px;
              padding-bottom: 45px;
            }

            .projects-container {
              width: calc(100% - 28px);
              max-width: 520px;
            }

            .section-title {
              font-size: 28px;
              margin-bottom: 18px;
            }

            .current-grid {
              border-radius: 15px;
              padding: 10px;

              margin-bottom: 48px;
            }

            .current-card {
              padding: 20px 14px 18px;
            }

            .current-status {
              margin-bottom: 14px;
              font-size: 12px;
            }

            .current-title {
              font-size: 30px;
              line-height: 1.08;
              letter-spacing: -1px;

              margin-bottom: 18px;
            }

            .current-description {
              font-size: 15px;
              line-height: 1.65;

              text-align: left;
              hyphens: none;
            }

            .current-btn {
              width: 100%;

              margin-top: 24px;

              padding: 13px 22px;
            }

            .current-preview {
              height: 310px;
              border-radius: 12px;
            }

            .projects-section {
              margin-bottom: 30px;
            }

            .projects-track {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .project-card {
              height: 360px;
              border-radius: 16px;
            }

            .card-content {
              top: 22px;
              left: 20px;
              right: 18px;
            }

            .card-title {
              font-size: 25px;
            }

            .project-card.zivora-card img {
              width: 66%;
              max-height: 120px;
            }

            .project-card.logo-card img {
              padding: 24px;
            }

            .modal-backdrop {
              padding: 18px 10px;
            }

            .project-modal {
              border-radius: 22px;

              padding: 30px 16px 18px;
            }

            .modal-close {
              width: 40px;
              height: 40px;

              right: 14px;
              top: 14px;

              font-size: 22px;
            }

            .modal-title {
              padding-right: 50px;

              margin-bottom: 24px;

              font-size: 34px;
              line-height: 1.03;
              letter-spacing: -1.3px;
            }

            .modal-info {
              padding: 22px 18px;
              border-radius: 18px;

              margin-bottom: 24px;
            }

            .modal-year {
              margin-bottom: 16px;
              font-size: 14px;
            }

            .modal-description {
              margin-bottom: 26px;

              font-size: 16px;
              line-height: 1.65;
            }

            .tech-title {
              font-size: 12px;
            }

            .tech-list {
              gap: 7px;
            }

            .tech-pill {
              padding: 8px 11px;
              font-size: 12px;
            }

            .modal-links-title {
              font-size: 14px;
            }

            .modal-link {
              padding: 15px 16px;
              border-radius: 12px;

              font-size: 14px;
            }

            .modal-image-box {
              padding: 10px;
              border-radius: 16px;
            }

            .modal-image-box img {
              border-radius: 12px;
            }
          }

          /* =====================================================
             SMALL MOBILE
          ===================================================== */

          @media (max-width: 390px) {
            .projects-container {
              width: calc(100% - 22px);
            }

            .projects-page {
              padding-top: 96px;
            }

            .current-title {
              font-size: 27px;
            }

            .current-preview {
              height: 270px;
            }

            .project-card {
              height: 330px;
            }

            .card-title {
              font-size: 23px;
            }

            .project-card.zivora-card img {
              width: 72%;
            }

            .modal-title {
              font-size: 30px;
            }
          }
        `}
      </style>

      <main className="projects-container">
        {/* =====================================================
            CURRENTLY BUILDING
        ===================================================== */}

        <div className="current-grid">
          <div className="current-card">
            <div>
              <p className="current-status">
                Currently Building
                <span className="current-dot" />
              </p>

              <h1 className="current-title">
                {currentProject.title}
              </h1>

              <p className="current-description">
                {currentProject.description}
              </p>
            </div>

            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="current-btn"
            >
              GitHub
            </a>
          </div>

          <div className="current-preview">
            <img
              src={currentProject.image}
              alt={currentProject.title}
            />
          </div>
        </div>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="projects-section">
          <h2 className="section-title">
            Projects
          </h2>

          <div className="projects-track">
            {projects.map((project) => {
              let cardClass = "project-card";

              if (project.cardType === "zivora") {
                cardClass += " zivora-card";
              }

              if (project.cardType === "logo") {
                cardClass += " logo-card";
              }

              return (
                <button
                  key={project.title}
                  className={cardClass}
                  onClick={() => setSelectedProject(project)}
                  type="button"
                >
                  <img
                    src={project.cardImage}
                    alt={project.title}
                  />

                  <div className="card-overlay" />

                  <div className="card-content">
                    <h3 className="card-title">
                      {project.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
      >
        <button
          className="modal-close"
          onClick={onClose}
          type="button"
          aria-label="Close project"
        >
          ×
        </button>

        <h1 className="modal-title">
          {project.title}
        </h1>

        <div className="modal-info">
          <p className="modal-year">
            {project.year}
          </p>

          <p className="modal-description">
            {project.description}
          </p>

          <p className="tech-title">
            TECHNOLOGIES
          </p>

          <div className="tech-list">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tech-pill"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="modal-links-title">
          Links 🔗
        </p>

        <div className="modal-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              <span>{link.label}</span>

              <span className="modal-link-arrow">
                ›
              </span>
            </a>
          ))}
        </div>

        <div className="modal-image-box">
          <img
            src={project.modalImage}
            alt={project.title}
          />
        </div>
      </div>
    </div>
  );
}