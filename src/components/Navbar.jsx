import logo from "../assets/images/logoo.jpg";
export default function Navbar() {
  const links = [
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Research & Publications",
    "Voluntary Works",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
    <a href="/">
    <img
        src={logo}
        alt="Portfolio Logo"
        className="w-14 h-14 rounded-full object-cover hover:scale-105 transition"
    />
    </a>

        <div className="flex gap-8">
          {links.map((link) => (
            <a key={link} href="#" className="text-gray-700 hover:text-black">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}