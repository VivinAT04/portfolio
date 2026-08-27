import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logoo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const links = [
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "experience", path: "/experience" },
    { name: "contact", path: "/contact" },
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();

    if (isAnimating) return;

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    setIsAnimating(true);

    /* ==============================================
       1. CURRENT NAVBAR GOES UP
    ============================================== */
    setIsLeaving(true);

    setTimeout(() => {
      /* ==============================================
         2. CHANGE PAGE WHILE NAVBAR IS HIDDEN
      ============================================== */
      window.scrollTo(0, 0);

      navigate(path);

      setIsLeaving(false);
      setIsEntering(true);

      /* ==============================================
         3. FORCE NAVBAR TO START ABOVE SCREEN
      ============================================== */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          /* ==============================================
             4. NAVBAR COMES DOWN
          ============================================== */
          setIsEntering(false);

          setTimeout(() => {
            setIsAnimating(false);
          }, 450);
        });
      });
    }, 450);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        bg-[#111111]
        text-white
        z-[9999]

        transition-transform
        duration-[450ms]
        ease-[cubic-bezier(0.76,0,0.24,1)]

        ${
          isLeaving || isEntering
            ? "-translate-y-full"
            : "translate-y-0"
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-[118px]
          px-8
          flex
          justify-between
          items-center
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="flex items-center"
        >
          <div
            className="
              w-[68px]
              h-[68px]
              rounded-full
              bg-white
              flex
              items-center
              justify-center

              hover:scale-105
              transition-transform
              duration-300
            "
          >
            <img
              src={logo}
              alt="Portfolio Logo"
              className="
                w-[52px]
                h-[52px]
                rounded-full
                object-cover
              "
            />
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavigation(e, link.path)}
              className="
                text-white/80
                hover:text-white
                text-[21px]
                font-medium

                transition-colors
                duration-300
              "
            >
              {link.name}
            </Link>
          ))}

          {/* GITHUB */}
          <a
            href="https://github.com/VivinAT04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              text-[33px]
              text-white

              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <FaGithub />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vivinthambidurai/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              text-[33px]
              text-white

              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}