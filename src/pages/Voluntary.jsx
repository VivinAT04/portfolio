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
    <main className="min-h-screen bg-white">
      <section className="px-6 pt-32 pb-28 md:px-8 md:pt-40">
        <div className="mx-auto max-w-[1180px]">

          {/* ================================================= */}
          {/* PAGE TITLE */}
          {/* ================================================= */}

          <div className="mb-16 md:mb-20">
            <h1
              className="
                text-[52px]
                sm:text-[60px]
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

          {/* ================================================= */}
          {/* VOLUNTARY WORKS */}
          {/* ================================================= */}

          <div>
            {voluntaryWorks.map((work, index) => (
              <article
                key={index}
                className="
                  grid
                  grid-cols-1
                  gap-8

                  border-b
                  border-[#d8d8d8]

                  py-14

                  md:grid-cols-[200px_minmax(0,1fr)_220px]
                  md:gap-12
                  md:py-16

                  lg:grid-cols-[220px_minmax(0,1fr)_240px]
                  lg:gap-14
                "
              >

                {/* ================================================= */}
                {/* LEFT — LOGO */}
                {/* ================================================= */}

                <div className="flex items-start md:pt-1">
                  <div
                    className="
                      flex
                      h-[150px]
                      w-[180px]
                      items-center
                      justify-center
                      bg-white

                      md:h-[160px]
                      md:w-[190px]
                    "
                  >
                    <img
                      src={work.logo}
                      alt={`${work.title} logo`}
                      className="
                        max-h-[125px]
                        max-w-[180px]
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* ================================================= */}
                {/* CENTRE — CONTENT */}
                {/* ================================================= */}

                <div className="max-w-[600px]">

                  {/* TITLE */}

                  <h2
                    className="
                      mb-3
                      text-[27px]
                      font-semibold
                      leading-[1.15]
                      tracking-[-0.025em]
                      text-[#171717]

                      md:text-[30px]
                      lg:text-[32px]
                    "
                  >
                    {work.title}
                  </h2>

                  {/* ROLE */}

                  <p
                    className="
                      mb-1
                      text-[18px]
                      font-medium
                      text-[#303030]

                      md:text-[19px]
                    "
                  >
                    {work.role}
                  </p>

                  {/* ORGANISATION */}

                  {work.organisation && (
                    <p
                      className="
                        text-[16px]
                        leading-[1.6]
                        text-[#707070]
                      "
                    >
                      {work.organisation}
                    </p>
                  )}

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-7
                      max-w-[580px]
                      text-[16px]
                      leading-[1.75]
                      text-[#5b626c]

                      md:text-[17px]
                    "
                  >
                    {work.description}
                  </p>

                  {/* MOBILE DATE */}

                  <p
                    className="
                      mt-6
                      text-[14px]
                      font-medium
                      text-[#707070]

                      md:hidden
                    "
                  >
                    {work.date}
                  </p>
                </div>

                {/* ================================================= */}
                {/* RIGHT — DATE */}
                {/* ================================================= */}

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
                      text-[14px]
                      font-medium
                      tracking-[-0.01em]
                      text-[#686868]

                      lg:text-[15px]
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