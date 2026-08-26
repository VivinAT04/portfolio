import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logoo.jpg";

export default function Navbar() {
  const links = [
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "experience", path: "/experience" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111111] text-white z-50">
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
        {/* Logo */}
        <Link to="/" className="flex items-center">
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

        {/* Navigation */}
        <div className="flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
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

          {/* GitHub */}
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

          {/* LinkedIn */}
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