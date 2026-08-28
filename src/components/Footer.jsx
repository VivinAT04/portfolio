import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        z-20
        overflow-visible
        bg-[#f3f3f3]
        border-t
        border-[#dddddd]
      "
    >
      {/* =========================================================
          RAISED HALF CIRCLE
      ========================================================= */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          group
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          -translate-y-full

          w-[124px]
          h-[64px]

          md:w-[146px]
          md:h-[75px]

          overflow-visible
          bg-transparent
          cursor-pointer
          z-50
        "
      >
        {/* CLIPPING WINDOW */}
        <span
          className="
            absolute
            inset-0
            overflow-hidden
            pointer-events-none
          "
        >
          {/* FULL CIRCLE */}
          <span
            className="
              absolute
              left-1/2
              top-[3px]
              -translate-x-1/2

              w-[120px]
              h-[120px]

              md:w-[142px]
              md:h-[142px]

              rounded-full
              bg-[#f3f3f3]

              border
              border-[#dddddd]

              shadow-[0_-2px_7px_rgba(0,0,0,0.035)]

              transition-transform
              duration-300
              ease-[cubic-bezier(0.16,1,0.3,1)]

              group-hover:-translate-y-[2px]
            "
          />
        </span>

        {/* ARROW */}
        <ChevronUp
          strokeWidth={4}
          className="
            absolute
            left-1/2

            top-[16px]
            md:top-[20px]

            -translate-x-1/2

            w-[42px]
            h-[42px]

            md:w-[46px]
            md:h-[46px]

            text-white

            drop-shadow-[0_1px_3px_rgba(0,0,0,0.28)]

            pointer-events-none
            z-50

            transition-transform
            duration-300
            ease-[cubic-bezier(0.16,1,0.3,1)]

            group-hover:-translate-y-[2px]
          "
        />
      </button>

      {/* =========================================================
          MOBILE FOOTER
      ========================================================= */}
      <div
        className="
          md:hidden
          h-[74px]
          px-4
          flex
          items-center
          justify-center
        "
      >
        <Link
          to="/"
          className="
            m-0
            text-[13px]
            leading-none
            font-light
            text-[#858585]
            text-center
            whitespace-nowrap
            transition-colors
            duration-300
            hover:text-[#333333]
          "
        >
          © 2026 Vivin Anitha Thambidurai
        </Link>
      </div>

      {/* =========================================================
          TABLET + DESKTOP FOOTER
      ========================================================= */}
      <div
        className="
          hidden
          md:flex

          max-w-[1280px]
          mx-auto

          px-10
          lg:px-12

          min-h-[92px]
          py-[24px]

          items-center
        "
      >
        <div
          className="
            w-full
            flex
            items-center
            justify-between
            gap-8
          "
        >
          <Link
            to="/"
            className="
              m-0

              text-[15px]
              lg:text-[16px]

              leading-none
              font-light

              text-[#858585]

              whitespace-nowrap

              transition-colors
              duration-300

              hover:text-[#333333]
            "
          >
            © 2026 Vivin Anitha Thambidurai
          </Link>

          <nav
            className="
              flex
              items-center
              gap-x-7
              lg:gap-x-8
            "
          >
            <Link
              to="/about"
              className="
                text-[15px]
                lg:text-[16px]
                leading-none
                font-light
                text-[#7f7f7f]
                transition-colors
                duration-300
                hover:text-[#333333]
              "
            >
              about
            </Link>

            <Link
              to="/projects"
              className="
                text-[15px]
                lg:text-[16px]
                leading-none
                font-light
                text-[#7f7f7f]
                transition-colors
                duration-300
                hover:text-[#333333]
              "
            >
              projects
            </Link>

            <Link
              to="/experience"
              className="
                text-[15px]
                lg:text-[16px]
                leading-none
                font-light
                text-[#7f7f7f]
                transition-colors
                duration-300
                hover:text-[#333333]
              "
            >
              experience
            </Link>

            <Link
              to="/contact"
              className="
                text-[15px]
                lg:text-[16px]
                leading-none
                font-light
                text-[#7f7f7f]
                transition-colors
                duration-300
                hover:text-[#333333]
              "
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}