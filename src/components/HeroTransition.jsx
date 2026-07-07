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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSplit(Math.min(100, Math.max(0, percentage)));
  };

  const leftTextOpacity = split <= 55 ? 1 : Math.max(0, 1 - (split - 55) / 20);
  const rightTextOpacity = split >= 45 ? 1 : Math.max(0, split / 20);

  const researcherMove = (50 - split) * 0.12;
  const coderMove = (split - 50) * 0.12;

  return (
    <>
      <section
        className="relative h-[80vh] overflow-hidden bg-white"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSplit(50)}
      >
<div className="absolute inset-0 z-0 pointer-events-none">
  <div className="absolute bottom-0 left-1/2 h-full w-[1300px] -translate-x-1/2 overflow-visible">
    {/* LEFT STATIC BACKGROUND */}
    <div
      className="absolute inset-0 z-10 overflow-visible"
      style={{
        clipPath: `inset(0 ${100 - split}% 0 0)`,
      }}
    >
      <img
        src={researcherBg}
        alt=""
        className="absolute bottom-[-65px] left-[130px] w-[560px] max-w-none opacity-100"
      />
    </div>

    {/* RIGHT STATIC BACKGROUND */}
    <div
      className="absolute inset-0 z-10 overflow-visible"
      style={{
        clipPath: `inset(0 0 0 ${split}%)`,
      }}
    >
      <img
        src={coderBg}
        alt=""
        className="absolute bottom-[-55px] right-[70px] w-[650px] max-w-none opacity-100"
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
                className="absolute bottom-0 left-1/2 w-[820px] max-w-none"
                style={{
                  transform: `translateX(calc(-50% + ${researcherMove}px))`,
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
                className="absolute bottom-0 left-1/2 w-[820px] max-w-none"
                style={{
                  transform: `translateX(calc(-50% + ${coderMove}px))`,
                }}
              />
            </div>

            {/* CENTER LINE */}
            <div
              className="absolute z-30 top-0 bottom-0 w-[3px] bg-gray-900/80 shadow-xl transition-all duration-75"
              style={{
                left: `${split}%`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>

        <div className="relative z-40 grid grid-cols-[1fr_620px_1fr] h-full max-w-[1500px] mx-auto px-8 pt-14">
          <div
            className="flex flex-col justify-center transition-opacity duration-300"
            style={{ opacity: leftTextOpacity }}
          >
            <h1 className="text-7xl xl:text-8xl font-black leading-none tracking-tight text-gray-950 whitespace-nowrap">
              researcher
            </h1>

            <p className="mt-6 max-w-md text-xl text-gray-600">
              AI, BCI, machine learning and intelligent systems.
            </p>
          </div>

          <div />

          <div
            className="flex flex-col justify-center items-end transition-opacity duration-300"
            style={{ opacity: rightTextOpacity }}
          >
            <h1 className="text-7xl xl:text-8xl font-black leading-none tracking-tight text-right text-gray-950 whitespace-nowrap">
              {"<coder>"}
            </h1>

            <p className="mt-6 max-w-md text-xl text-right text-gray-600">
              APIs, cloud infrastructure, distributed systems and data
              platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] border-y border-gray-200 px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-10 mb-12">
            <div className="h-px bg-gray-300 flex-1" />

            <h2 className="text-[18px] tracking-[0.45em] font-bold text-gray-600">
              CURRENTLY EXPLORING
            </h2>

            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group h-[330px] [perspective:1200px]"
              >
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col [backface-visibility:hidden]">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
                        {card.icon}
                      </div>

                      <p className="text-xs font-bold tracking-[0.25em] text-gray-500">
                        {card.label}
                      </p>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-6">
                      {card.title}
                    </h3>

                    <p className="text-lg leading-8 text-gray-600 text-justify">
                      {card.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-white rounded-2xl border border-gray-200 p-8 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <h4 className="text-3xl font-black text-gray-900 mb-5">
                      {card.backTitle}
                    </h4>

                    <p className="text-lg leading-8 text-gray-600 text-justify mb-8">
                      {card.backText}
                    </p>

                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-semibold text-gray-900 underline underline-offset-4"
                      >
                        {card.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}