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
    side: "left",
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
    side: "right",
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
    side: "left",
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
    side: "right",
  },
];

export default function Experience() {
  const dotRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateDot = () => {
      const section = sectionRef.current;

      if (!section || !dotRef.current) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const mobile = window.innerWidth < 768;

      const startY = mobile ? 120 : 260;
      const endY = mobile
        ? Math.max(sectionHeight - 120, startY)
        : Math.max(sectionHeight - 260, startY);

      const scrollDistance = Math.max(
        sectionHeight - window.innerHeight,
        1
      );

      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );

      const y = startY + progress * (endY - startY);

      dotRef.current.style.transform = mobile
        ? `translate3d(-50%, ${y}px, 0)`
        : `translate3d(-50%, ${y}px, 0)`;
    };

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        updateDot();
        animationFrameId = null;
      });
    };

    updateDot();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateDot);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDot);

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

        pt-[110px]
        sm:pt-[120px]
        md:pt-[150px]

        pb-20
        sm:pb-24
        md:pb-32
      "
    >
      {/* =====================================================
          MOBILE / TABLET TIMELINE
      ====================================================== */}
      <div className="relative md:hidden px-4 sm:px-6">
        {/* TIMELINE LINE */}
        <div
          className="
            absolute
            left-[27px]
            sm:left-[35px]
            top-0
            bottom-0

            w-[3px]
            bg-black
          "
        />

        {/* MOVING DOT */}
        <div
          ref={dotRef}
          className="
            absolute
            left-[27px]
            sm:left-[35px]
            top-0

            z-40

            w-[18px]
            h-[18px]

            sm:w-[20px]
            sm:h-[20px]

            rounded-full
            bg-black

            will-change-transform
          "
          style={{
            transform: "translate3d(-50%, 120px, 0)",
          }}
        />

        <div className="space-y-14 sm:space-y-16">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="
                relative

                pl-[48px]
                sm:pl-[58px]
              "
            >
              {/* STATIC TIMELINE NODE */}
              <div
                className="
                  absolute

                  left-[14px]
                  sm:left-[19px]

                  top-[36px]

                  w-[12px]
                  h-[12px]

                  rounded-full
                  bg-black

                  z-20
                "
              />

              {/* DATE */}
              <p
                className="
                  mb-3

                  text-[13px]
                  sm:text-[14px]

                  font-medium
                  text-gray-500
                "
              >
                {experience.date}
              </p>

              {/* CARD */}
              <div
                className="
                  w-full

                  rounded-[20px]
                  sm:rounded-[24px]

                  border
                  border-gray-200

                  bg-white

                  p-5
                  sm:p-7

                  shadow-md
                "
              >
                {/* HEADER */}
                <div
                  className="
                    flex
                    flex-col

                    xs:flex-row

                    items-start

                    gap-4
                    sm:gap-5
                  "
                >
                  <div
                    className="
                      w-[68px]
                      h-[68px]

                      sm:w-[78px]
                      sm:h-[78px]

                      flex-shrink-0
                      overflow-hidden

                      rounded-[18px]
                      sm:rounded-[20px]

                      bg-gray-100
                    "
                  >
                    <img
                      src={experience.image}
                      alt={experience.imageAlt}
                      className={`w-full h-full ${experience.imageClass}`}
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        text-[22px]
                        sm:text-[26px]

                        font-bold
                        leading-[1.15]
                        text-black
                      "
                    >
                      {experience.company}
                    </h2>

                    <p
                      className="
                        mt-2

                        text-[15px]
                        sm:text-[16px]

                        font-semibold
                        text-gray-700
                      "
                    >
                      {experience.role}
                    </p>

                    {experience.subtitle && (
                      <p
                        className={`
                          mt-1

                          text-[13px]
                          sm:text-[14px]

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

                    text-[14px]
                    sm:text-[15px]

                    leading-[1.7]
                    sm:leading-[1.75]

                    text-gray-700

                    text-left
                    sm:text-justify
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
          DESKTOP TIMELINE
      ====================================================== */}
      <div
        className="
          hidden
          md:block

          relative

          min-h-[2410px]
        "
      >
        {/* CENTER LINE */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-[5px]

            -translate-x-1/2

            bg-black
          "
        />

        {/* MOVING DOT */}
        <div
          ref={dotRef}
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
            transform: "translate3d(-50%, 260px, 0)",
          }}
        />

        {/* =====================================================
            1. UNIVERSITY OF SHEFFIELD
        ====================================================== */}
        <div
          className="
            absolute

            left-[24px]
            lg:left-[50px]
            xl:left-[90px]

            top-[170px]

            z-20

            flex
            items-center
          "
        >
          <div
            className="
              h-[450px]
              lg:h-[480px]

              w-[450px]
              lg:w-[540px]
              xl:w-[620px]

              rounded-[24px]
              lg:rounded-[30px]

              border
              border-gray-200

              bg-white

              p-7
              lg:p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-5 lg:gap-7">
                <div
                  className="
                    h-20
                    w-20

                    lg:h-24
                    lg:w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-2xl
                    lg:rounded-3xl

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
                      text-[25px]
                      lg:text-[29px]
                      xl:text-[34px]

                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    The University of Sheffield
                  </h2>

                  <p className="mt-2 text-[16px] lg:text-lg font-semibold text-gray-700">
                    Student Ambassador
                  </p>

                  <p className="mt-1 text-[14px] lg:text-base text-gray-500">
                    Faculty of Engineering
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  lg:mt-7

                  text-[14px]
                  lg:text-[15px]
                  xl:text-[17px]

                  leading-[1.65]
                  lg:leading-[1.75]

                  text-gray-700
                  text-justify
                "
              >
                I work as a Student Ambassador at the University of Sheffield,
                supporting recruitment and engagement activities across
                Engineering and Computer Science. I represent the university
                at postgraduate events, deliver presentations, support
                prospective students exploring technical programmes, and
                collaborate with academic and recruitment teams. The role has
                strengthened my communication, public speaking, teamwork, and
                ability to explain technical and academic information to
                diverse audiences.
              </p>
            </div>
          </div>

          <p
            className="
              ml-[90px]
              lg:ml-[150px]
              xl:ml-[300px]

              whitespace-nowrap

              text-[16px]
              lg:text-lg
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
            lg:right-[50px]
            xl:right-[90px]

            top-[730px]

            z-20

            flex
            items-center
          "
        >
          <p
            className="
              mr-[90px]
              lg:mr-[150px]
              xl:mr-[300px]

              whitespace-nowrap

              text-[16px]
              lg:text-lg
              xl:text-xl

              text-gray-500
            "
          >
            Apr 2026 – Present
          </p>

          <div
            className="
              h-[400px]
              lg:h-[420px]
              xl:h-[430px]

              w-[450px]
              lg:w-[540px]
              xl:w-[620px]

              rounded-[24px]
              lg:rounded-[30px]

              border
              border-gray-200

              bg-white

              p-7
              lg:p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-5 lg:gap-7">
                <div
                  className="
                    h-20
                    w-20

                    lg:h-24
                    lg:w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-2xl
                    lg:rounded-3xl

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
                  <h2 className="text-[28px] lg:text-[32px] xl:text-4xl font-bold text-black">
                    TiiQu
                  </h2>

                  <p className="mt-2 text-[16px] lg:text-lg font-semibold text-gray-700">
                    Volunteer API Engineer
                  </p>

                  <p className="mt-1 text-[13px] lg:text-base italic text-gray-500">
                    AI-powered Truth Library for Environmental Research
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  lg:mt-8

                  text-[14px]
                  lg:text-[15px]
                  xl:text-[17px]

                  leading-[1.65]
                  xl:leading-8

                  text-gray-700
                  text-justify
                "
              >
                I work as a Volunteer API Engineer at TiiQu, contributing to
                an AI-powered Truth Library for Environmental Research by
                building reliable backend data engineering solutions. My work
                focuses on designing automated data ingestion pipelines that
                collect and process thousands of scientific records from
                multiple external APIs, while ensuring data quality through
                validation, transformation, deduplication, and monitoring.
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
            lg:left-[50px]
            xl:left-[90px]

            top-[1290px]

            z-20

            flex
            items-center
          "
        >
          <div
            className="
              h-[400px]
              lg:h-[420px]
              xl:h-[430px]

              w-[450px]
              lg:w-[540px]
              xl:w-[620px]

              rounded-[24px]
              lg:rounded-[30px]

              border
              border-gray-200

              bg-white

              p-7
              lg:p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-5 lg:gap-7">
                <div
                  className="
                    h-20
                    w-20

                    lg:h-24
                    lg:w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-2xl
                    lg:rounded-3xl

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
                  <h2 className="text-[27px] lg:text-[32px] xl:text-4xl font-bold text-black">
                    Apache Airflow
                  </h2>

                  <p className="mt-2 text-[16px] lg:text-lg font-semibold text-gray-700">
                    Open Source Contributor
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  lg:mt-8

                  text-[14px]
                  lg:text-[15px]
                  xl:text-[17px]

                  leading-[1.65]
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
                debugging, and collaborative open-source engineering
                practices.
              </p>
            </div>
          </div>

          <p
            className="
              ml-[90px]
              lg:ml-[150px]
              xl:ml-[300px]

              whitespace-nowrap

              text-[16px]
              lg:text-lg
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
            lg:right-[50px]
            xl:right-[90px]

            top-[1850px]

            z-20

            flex
            items-center
          "
        >
          <p
            className="
              mr-[90px]
              lg:mr-[150px]
              xl:mr-[300px]

              whitespace-nowrap

              text-[16px]
              lg:text-lg
              xl:text-xl

              text-gray-500
            "
          >
            May 2024 – Jul 2024
          </p>

          <div
            className="
              h-[400px]
              lg:h-[420px]
              xl:h-[430px]

              w-[450px]
              lg:w-[540px]
              xl:w-[620px]

              rounded-[24px]
              lg:rounded-[30px]

              border
              border-gray-200

              bg-white

              p-7
              lg:p-9
              xl:p-10

              shadow-lg
            "
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-5 lg:gap-7">
                <div
                  className="
                    h-20
                    w-20

                    lg:h-24
                    lg:w-24

                    flex-shrink-0

                    overflow-hidden

                    rounded-2xl
                    lg:rounded-3xl

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
                      text-[22px]
                      lg:text-[27px]
                      xl:text-[34px]

                      font-bold
                      leading-tight
                      text-black
                    "
                  >
                    National Institute of Technology Calicut
                  </h2>

                  <p className="mt-2 text-[15px] lg:text-lg font-semibold text-gray-700">
                    Software Engineering Intern &amp; Team Lead
                  </p>

                  <p className="mt-1 text-[14px] lg:text-base text-gray-500">
                    UAS Technologies
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-6
                  lg:mt-8

                  text-[14px]
                  lg:text-[15px]
                  xl:text-[17px]

                  leading-[1.65]
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