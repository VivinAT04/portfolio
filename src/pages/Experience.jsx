import { useEffect, useRef } from "react";
import uosImg from "../../assets-images/uoss.jpg";

export default function Experience() {
  const dotRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateDot = () => {
      const section = document.getElementById("experience");
      if (!section || !dotRef.current) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;

      const startY = 260;
      const endY = sectionHeight - 260;

      const scrollDistance = sectionHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollDistance, 0),
        1
      );

      const y = startY + progress * (endY - startY);

      dotRef.current.style.transform = `translate3d(-50%, ${y}px, 0)`;
    };

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        updateDot();
        animationFrameId = null;
      });
    };

    updateDot();

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      id="experience"
      className="relative min-h-[2410px] bg-white overflow-hidden"
    >
      {/* =====================================================
          CENTER TIMELINE
      ====================================================== */}

      <div className="absolute left-1/2 top-0 h-full w-[5px] -translate-x-1/2 bg-black" />

      {/* MOVING DOT */}

      <div
        ref={dotRef}
        className="absolute left-1/2 top-0 z-50 h-8 w-8 rounded-full bg-black will-change-transform"
        style={{
          transform: "translate3d(-50%, 260px, 0)",
        }}
      />

      {/* =====================================================
          1. UNIVERSITY OF SHEFFIELD
      ====================================================== */}

      <div className="absolute left-[90px] top-[170px] z-20 flex items-center">
        {/* CARD */}

        <div className="h-[480px] w-[620px] rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
          <div className="flex h-full flex-col">
            {/* HEADER */}

            <div className="flex items-start gap-7">
              {/* IMAGE */}

              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src={uosImg}
                  alt="University of Sheffield Student Ambassador"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* TITLE */}

              <div>
                <h2 className="text-[34px] font-bold leading-tight text-black">
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

            {/* DESCRIPTION */}

            <p className="mt-7 text-justify text-[17px] leading-[1.75] text-gray-700">
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

        {/* DATE */}

        <p className="ml-[300px] whitespace-nowrap text-xl text-gray-500">
          Sep 2025 – Present
        </p>
      </div>

      {/* =====================================================
          2. TIIQU
      ====================================================== */}

      <div className="absolute right-[90px] top-[730px] z-20 flex items-center">
        {/* DATE */}

        <p className="mr-[300px] whitespace-nowrap text-xl text-gray-500">
          Apr 2026 – Present
        </p>

        {/* CARD */}

        <div className="h-[430px] w-[620px] rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
          <div className="flex h-full flex-col">
            {/* HEADER */}

            <div className="flex items-start gap-7">
              {/* LOGO */}

              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src="/logos/TIIQU.jpg"
                  alt="TiiQu"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* TITLE */}

              <div>
                <h2 className="text-4xl font-bold text-black">
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

            {/* DESCRIPTION */}

            <p className="mt-8 text-justify text-[17px] leading-8 text-gray-700">
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

      <div className="absolute left-[90px] top-[1290px] z-20 flex items-center">
        {/* CARD */}

        <div className="h-[430px] w-[620px] rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
          <div className="flex h-full flex-col">
            {/* HEADER */}

            <div className="flex items-start gap-7">
              {/* LOGO */}

              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src="/logos/app.jpg"
                  alt="Apache Airflow"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* TITLE */}

              <div>
                <h2 className="text-4xl font-bold text-black">
                  Apache Airflow
                </h2>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Open Source Contributor
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-8 text-justify text-[17px] leading-8 text-gray-700">
              I contribute to the Apache Airflow open-source project by
              investigating workflow orchestration issues, understanding
              backfill DAG versioning behaviour, and proposing improvements
              through GitHub discussions. This experience helps me strengthen
              my understanding of large-scale Python codebases, testing,
              debugging, and collaborative open-source engineering practices.
            </p>
          </div>
        </div>

        {/* DATE */}

        <p className="ml-[300px] whitespace-nowrap text-xl text-gray-500">
          Jan 2026 – Present
        </p>
      </div>

      {/* =====================================================
          4. NIT CALICUT / UAS TECHNOLOGIES
      ====================================================== */}

      <div className="absolute right-[90px] top-[1850px] z-20 flex items-center">
        {/* DATE */}

        <p className="mr-[300px] whitespace-nowrap text-xl text-gray-500">
          May 2024 – Jul 2024
        </p>

        {/* CARD */}

        <div className="h-[430px] w-[620px] rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
          <div className="flex h-full flex-col">
            {/* HEADER */}

            <div className="flex items-start gap-7">
              {/* LOGO */}

              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-3xl bg-gray-100">
                <img
                  src="/logos/NITCC.jpeg"
                  alt="National Institute of Technology Calicut"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* TITLE */}

              <div>
                <h2 className="text-[34px] font-bold leading-tight text-black">
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

            {/* DESCRIPTION */}

            <p className="mt-8 text-justify text-[17px] leading-8 text-gray-700">
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
    </section>
  );
}