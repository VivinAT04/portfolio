import uosLogo from "../../assets-images/uos.png";
import enactusLogo from "../../assets-images/enactus_logo.png";
import roboticsLogo from "../../assets-images/robo_logo.jpeg";

export default function Voluntary() {
  const voluntaryWorks = [
    {
      logo: uosLogo,
      title: "PGT Representative",
      role: "Postgraduate Taught Student Representative",
      organisation: "University of Sheffield",
      date: "September 2025 — Present",
      description:
        "Represent postgraduate taught students, communicating student feedback and contributing to discussions aimed at improving the academic and student experience.",
    },
    {
      logo: enactusLogo,
      title: "Code Creators",
      role: "Python Programming Mentor",
      organisation: "Enactus Sheffield Ltd.",
      date: "November 2025 — Present",
      description:
        "Mentor students in Python programming, supporting them with programming fundamentals, problem-solving and practical coding skills.",
    },
    {
      logo: roboticsLogo,
      title: "Advisory Committee Member",
      role: "Robotics Lab",
      organisation: "PSNA College of Engineering and Technology",
      date: "May 2025 — Present",
      description:
        "Contributed technical guidance and support for robotics projects, student activities and the development of the robotics community.",
    },
    {
      logo: roboticsLogo,
      title: "Vice President & Advisory Member",
      role: "Robotics Lab Leadership",
      organisation: "",
      date: "November 2023 — April 2025",
      description:
        "Contributed to the leadership and development of the robotics community through mentoring, coordination and technical guidance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <section
        className="
          bg-white

          px-4
          sm:px-5
          md:px-6

          pt-[105px]
          sm:pt-[115px]
          md:pt-40

          pb-20
          sm:pb-24
          md:pb-28

          overflow-hidden
        "
      >
        <div className="max-w-[1280px] mx-auto">
          {/* =================================================
              PAGE TITLE
          ================================================= */}
          <div
            className="
              mb-11
              sm:mb-14
              md:mb-20
            "
          >
            <h1
              className="
                text-[42px]
                sm:text-[52px]
                md:text-[68px]

                font-bold

                tracking-[-0.045em]
                leading-[0.95]

                text-[#111827]
              "
            >
              Voluntary Works
            </h1>
          </div>

          {/* =================================================
              VOLUNTARY WORKS
          ================================================= */}
          <div className="w-full">
            {voluntaryWorks.map((work, index) => (
              <article
                key={`${work.title}-${index}`}
                className="
                  w-full

                  grid
                  grid-cols-1

                  gap-5
                  sm:gap-6

                  border-b
                  border-[#d8d8d8]

                  py-10
                  sm:py-12

                  md:grid-cols-[190px_minmax(0,1fr)_190px]
                  md:gap-8
                  md:py-16

                  lg:grid-cols-[240px_minmax(0,1fr)_240px]
                  lg:gap-14
                "
              >
                {/* =================================================
                    LEFT — LOGO
                ================================================= */}
                <div
                  className="
                    flex
                    items-start
                    justify-start

                    md:pt-1
                  "
                >
                  <div
                    className="
                      flex

                      h-[105px]
                      w-[150px]

                      sm:h-[120px]
                      sm:w-[170px]

                      md:h-[150px]
                      md:w-[180px]

                      lg:h-[160px]
                      lg:w-[220px]

                      items-center
                      justify-start

                      bg-white
                    "
                  >
                    <img
                      src={work.logo}
                      alt={`${work.title} logo`}
                      className="
                        max-h-[90px]
                        max-w-[140px]

                        sm:max-h-[105px]
                        sm:max-w-[160px]

                        md:max-h-[120px]
                        md:max-w-[170px]

                        lg:max-h-[125px]
                        lg:max-w-[190px]

                        object-contain
                        object-left
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    CENTRE — CONTENT
                ================================================= */}
                <div className="min-w-0 max-w-[620px]">
                  <h2
                    className="
                      mb-2
                      sm:mb-3

                      text-[23px]
                      sm:text-[26px]
                      md:text-[30px]
                      lg:text-[32px]

                      font-semibold

                      leading-[1.15]
                      tracking-[-0.025em]

                      text-[#171717]
                    "
                  >
                    {work.title}
                  </h2>

                  <p
                    className="
                      mb-1

                      text-[16px]
                      sm:text-[17px]
                      md:text-[19px]

                      font-medium

                      text-[#303030]
                    "
                  >
                    {work.role}
                  </p>

                  {work.organisation && (
                    <p
                      className="
                        text-[14px]
                        sm:text-[15px]
                        md:text-[16px]

                        leading-[1.6]

                        text-[#707070]
                      "
                    >
                      {work.organisation}
                    </p>
                  )}

                  <p
                    className="
                      mt-5
                      sm:mt-6
                      md:mt-7

                      max-w-[600px]

                      text-[15px]
                      sm:text-[16px]
                      md:text-[17px]

                      leading-[1.7]
                      md:leading-[1.75]

                      text-[#5b626c]
                    "
                  >
                    {work.description}
                  </p>

                  {/* MOBILE DATE */}
                  <p
                    className="
                      mt-5

                      text-[13px]
                      sm:text-[14px]

                      font-medium

                      text-[#707070]

                      md:hidden
                    "
                  >
                    {work.date}
                  </p>
                </div>

                {/* =================================================
                    RIGHT — DATE
                ================================================= */}
                <div
                  className="
                    hidden

                    items-start
                    justify-end

                    pt-2

                    md:flex
                  "
                >
                  <p
                    className="
                      whitespace-nowrap

                      text-right

                      text-[13px]
                      lg:text-[15px]

                      font-medium

                      tracking-[-0.01em]

                      text-[#686868]
                    "
                  >
                    {work.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}