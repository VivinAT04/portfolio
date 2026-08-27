import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logoo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLeaving, setIsLeaving] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "experience", path: "/experience" },
    { name: "contact", path: "/contact" },
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();

    if (isAnimating) return;

    setMobileOpen(false);

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    setIsAnimating(true);
    setIsLeaving(true);

    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate(path);

      setIsLeaving(false);
      setIsEntering(true);

      setTimeout(() => {
        setIsEntering(false);

        setTimeout(() => {
          setIsAnimating(false);
        }, 450);
      }, 40);
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

          h-[78px]
          md:h-[96px]
          lg:h-[118px]

          px-4
          sm:px-6
          md:px-8

          flex
          justify-between
          items-center
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="flex items-center shrink-0"
        >
          <div
            className="
              w-[50px]
              h-[50px]

              sm:w-[54px]
              sm:h-[54px]

              md:w-[60px]
              md:h-[60px]

              lg:w-[68px]
              lg:h-[68px]

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
                w-[38px]
                h-[38px]

                sm:w-[42px]
                sm:h-[42px]

                md:w-[46px]
                md:h-[46px]

                lg:w-[52px]
                lg:h-[52px]

                rounded-full
                object-cover
              "
            />
          </div>
        </Link>

        {/* DESKTOP / TABLET NAVIGATION */}
        <div
          className="
            hidden
            md:flex
            items-center

            gap-5
            lg:gap-8
            xl:gap-12
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavigation(e, link.path)}
              className={`
                text-[16px]
                lg:text-[18px]
                xl:text-[21px]

                font-medium

                transition-colors
                duration-300

                ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://github.com/VivinAT04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              text-[25px]
              lg:text-[29px]
              xl:text-[33px]
              text-white

              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vivinthambidurai/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              text-[25px]
              lg:text-[29px]
              xl:text-[33px]
              text-white

              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <FaLinkedin />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            md:hidden

            w-[44px]
            h-[44px]

            flex
            items-center
            justify-center

            text-[25px]
            text-white

            rounded-full

            hover:bg-white/10
            transition-colors
            duration-300
          "
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          overflow-hidden
          bg-[#111111]

          transition-all
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]

          ${
            mobileOpen
              ? "max-h-[520px] opacity-100 border-t border-white/10"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            px-5
            sm:px-6
            pt-6
            pb-8

            flex
            flex-col
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleNavigation(e, link.path)}
              className={`
                py-4

                border-b
                border-white/10

                text-[28px]
                sm:text-[30px]

                tracking-[-0.035em]
                font-medium

                transition-colors
                duration-300

                ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE SOCIALS */}
          <div className="flex items-center gap-6 pt-7">
            <a
              href="https://github.com/VivinAT04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-[48px]
                h-[48px]

                flex
                items-center
                justify-center

                rounded-full
                border
                border-white/15

                text-[25px]
                text-white

                hover:bg-white
                hover:text-[#111111]

                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vivinthambidurai/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-[48px]
                h-[48px]

                flex
                items-center
                justify-center

                rounded-full
                border
                border-white/15

                text-[25px]
                text-white

                hover:bg-white
                hover:text-[#111111]

                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}