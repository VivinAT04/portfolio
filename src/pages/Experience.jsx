import { useEffect, useRef } from "react";
import uosImg from "../../assets-images/uoss.jpg";

const experiences = [
  {
    company: "The University of Sheffield",
    role: "Student Ambassador",
    subtitle: "Faculty of Engineering",
    date: "Sep 2025 – Present",
    image: uosImg,
    imageAlt: "University of Sheffield Student Ambassador",
    imageClass: "object-cover",
    description:
      "I work as a Student Ambassador at the University of Sheffield, supporting recruitment and engagement activities across Engineering and Computer Science. I represent the university at postgraduate events, deliver presentations, support prospective students exploring technical programmes, and collaborate with academic and recruitment teams. The role has strengthened my communication, public speaking, teamwork, and ability to explain technical and academic information to diverse audiences.",
  },
  {
    company: "TiiQu",
    role: "Volunteer API Engineer",
    subtitle: "AI-powered Truth Library for Environmental Research",
    date: "Apr 2026 – Present",
    image: "/logos/TIIQU.jpg",
    imageAlt: "TiiQu",
    imageClass: "object-contain p-2",
    description:
      "I work as a Volunteer API Engineer at TiiQu, contributing to an AI-powered Truth Library for Environmental Research by building reliable backend data engineering solutions. My work focuses on designing automated data ingestion pipelines that collect and process thousands of scientific records from multiple external APIs, while ensuring data quality through validation, transformation, deduplication, and monitoring.",
  },
  {
    company: "Apache Airflow",
    role: "Open Source Contributor",
    subtitle: null,
    date: "Jan 2026 – Present",
    image: "/logos/app.jpg",
    imageAlt: "Apache Airflow",
    imageClass: "object-contain p-2",
    description:
      "I contribute to the Apache Airflow open-source project by investigating workflow orchestration issues, understanding backfill DAG versioning behaviour, and proposing improvements through GitHub discussions. This experience helps me strengthen my understanding of large-scale Python codebases, testing, debugging, and collaborative open-source engineering practices.",
  },
  {
    company: "National Institute of Technology Calicut",
    role: "Software Engineering Intern & Team Lead",
    subtitle: "UAS Technologies",
    date: "May 2024 – Jul 2024",
    image: "/logos/NITCC.jpeg",
    imageAlt: "National Institute of Technology Calicut",
    imageClass: "object-contain p-2",
    description:
      "During my internship at UAS Technologies, I worked as both a Software Engineering Intern and Team Lead, contributing to the development and maintenance of backend software systems. I collaborated with a team of developers to analyze complex technical issues, resolve integration defects across multiple services, and improve the reliability of distributed applications.",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const desktopDotRef = useRef(null);
  const mobileDotRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateDots = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollDistance = Math.max(
        sectionHeight - viewportHeight,
        1
      );

      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );

      /* DESKTOP DOT */
      if (desktopDotRef.current) {
        const startY = 410;
        const endY = 2065;

        const y = startY + progress * (endY - startY);

        desktopDotRef.current.style.transform =
          `translate3d(-50%, ${y}px, 0)`;
      }

      /* MOBILE DOT */
      if (mobileDotRef.current) {
        const mobileContainer =
          mobileDotRef.current.parentElement;

        if (mobileContainer) {
          const mobileHeight = mobileContainer.offsetHeight;

          const startY = 80;
          const endY = Math.max(
            mobileHeight - 100,
            startY
          );

          const y =
            startY + progress * (endY - startY);

          mobileDotRef.current.style.transform =
            `translate3d(-50%, ${y}px, 0)`;
        }
      }
    };

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        updateDots();
        animationFrameId = null;
      });
    };

    updateDots();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateDots);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDots);

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="
        relative
        bg-white
        overflow-hidden
        pt-0
        pb-0
      "
    >
      {/* =====================================================
          MOBILE + TABLET
      ====================================================== */}
      <div
        className="
          relative
          lg:hidden

          px-4
          sm:px-6
          md:px-8

          pt-[95px]
          sm:pt-[110px]
          md:pt-[125px]

          pb-16
          sm:pb-20
          md:pb-24
        "
      >
        {/* MOBILE TIMELINE LINE */}
        <div
          className="
            absolute

            left-[26px]
            sm:left-[34px]
            md:left-[42px]

            top-0
            bottom-0

            w-[3px]
            md:w-[4px]

            bg-black
          "
        />

        {/* MOBILE MOVING DOT */}
        <div
          ref={mobileDotRef}
          className="
            absolute

            left-[26px]
            sm:left-[34px]
            md:left-[42px]

            top-0

            z-40

            w-[18px]
            h-[18px]

            sm:w-[20px]
            sm:h-[20px]

            md:w-[22px]
            md:h-[22px]

            rounded-full
            bg-black

            will-change-transform
          "
          style={{
            transform: "translate3d(-50%, 80px, 0)",
          }}
        />

        <div
          className="
            space-y-12
            sm:space-y-14
            md:space-y-16
          "
        >
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="
                relative

                pl-[52px]
                sm:pl-[64px]
                md:pl-[80px]
              "
            >
              {/* DATE */}
              <p
                className="
                  mb-3
                  sm:mb-4

                  text-[12px]
                  sm:text-[13px]
                  md:text-[14px]

                  font-medium
                  tracking-[-0.01em]

                  text-gray-500
                "
              >
                {experience.date}
              </p>

              {/* CARD */}
              <div
                className="
                  w-full

                  rounded-[18px]
                  sm:rounded-[22px]
                  md:rounded-[26px]

                  border
                  border-gray-200

                  bg-white

                  p-4
                  sm:p-6
                  md:p-8

                  shadow-md
                "
              >
                {/* HEADER */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row

                    items-start

                    gap-4
                    sm:gap-5
                    md:gap-6
                  "
                >
                  {/* LOGO */}
                  <div
                    className="
                      w-[64px]
                      h-[64px]

                      sm:w-[76px]
                      sm:h-[76px]

                      md:w-[88px]
                      md:h-[88px]

                      flex-shrink-0

                      overflow-hidden

                      rounded-[16px]
                      sm:rounded-[19px]
                      md:rounded-[22px]

                      bg-gray-100
                    "
                  >
                    <img
                      src={experience.image}
                      alt={experience.imageAlt}
                      className={`w-full h-full ${experience.imageClass}`}
                    />
                  </div>

                  {/* TITLE */}
                  <div className="min-w-0">
                    <h2
                      className="
                        text-[21px]
                        sm:text-[25px]
                        md:text-[30px]

                        font-bold

                        leading-[1.12]

                        tracking-[-0.025em]

                        text-black
                      "
                    >
                      {experience.company}
                    </h2>

                    <p
                      className="
                        mt-2

                        text-[14px]
                        sm:text-[15px]
                        md:text-[17px]

                        font-semibold

                        leading-[1.4]

                        text-gray-700
                      "
                    >
                      {experience.role}
                    </p>

                    {experience.subtitle && (
                      <p
                        className={`
                          mt-1

                          text-[12px]
                          sm:text-[13px]
                          md:text-[15px]

                          leading-[1.45]

                          text-gray-500

                          ${
                            index === 1
                              ? "italic"
                              : ""
                          }
                        `}
                      >
                        {experience.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    sm:mt-6
                    md:mt-7

                    text-[14px]
                    sm:text-[15px]
                    md:text-[16px]

                    leading-[1.7]
                    md:leading-[1.75]

                    text-gray-700
                  "
                >
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div
        className="
          hidden
          lg:block

          relative

          h-[2380px]
        "
      >
        {/* FULL TIMELINE LINE */}
        <div
          className="
            absolute

            left-1/2

            top-0
            bottom-0

            w-[5px]

            -translate-x-1/2

            bg-black
          "
        />

        {/* MOVING DOT */}
        <div
          ref={desktopDotRef}
          className="
            absolute

            left-1/2
            top-0

            z-50

            h-8
            w-8

            rounded-full

            bg-black

            will-change-transform
          "
          style={{
            transform:
              "translate3d(-50%, 410px, 0)",
          }}
        />

        {/* =====================================================
            1. UNIVERSITY OF SHEFFIELD
        ====================================================== */}
        <div
          className="
            absolute

            left-[24px]
            xl:left-[45px]

            top-[170px]

            z-20

            flex
            items-center
          "
        >
          <div
            className="
              h-[480px]

              w-[515px]
              xl:w-[590px]

              rounded-[30px]

              border
              border-gray-200

              bg-white

              p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-7">
                <div
                  className="
                    h-24
                    w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-3xl

                    bg-gray-100
                  "
                >
                  <img
                    src={uosImg}
                    alt="University of Sheffield Student Ambassador"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-[29px]
                      xl:text-[34px]

                      font-bold

                      leading-tight

                      text-black
                    "
                  >
                    The University of Sheffield
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-gray-700">
                    Student Ambassador
                  </p>

                  <p className="mt-1 text-base text-gray-500">
                    Faculty of Engineering
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-7

                  text-[15px]
                  xl:text-[17px]

                  leading-[1.75]

                  text-gray-700

                  text-justify
                "
              >
                I work as a Student Ambassador at the University of Sheffield,
                supporting recruitment and engagement activities across
                Engineering and Computer Science. I represent the university at
                postgraduate events, deliver presentations, support prospective
                students exploring technical programmes, and collaborate with
                academic and recruitment teams. The role has strengthened my
                communication, public speaking, teamwork, and ability to explain
                technical and academic information to diverse audiences.
              </p>
            </div>
          </div>

          <p
            className="
              ml-[175px]
              xl:ml-[325px]

              whitespace-nowrap

              text-lg
              xl:text-xl

              text-gray-500
            "
          >
            Sep 2025 – Present
          </p>
        </div>

        {/* =====================================================
            2. TIIQU
        ====================================================== */}
        <div
          className="
            absolute

            right-[24px]
            xl:right-[45px]

            top-[730px]

            z-20

            flex
            items-center
          "
        >
          <p
            className="
              mr-[175px]
              xl:mr-[325px]

              whitespace-nowrap

              text-lg
              xl:text-xl

              text-gray-500
            "
          >
            Apr 2026 – Present
          </p>

          <div
            className="
              h-[420px]
              xl:h-[430px]

              w-[515px]
              xl:w-[590px]

              rounded-[30px]

              border
              border-gray-200

              bg-white

              p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-7">
                <div
                  className="
                    h-24
                    w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-3xl

                    bg-gray-100
                  "
                >
                  <img
                    src="/logos/TIIQU.jpg"
                    alt="TiiQu"
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-[32px]
                      xl:text-4xl

                      font-bold

                      text-black
                    "
                  >
                    TiiQu
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-gray-700">
                    Volunteer API Engineer
                  </p>

                  <p className="mt-1 text-base italic text-gray-500">
                    AI-powered Truth Library for Environmental Research
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-8

                  text-[15px]
                  xl:text-[17px]

                  leading-[1.7]
                  xl:leading-8

                  text-gray-700

                  text-justify
                "
              >
                I work as a Volunteer API Engineer at TiiQu, contributing to an
                AI-powered Truth Library for Environmental Research by building
                reliable backend data engineering solutions. My work focuses on
                designing automated data ingestion pipelines that collect and
                process thousands of scientific records from multiple external
                APIs, while ensuring data quality through validation,
                transformation, deduplication, and monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            3. APACHE AIRFLOW
        ====================================================== */}
        <div
          className="
            absolute

            left-[24px]
            xl:left-[45px]

            top-[1290px]

            z-20

            flex
            items-center
          "
        >
          <div
            className="
              h-[420px]
              xl:h-[430px]

              w-[515px]
              xl:w-[590px]

              rounded-[30px]

              border
              border-gray-200

              bg-white

              p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-7">
                <div
                  className="
                    h-24
                    w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-3xl

                    bg-gray-100
                  "
                >
                  <img
                    src="/logos/app.jpg"
                    alt="Apache Airflow"
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-[32px]
                      xl:text-4xl

                      font-bold

                      text-black
                    "
                  >
                    Apache Airflow
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-gray-700">
                    Open Source Contributor
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-8

                  text-[15px]
                  xl:text-[17px]

                  leading-[1.7]
                  xl:leading-8

                  text-gray-700

                  text-justify
                "
              >
                I contribute to the Apache Airflow open-source project by
                investigating workflow orchestration issues, understanding
                backfill DAG versioning behaviour, and proposing improvements
                through GitHub discussions. This experience helps me strengthen
                my understanding of large-scale Python codebases, testing,
                debugging, and collaborative open-source engineering practices.
              </p>
            </div>
          </div>

          <p
            className="
              ml-[175px]
              xl:ml-[325px]

              whitespace-nowrap

              text-lg
              xl:text-xl

              text-gray-500
            "
          >
            Jan 2026 – Present
          </p>
        </div>

        {/* =====================================================
            4. NIT CALICUT
        ====================================================== */}
        <div
          className="
            absolute

            right-[24px]
            xl:right-[45px]

            top-[1850px]

            z-20

            flex
            items-center
          "
        >
          <p
            className="
              mr-[175px]
              xl:mr-[325px]

              whitespace-nowrap

              text-lg
              xl:text-xl

              text-gray-500
            "
          >
            May 2024 – Jul 2024
          </p>

          <div
            className="
              h-[420px]
              xl:h-[430px]

              w-[515px]
              xl:w-[590px]

              rounded-[30px]

              border
              border-gray-200

              bg-white

              p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-7">
                <div
                  className="
                    h-24
                    w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-3xl

                    bg-gray-100
                  "
                >
                  <img
                    src="/logos/NITCC.jpeg"
                    alt="National Institute of Technology Calicut"
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-[27px]
                      xl:text-[34px]

                      font-bold

                      leading-tight

                      text-black
                    "
                  >
                    National Institute of Technology Calicut
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-gray-700">
                    Software Engineering Intern &amp; Team Lead
                  </p>

                  <p className="mt-1 text-base text-gray-500">
                    UAS Technologies
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-8

                  text-[15px]
                  xl:text-[17px]

                  leading-[1.7]
                  xl:leading-8

                  text-gray-700

                  text-justify
                "
              >
                During my internship at UAS Technologies, I worked as both a
                Software Engineering Intern and Team Lead, contributing to the
                development and maintenance of backend software systems. I
                collaborated with a team of developers to analyze complex
                technical issues, resolve integration defects across multiple
                services, and improve the reliability of distributed
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}