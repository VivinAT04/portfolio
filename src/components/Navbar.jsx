
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logoo.jpg";

export default function Navbar() {
  const links = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <Link to="/">
          <img
            src={logo}
            alt="Portfolio Logo"
            className="w-14 h-14 rounded-full object-cover hover:scale-105 transition"
          />
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-black font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://github.com/VivinAT04"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-700 hover:text-black hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vivinthambidurai/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-700 hover:text-black hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

