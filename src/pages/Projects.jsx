import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const currentProject = {
    title: "AI Document Assistant",
    description:
      "An enterprise-grade AI document assistant built with FastAPI, PostgreSQL, Redis, pgvector and AWS. It supports intelligent document search, RAG, authentication, and scalable backend APIs.",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  };

  const engineeringProjects = [
    {
      label: "Portfolio Project",
      title: "Portfolio",
      year: "2026",
      description:
        "A modern personal portfolio website built to showcase my projects, experience, research work, and technical profile.",
      technologies: ["React", "Vite", "JavaScript", "CSS", "GitHub"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "Workflow Tool",
      title: "PythonFlow",
      year: "2026",
      description:
        "A Python workflow orchestration tool with DAG execution, retries, scheduling, logging, and dashboard support.",
      technologies: ["Python", "Flask", "SQLite", "NetworkX"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "Data Pipeline",
      title: "API Ingestion Pipeline",
      year: "2026",
      description:
        "A backend data ingestion system for collecting, validating, transforming, and storing API data for analysis.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "Open Source",
      title: "Airflow",
      year: "2026",
      description:
        "Open-source contribution work focused on Apache Airflow backfill DAG version handling and workflow reliability.",
      technologies: ["Python", "Airflow", "Open Source", "GitHub"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "Assessment",
      title: "Junior Python Developer",
      year: "2026",
      description:
        "A Python developer assessment project focused on clean backend logic, problem solving, and maintainable code.",
      technologies: ["Python", "OOP", "Testing", "Git"],
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
  ];

  const researchProjects = [
    {
      label: "Research Project",
      title: "BCI Wheelchair",
      year: "2026",
      description:
        "A brain-computer interface wheelchair research project using EEG motor imagery classification for movement control.",
      technologies: ["Python", "EEG", "Machine Learning", "MATLAB"],
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "AI Research",
      title: "Crop Yield Prediction",
      year: "2025",
      description:
        "An AI-powered crop yield prediction system that analyses agricultural data to estimate crop production.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "EEG Research",
      title: "EEG Classification",
      year: "2026",
      description:
        "A research implementation for EEG signal preprocessing, feature extraction, and classification experiments.",
      technologies: ["Python", "MNE", "CSP", "LDA"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
    {
      label: "Research Prototype",
      title: "Neurodiverse Women",
      year: "2026",
      description:
        "A prototype digital assistant concept supporting neurodiverse women through personalised interaction design.",
      technologies: ["Python", "Research", "UX", "Prototype"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <style>
        {`
          .projects-page {
            background: #f7f7f5;
            min-height: 100vh;
            padding: 28px 0 60px;
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

          .current-grid {
            display: grid;
            grid-template-columns: 1fr 1.05fr;
            gap: 28px;
            align-items: stretch;
            background: white;
            border: 1px solid rgba(0,0,0,.08);
            border-radius: 26px;
            padding: 20px;
            margin-bottom: 58px;
            box-shadow: 0 10px 35px rgba(0,0,0,.05);
          }

          .current-card {
            padding: 34px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 310px;
          }

          .current-preview {
            border-radius: 20px;
            overflow: hidden;
            min-height: 310px;
            background: #f3f3f3;
          }

          .current-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .current-status {
            color: #555;
            font-weight: 700;
            margin: 0 0 16px;
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
            margin: 0 0 22px;
            line-height: 1.05;
            letter-spacing: -1.5px;
          }

          .current-description {
            color: #5f6470;
            font-size: 17px;
            line-height: 1.6;
            max-width: 480px;
            margin: 0;
          }

          .current-btn {
            display: inline-block;
            padding: 13px 25px;
            border-radius: 999px;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
            background: #111;
            color: white;
            margin-top: 32px;
          }

          .carousel-section {
            position: relative;
            margin-bottom: 58px;
          }

          .carousel-track {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            justify-content: center;
            gap: 28px;
          }

          .project-card {
            height: 390px;
            border-radius: 18px;
            overflow: hidden;
            position: relative;
            border: none;
            cursor: pointer;
            color: white;
            background: #111;
            box-shadow: 0 16px 30px rgba(0,0,0,.12);
            transition: .35s ease;
            padding: 0;
          }

          .project-card:hover {
            transform: translateY(-6px);
          }

          .project-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: .5s ease;
          }

          .project-card:hover img {
            transform: scale(1.06);
          }

          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(0,0,0,.78) 0%,
              rgba(0,0,0,.25) 45%,
              rgba(0,0,0,.58) 100%
            );
          }

          .card-content {
            position: absolute;
            top: 30px;
            left: 26px;
            right: 24px;
            text-align: left;
          }

          .card-label {
            margin: 0 0 8px;
            font-size: 14px;
            font-weight: 700;
            color: rgba(255,255,255,.82);
          }

          .card-title {
            margin: 0;
            font-size: 28px;
            line-height: 1.08;
            font-weight: 800;
            letter-spacing: -1px;
          }

          .arrow-btn {
            position: absolute;
            top: 56%;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid #eee;
            background: white;
            color: #111;
            font-size: 23px;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(0,0,0,.08);
            transition: .25s ease;
            z-index: 10;
          }

          .arrow-btn:hover {
            background: #111;
            color: white;
            transform: scale(1.08);
          }

          .arrow-left {
            left: -64px;
          }

          .arrow-right {
            right: -64px;
          }

          .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,.78);
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            overflow-y: auto;
            padding: 70px 24px;
          }

          .project-modal {
            width: min(980px, 100%);
            background: white;
            border-radius: 30px;
            padding: 54px;
            position: relative;
            animation: popIn .25s ease;
          }

          @keyframes popIn {
            from {
              opacity: 0;
              transform: translateY(24px) scale(.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .modal-close {
            position: fixed;
            top: 88px;
            right: calc((100vw - min(980px, 100%)) / 2 + 42px);
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border: none;
            background: #111;
            color: white;
            font-size: 24px;
            cursor: pointer;
            z-index: 1000;
          }

          .modal-label {
            margin: 0 0 18px;
            font-size: 18px;
            font-weight: 800;
            color: #222;
          }

          .modal-title {
            margin: 0 0 34px;
            font-size: 52px;
            line-height: 1;
            letter-spacing: -2px;
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
            letter-spacing: .5px;
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
            margin-bottom: 28px;
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

          @media (max-width: 1200px) {
            .projects-container {
              width: min(1040px, calc(100% - 48px));
            }

            .carousel-track {
              grid-template-columns: repeat(3, 280px);
              gap: 24px;
            }

            .project-card {
              height: 365px;
            }

            .arrow-left {
              left: -24px;
            }

            .arrow-right {
              right: -24px;
            }
          }

          @media (max-width: 900px) {
            .projects-container {
              width: min(100% - 32px, 620px);
            }

            .current-grid {
              grid-template-columns: 1fr;
            }

            .current-title {
              font-size: 34px;
            }

            .carousel-track {
              grid-template-columns: 1fr;
            }

            .project-card {
              height: 430px;
            }

            .arrow-left {
              left: 10px;
            }

            .arrow-right {
              right: 10px;
            }

            .project-modal {
              padding: 34px 22px;
            }

            .modal-title {
              font-size: 38px;
            }

            .modal-close {
              right: 28px;
              top: 82px;
            }
          }
        `}
      </style>

      <main className="projects-container">
        <h2 className="section-title">Current Project</h2>

        <div className="current-grid">
          <div className="current-card">
            <div>
              <p className="current-status">
                Currently Building <span className="current-dot" />
              </p>

              <h1 className="current-title">{currentProject.title}</h1>

              <p className="current-description">
                {currentProject.description}
              </p>
            </div>

            <a href={currentProject.github} className="current-btn">
              GitHub
            </a>
          </div>

          <div className="current-preview">
            <img src={currentProject.image} alt={currentProject.title} />
          </div>
        </div>

        <ProjectCarousel
          title="Engineering Projects"
          projects={engineeringProjects}
          onProjectClick={setSelectedProject}
        />

        <ProjectCarousel
          title="Research Projects"
          projects={researchProjects}
          onProjectClick={setSelectedProject}
        />
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

function ProjectCarousel({ title, projects, onProjectClick }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[index],
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <section className="carousel-section">
      <h2 className="section-title">{title}</h2>

      <button className="arrow-btn arrow-left" onClick={prevSlide}>
        ←
      </button>

      <div className="carousel-track">
        {visibleProjects.map((project) => (
          <button
            key={project.title}
            className="project-card"
            onClick={() => onProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />

            <div className="card-overlay" />

            <div className="card-content">
              <p className="card-label">{project.label}</p>
              <h3 className="card-title">{project.title}</h3>
            </div>
          </button>
        ))}
      </div>

      <button className="arrow-btn arrow-right" onClick={nextSlide}>
        →
      </button>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        ×
      </button>

      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <p className="modal-label">{project.label}</p>

        <h1 className="modal-title">{project.title}</h1>

        <div className="modal-info">
          <p className="modal-year">{project.year}</p>

          <p className="modal-description">{project.description}</p>

          <p className="tech-title">TECHNOLOGIES</p>

          <div className="tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="modal-links-title">Links 🔗</p>

        <a href={project.link} className="modal-link">
          <span>{project.title}</span>
          <span>›</span>
        </a>

        <div className="modal-image-box">
          <img src={project.image} alt={project.title} />
        </div>
      </div>
    </div>
  );
}