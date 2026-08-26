import linkedinLogo from "../../assets-images/LinkedIn_logO.png";
import prospectsLogo from "../../assets-images/Prospect_logo.png";
import jstarLogo from "../../assets-images/jsart.png";
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
    <main className="min-h-screen bg-white">

      {/* =========================================================
          FEATURED HERO
      ========================================================= */}
      <section className="px-8 pt-33 pb-16 overflow-hidden">
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-[0.82fr_1.18fr]
            gap-8
            items-center
          "
        >
          {/* LEFT */}
          <div>
            <h1
              className="
                text-[92px]
                md:text-[118px]
                lg:text-[132px]
                font-semibold
                tracking-[-0.055em]
                leading-[0.95]
                text-[#303030]
                mb-12
                pr-3
              "
            >
              featured.
            </h1>

            <p
              className="
                text-[28px]
                md:text-[32px]
                leading-[1.55]
                font-light
                text-[#7a7a7a]
                max-w-[600px]
                mb-12
              "
            >
              Some of the places my work and contributions have been featured in.
            </p>

            <p
              className="
                text-[18px]
                md:text-[20px]
                leading-[1.75]
                text-[#3f3f3f]
                max-w-[600px]
              "
            >
              A selection of features, publications and recognition connected
              to my work across software engineering, research and technology.
            </p>
          </div>

          {/* RIGHT — FEATURE COLLAGE */}
          <div
            className="
              flex
              items-center
              justify-center
              md:justify-end
              md:-translate-x-12
            "
          >
            <img
              src={featuredCollage}
              alt="Featured work collage"
              className="
                w-full
                md:w-[720px]
                lg:w-[1140px]
                max-w-none
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ITEMS
      ========================================================= */}
      <section className="px-8 pb-36">
        <div className="max-w-7xl mx-auto">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                grid
                md:grid-cols-[270px_1fr_120px]
                gap-10
                md:gap-16
                items-center
                py-16
                border-t
                border-[#d8d8d8]
                last:border-b
              "
            >
              {/* LEFT — LOGO */}
              <div
                className="
                  w-[250px]
                  h-[150px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={feature.logo}
                  alt={feature.logoAlt}
                  className={`
                    object-contain

                    ${index === 0 ? "max-w-[130px] max-h-[105px]" : ""}

                    ${index === 1 ? "max-w-[210px] max-h-[100px]" : ""}

                    ${index === 2 ? "max-w-[145px] max-h-[125px]" : ""}

                    ${index === 3 ? "max-w-[210px] max-h-[100px]" : ""}

                    ${index === 4 ? "max-w-[120px] max-h-[420px]" : ""}
                  `}
                />
              </div>

              {/* CENTER — TITLE + DESCRIPTION */}
              <div className="max-w-[660px]">
                <h2
                  className="
                    text-[27px]
                    md:text-[31px]
                    font-medium
                    tracking-[-0.025em]
                    leading-[1.2]
                    text-[#303030]
                    mb-4
                  "
                >
                  {feature.title}
                </h2>

                <p
                  className="
                    text-[18px]
                    md:text-[19px]
                    leading-[1.7]
                    text-[#707070]
                    max-w-[640px]
                  "
                >
                  {feature.description}
                </p>
              </div>

              {/* RIGHT — VIEW */}
              <div className="md:text-right">
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${feature.title}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[17px]
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
                  <span className="text-[18px]">↗</span>
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}