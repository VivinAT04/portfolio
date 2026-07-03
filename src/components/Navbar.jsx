import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logoo.jpg";

export default function Navbar() {
  const links = [
    { name: "about", path: "/about" },
    { name: "portfolio", path: "/projects" },
    { name: "experience", path: "/experience" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111111] text-white z-50">
      <div className="max-w-7xl mx-auto h-24 px-8 flex justify-between items-center">
        <Link to="/">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:scale-105 transition">
            <img
              src={logo}
              alt="Portfolio Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </Link>

        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white/80 hover:text-white text-lg font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://github.com/VivinAT04"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vivinthambidurai/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-white hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}