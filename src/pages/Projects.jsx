import { useEffect, useState } from "react";

import bciImage from "../../assets-images/bci pic.jpg";
import desiglovImage from "../../assets-images/desiglov.png";
import desiglovLogo from "../assets/images/desiglov-logo.webp";

import zivoraImage from "../../assets-images/zivora.png";
import zivoraLogo from "../../assets-images/zivora-logo.png";

import accessImage from "../../assets-images/access.png";
import accessLogo from "../../assets-images/access-logo.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectIndex, setProjectIndex] = useState(0);
  /* =====================================================
     PROJECTS
  ===================================================== */

  const projects = [
    {
      title: "BCI Wheelchair",
      year: "2026",
      description:
        "A brain-computer interface system that explores human–AI interaction by using EEG motor imagery signals and machine learning to control an intelligent wheelchair. The project covers EEG preprocessing, feature extraction, cross-session and cross-subject classification, explainable AI, representation learning, and intelligent wheelchair navigation simulation.",
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
        {
          label: "Project Presentation",
          url: "https://docs.google.com/presentation/d/1vn9u3AOkpG9oSQm6Lp1aM0MVGVMJ00gZ/edit?usp=share_link&ouid=108162586258863337556&rtpof=true&sd=true",
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
    {
      title: "Desiglov",
      year: "2026",
      description:
        "A modern full-stack fashion e-commerce platform designed to deliver a clean, elegant, and responsive shopping experience. Desiglov includes product discovery, category browsing, customer accounts, wishlist and cart functionality, size-level stock management, checkout, order management, delivery tracking, administration tools, email authentication, and online payment integration.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "Razorpay",
        "Vercel",
        "Full-Stack Development",
      ],
      cardImage: desiglovLogo,
      modalImage: desiglovImage,
      cardType: "desiglov",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/VivinAT04/desiglov",
        },
        {
          label: "Live Website",
          url: "https://www.desiglov.com",
        },
      ],
    },

  ];

  const visibleProjects = Array.from(
    { length: 3 },
    (_, offset) =>
      projects[(projectIndex + offset) % projects.length]
  );

  const previousProject = () => {
    setProjectIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setProjectIndex(
      (current) => (current + 1) % projects.length
    );
  };

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
             PROJECTS
          ===================================================== */

          .projects-section {
            position: relative;
            margin-bottom: 58px;
          }

          .projects-carousel {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            width: 100%;
          }

          .projects-window {
            width: 956px;
            overflow: hidden;
            padding: 10px 8px 30px;
          }

          .projects-track {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            justify-content: center;
            gap: 28px;
            animation: carouselEnter 0.32s ease;
          }

          @keyframes carouselEnter {
            from {
              opacity: 0;
              transform: translateX(18px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .project-arrow {
            width: 50px;
            height: 50px;
            flex: 0 0 50px;

            border: 1px solid #dedede;
            border-radius: 50%;

            background: #ffffff;
            color: #111;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0 0 4px;

            font-size: 34px;
            font-weight: 300;
            line-height: 1;

            cursor: pointer;

            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

            transition:
              background 0.25s ease,
              color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .project-arrow:hover {
            background: #111;
            color: #fff;
            transform: scale(1.06);

            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          }

          .project-dots {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 7px;
            margin-top: 0;
          }

          .project-dot {
            width: 7px;
            height: 7px;

            padding: 0;
            border: 0;
            border-radius: 999px;

            background: #c8c8c8;

            cursor: pointer;

            transition:
              width 0.25s ease,
              background 0.25s ease;
          }

          .project-dot.active {
            width: 24px;
            background: #111;
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
             DESIGLOV
          ===================================================== */

          .project-card.desiglov-card {
            background: #eee3d8;
          }

          .project-card.desiglov-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            padding: 0;
          }

          .project-card.desiglov-card .card-overlay {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0.1) 38%,
              rgba(0, 0, 0, 0.05) 100%
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


          /* =====================================================
             PROJECT CAROUSEL RESPONSIVE OVERRIDES
          ===================================================== */

          @media (max-width: 1200px) {
            .projects-window {
              width: 888px;
            }

            .projects-track {
              grid-template-columns: repeat(3, 280px);
              gap: 24px;
            }

            .project-arrow {
              width: 44px;
              height: 44px;
              flex-basis: 44px;
              font-size: 30px;
            }
          }

          @media (max-width: 1050px) {
            .projects-carousel {
              gap: 10px;
            }

            .projects-window {
              width: calc(100% - 108px);
            }

            .projects-track {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 18px;
            }
          }

          @media (max-width: 700px) {
            .projects-carousel {
              display: grid;
              grid-template-columns: 40px minmax(0, 1fr) 40px;
              gap: 8px;
            }

            .projects-window {
              width: 100%;
              padding: 8px 2px 24px;
            }

            .projects-track {
              display: block;
            }

            .projects-track .project-card {
              display: none;
            }

            .projects-track .project-card:first-child {
              display: block;
            }

            .project-arrow {
              width: 40px;
              height: 40px;
              flex-basis: 40px;
              font-size: 28px;
            }

            .project-dots {
              margin-top: 2px;
            }
          }


          /* =====================================================
             CURRENTLY BUILDING / NEXT IDEA
          ===================================================== */

          .next-project-section {
            margin-top: 70px;
            margin-bottom: 30px;
          }

          .next-project-card {
            position: relative;
            overflow: hidden;

            min-height: 300px;

            padding: 54px 58px;

            background: #111111;
            color: #ffffff;

            border-radius: 24px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 60px;

            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
          }

          .next-project-content {
            position: relative;
            z-index: 2;

            max-width: 690px;
          }

          .next-project-label {
            display: flex;
            align-items: center;
            gap: 9px;

            margin: 0 0 24px;

            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;

            color: rgba(255, 255, 255, 0.58);
          }

          .next-project-dot {
            width: 7px;
            height: 7px;

            border-radius: 50%;
            background: #66d58a;

            box-shadow: 0 0 0 5px rgba(102, 213, 138, 0.1);
          }

          .next-project-title {
            margin: 0 0 20px;

            max-width: 620px;

            font-size: 42px;
            line-height: 1.08;
            letter-spacing: -1.7px;
            font-weight: 700;
          }

          .next-project-text {
            margin: 0;

            max-width: 620px;

            font-size: 17px;
            line-height: 1.7;

            color: rgba(255, 255, 255, 0.67);
          }

          .next-project-action {
            position: relative;
            z-index: 2;

            flex: 0 0 auto;
          }

          .next-project-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 14px;

            min-width: 175px;

            padding: 16px 23px;

            border-radius: 999px;

            background: #ffffff;
            color: #111111;

            text-decoration: none;

            font-size: 14px;
            font-weight: 800;

            transition:
              transform 0.25s ease,
              background 0.25s ease;
          }

          .next-project-button:hover {
            transform: translateY(-3px);
            background: #eeeeee;
          }

          .next-project-arrow {
            font-size: 20px;
            line-height: 1;
            transition: transform 0.25s ease;
          }

          .next-project-button:hover .next-project-arrow {
            transform: translateX(4px);
          }

          .next-project-decoration {
            position: absolute;

            width: 310px;
            height: 310px;

            right: -90px;
            top: -130px;

            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 50%;

            pointer-events: none;
          }

          .next-project-decoration::before,
          .next-project-decoration::after {
            content: "";
            position: absolute;

            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 50%;
          }

          .next-project-decoration::before {
            inset: 45px;
          }

          .next-project-decoration::after {
            inset: 90px;
          }

          @media (max-width: 800px) {
            .next-project-section {
              margin-top: 52px;
            }

            .next-project-card {
              min-height: auto;

              padding: 38px 32px;

              flex-direction: column;
              align-items: flex-start;

              gap: 32px;

              border-radius: 20px;
            }

            .next-project-title {
              font-size: 34px;
            }

            .next-project-action {
              width: 100%;
            }

            .next-project-button {
              width: 100%;
              box-sizing: border-box;
            }
          }

          @media (max-width: 500px) {
            .next-project-section {
              margin-top: 42px;
            }

            .next-project-card {
              padding: 30px 22px;
              border-radius: 18px;
            }

            .next-project-label {
              margin-bottom: 18px;
              font-size: 11px;
            }

            .next-project-title {
              font-size: 29px;
              letter-spacing: -1px;
            }

            .next-project-text {
              font-size: 15px;
              line-height: 1.65;
            }
          }

        `}
      </style>

      <main className="projects-container">

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="next-project-section">
          <div className="next-project-card">

            <div className="next-project-decoration" />

            <div className="next-project-content">

              <p className="next-project-label">
                <span className="next-project-dot" />
                What's Next
              </p>

              <h2 className="next-project-title">
                Thinking about what comes next.
              </h2>

              <p className="next-project-text">
                I’m exploring new ideas and looking for interesting
                problems worth solving. Have something in mind?
                I’d love to hear about it.
              </p>

            </div>

            <div className="next-project-action">
              <a
                href="/contact"
                className="next-project-button"
              >
                Share an idea
                <span className="next-project-arrow">
                  →
                </span>
              </a>
            </div>

          </div>
        </section>

        {/*
        ============================================================
        CURRENTLY BUILDING — FUTURE PROJECT
        ============================================================

        Keep this commented until a new project is actively
        being developed.

        When a new project starts, this section can be enabled
        and placed between "What's Next" and "Projects".

        Example:

        <section className="current-building-section">
          <p>Currently Building</p>

          <h2>
            PROJECT NAME
          </h2>

          <p>
            Short description of the project currently being built.
          </p>

          <a
            href="GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow the build
          </a>
        </section>

        ============================================================
        */}


        <section className="projects-section">
          <h2 className="section-title">
            Projects
          </h2>

          <div className="projects-carousel">

            <button
              className="project-arrow"
              onClick={previousProject}
              type="button"
              aria-label="Previous project"
            >
              ‹
            </button>

            <div className="projects-window">

              <div
                className="projects-track"
                key={projectIndex}
              >
                {visibleProjects.map((project, position) => {
                  let cardClass = "project-card";

                  if (project.cardType === "zivora") {
                    cardClass += " zivora-card";
                  }

                  if (project.cardType === "logo") {
                    cardClass += " logo-card";
                  }

                  if (project.cardType === "desiglov") {
                    cardClass += " desiglov-card";
                  }

                  return (
                    <button
                      key={`${project.title}-${position}`}
                      className={cardClass}
                      onClick={() =>
                        setSelectedProject(project)
                      }
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

            </div>

            <button
              className="project-arrow"
              onClick={nextProject}
              type="button"
              aria-label="Next project"
            >
              ›
            </button>

          </div>

          <div className="project-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`project-dot ${
                  index === projectIndex ? "active" : ""
                }`}
                onClick={() => setProjectIndex(index)}
                aria-label={`Start with ${project.title}`}
              />
            ))}
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

/* =====================================================
   PROJECT MODAL
===================================================== */

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