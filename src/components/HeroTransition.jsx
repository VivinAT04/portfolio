import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import aboutImg from "../../assets-images/about.png";
import octoImg from "../../assets-images/Octo.png";
import storyImg from "../../assets-images/backmac.png";
import profileImg from "../../assets-images/short.png";
import sheffieldImg from "../../assets-images/sheffield.jpg";
import ambassadorImg from "../../assets-images/ambass.jpg";
import awsImg from "../../assets-images/image.png";
import volunteerImg from "../../assets-images/voluteer.jpg";
import circleImg from "../../assets-images/circel-2.png";
import horiImg from "../../assets-images/hori1.png";
import prospectImg from "../../assets-images/Prospect.png";
import flightImg from "../../assets-images/flight.jpg";
import viviImg from "../../assets-images/Vivii.png";
import pottImg from "../../assets-images/pott.jpg";
import myUniPhoto from "../../assets-images/myUniPhoto.jpg";

export default function About() {
  const [animateAbout, setAnimateAbout] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [showRandomFacts, setShowRandomFacts] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showStory, setShowStory] = useState(false);

  const circleSectionRef = useRef(null);
  const randomFactsRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const featuredSectionRef = useRef(null);
  const volunteerSectionRef = useRef(null);
  const storySectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateAbout(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = [
      [circleSectionRef, setShowCircle],
      [randomFactsRef, setShowRandomFacts],
      [skillsSectionRef, setShowSkills],
      [featuredSectionRef, setShowFeatured],
      [volunteerSectionRef, setShowVolunteer],
      [storySectionRef, setShowStory],
    ];

    const observers = sections.map(([ref, setter]) => {
      const section = ref.current;

      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(section);
          }
        },
        {
          threshold: 0.12,
        }
      );

      observer.observe(section);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const imageCards = [
    {
      src: flightImg,
      alt: "Flight",
      objectClass: "object-cover",
    },
    {
      src: viviImg,
      alt: "Vivin",
      objectClass: "object-cover object-center",
    },
    {
      src: sheffieldImg,
      alt: "Sheffield",
      objectClass: "object-cover",
    },
    {
      src: myUniPhoto,
      alt: "Student Ambassador",
      objectClass: "object-cover",
    },
    {
      src: awsImg,
      alt: "AWS",
      objectClass: "object-cover",
    },
    {
      src: pottImg,
      alt: "Plant",
      objectClass: "object-cover object-center",
    },
  ];

  const skills = [
    {
      skill: "Python",
      level: 95,
      color: "bg-[#62b8ad]",
      delay: 0,
    },
    {
      skill: "Backend",
      level: 90,
      color: "bg-[#e5b1a5]",
      delay: 300,
    },
    {
      skill: "AWS",
      level: 95,
      color: "bg-[#e7b52d]",
      delay: 600,
    },
    {
      skill: "Research",
      level: 75,
      color: "bg-[#c79a5d]",
      delay: 900,
    },
    {
      skill: "Gym",
      level: 40,
      color: "bg-[#d84242]",
      delay: 1200,
    },
  ];

  return (
    <main className="bg-white text-[#0f172a] overflow-x-hidden">
      {/* ====================================================== */}
      {/* ABOUT */}
      {/* ====================================================== */}
      <section
        id="about"
        className="
          bg-white
          px-4 sm:px-5 md:px-6
          pt-[90px] sm:pt-[100px] md:pt-32
          pb-6 sm:pb-8 md:pb-10
          overflow-hidden
        "
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="
              relative
              mt-1 sm:mt-5 md:mt-10
              min-h-0 md:min-h-[560px]
              overflow-visible
            "
          >
            <div className="grid md:grid-cols-[0.95fr_1.05fr] h-full">
              <div
                className={`
                  relative z-20
                  pt-6 sm:pt-10 md:pt-20
                  pb-0 sm:pb-6 md:pb-16
                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  delay-[200ms] md:delay-[450ms]
                  ${
                    animateAbout
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-[70px] md:-translate-x-[140px]"
                  }
                `}
              >
                <h1
                  className="
                    text-[54px] sm:text-[66px] md:text-[96px] lg:text-[104px]
                    font-black
                    tracking-[-0.065em]
                    leading-[0.85]
                    text-[#282828]
                    mb-5 md:mb-7
                  "
                >
                  about.
                </h1>

                <p
                  className="
                    text-[20px] sm:text-[22px] md:text-[27px]
                    leading-[1.4] md:leading-[1.35]
                    font-light
                    text-[#8a8a8a]
                    max-w-[500px]
                    mb-5 md:mb-8
                  "
                >
                  I'm a postgraduate at the University of Sheffield, United
                  Kingdom.
                </p>

                <p
                  className="
                    text-[15px] sm:text-[16px] md:text-[18px]
                    leading-[1.7]
                    text-[#4c4c4c]
                    max-w-[500px]
                  "
                >
                  Since 2021, I've enjoyed turning complex problems into simple,
                  elegant software solutions. When I'm not developing something,
                  you'll find me exploring my cooking skills, reading books, or
                  working out in the gym.
                </p>
              </div>

              <div className="relative hidden md:block">
                <img
                  src={aboutImg}
                  alt="Vivin"
                  className={`
                    absolute
                    left-[48%]
                    bottom-[-74px]
                    w-[650px] lg:w-[780px] xl:w-[820px]
                    max-w-none
                    object-contain
                    z-10
                    transition-all
                    duration-[1100ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      animateAbout
                        ? "opacity-100 -translate-x-1/2"
                        : "opacity-0 translate-x-[180px]"
                    }
                  `}
                />
              </div>
            </div>

            {/* MOBILE PHOTO */}
            <div
              className="
                md:hidden
                relative
                h-[300px] sm:h-[370px]
                -mt-[54px] sm:-mt-[24px]
                overflow-hidden
              "
            >
              <img
                src={aboutImg}
                alt="Vivin"
                className={`
                  absolute
                  left-1/2
                  bottom-[-35px] sm:bottom-[-45px]
                  w-[390px] sm:w-[470px]
                  max-w-none
                  object-contain
                  transition-all
                  duration-[1000ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    animateAbout
                      ? "opacity-100 -translate-x-1/2"
                      : "opacity-0 translate-x-[80px]"
                  }
                `}
              />
            </div>

            <div className="absolute left-0 right-0 bottom-0 h-px bg-[#d9d9d9] z-20" />
          </div>

          {/* IMAGE CARDS */}
          <div className="pt-5 sm:pt-8 md:pt-10 overflow-hidden">
            <div
              className="
                grid
                grid-cols-2
                gap-x-[14px]
                gap-y-[16px]
                sm:grid-cols-3 sm:gap-3
                lg:grid-cols-6 md:gap-4
                w-full
              "
            >
              {imageCards.map((item, index) => (
                <div
                  key={item.alt}
                  className={`
                    w-full
                    bg-white
                    rounded-[18px] sm:rounded-[10px]
                    border border-[#e4e4e4]
                    p-[6px] sm:p-[4px] md:p-[5px]
                    shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                    sm:shadow-[0_2px_8px_rgba(0,0,0,0.10)]
                    transition-all
                    duration-[900ms] md:duration-[1100ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      animateAbout
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-[35px]"
                    }
                  `}
                  style={{
                    transitionDelay: `${400 + index * 180}ms`,
                  }}
                >
                  <div
                    className="
                      w-full
                      aspect-[1.42/1]
                      sm:aspect-auto
                      sm:h-[100px]
                      md:h-[118px]
                      overflow-hidden
                      rounded-[13px] sm:rounded-[7px]
                    "
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`w-full h-full ${item.objectClass}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PART ENGINEER / PART RESEARCHER */}
      {/* ====================================================== */}
      <section
        ref={circleSectionRef}
        className="
          border-t
          border-gray-200
          bg-[#f5f5f5]
          overflow-hidden
        "
      >
        {/* PHONE + TABLET */}
        <div
          className="
            lg:hidden
            px-5 sm:px-8
            pt-16 sm:pt-20
            pb-0
          "
        >
          <div className="max-w-[620px] mx-auto text-center">
            <div>
              <h2
                className="
                  text-[40px] sm:text-[48px] md:text-[54px]
                  font-light
                  tracking-[-0.035em]
                  leading-[1.05]
                  text-[#3f3f3f]
                "
              >
                Part Engineer
              </h2>

              <ul
                className="
                  mt-10 sm:mt-12
                  space-y-5 sm:space-y-6
                  text-[20px] sm:text-[23px] md:text-[25px]
                  font-light
                  leading-[1.45]
                  text-[#454545]
                "
              >
                <li>Software Development</li>
                <li>Backend Engineering</li>
                <li>Python Programming</li>
                <li>Cloud Computing</li>
                <li>System Design</li>
              </ul>
            </div>

            <div className="mt-20 sm:mt-24">
              <h2
                className="
                  text-[40px] sm:text-[48px] md:text-[54px]
                  font-light
                  tracking-[-0.035em]
                  leading-[1.05]
                  text-[#3f3f3f]
                "
              >
                Part Researcher
              </h2>

              <ul
                className="
                  mt-10 sm:mt-12
                  space-y-5 sm:space-y-6
                  text-[20px] sm:text-[23px] md:text-[25px]
                  font-light
                  leading-[1.45]
                  text-[#454545]
                "
              >
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Brain Computer Interfaces</li>
                <li>Signal Processing</li>
                <li>Scientific Research</li>
              </ul>
            </div>

            <div
              className={`
                mt-24 sm:mt-28
                flex
                justify-center
                items-end
                transition-all
                duration-[1400ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showCircle
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[180px] opacity-0"
                }
              `}
            >
              <img
                src={circleImg}
                alt="Coder and Researcher"
                className="
                  w-[330px]
                  sm:w-[430px]
                  md:w-[520px]
                  max-w-full
                  h-auto
                  object-contain
                  drop-shadow-2xl
                "
              />
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block px-6 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div
              className="
                grid
                grid-cols-[1fr_560px_1fr]
                items-center
                gap-8
              "
            >
              <div className="justify-self-start w-full">
                <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8">
                  Part Engineer
                </h2>

                <div className="w-16 h-[2px] bg-[#3f4652] mb-8" />

                <ul className="space-y-4 text-[18px] leading-relaxed text-[#5b6470]">
                  <li>Software Development</li>
                  <li>Backend Engineering</li>
                  <li>Python Programming</li>
                  <li>Cloud Computing</li>
                  <li>System Design</li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={circleImg}
                  alt="Coder and Researcher"
                  className={`
                    w-full
                    max-w-[560px]
                    h-auto
                    object-contain
                    drop-shadow-2xl
                    transition-all
                    duration-[1400ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    will-change-transform
                    ${
                      showCircle
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[650px] opacity-0"
                    }
                  `}
                />
              </div>

              <div className="justify-self-end text-left w-full">
                <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8">
                  Part Researcher
                </h2>

                <div className="w-16 h-[2px] bg-[#3f4652] mb-8" />

                <ul className="space-y-4 text-[18px] leading-relaxed text-[#5b6470]">
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                  <li>Brain Computer Interfaces</li>
                  <li>Signal Processing</li>
                  <li>Scientific Research</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* RANDOM FACTS */}
      {/* ====================================================== */}
      <section
        ref={randomFactsRef}
        className="
          border-t
          border-gray-200
          bg-white
          overflow-hidden
        "
      >
        {/* PHONE + TABLET — REFERENCE STYLE */}
        <div
          className="
            lg:hidden
            px-6
            sm:px-10
            pt-20
            sm:pt-24
            pb-0
          "
        >
          <div className="max-w-[680px] mx-auto text-center">
            <div
              className={`
                transition-all
                duration-[1100ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showRandomFacts
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[70px] opacity-0"
                }
              `}
            >
              <h2
                className="
                  text-[44px]
                  sm:text-[52px]
                  md:text-[58px]
                  font-light
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#3f3f3f]
                "
              >
                Random facts
              </h2>

              <ul
                className="
                  mt-10
                  sm:mt-12
                  space-y-5
                  sm:space-y-6
                  text-[19px]
                  sm:text-[22px]
                  md:text-[24px]
                  font-light
                  leading-[1.45]
                  text-[#454545]
                "
              >
                <li>
                  I'm slightly addicted to{" "}
                  <a
                    href="https://www.linkedin.com/in/vivinthambidurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    social media
                  </a>
                </li>

                <li>Building things from scratch is my thing</li>
                <li>Can't say no to a triple chocolate muffin</li>
                <li>Complex problems are oddly satisfying</li>
                <li>Always curious about how things work</li>
                <li>Learning goes beyond coursework</li>
                <li>Coffee keeps me going</li>
                <li>I love to cook (and eat)</li>
              </ul>
            </div>

            <div
              className={`
                mt-20
                sm:mt-24
                flex
                justify-center
                items-end
                transition-all
                duration-[1600ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showRandomFacts
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[130px] opacity-0"
                }
              `}
            >
              <img
                src={octoImg}
                alt="Octopus coming out of a monitor"
                className="
                  w-[390px]
                  sm:w-[520px]
                  md:w-[620px]
                  max-w-none
                  h-auto
                  object-contain
                  translate-y-[8px]
                "
              />
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block px-6 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div
              className="
                grid
                grid-cols-[620px_1fr]
                items-center
                gap-16
              "
            >
              <div
                className={`
                  flex
                  items-center
                  justify-start
                  transition-all
                  duration-[5000ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  will-change-transform
                  ${
                    showRandomFacts
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-[300px] opacity-0"
                  }
                `}
              >
                <img
                  src={octoImg}
                  alt="Octopus coming out of a monitor"
                  className="
                    w-[760px]
                    xl:w-[800px]
                    max-w-none
                    h-auto
                    object-contain
                    -ml-[90px]
                    translate-y-[70px]
                  "
                />
              </div>

              <div
                className={`
                  justify-self-end
                  transition-all
                  duration-[1100ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  delay-[450ms]
                  ${
                    showRandomFacts
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-[120px] opacity-0"
                  }
                `}
              >
                <h2 className="text-[46px] font-light leading-none text-[#3f3f3f] mb-8">
                  Random facts
                </h2>

                <ul className="space-y-[14px] text-[19px] leading-[1.45] text-[#555555]">
                  <li>
                    I'm slightly addicted to{" "}
                    <a
                      href="https://www.linkedin.com/in/vivinthambidurai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-black"
                    >
                      social media
                    </a>
                  </li>

                  <li>Building things from scratch is my thing</li>
                  <li>Can't say no to a triple chocolate muffin</li>
                  <li>Complex problems are oddly satisfying</li>
                  <li>Always curious about how things work</li>
                  <li>Learning goes beyond coursework</li>
                  <li>Coffee keeps me going</li>
                  <li>I love to cook (and eat)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* MY SKILLS */}
      {/* ====================================================== */}
      <section
        ref={skillsSectionRef}
        className="
          border-t
          bg-[#f5f5f5]
          px-4 sm:px-5 md:px-6
          py-16 sm:py-20 lg:py-28
          overflow-hidden
        "
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-[110px_1fr] lg:grid-cols-[180px_1fr] gap-3 md:gap-6 items-end">
            <div
              className="
                hidden md:flex
                flex-col
                justify-between
                h-[360px] lg:h-[430px]
                pb-20 lg:pb-24
                text-gray-500
                font-bold
                text-[14px] lg:text-lg
              "
            >
              <span>Jedi</span>
              <span>Ninja</span>
              <span>Geek</span>
              <span>Newbie</span>
            </div>

            <div className="min-w-0">
              <h2
                className="
                  text-[36px] sm:text-[40px] lg:text-[44px]
                  font-light
                  text-gray-700
                  text-left md:text-right
                  mb-7 lg:mb-8
                "
              >
                My skills
              </h2>

              <div className="md:hidden space-y-5">
                {skills.map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[15px] font-semibold text-gray-600">
                        {item.skill}
                      </span>

                      <span className="text-[15px] font-bold text-gray-600">
                        {item.level}%
                      </span>
                    </div>

                    <div className="h-[14px] bg-white rounded-full overflow-hidden border border-gray-200">
                      <div
                        className={`
                          ${item.color}
                          h-full
                          rounded-full
                          transition-all
                          duration-[1400ms]
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                        `}
                        style={{
                          width: showSkills ? `${item.level}%` : "0%",
                          transitionDelay: `${item.delay}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="
                  hidden md:block
                  relative
                  h-[360px] lg:h-[430px]
                  border-l border-b
                  border-gray-300
                "
              >
                <div className="absolute inset-0 flex flex-col justify-between pb-20 lg:pb-24">
                  <div className="border-t border-gray-200" />
                  <div className="border-t border-gray-200" />
                  <div className="border-t border-gray-200" />
                  <div className="border-t border-gray-200" />
                </div>

                <div
                  className="
                    relative z-10
                    h-full
                    flex
                    items-end
                    gap-2 lg:gap-8
                    px-2 lg:px-8
                  "
                >
                  {skills.map((item) => (
                    <div
                      key={item.skill}
                      className={`
                        ${item.color}
                        flex-1
                        min-w-0
                        max-w-[180px]
                        rounded-t-lg
                        shadow-md
                        flex
                        flex-col
                        justify-end
                        items-center
                        pb-5 lg:pb-8
                        text-white
                        transition-all
                        duration-[1600ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        origin-bottom
                      `}
                      style={{
                        height: showSkills ? `${item.level}%` : "0%",
                        opacity: showSkills ? 1 : 0,
                        transitionDelay: `${item.delay}ms`,
                      }}
                    >
                      <div
                        className={`
                          text-[28px] lg:text-[54px]
                          font-bold
                          leading-none
                          drop-shadow
                          transition-opacity
                          duration-500
                          ${showSkills ? "opacity-100" : "opacity-0"}
                        `}
                        style={{
                          transitionDelay: `${item.delay + 600}ms`,
                        }}
                      >
                        {item.level}
                        <span className="text-[14px] lg:text-2xl ml-1">%</span>
                      </div>

                      <p
                        className={`
                          mt-3 lg:mt-5
                          text-[11px] lg:text-lg
                          font-bold
                          transition-opacity
                          duration-500
                          ${showSkills ? "opacity-100" : "opacity-0"}
                        `}
                        style={{
                          transitionDelay: `${item.delay + 700}ms`,
                        }}
                      >
                        {item.skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ====================================================== */}
{/* FEATURED */}
{/* ====================================================== */}
<section
  ref={featuredSectionRef}
  className="
    border-y
    border-gray-300
    bg-white

    px-4
    sm:px-5
    md:px-6

    py-16
    sm:py-20
    lg:py-32

    overflow-hidden
  "
>
  <div
    className="
      max-w-[1280px]
      mx-auto

      grid
      grid-cols-1
      md:grid-cols-[0.9fr_1.1fr]

      gap-10
      md:gap-8
      lg:gap-16

      items-center
    "
  >
    {/* LEFT */}
    <div
      className={`
        flex
        flex-col
        justify-center

        transition-all
        duration-[1600ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          showFeatured
            ? "translate-x-0 opacity-100"
            : "-translate-x-[120px] lg:-translate-x-[380px] opacity-0"
        }
      `}
    >
      <h2
        className="
          text-[36px]
          sm:text-[40px]
          lg:text-[52px]

          font-light
          leading-[1.05]
          tracking-[-0.035em]
          text-[#333333]

          mb-6
          lg:mb-8
        "
      >
        Featured here & there
      </h2>

      <p
        className="
          max-w-[520px]

          text-[16px]
          sm:text-[17px]
          lg:text-[20px]

          leading-[1.65]
          text-[#555555]

          mb-7
          lg:mb-10
        "
      >
        My work has been recognised through research publications,
        international websites, university representation, and selected
        student features. These milestones reflect my journey as a software
        engineer, researcher, and MSc Advanced Computer Science student.
      </p>

      <Link
        to="/featured"
        className="
          inline-flex
          w-fit
          items-center

          text-[16px]
          lg:text-[18px]

          font-normal
          text-[#333333]

          border-b
          border-[#333333]
          pb-1
        "
      >
        View featured work
      </Link>
    </div>

    {/* COLLAGE */}
    <div
      className={`
        relative

        h-[300px]
        sm:h-[370px]
        md:h-[400px]
        lg:h-[440px]

        min-w-0

        transition-all
        duration-[2000ms]
        lg:duration-[2800ms]

        ease-[cubic-bezier(0.16,1,0.3,1)]
        delay-[200ms]

        ${
          showFeatured
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100px] lg:translate-x-[220px]"
        }
      `}
    >
      {/* HORIZONTAL */}
      <div
        className="
          absolute

          left-[-15px]
          sm:left-[5%]
          md:left-0

          top-[95px]
          sm:top-[110px]
          lg:top-[125px]

          w-[190px]
          sm:w-[250px]
          md:w-[250px]
          lg:w-[340px]

          h-[155px]
          sm:h-[200px]
          lg:h-[245px]

          rotate-[-5deg]
          z-10
        "
      >
        <img
          src={horiImg}
          alt="Researcher and coder"
          className="
            w-full
            h-full
            object-contain
            drop-shadow-[0_10px_20px_rgba(0,0,0,0.13)]
          "
        />
      </div>

      {/* PROSPECT */}
      <div
        className="
          absolute

          left-[30%]
          sm:left-[34%]
          md:left-[170px]
          lg:left-[250px]

          top-[15px]
          sm:top-[20px]
          lg:top-[25px]

          w-[145px]
          sm:w-[190px]
          md:w-[200px]
          lg:w-[250px]

          h-[240px]
          sm:h-[300px]
          lg:h-[365px]

          rotate-[-6deg]
          z-20
        "
      >
        <img
          src={prospectImg}
          alt="Prospects magazine"
          className="
            w-full
            h-full
            object-contain
            scale-[1.08]
            lg:scale-[1.12]
            drop-shadow-[0_12px_22px_rgba(0,0,0,0.18)]
          "
        />
      </div>

      {/* UNIVERSITY */}
      <div
        className="
          absolute

          right-[0px]
          sm:right-[2%]
          md:right-0

          top-[55px]
          sm:top-[60px]
          lg:top-[70px]

          w-[125px]
          sm:w-[165px]
          md:w-[170px]
          lg:w-[230px]

          h-[215px]
          sm:h-[285px]
          md:h-[300px]
          lg:h-[350px]

          bg-white

          shadow-[0_12px_32px_rgba(0,0,0,0.15)]

          rotate-[7deg]
          overflow-hidden
          z-30
        "
      >
        <img
          src={ambassadorImg}
          alt="University of Sheffield"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>
    </div>
  </div>
</section>

      {/* ====================================================== */}
      {/* VOLUNTARY */}
      {/* ====================================================== */}
      <section
        ref={volunteerSectionRef}
        className="
          border-t
          bg-[#f5f5f5]
          px-4 sm:px-5 md:px-6
          py-16 sm:py-20 lg:py-32
          overflow-hidden
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            gap-9 md:gap-10 lg:gap-16
            items-center
          "
        >
          <div
            className={`
              rounded-xl
              overflow-hidden
              shadow-sm
              transition-all
              duration-[1700ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                showVolunteer
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[100px] lg:-translate-x-[220px] opacity-0"
              }
            `}
          >
            <img
              src={volunteerImg}
              alt="Volunteer Work"
              className="
                w-full
                h-[230px]
                sm:h-[280px]
                md:h-[300px]
                lg:h-80
                object-cover
              "
            />
          </div>

          <div
            className={`
              md:pl-4 lg:pl-12
              transition-all
              duration-[1700ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              delay-[200ms]
              ${
                showVolunteer
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[80px] lg:translate-x-[180px] opacity-0"
              }
            `}
          >
            <h2
              className="
                text-[38px]
                sm:text-[44px]
                md:text-[48px]
                lg:text-[56px]
                font-light
                tracking-[-0.03em]
                leading-[1.05]
                text-[#2f2f2f]
                mb-5 lg:mb-7
              "
            >
              Voluntary works
            </h2>

            <p
              className="
                text-[16px] sm:text-[17px] lg:text-[18px]
                leading-[1.7]
                text-[#525965]
                max-w-[560px]
                mb-6 lg:mb-8
              "
            >
              I have contributed as a Python programming mentor, robotics lab
              advisory member and student leader, supporting education,
              technology and community initiatives.
            </p>

            <Link
              to="/voluntary"
              className="
                inline-block
                w-fit
                text-[16px] lg:text-[17px]
                text-[#2f2f2f]
                border-b
                border-[#2f2f2f]
                pb-1
                hover:opacity-60
                transition-opacity
              "
            >
              View voluntary works
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* MY STORY */}
      {/* ====================================================== */}
      <section
        ref={storySectionRef}
        className="
          border-t
          border-gray-200
          bg-white
          overflow-hidden
        "
      >
        {/* PHONE — REFERENCE STYLE */}
        <div
          className="
            lg:hidden
            px-6
            sm:px-10
            pt-20
            sm:pt-24
            pb-20
          "
        >
          <div className="max-w-[680px] mx-auto">
            <div
              className={`
                transition-all
                duration-[1300ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showStory
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[70px] opacity-0"
                }
              `}
            >
              <h2
                className="
                  text-[46px]
                  sm:text-[54px]
                  md:text-[60px]
                  font-light
                  tracking-[-0.035em]
                  leading-[1.05]
                  text-[#343434]
                "
              >
                My story
              </h2>

              <p
                className="
                  mt-10
                  text-[20px]
                  sm:text-[23px]
                  md:text-[25px]
                  font-light
                  leading-[1.7]
                  text-[#454545]
                "
              >
                Learn a little more about my journey—from discovering software
                development to building backend systems, contributing to open
                source, conducting AI research, and pursuing my Master's degree
                in Advanced Computer Science at the University of Sheffield.
              </p>

              <Link
                to="/story"
                className="
                  inline-block
                  mt-10
                  text-[20px]
                  sm:text-[22px]
                  font-light
                  text-[#2f2f2f]
                  underline
                  underline-offset-[6px]
                  decoration-[1px]
                "
              >
                Read my story
              </Link>
            </div>

            {/* STORY IMAGE BELOW TEXT */}
            <div
              className={`
                relative
                mt-20
                sm:mt-24
                transition-all
                duration-[1600ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  showStory
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[100px] opacity-0"
                }
              `}
            >
              <div
                className="
                  ml-auto
                  w-[88%]
                  rounded-[3px]
                  overflow-hidden
                  shadow-[0_2px_10px_rgba(0,0,0,0.10)]
                  border
                  border-gray-200
                "
              >
                <img
                  src={storyImg}
                  alt="Workspace"
                  className="
                    w-full
                    h-[250px]
                    sm:h-[340px]
                    md:h-[410px]
                    object-cover
                  "
                />
              </div>

              <div
                className="
                  absolute
                  left-0
                  top-[20px]
                  sm:top-[30px]
                  w-[115px]
                  h-[115px]
                  sm:w-[145px]
                  sm:h-[145px]
                  md:w-[165px]
                  md:h-[165px]
                  rounded-full
                  bg-white
                  p-[5px]
                  shadow-xl
                  border
                  border-gray-200
                "
              >
                <img
                  src={profileImg}
                  alt="Vivin"
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className="
            hidden
            lg:grid
            max-w-[1280px]
            mx-auto
            grid-cols-[1.15fr_0.9fr]
            gap-20
            items-center
            px-6
            py-28
          "
        >
          <div
            className={`
              relative
              transition-all
              duration-[1800ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                showStory
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[240px] opacity-0"
              }
            `}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={storyImg}
                alt="Workspace"
                className="
                  w-full
                  h-[430px]
                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute
                left-[-35px]
                top-8
                w-44
                h-44
                rounded-full
                bg-white
                p-[6px]
                shadow-2xl
              "
            >
              <img
                src={profileImg}
                alt="Vivin"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div
            className={`
              transition-all
              duration-[1800ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              delay-[300ms]
              ${
                showStory
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[200px] opacity-0"
              }
            `}
          >
            <h2 className="text-[58px] font-light text-gray-800 mb-8">
              My story
            </h2>

            <p className="text-[21px] leading-[1.9] text-gray-600 mb-10">
              Learn a little more about my journey—from discovering software
              development to building backend systems, contributing to open
              source, conducting AI research, and pursuing my Master's degree in
              Advanced Computer Science at the University of Sheffield.
            </p>

            <Link
              to="/story"
              className="
                text-xl
                underline
                underline-offset-4
                hover:text-black
                transition
              "
            >
              Read my story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}