import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets-images/about.png";
import octoImg from "../../assets-images/Octo.png";
import storyImg from "../../assets-images/backmac.png";
import profileImg from "../../assets-images/short.png";
import sheffieldImg from "../../assets-images/sheffield.jpg";
import ambassadorImg from "../../assets-images/ambass.jpg";
import awsImg from "../../assets-images/image.png";
import paperImg from "../../assets-images/JSART.png";
import volunteerImg from "../../assets-images/voluteer.jpg";
import circleImg from "../../assets-images/circel-2.png";
import horiImg from "../../assets-images/hori1.png";
import prospectImg from "../../assets-images/Prospect.png";
import flightImg from "../../assets-images/flight.jpg";
import viviImg from "../../assets-images/Vivii.png";
import pottImg from "../../assets-images/pott.jpg";
import myUniPhoto from "../../assets-images/myUniPhoto.jpg";
export default function About() {
const cards = [
  "🎓 Sheffield",
  "🧠 Research",
  "💻 GitHub",
  "🏆 Ambassador",
  "☁️ AWS",
  "📚 Papers",
];

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

/* ===================== */
/* ABOUT PAGE ANIMATION */
/* ===================== */
useEffect(() => {
  const timer = setTimeout(() => {
    setAnimateAbout(true);
  }, 80);

  return () => clearTimeout(timer);
}, []);

/* ===================== */
/* CIRCLE SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = circleSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowCircle(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

/* ===================== */
/* RANDOM FACTS SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = randomFactsRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowRandomFacts(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

/* ===================== */
/* SKILLS SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = skillsSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowSkills(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

/* ===================== */
/* FEATURED SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = featuredSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowFeatured(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

/* ===================== */
/* VOLUNTEER SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = volunteerSectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowVolunteer(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

/* ===================== */
/* STORY SCROLL ANIMATION */
/* ===================== */
useEffect(() => {
  const section = storySectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowStory(true);
        observer.unobserve(section);
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);
  return (
    <main className="bg-white text-[#0f172a]">

<section
  id="about"
  className="bg-white px-4 md:px-6 pt-28 md:pt-32 pb-10 overflow-hidden"
>
  <div className="max-w-[1280px] mx-auto translate-x-4">

    {/* ===================== */}
    {/* MAIN ABOUT HERO */}
    {/* ===================== */}
    <div className="relative mt-10 min-h-[540px] md:min-h-[560px] overflow-visible">

      <div className="grid md:grid-cols-[0.95fr_1.05fr] h-full">

        {/* ===================== */}
        {/* LEFT CONTENT */}
        {/* ===================== */}
        <div
          className={`
            relative z-20
            pt-16 md:pt-20 pb-16 pl-0

            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[450ms]

            ${
              animateAbout
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[140px]"
            }
          `}
        >
          <h1 className="text-[76px] sm:text-[88px] md:text-[96px] lg:text-[104px] font-black tracking-[-0.065em] leading-[0.85] text-[#282828] mb-7">
            about.
          </h1>

          <p className="text-[24px] md:text-[27px] leading-[1.35] font-light text-[#8a8a8a] max-w-[500px] mb-8">
            I'm a postgraduate at the University of Sheffield,
            United Kingdom.
          </p>

          <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#4c4c4c] font-normal max-w-[500px]">
            Since 2021, I've enjoyed turning complex problems into simple,
            elegant software solutions. When I'm not developing something,
            you'll find me exploring my cooking skills, reading books, or
            working out in the gym.
          </p>
        </div>

        {/* ===================== */}
        {/* RIGHT PORTRAIT */}
        {/* ===================== */}
        <div className="relative hidden md:block">

          <img
            src={aboutImg}
            alt="Vivin"
            className={`
              absolute
              left-[48%]
              bottom-[-74px]

              w-[720px]
              lg:w-[780px]
              xl:w-[820px]

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

      {/* ===================== */}
      {/* HORIZONTAL LINE */}
      {/* ===================== */}
      <div
        className="
          absolute
          left-0
          bottom-0
          w-[1360px]
          h-px
          bg-[#d9d9d9]
          z-20
        "
      />

      {/* ===================== */}
      {/* MOBILE PORTRAIT */}
      {/* ===================== */}
      <div className="md:hidden relative h-[430px] overflow-hidden">

        <img
          src={aboutImg}
          alt="Vivin"
          className={`
            absolute
            bottom-[-55px]
            left-1/2

            w-[500px]
            max-w-none
            object-contain

            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              animateAbout
                ? "opacity-100 -translate-x-1/2"
                : "opacity-0 translate-x-[100px]"
            }
          `}
        />

      </div>

    </div>

    {/* ===================== */}
    {/* BOTTOM IMAGE STRIP */}
    {/* LEFT → RIGHT */}
    {/* ===================== */}
    <div className="pt-10 overflow-visible">

      <div className="grid grid-cols-6 gap-4 w-[1360px]">

        {/* ===================== */}
        {/* FLIGHT — 1 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[900ms]

            hover:-translate-y-5
            hover:shadow-lg

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px]">
            <img
              src={flightImg}
              alt="Flight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* VIVI — 2 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[1150ms]

            hover:-translate-y-5
            hover:shadow-lg

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px]">
            <img
              src={viviImg}
              alt="Vivin"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* SHEFFIELD — 3 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[1400ms]

            hover:-translate-y-5
            hover:shadow-lg

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px]">
            <img
              src={sheffieldImg}
              alt="Sheffield"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* AMBASSADOR — 4 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[1650ms]

            hover:-translate-y-5
            hover:shadow-lg

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px]">
            <img
              src={myUniPhoto}
              alt="Student Ambassador"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* AWS — 5 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[1900ms]

            hover:-translate-y-5
            hover:shadow-lg

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px]">
            <img
              src={awsImg}
              alt="AWS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ===================== */}
        {/* PLANT — 6 */}
        {/* ===================== */}
        <div
          className={`
            bg-white
            rounded-[10px]
            border border-[#d4d4d4]
            p-[5px]
            shadow-[0_2px_8px_rgba(0,0,0,0.10)]

            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            delay-[2150ms]

            hover:-translate-y-5
            hover:shadow-lg

            [&_button]:hidden
            [&_a]:hidden

            ${
              animateAbout
                ? "opacity-100 -translate-y-2 translate-x-0"
                : "opacity-0 -translate-y-2 -translate-x-[60px]"
            }
          `}
        >
          <div className="h-[118px] overflow-hidden rounded-[7px] relative">

            <img
              src={pottImg}
              alt="Plant"
              className="w-full h-full object-cover object-center block"
            />

          </div>
        </div>

      </div>

    </div>

  </div>
</section>

<section
  ref={circleSectionRef}
  className="border-t border-gray-200 bg-[#f5f5f5] px-4 md:px-6 py-20 overflow-hidden"
>
  <div className="max-w-[1280px] mx-auto translate-x-4">

    <div className="w-[1360px] grid grid-cols-[1fr_600px_1fr] items-center">

      {/* ===================== */}
      {/* LEFT — ENGINEER */}
      {/* ===================== */}
      <div className="justify-self-start">
        <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8 whitespace-nowrap">
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

      {/* ===================== */}
      {/* CENTER — CIRCLE */}
      {/* COMES FROM BOTTOM */}
      {/* ===================== */}
      <div className="flex items-center justify-center">
        <img
          src={circleImg}
          alt="Coder and Researcher"
          className={`
            w-[600px]
            h-[600px]
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

      {/* ===================== */}
      {/* RIGHT — RESEARCHER */}
      {/* ===================== */}
      <div className="justify-self-end text-left">
        <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8 whitespace-nowrap">
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
</section>

<section
  ref={randomFactsRef}
  className="border-t bg-white px-4 md:px-6 py-20 overflow-hidden"
>
  <div className="max-w-[1280px] mx-auto translate-x-4">

    <div className="w-[1360px] grid grid-cols-[650px_1fr] items-center gap-24">

      {/* ===================== */}
      {/* LEFT — OCTOPUS */}
      {/* COMES FROM LEFT */}
      {/* ===================== */}
      <div
        className={`
          flex items-center justify-start

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
            w-[820px]
            lg:w-[870px]
            xl:w-[920px]
            max-w-none
            h-auto
            object-contain
            -ml-[105px]
            translate-y-[85px]
          "
        />
      </div>

      {/* ===================== */}
      {/* RIGHT — RANDOM FACTS */}
      {/* ===================== */}
      <div
        className={`
          justify-self-start
          ml-[140px]
          -translate-y-[5px]

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
        <h2
          className="
            text-[46px]
            font-light
            leading-none
            text-[#3f3f3f]
            mb-8
          "
        >
          Random facts
        </h2>

        <ul
          className="
            space-y-[14px]
            text-[19px]
            leading-[1.45]
            font-normal
            text-[#555555]
            whitespace-nowrap
          "
        >
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
</section>

<section
  ref={skillsSectionRef}
  className="border-t bg-[#f5f5f5] px-8 py-28 overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-[180px_1fr] gap-6 items-end">

      {/* LEFT LABELS */}
      <div className="hidden md:flex flex-col justify-between h-[430px] pb-24 text-gray-500 font-bold text-lg">
        <span>Jedi</span>
        <span>Ninja</span>
        <span>Geek</span>
        <span>Newbie</span>
      </div>

      <div>

        <h2 className="text-[44px] font-light text-gray-700 text-right mb-8">
          My skills
        </h2>

        <div className="relative h-[430px] border-l border-b border-gray-300">

          {/* GRID LINES */}
          <div className="absolute inset-0 flex flex-col justify-between pb-24">
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
          </div>

          {/* BARS */}
          <div className="relative z-10 h-full flex items-end gap-8 px-8">

            {[
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
            ].map((item) => (

              <div
                key={item.skill}
                className={`
                  ${item.color}
                  w-[180px]
                  rounded-t-lg
                  shadow-md
                  flex
                  flex-col
                  justify-end
                  items-center
                  pb-8
                  text-white

                  transition-all
                  duration-[1600ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  origin-bottom
                `}
                style={{
                  height: showSkills
                    ? `${item.level}%`
                    : "0%",
                  opacity: showSkills ? 1 : 0,
                  transitionDelay: `${item.delay}ms`,
                }}
              >

                <div
                  className={`
                    text-[54px]
                    font-bold
                    leading-none
                    drop-shadow

                    transition-opacity
                    duration-500

                    ${
                      showSkills
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${item.delay + 600}ms`,
                  }}
                >
                  {item.level}
                  <span className="text-2xl ml-1">%</span>
                </div>

                <p
                  className={`
                    mt-5
                    text-lg
                    font-bold
                    transition-opacity
                    duration-500

                    ${
                      showSkills
                        ? "opacity-100"
                        : "opacity-0"
                    }
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

      {/* Featured Section */}
<section
  ref={featuredSectionRef}
  className="border-y border-gray-300 bg-white px-8 py-32 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

    {/* ===================== */}
    {/* LEFT CONTENT */}
    {/* COMES FROM LEFT */}
    {/* ===================== */}
    <div
      className={`
        flex flex-col justify-center

        transition-all
        duration-[1600ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          showFeatured
            ? "translate-x-0 opacity-100"
            : "-translate-x-[380px] opacity-0"
        }
      `}
    >

      <h2 className="text-[52px] font-light leading-none tracking-[-0.035em] text-[#333333] whitespace-nowrap mb-8">
        Featured here & there
      </h2>

      <p className="max-w-[520px] text-[20px] leading-[1.65] text-[#555555] mb-10">
        My work has been recognised through research publications,
        international websites, university representation, and selected
        student features. These milestones reflect my journey as a software
        engineer, researcher, and MSc Advanced Computer Science student.
      </p>

      <Link
        to="/featured"
        className="inline-flex w-fit items-center text-[18px] font-normal text-[#333333] border-b border-[#333333] pb-1"
      >
        View featured work
      </Link>

    </div>

    {/* ===================== */}
    {/* RIGHT COLLAGE */}
    {/* COMES FROM RIGHT */}
    {/* ===================== */}
    <div
      className={`
        relative
        h-[440px]
        translate-x-[25px]

        transition-all
        duration-[2800ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        delay-[250ms]

        ${
          showFeatured
            ? "opacity-100"
            : "opacity-0 translate-x-[220px]"
        }
      `}
    >

      {/* ===================== */}
      {/* 1 — HORIZONTAL IMAGE */}
      {/* ===================== */}
      <div
        className="
          absolute
          left-[-20px]
          top-[125px]

          w-[380px]
          h-[245px]

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

            translate-x-[90px]

            drop-shadow-[0_10px_20px_rgba(0,0,0,0.13)]
          "
        />
      </div>

      {/* ===================== */}
      {/* 2 — PROSPECT BOOK */}
      {/* ===================== */}
      <div
        className="
          absolute
          left-[280px]
          top-[25px]

          w-[270px]
          h-[365px]

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

            scale-[1.18]

            drop-shadow-[0_12px_22px_rgba(0,0,0,0.18)]
          "
        />
      </div>

      {/* ===================== */}
      {/* 3 — VERTICAL RECTANGLE */}
      {/* ===================== */}
      <div
        className="
          absolute
          left-[480px]
          top-[70px]

          w-[255px]
          h-[350px]

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
          className="
            w-full
            h-full
            object-cover
          "
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

    </div>

  </div>
</section>

{/* ===================== */}
{/* VOLUNTARY WORKS */}
{/* ===================== */}
<section
  ref={volunteerSectionRef}
  className="border-t bg-[#f5f5f5] px-8 py-54 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* ===================== */}
    {/* LEFT IMAGE */}
    {/* COMES FROM LEFT */}
    {/* ===================== */}
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
            : "-translate-x-[220px] opacity-0"
        }
      `}
    >
      <img
        src={volunteerImg}
        alt="Volunteer Work"
        className="w-full h-80 object-cover"
      />
    </div>

    {/* ===================== */}
    {/* RIGHT CONTENT */}
    {/* COMES FROM RIGHT */}
    {/* ===================== */}
    <div
      className={`
        md:pl-21

        transition-all
        duration-[1700ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        delay-[250ms]

        ${
          showVolunteer
            ? "translate-x-0 opacity-100"
            : "translate-x-[180px] opacity-0"
        }
      `}
    >

      <h2 className="text-[48px] md:text-[56px] font-light tracking-[-0.03em] leading-[1.05] text-[#2f2f2f] mb-7">
        Voluntary works
      </h2>

      <p className="text-[18px] leading-[1.7] text-[#525965] max-w-[560px] mb-8">
        I have contributed as a Python programming mentor, robotics lab
        advisory member and student leader, supporting education,
        technology and community initiatives.
      </p>

      <Link
        to="/voluntary"
        className="inline-block w-fit text-[17px] text-[#2f2f2f] border-b border-[#2f2f2f] pb-1 hover:opacity-60 transition-opacity"
      >
        View voluntary works
      </Link>

    </div>

  </div>
</section>


{/* ===================== */}
{/* MY STORY */}
{/* ===================== */}
<section
  ref={storySectionRef}
  className="border-t bg-white px-8 py-28 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.9fr] gap-20 items-center">

    {/* ===================== */}
    {/* LEFT STORY IMAGE */}
    {/* COMES FROM LEFT */}
    {/* ===================== */}
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
          className="w-full h-[430px] object-cover"
        />
      </div>

      <div className="absolute left-[-45px] top-8 w-44 h-44 rounded-full bg-white p-[6px] shadow-2xl">
        <img
          src={profileImg}
          alt="Vivin"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>

    {/* ===================== */}
    {/* RIGHT STORY CONTENT */}
    {/* COMES FROM RIGHT */}
    {/* ===================== */}
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
        className="text-xl underline underline-offset-4 hover:text-black transition"
      >
        Read my story
      </Link>
    </div>

  </div>
</section>
    </main>
  );
}