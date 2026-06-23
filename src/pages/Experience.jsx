import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const pathRef = useRef(null);

  const [movingDot, setMovingDot] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateDot = () => {
      if (!pathRef.current) return;

      const path = pathRef.current;
      const length = path.getTotalLength();

      const section = document.getElementById("experience");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const start = rect.top + window.scrollY;
      const end = start + section.offsetHeight;

      const progress = Math.min(
        Math.max(
          (window.scrollY -
            start +
            window.innerHeight / 2) /
            (end - start),
          0
        ),
        1
      );

      const point = path.getPointAtLength(
        length * progress
      );

      setMovingDot({
        x: point.x,
        y: point.y,
      });
    };

    updateDot();

    window.addEventListener("scroll", updateDot);

    return () =>
      window.removeEventListener(
        "scroll",
        updateDot
      );
  }, []);

  return (
    <section
    >
   
      {/* ================= FIRST EXPERIENCE ================= */}
      <div className="absolute left-24 top-[200px] flex items-center gap-10">
        {/* Card */}
        <div className="w-[700px] rounded-[40px] border border-gray-200 bg-white p-12 shadow-lg">
          <div className="flex gap-8">
            <div className="h-28 w-28 rounded-3xl bg-gray-200 flex-shrink-0" />

            <div>
              <h2 className="text-5xl font-bold">
                 TiiQu
              </h2>

              <p className="mt-6 text-2xl text-gray-700 leading-relaxed">
                API Engineer Intern
                <br />
                Worked on Machine Learning
                research and Python
                development projects.
              </p>
            </div>
          </div>
        </div>

        {/* Date */}
        <p className="text-2xl text-gray-500 whitespace-nowrap">
        Apr 2026 – Present
        </p>
      </div>

      {/* ================= SECOND EXPERIENCE ================= */}
      <div className="absolute right-24 top-[1150px] flex items-center gap-10">
        {/* Date */}
        <p className="text-2xl text-gray-500 whitespace-nowrap">
          May 2024 – Jul 2024
        </p>

        {/* Card */}
        <div className="w-[700px] rounded-[40px] border border-gray-200 bg-white p-12 shadow-lg">
          <div className="flex gap-8">
            <div className="h-28 w-28 rounded-3xl bg-gray-200 flex-shrink-0" />

            <div>
              <h2 className="text-5xl font-bold">
               NIT Calicut
              </h2>

              <p className="mt-6 text-2xl text-gray-700 leading-relaxed">
                Summer Research Intern 
                <br />
                Building AI-powered
                applications using React,
                Node.js and LLMs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CURVE + MOVING DOT ================= */}
      <svg
        className="absolute inset-0 w-full h-[2200px] pointer-events-none"
        viewBox="0 0 1600 2200"
      >
        <path
          ref={pathRef}
          d="
            M 1090 540

            C 1300 540,
              1320 850,
              900 1050

            C 500 1250,
              550 1450,
              620 1550
          "
          fill="none"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* ONLY ONE DOT */}
        <circle
          cx={movingDot.x}
          cy={movingDot.y}
          r="14"
          fill="black"
        />
      </svg>
    </section>
  );
}