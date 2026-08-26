import { useState } from "react";

import bciImage from "../../assets-images/bci pic.jpg";

import zivoraImage from "../../assets-images/zivora.png";
import zivoraLogo from "../../assets-images/zivora-logo.png";

import accessImage from "../../assets-images/access.png";
import accessLogo from "../../assets-images/access-logo.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  /* =========================================================
     CURRENT PROJECT
  ========================================================= */

  const currentProject = {
    title: "BCI-Controlled Intelligent Wheelchair",
    description:
      "A brain-computer interface system that uses EEG motor imagery signals and machine learning to control an intelligent wheelchair. The project explores EEG signal processing, feature extraction, classification, explainable AI, and autonomous navigation.",
    github: "https://github.com/VivinAT04/bci-controlled-wheelchair",
    image: bciImage,
  };

  /* =========================================================
     PROJECTS
  ========================================================= */

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
          /* =====================================================
             PAGE
          ===================================================== */

          .projects-page {
            background: #f7f7f5;
            min-height: 100vh;
            padding: 165px 0 70px;
            color: #111;
            font-family: Inter, Arial, sans-serif;
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

          /* =====================================================
             CURRENT PROJECT IMAGE
          ===================================================== */

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

          /* =====================================================
             CURRENT PROJECT BUTTON
          ===================================================== */

          .current-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;

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

          /* =====================================================
             PROJECT CARD
          ===================================================== */

          .project-card {
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

          /* =====================================================
             CARD OVERLAY
          ===================================================== */

          .card-overlay {
            position: absolute;

            inset: 0;

            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.20) 42%,
              rgba(0, 0, 0, 0.55) 100%
            );

            pointer-events: none;
          }

          /* =====================================================
             CARD TITLE
          ===================================================== */

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
             ZIVORA CARD
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
            transform:
              translate(-50%, -50%)
              scale(1.04);
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
             AKSESS CARD
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
             MODAL BACKDROP
          ===================================================== */

          .modal-backdrop {
            position: fixed;

            inset: 0;

            background: rgba(0, 0, 0, 0.78);

            z-index: 999;

            display: flex;

            justify-content: center;
            align-items: flex-start;

            overflow-y: auto;

            padding: 70px 24px;
          }

          /* =====================================================
             PROJECT MODAL
          ===================================================== */

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

          /* =====================================================
             MODAL CLOSE
          ===================================================== */

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

          /* =====================================================
             MODAL HEADER
          ===================================================== */

          .modal-title {
            margin: 0 0 34px;

            padding-right: 60px;

            font-size: 52px;

            line-height: 1;

            letter-spacing: -2px;

            color: #111;
          }

          /* =====================================================
             MODAL INFORMATION
          ===================================================== */

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

          /* =====================================================
             TECHNOLOGIES
          ===================================================== */

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

          /* =====================================================
             MODAL LINKS
          ===================================================== */

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

          /* =====================================================
             MODAL IMAGE
          ===================================================== */

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
             RESPONSIVE
          ===================================================== */

          @media (max-width: 1200px) {
            .projects-container {
              width: min(1040px, calc(100% - 48px));
            }

            .projects-track {
              grid-template-columns: repeat(3, 280px);

              gap: 24px;
            }

            .project-card {
              height: 365px;
            }
          }

          @media (max-width: 950px) {
            .projects-track {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 900px) {
            .projects-page {
              padding-top: 145px;
            }

            .projects-container {
              width: min(100% - 32px, 620px);
            }

            .current-grid {
              grid-template-columns: 1fr;
            }

            .current-card {
              padding: 25px;

              min-height: auto;
            }

            .current-preview {
              height: 430px;

              margin-top: 8px;
            }

            .current-preview img {
              transform: none;
            }

            .current-title {
              font-size: 34px;
            }

            .projects-track {
              grid-template-columns: 1fr;
            }

            .project-card {
              height: 430px;
            }

            .project-card.zivora-card img {
              width: 62%;
              max-height: 140px;
            }

            .project-modal {
              padding: 34px 22px;
            }

            .modal-title {
              font-size: 38px;
            }

            .modal-close {
              right: 20px;
              top: 20px;
            }
          }

          @media (max-width: 600px) {
            .projects-page {
              padding-top: 120px;
            }

            .projects-container {
              width: calc(100% - 28px);
            }

            .section-title {
              font-size: 28px;
            }

            .current-grid {
              padding: 12px;
              margin-bottom: 55px;
            }

            .current-card {
              padding: 22px 16px;
            }

            .current-title {
              font-size: 31px;
            }

            .current-description {
              font-size: 15px;
            }

            .current-preview {
              height: 330px;
            }

            .project-card {
              height: 400px;
            }

            .project-card.zivora-card img {
              width: 68%;
            }

            .modal-backdrop {
              padding: 25px 12px;
            }

            .project-modal {
              border-radius: 22px;

              padding: 32px 18px 20px;
            }

            .modal-title {
              padding-right: 50px;

              font-size: 36px;

              letter-spacing: -1.4px;
            }

            .modal-info {
              padding: 24px 20px;

              border-radius: 18px;
            }

            .modal-description {
              font-size: 17px;
            }

            .modal-image-box {
              padding: 12px;

              border-radius: 18px;
            }

            .modal-image-box img {
              border-radius: 13px;
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

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >

      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE */}

        <button
          className="modal-close"
          onClick={onClose}
          type="button"
          aria-label="Close project"
        >
          ×
        </button>

        {/* PROJECT TITLE */}

        <h1 className="modal-title">
          {project.title}
        </h1>

        {/* PROJECT INFORMATION */}

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

        {/* LINKS */}

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
              <span>
                {link.label}
              </span>

              <span className="modal-link-arrow">
                ›
              </span>
            </a>
          ))}

        </div>

        {/* PROJECT IMAGE */}

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