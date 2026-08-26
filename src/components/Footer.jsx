import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#f3f3f2] border-t border-[#d8d8d5]">

      {/* CENTRE RAISED TAB */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-[52px]

          w-[120px]
          h-[53px]

          bg-[#f3f3f2]

          border
          border-[#d8d8d5]
          border-b-0

          rounded-t-[70px]

          flex
          items-center
          justify-center

          cursor-pointer
          group
        "
      >
        {/* UP ARROW */}
        <span
          className="
            relative
            translate-y-[7px]
            w-[27px]
            h-[27px]
            block
          "
        >
          <span
            className="
              absolute
              left-[4px]
              top-[9px]
              w-[17px]
              h-[17px]

              border-l-[3px]
              border-t-[3px]
              border-[#d4d4d1]

              rotate-45

              transition-all
              duration-300

              group-hover:border-[#777]
              group-hover:-translate-y-[3px]
            "
          />
        </span>
      </button>

      {/* FOOTER CONTENT */}
      <div
        className="
          max-w-[1080px]
          mx-auto
          px-6
          md:px-8

          min-h-[92px]

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
          py-7
        "
      >
        {/* LEFT */}
        <p className="text-[14px] md:text-[15px] text-[#8b8b88] font-light">
          © 2026 Vivin Anitha Thambidurai
        </p>

        {/* RIGHT */}
        <nav
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3

            text-[14px]
            md:text-[15px]
            text-[#8b8b88]
            font-light
          "
        >
          <Link
            to="/about"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            about
          </Link>

          <Link
            to="/projects"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            projects
          </Link>

          <Link
            to="/experience"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            experience
          </Link>

          <Link
            to="/research"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            research
          </Link>

          <Link
            to="/story"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            story
          </Link>

          <Link
            to="/contact"
            className="transition-colors duration-300 hover:text-[#333]"
          >
            contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}