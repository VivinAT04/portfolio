import { useState } from "react";

import researcherImg from "../../assets-images/researcher1.png";
import researcherBg from "../../assets-images/researcher-background.jpg";
import coderImg from "../../assets-images/coder1.png";
import coderBg from "../../assets-images/coder-background.jpg";

const cards = [
  {
    icon: "🚀",
    label: "EMERGING TECH",
    title: "Model Context Protocol (MCP)",
    description:
      "A new standard that connects AI models to tools, APIs and data sources in a secure and universal way.",
    backTitle: "What is MCP?",
    backText:
      "MCP helps AI applications connect with external tools, files, APIs and databases through a common protocol.",
    link: "https://modelcontextprotocol.io/docs/getting-started/intro",
    linkText: "Read official docs",
  },
  {
    icon: "🎯",
    label: "CURRENT GOAL",
    title: "MLH Global Hack Week 2026",
    description:
      "A global online event where developers complete challenges, build projects and connect with the MLH community.",
    backTitle: "Hackathon Goal",
    backText:
      "I am preparing to build, learn quickly, collaborate with developers and add a strong project to my portfolio.",
    link: "https://ghw.mlh.com/",
    linkText: "Visit MLH",
  },
  {
    icon: "💡",
    label: "THOUGHT OF THE WEEK",
    title: "Stay curious.",
    description:
      "The best engineers never stop being students. Curiosity is the fuel behind every breakthrough.",
    backTitle: "Keep learning.",
    backText: "“The best engineers never stop being students.”",
    link: null,
    linkText: null,
  },
];

