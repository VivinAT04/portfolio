import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import myStoryImg from "../../assets-images/mystory.png";
import aboutImg from "../../assets-images/about.png";

export default function MyStory() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const quickFacts = [
    {
      label: "Home town",
      value: "Dindigul, Tamil Nadu, India",
    },
    {
      label: "Currently based",
      value: "Sheffield, United Kingdom",
    },
    {
      label: "Education",
      value:
        "B.E. Computer Science and Engineering, MSc Advanced Computer Science at the University of Sheffield.",
    },
    {
      label: "Specialties",
      value:
        "Software Engineering, Python Backend Development, Cloud Computing, Artificial Intelligence and Intelligent Systems.",
    },
    {
      label: "Technologies",
      value:
        "Python, FastAPI, PostgreSQL, AWS, Docker, Git, REST APIs and Machine Learning.",
    },
    {
      label: "Current research",
      value: "BCI-Controlled Intelligent Wheelchair.",
    },
  ];

  return (
    <main className="bg-white text-[#343434] overflow-x-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          bg-white

          px-4
          sm:px-5
          md:px-10

          pt-[105px]
          sm:pt-[115px]
          md:pt-44

          pb-14
          sm:pb-16
          md:pb-20

          overflow-hidden
        "
      >
        <div className="max-w-[1200px] mx-auto">
          {/* =====================================================
              HERO TEXT
          ===================================================== */}
          <div
            className="
              max-w-[820px]
              mx-auto

              md:translate-x-[30px]
            "
          >
            <h1
              className="
                text-[39px]
                xs:text-[43px]
                sm:text-[52px]
                md:text-[68px]

                font-light

                tracking-[-0.035em]
                leading-[1.05]

                text-[#373737]
              "
            >
              How I became a software
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              engineer
            </h1>

            <p
              className="
                mt-5
                sm:mt-6
                md:mt-7

                text-[17px]
                sm:text-[19px]
                md:text-[24px]

                font-light
                tracking-[-0.015em]

                leading-[1.5]

                text-[#747474]
              "
            >
              My career journey, key learnings and a bit more about me.
            </p>

            <div
              className="
                mt-7
                sm:mt-8
                md:mt-9

                flex
                items-center

                gap-4
                sm:gap-5
              "
            >
              <div
                className="
                  w-[64px]
                  h-[64px]

                  sm:w-[74px]
                  sm:h-[74px]

                  md:w-[88px]
                  md:h-[88px]

                  rounded-full

                  border
                  border-[#dddddd]

                  overflow-hidden
                  flex-shrink-0

                  bg-[#f7f7f7]
                "
              >
                <img
                  src={aboutImg}
                  alt="Vivin Anitha Thambidurai"
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className="
                  text-[15px]
                  sm:text-[16px]
                  md:text-[18px]

                  font-normal
                  leading-[1.4]

                  text-[#454545]
                "
              >
                Vivin Anitha Thambidurai
              </p>
            </div>
          </div>

          {/* =====================================================
              STORY COLLAGE
          ===================================================== */}
          <div
            className="
              mt-8
              sm:mt-9

              w-full
              max-w-[1120px]

              mx-auto

              md:translate-x-[70px]
            "
          >
            <img
              src={myStoryImg}
              alt="My journey"
              className="
                block
                w-full
                h-auto

                object-cover

                rounded-[2px]
              "
            />
          </div>

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}
          <div
            className="
              max-w-[820px]
              mx-auto

              md:translate-x-[30px]

              mt-9
              sm:mt-11
              md:mt-14
            "
          >
            <p
              className="
                text-[16px]
                sm:text-[17px]
                md:text-[21px]

                leading-[1.75]

                text-[#555555]
              "
            >
              Over the years, my journey in computer science has taken me
              through software development, backend engineering, cloud
              computing, artificial intelligence and research. Along the way,
              I’ve built projects, worked with different technologies,
              contributed to real-world systems and learned a lot from the
              things that didn’t work the first time. I thought it was worth
              putting that journey in one place.
            </p>

            <div
              className="
                mt-8
                sm:mt-9
                md:mt-10
              "
            >
              <p
                className="
                  text-[16px]
                  sm:text-[17px]
                  md:text-[21px]

                  leading-[1.7]

                  text-[#555555]
                "
              >
                Here’s what I’ll cover:
              </p>

              <ul
                className="
                  mt-5
                  md:mt-6

                  ml-5
                  sm:ml-6

                  list-disc

                  space-y-2.5
                  md:space-y-3

                  text-[16px]
                  sm:text-[17px]
                  md:text-[21px]

                  leading-[1.55]

                  text-[#444444]
                "
              >
                <li>
                  <a
                    href="#me-in-a-nutshell"
                    className="
                      underline
                      underline-offset-4
                      decoration-[1px]

                      hover:text-black
                    "
                  >
                    Me in a nutshell
                  </a>
                </li>

                <li>
                  <a
                    href="#quick-facts"
                    className="
                      underline
                      underline-offset-4
                      decoration-[1px]

                      hover:text-black
                    "
                  >
                    Quick facts
                  </a>
                </li>

                <li>
                  <a
                    href="#software-engineering"
                    className="
                      underline
                      underline-offset-4
                      decoration-[1px]

                      hover:text-black
                    "
                  >
                    How I got into software engineering
                  </a>
                </li>

                <li>
                  <a
                    href="#key-learnings"
                    className="
                      underline
                      underline-offset-4
                      decoration-[1px]

                      hover:text-black
                    "
                  >
                    Key things I’ve learned
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="
                mt-10
                sm:mt-12
                md:mt-14

                border-t
                border-[#dddddd]
              "
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          ME IN A NUTSHELL
      ========================================================= */}
      <section
        id="me-in-a-nutshell"
        className="
          scroll-mt-[100px]
          md:scroll-mt-28

          px-4
          sm:px-5
          md:px-10

          py-14
          sm:py-16
          md:py-20
        "
      >
        <div className="max-w-[820px] mx-auto md:translate-x-[30px]">
          <h2
            className="
              text-[31px]
              sm:text-[35px]
              md:text-[46px]

              font-light

              tracking-[-0.025em]
              leading-[1.1]

              text-[#373737]
            "
          >
            Me in a nutshell
          </h2>

          <p
            className="
              mt-5
              sm:mt-6
              md:mt-7

              text-[16px]
              sm:text-[17px]
              md:text-[21px]

              leading-[1.75]

              text-[#555555]
            "
          >
            I’m a software engineer with a background in computer science and a
            strong interest in backend engineering, cloud systems, artificial
            intelligence and intelligent technologies. I enjoy building
            practical systems, understanding how things work beneath the
            surface and turning ideas into working software.
          </p>

          <div
            className="
              mt-10
              sm:mt-12
              md:mt-14

              border-t
              border-[#dddddd]
            "
          />
        </div>
      </section>

      {/* =========================================================
          QUICK FACTS
      ========================================================= */}
      <section
        id="quick-facts"
        className="
          scroll-mt-[100px]
          md:scroll-mt-28

          px-4
          sm:px-5
          md:px-10

          py-14
          sm:py-16
          md:py-20
        "
      >
        <div className="max-w-[820px] mx-auto md:translate-x-[30px]">
          <h2
            className="
              text-[31px]
              sm:text-[35px]
              md:text-[46px]

              font-light

              tracking-[-0.025em]
              leading-[1.1]

              text-[#373737]
            "
          >
            Quick facts
          </h2>

          <div
            className="
              mt-8
              sm:mt-9
              md:mt-10

              space-y-7
              sm:space-y-8
              md:space-y-9
            "
          >
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <h3
                  className="
                    text-[16px]
                    sm:text-[17px]
                    md:text-[19px]

                    font-semibold

                    text-[#3d3d3d]
                  "
                >
                  {fact.label}
                </h3>

                <p
                  className="
                    mt-1

                    text-[16px]
                    sm:text-[17px]
                    md:text-[20px]

                    leading-[1.65]

                    text-[#5f5f5f]
                  "
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mt-10
              sm:mt-12
              md:mt-14

              border-t
              border-[#dddddd]
            "
          />
        </div>
      </section>

      {/* =========================================================
          SOFTWARE ENGINEERING
      ========================================================= */}
      <section
        id="software-engineering"
        className="
          scroll-mt-[100px]
          md:scroll-mt-28

          px-4
          sm:px-5
          md:px-10

          py-14
          sm:py-16
          md:py-20
        "
      >
        <div className="max-w-[820px] mx-auto md:translate-x-[30px]">
          <h2
            className="
              text-[31px]
              sm:text-[35px]
              md:text-[46px]

              font-light

              tracking-[-0.025em]
              leading-[1.12]

              text-[#373737]
            "
          >
            How I got into software engineering
          </h2>

          <p
            className="
              mt-5
              sm:mt-6
              md:mt-7

              text-[16px]
              sm:text-[17px]
              md:text-[21px]

              leading-[1.75]

              text-[#555555]
            "
          >
            My interest in software engineering grew from learning computer
            science and gradually discovering how much I enjoyed building
            things from scratch. What began with programming developed into an
            interest in backend systems, APIs, cloud infrastructure, artificial
            intelligence and solving larger engineering problems.
          </p>

          <p
            className="
              mt-5
              sm:mt-6
              md:mt-7

              text-[16px]
              sm:text-[17px]
              md:text-[21px]

              leading-[1.75]

              text-[#555555]
            "
          >
            Projects, internships, research and collaborative engineering work
            gave me opportunities to move beyond coursework and understand how
            software is designed, tested and maintained in practice. Each
            experience has shaped the kind of engineer I want to become.
          </p>

          <div
            className="
              mt-10
              sm:mt-12
              md:mt-14

              border-t
              border-[#dddddd]
            "
          />
        </div>
      </section>

      {/* =========================================================
          KEY THINGS I'VE LEARNED
      ========================================================= */}
      <section
        id="key-learnings"
        className="
          scroll-mt-[100px]
          md:scroll-mt-28

          px-4
          sm:px-5
          md:px-10

          pt-14
          sm:pt-16
          md:pt-20

          pb-20
          sm:pb-24
          md:pb-32
        "
      >
        <div className="max-w-[820px] mx-auto md:translate-x-[30px]">
          <h2
            className="
              text-[31px]
              sm:text-[35px]
              md:text-[46px]

              font-light

              tracking-[-0.025em]
              leading-[1.1]

              text-[#373737]
            "
          >
            Key things I’ve learned
          </h2>

          <div
            className="
              mt-8
              sm:mt-9
              md:mt-10

              space-y-8
              sm:space-y-9
              md:space-y-10
            "
          >
            <div>
              <h3
                className="
                  text-[21px]
                  sm:text-[22px]
                  md:text-[24px]

                  font-medium

                  text-[#3d3d3d]
                "
              >
                Keep building
              </h3>

              <p
                className="
                  mt-3
                  md:mt-4

                  text-[16px]
                  sm:text-[17px]
                  md:text-[21px]

                  leading-[1.75]

                  text-[#555555]
                "
              >
                The best way I’ve found to understand technology is to build
                with it. Projects turn concepts into real problems and force
                you to understand what actually works.
              </p>
            </div>

            <div>
              <h3
                className="
                  text-[21px]
                  sm:text-[22px]
                  md:text-[24px]

                  font-medium

                  text-[#3d3d3d]
                "
              >
                Learn from what doesn’t work
              </h3>

              <p
                className="
                  mt-3
                  md:mt-4

                  text-[16px]
                  sm:text-[17px]
                  md:text-[21px]

                  leading-[1.75]

                  text-[#555555]
                "
              >
                Debugging, failed experiments and unexpected results have often
                taught me more than getting something right on the first
                attempt.
              </p>
            </div>

            <div>
              <h3
                className="
                  text-[21px]
                  sm:text-[22px]
                  md:text-[24px]

                  font-medium

                  text-[#3d3d3d]
                "
              >
                Stay curious
              </h3>

              <p
                className="
                  mt-3
                  md:mt-4

                  text-[16px]
                  sm:text-[17px]
                  md:text-[21px]

                  leading-[1.75]

                  text-[#555555]
                "
              >
                Software engineering changes constantly. Staying curious and
                being willing to learn new technologies has become just as
                important as knowing any particular tool.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}