import linkedinLogo from "../../assets-images/LinkedIn_logO.png";
import prospectsLogo from "../../assets-images/Prospect_logo.png";
import jstarLogo from "../../assets-images/JSART.png";
import ieeeLogo from "../../assets-images/IEEE-Logo.jpg";
import githubLogo from "../../assets-images/git_logo.png";

import featuredCollage from "../../assets-images/featureeee.png";

export default function Featured() {
  const features = [
    {
      logo: linkedinLogo,
      logoAlt: "LinkedIn",
      title: "Professional Recommendation",
      description:
        "Recommended by Sam Whitworth, Student Recruitment Marketing Officer at the University of Sheffield, recognising my work ethic, professionalism, enthusiasm and ability to contribute effectively both independently and within a team.",
      link: "https://www.linkedin.com/in/vivinthambidurai/details/recommendations/",
    },
    {
      logo: prospectsLogo,
      logoAlt: "Prospects",
      title: "Featured Contributor — Prospects",
      description:
        "Featured by Prospects in its June 2026 guide, “Which Masters degree is right for me?”, sharing my experience of choosing an MSc, career opportunities, course content and student life in Sheffield.",
      link: "https://www.prospects.ac.uk/postgraduate-study/masters-degrees/which-masters-degree-is-right-for-me/",
    },
    {
      logo: jstarLogo,
      logoAlt: "JSTAR",
      title: "Journal Publication — JSTAR",
      description:
        "First-authored the paper “Intelligent AI Personal Trainer: Advanced Posture Alignment & Exercise Companion,” published in the Journal of Science Technology and Research (JSTAR), presenting an AI-based fitness system for real-time posture correction and exercise recognition.",
      link: "https://journalstar.in/wp-content/uploads/2025/04/202561024.pdf",
    },
    {
      logo: ieeeLogo,
      logoAlt: "IEEE",
      title: "IEEE Conference Publication",
      description:
        "Co-authored the paper “LoRa-Based Smart Energy Metering and Secure Billing System for Rural Areas,” published in the 2025 International Research Conference on Smart Computing and Systems Engineering and indexed in IEEE Xplore.",
      link: "https://ieeexplore.ieee.org/document/11031068",
    },
    {
      logo: githubLogo,
      logoAlt: "GitHub",
      title: "GitHub Achievements",
      description:
        "A collection of GitHub achievements highlighting my open-source activity, repository contributions and continued involvement in collaborative software development.",
      link: "https://github.com/VivinAT04?tab=achievements",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* =========================================================
          FEATURED HERO
      ========================================================= */}
      <section
        className="
          px-4
          sm:px-5
          md:px-6

          pt-[100px]
          sm:pt-[110px]
          md:pt-32

          pb-8
          md:pb-6

          overflow-hidden
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto

            grid
            grid-cols-1
            md:grid-cols-[0.82fr_1.18fr]

            gap-8
            md:gap-6
            lg:gap-12

            items-start
          "
        >
          {/* LEFT */}
          <div className="pt-2 md:pt-4">
            <h1
              className="
                text-[54px]
                sm:text-[66px]
                md:text-[96px]
                lg:text-[104px]

                font-black
                tracking-[-0.065em]
                leading-[0.85]
                text-[#282828]

                mb-7
                sm:mb-9
                md:mb-14
              "
            >
              featured.
            </h1>

            <p
              className="
                text-[20px]
                sm:text-[22px]
                md:text-[30px]

                leading-[1.45]
                md:leading-[1.55]

                font-light
                text-[#7a7a7a]

                max-w-[500px]

                mb-6
                sm:mb-8
                md:mb-14
              "
            >
              Some of the places my work and contributions have been featured
              in.
            </p>

            <p
              className="
                text-[15px]
                sm:text-[16px]
                md:text-[18px]

                leading-[1.7]
                md:leading-[1.8]

                text-[#3f3f3f]

                max-w-[500px]
              "
            >
              A selection of features, publications and recognition connected
              to my work across software engineering, research and technology.
            </p>
          </div>

          {/* RIGHT — FEATURE COLLAGE */}
          <div
            className="
              relative

              flex
              items-start
              justify-center
              md:justify-end

              mt-2
              sm:mt-4
              md:mt-4
              lg:mt-8

              h-[300px]
              sm:h-[390px]
              md:h-auto
            "
          >
            <img
              src={featuredCollage}
              alt="Featured work collage"
              className="
                w-[520px]
                sm:w-[650px]
                md:w-[820px]
                lg:w-[980px]
                xl:w-[1040px]

                max-w-none

                h-auto

                object-contain
                object-top

                -translate-x-[10px]
                sm:-translate-x-[20px]
                md:-translate-x-[70px]
              "
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ITEMS
      ========================================================= */}
      <section
        className="
          px-4
          sm:px-5
          md:px-6

          pb-20
          sm:pb-24
          lg:pb-36
        "
      >
        <div className="max-w-[1280px] mx-auto">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="
                relative

                grid
                grid-cols-[1fr_auto]
                sm:grid-cols-[1fr_auto]

                md:grid-cols-[190px_minmax(0,1fr)_80px]
                lg:grid-cols-[270px_minmax(0,1fr)_120px]

                gap-x-4
                gap-y-5
                sm:gap-x-6
                sm:gap-y-6
                md:gap-8
                lg:gap-16

                items-start
                md:items-center

                py-9
                sm:py-10
                md:py-12

                border-t
                border-[#d8d8d8]

                last:border-b
              "
            >
              {/* LEFT — LOGO */}
              <div
                className="
                  col-start-1
                  row-start-1

                  w-full

                  md:w-[180px]
                  lg:w-[250px]

                  h-[90px]
                  sm:h-[105px]
                  md:h-[120px]
                  lg:h-[130px]

                  flex
                  items-center

                  justify-start
                  md:justify-center
                "
              >
                <img
                  src={feature.logo}
                  alt={feature.logoAlt}
                  className={`
                    object-contain
                    object-left
                    md:object-center

                    ${
                      index === 0
                        ? "max-w-[105px] max-h-[82px] sm:max-w-[115px] sm:max-h-[90px] lg:max-w-[130px] lg:max-h-[105px]"
                        : ""
                    }

                    ${
                      index === 1
                        ? "max-w-[175px] max-h-[75px] sm:max-w-[190px] sm:max-h-[85px] lg:max-w-[210px] lg:max-h-[100px]"
                        : ""
                    }

                    ${
                      index === 2
                        ? "max-w-[115px] max-h-[95px] sm:max-w-[125px] sm:max-h-[105px] lg:max-w-[145px] lg:max-h-[125px]"
                        : ""
                    }

                    ${
                      index === 3
                        ? "max-w-[170px] max-h-[75px] sm:max-w-[190px] sm:max-h-[85px] lg:max-w-[210px] lg:max-h-[100px]"
                        : ""
                    }

                    ${
                      index === 4
                        ? "max-w-[90px] max-h-[90px] sm:max-w-[105px] sm:max-h-[105px] lg:max-w-[120px] lg:max-h-[120px]"
                        : ""
                    }
                  `}
                />
              </div>

              {/* PHONE — VIEW BESIDE LOGO */}
              <div
                className="
                  col-start-2
                  row-start-1

                  flex
                  items-center
                  justify-end
                  self-center

                  md:hidden

                  pr-1
                "
              >
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${feature.title}`}
                  className="
                    inline-flex
                    items-center
                    gap-2

                    text-[15px]
                    sm:text-[16px]

                    font-medium
                    text-[#303030]

                    border-b
                    border-[#303030]

                    pb-1

                    hover:opacity-50
                    transition-opacity
                    duration-300
                  "
                >
                  View
                  <span className="text-[17px]">↗</span>
                </a>
              </div>

              {/* CENTER */}
              <div
                className="
                  col-span-2
                  row-start-2

                  md:col-span-1
                  md:col-start-2
                  md:row-start-1

                  max-w-[660px]
                  min-w-0
                "
              >
                <h2
                  className="
                    text-[22px]
                    sm:text-[24px]
                    md:text-[27px]
                    lg:text-[31px]

                    font-medium

                    tracking-[-0.025em]
                    leading-[1.2]

                    text-[#303030]

                    mb-3
                    md:mb-4
                  "
                >
                  {feature.title}
                </h2>

                <p
                  className="
                    text-[15px]
                    sm:text-[16px]
                    md:text-[17px]
                    lg:text-[19px]

                    leading-[1.65]
                    md:leading-[1.7]

                    text-[#707070]

                    max-w-[640px]
                  "
                >
                  {feature.description}
                </p>
              </div>

              {/* DESKTOP — VIEW */}
              <div
                className="
                  hidden
                  md:block

                  md:col-start-3
                  md:row-start-1

                  md:text-right
                  md:self-center
                "
              >
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${feature.title}`}
                  className="
                    inline-flex
                    items-center

                    gap-2

                    text-[16px]
                    lg:text-[17px]

                    font-medium

                    text-[#303030]

                    border-b
                    border-[#303030]

                    pb-1

                    hover:opacity-50

                    transition-opacity
                    duration-300
                  "
                >
                  View
                  <span className="text-[17px] lg:text-[18px]">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}