export default function HeroTransition() {
  const [split, setSplit] = useState(50);
  const [flippedCard, setFlippedCard] = useState(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSplit(Math.min(100, Math.max(0, percentage)));
  };

  const handleCardFlip = (index) => {
    if (window.innerWidth >= 1024) return;

    setFlippedCard((current) => (current === index ? null : index));
  };

  const leftTextOpacity =
    split > 50 ? 1 : Math.max(0, 1 - (50 - split) / 15);

  const rightTextOpacity =
    split < 50 ? 1 : Math.max(0, 1 - (split - 50) / 15);

  const personMove = (split - 50) * 2.2;
  const bgMove = (split - 50) * 1.4;

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="
          relative
          mt-[78px]

          h-[300px]
          sm:h-[440px]

          md:mt-[60px]
          md:h-[760px]

          lg:h-[82.5vh]
          lg:min-h-[680px]

          overflow-hidden
          bg-white
         pb-0 md:pb-20 lg:pb-24"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) {
            setSplit(50);
          }
        }}
      >
        {/* =========================================================
            MOBILE — STATIC
        ========================================================= */}
        <div className="relative h-full md:hidden overflow-hidden bg-white">
          {/* IMAGE COMPOSITION */}
          <div
            className="
              absolute
              left-1/2
              bottom-0
              w-[440px] sm:w-[500px]
              h-full
              -translate-x-1/2
              pointer-events-none
            "
          >
            {/* LEFT BACKGROUND */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                [clip-path:inset(0_50%_0_0)]
              "
            >
              <img
                src={researcherBg}
                alt=""
                className="
                  absolute
                  left-[8px]
                  bottom-[-5px]
                  w-[255px]
                  sm:w-[320px]
                  max-w-none
                  opacity-90
                "
              />
            </div>

            {/* RIGHT BACKGROUND */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                [clip-path:inset(0_0_0_50%)]
              "
            >
              <img
                src={coderBg}
                alt=""
                className="
                  absolute
                  right-[5px]
                  bottom-[-5px]
                  w-[270px]
                  sm:w-[340px]
                  max-w-none
                  opacity-90
                "
              />
            </div>

            {/* LEFT PERSON */}
            <div
              className="
                absolute
                inset-0
                z-10
                overflow-hidden
                [clip-path:inset(0_50%_0_0)]
              "
            >
              <img
                src={researcherImg}
                alt="Researcher"
                className="
                  absolute
                  left-1/2
                  bottom-[0px]
                  w-[350px]
                  sm:w-[450px]
                  max-w-none
                  -translate-x-1/2
                  translate-y-[58px] md:translate-y-0
                "
              />
            </div>

            {/* RIGHT PERSON */}
            <div
              className="
                absolute
                inset-0
                z-10
                overflow-hidden
                [clip-path:inset(0_0_0_50%)]
              "
            >
              <img
                src={coderImg}
                alt="Coder"
                className="
                  absolute
                  left-1/2
                  bottom-[0px]
                  w-[350px]
                  sm:w-[450px]
                  max-w-none
                  -translate-x-1/2
                  translate-y-[58px] md:translate-y-0
                "
              />
            </div>
          </div>

          {/* MOBILE TITLES */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <h1
              className="
                absolute
                left-[14px]
                top-[140px]
                sm:left-[22px]
                sm:top-[160px]

                text-[20px]
                sm:text-[30px]

                font-bold
                leading-none
                tracking-[-0.055em]

                text-[#363636]
                whitespace-nowrap
              "
            >
              researcher
            </h1>

            <h1
              className="
                absolute
                right-[14px]
                top-[140px]
                sm:right-[22px]
                sm:top-[160px]

                text-[20px]
                sm:text-[30px]

                font-bold
                leading-none
                tracking-[-0.055em]

                text-[#363636]
                whitespace-nowrap
              "
            >
              {"<coder>"}
            </h1>
          </div>
        </div>

        {/* =========================================================
            TABLET + DESKTOP — EXISTING INTERACTIVE HERO
        ========================================================= */}
        <div className="hidden md:block h-full">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-full
                w-[1000px]
                lg:w-[1300px]
                -translate-x-1/2
                overflow-visible
              "
            >
              {/* LEFT BACKGROUND */}
              <div
                className="absolute inset-0 z-10 overflow-visible"
                style={{
                  clipPath: `inset(0 ${100 - split}% 0 0)`,
                }}
              >
                <img
                  src={researcherBg}
                  alt=""
                  className="
                    absolute
                    bottom-[-35px]
                    left-[70px]
                    w-[430px]
                    max-w-none

                    lg:bottom-[-65px]
                    lg:left-[130px]
                    lg:w-[560px]
                  "
                  style={{
                    transform: `translateX(${bgMove}px)`,
                  }}
                />
              </div>

              {/* RIGHT BACKGROUND */}
              <div
                className="absolute inset-0 z-10 overflow-visible"
                style={{
                  clipPath: `inset(0 0 0 ${split}%)`,
                }}
              >
                <img
                  src={coderBg}
                  alt=""
                  className="
                    absolute
                    bottom-[-30px]
                    right-[30px]
                    w-[500px]
                    max-w-none

                    lg:bottom-[-55px]
                    lg:right-[70px]
                    lg:w-[650px]
                  "
                  style={{
                    transform: `translateX(${bgMove}px)`,
                  }}
                />
              </div>

              {/* LEFT PERSON */}
              <div
                className="absolute inset-0 z-20 overflow-visible"
                style={{
                  clipPath: `inset(0 ${100 - split}% 0 0)`,
                }}
              >
                <img
                  src={researcherImg}
                  alt="Researcher"
                  className="
                    absolute
                    bottom-[-25px]
                    left-1/2
                    w-[650px]
                    max-w-none

                    lg:bottom-[-45px]
                    lg:w-[820px]
                  "
                  style={{
                    transform: `translateX(calc(-50% + ${personMove}px))`,
                  }}
                />
              </div>

              {/* RIGHT PERSON */}
              <div
                className="absolute inset-0 z-20 overflow-visible"
                style={{
                  clipPath: `inset(0 0 0 ${split}%)`,
                }}
              >
                <img
                  src={coderImg}
                  alt="Coder"
                  className="
                    absolute
                    bottom-[-25px]
                    left-1/2
                    w-[650px]
                    max-w-none

                    lg:bottom-[-45px]
                    lg:w-[820px]
                  "
                  style={{
                    transform: `translateX(calc(-50% + ${personMove}px))`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* DESKTOP TEXT */}
          <div
            className="
              relative
              z-40
              grid
              grid-cols-[1fr_440px_1fr]
              lg:grid-cols-[1fr_620px_1fr]

              h-full
              max-w-[1280px]
              mx-auto
              px-6
              pt-10
              lg:pt-14
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                flex-col
                justify-center
                items-start
                transition-opacity
                duration-300
              "
              style={{ opacity: leftTextOpacity }}
            >
              <h1
                className="
                  text-[40px]
                  lg:text-[54px]
                  xl:text-[60px]
                  font-bold
                  leading-none
                  tracking-[-0.045em]
                  text-[#3b3b3b]
                  whitespace-nowrap
                "
              >
                researcher
              </h1>

              <p
                className="
                  mt-4
                  max-w-[280px]
                  lg:max-w-[380px]
                  text-[14px]
                  lg:text-[17px]
                  leading-[1.55]
                  text-[#8a8a8a]
                "
              >
                AI, BCI, machine learning and intelligent systems.
              </p>
            </div>

            <div />

            {/* RIGHT */}
            <div
              className="
                flex
                flex-col
                justify-center
                items-end
                transition-opacity
                duration-300
              "
              style={{ opacity: rightTextOpacity }}
            >
              <h1
                className="
                  text-[40px]
                  lg:text-[54px]
                  xl:text-[60px]
                  font-bold
                  leading-none
                  tracking-[-0.045em]
                  text-right
                  text-[#3b3b3b]
                  whitespace-nowrap
                "
              >
                {"<coder>"}
              </h1>

              <p
                className="
                  mt-4
                  max-w-[270px]
                  lg:max-w-[350px]
                  text-[14px]
                  lg:text-[17px]
                  leading-[1.55]
                  text-right
                  text-[#8a8a8a]
                "
              >
                APIs, cloud infrastructure, distributed systems and data
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENTLY EXPLORING
      ========================================================= */}
      <section
        className="
          bg-[#f7f7f7]
          border-y
          border-gray-200
          px-4
          sm:px-6
          lg:px-8
          pt-8
          sm:pt-12
          pb-[105px]
          sm:pb-[110px]
          md:pb-20
          lg:pb-24
        "
      >
        <div className="max-w-[1280px] mx-auto">
          {/* TITLE */}
          <div
            className="
              flex
              items-center
              gap-3
              sm:gap-6
              lg:gap-10
              mb-8
              sm:mb-10
              lg:mb-12
            "
          >
            <div className="h-px bg-gray-300 flex-1" />

            <h2
              className="
                text-[10px]
                sm:text-[13px]
                md:text-[15px]
                lg:text-[18px]
                tracking-[0.18em]
                sm:tracking-[0.3em]
                lg:tracking-[0.45em]
                font-bold
                text-gray-600
                whitespace-nowrap
              "
            >
              CURRENTLY EXPLORING
            </h2>

            <div className="h-px bg-gray-300 flex-1" />
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-6
              lg:gap-8
              items-stretch
            "
          >
            {cards.map((card, index) => {
              const isFlipped = flippedCard === index;

              return (
                <div
                  key={card.title}
                  className="
                    group
                    relative
                    h-[285px]
                    sm:h-[310px]
                    md:h-[320px]
                    lg:h-[330px]
                    cursor-pointer
                    [perspective:1200px]
                  "
                  onClick={() => handleCardFlip(index)}
                >
                  <div
                    className={`
                      relative
                      h-full
                      w-full

                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      [transform-style:preserve-3d]

                      ${
                        isFlipped
                          ? "[transform:rotateY(180deg)]"
                          : "[transform:rotateY(0deg)]"
                      }

                      lg:group-hover:[transform:rotateY(180deg)]
                    `}
                  >
                    {/* FRONT */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-white
                        rounded-[18px]
                        sm:rounded-2xl
                        border
                        border-gray-200
                        shadow-[0_4px_15px_rgba(0,0,0,0.07)]
                        p-5
                        sm:p-6
                        lg:p-8
                        flex
                        flex-col
                        [backface-visibility:hidden]
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          sm:gap-4
                          mb-5
                          sm:mb-7
                          lg:mb-9
                        "
                      >
                        <div
                          className="
                            w-11
                            h-11
                            sm:w-12
                            sm:h-12
                            lg:w-14
                            lg:h-14
                            shrink-0
                            rounded-xl
                            sm:rounded-2xl
                            bg-gray-100
                            flex
                            items-center
                            justify-center
                            text-[22px]
                            sm:text-2xl
                            lg:text-3xl
                          "
                        >
                          {card.icon}
                        </div>

                        <p
                          className="
                            text-[10px]
                            sm:text-[11px]
                            lg:text-xs
                            font-bold
                            tracking-[0.18em]
                            sm:tracking-[0.22em]
                            lg:tracking-[0.25em]
                            text-gray-500
                          "
                        >
                          {card.label}
                        </p>
                      </div>

                      <h3
                        className="
                          text-[19px]
                          sm:text-[21px]
                          lg:text-2xl
                          font-black
                          leading-[1.25]
                          text-gray-900
                          mb-4
                          lg:mb-5
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          text-[14px]
                          sm:text-[15px]
                          lg:text-[17px]
                          leading-[1.65]
                          text-gray-600
                        "
                      >
                        {card.description}
                      </p>

                      <div
                        className="
                          mt-auto
                          pt-5
                          lg:hidden
                          text-[10px]
                          font-bold
                          tracking-[0.14em]
                          text-gray-400
                        "
                      >
                        TAP TO FLIP ↗
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-white
                        rounded-[18px]
                        sm:rounded-2xl
                        border
                        border-gray-200
                        shadow-xl
                        p-5
                        sm:p-6
                        lg:p-8
                        flex
                        flex-col
                        justify-center
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)]
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[10px]
                            sm:text-[11px]
                            font-bold
                            tracking-[0.22em]
                            text-gray-400
                            mb-4
                          "
                        >
                          {card.label}
                        </p>

                        <h4
                          className="
                            text-[24px]
                            sm:text-[27px]
                            lg:text-3xl
                            font-black
                            leading-[1.15]
                            text-gray-900
                            mb-5
                          "
                        >
                          {card.backTitle}
                        </h4>

                        <p
                          className="
                            text-[14px]
                            sm:text-[15px]
                            lg:text-[17px]
                            leading-[1.7]
                            text-gray-600
                          "
                        >
                          {card.backText}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        {card.link ? (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="
                              inline-flex
                              text-[15px]
                              lg:text-[17px]
                              font-semibold
                              text-gray-900
                              underline
                              underline-offset-4
                            "
                          >
                            {card.linkText}
                          </a>
                        ) : (
                          <span
                            className="
                              text-[14px]
                              font-semibold
                              text-gray-400
                            "
                          >
                            Keep exploring.
                          </span>
                        )}

                        <div
                          className="
                            lg:hidden
                            mt-5
                            text-[11px]
                            font-bold
                            tracking-[0.12em]
                            text-gray-400
                          "
                        >
                          TAP TO RETURN
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}