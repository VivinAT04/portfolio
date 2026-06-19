import { useState } from "react";

export default function HeroTransition() {
  const [split, setSplit] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const percentage = (x / rect.width) * 100;

    setSplit(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <section
      className="relative h-screen overflow-hidden pt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSplit(50)}
    >
      {/* Center Sphere */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[450px] h-[450px] rounded-full overflow-hidden relative shadow-2xl">
          {/* Research Side */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #c8f3ff 0%, #edf9ff 50%, #d6e8ff 100%)",
              clipPath: `inset(0 ${100 - split}% 0 0)`,
            }}
          />

          {/* Backend Side */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #374151 0%, #111827 50%, #000000 100%)",
              clipPath: `inset(0 0 0 ${split}%)`,
            }}
          />

          {/* Split Line */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow-2xl"
            style={{
              left: `${split}%`,
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-2 h-full max-w-7xl mx-auto px-8">
        {/* Research */}
        <div
          className="flex flex-col justify-center"
          style={{
            opacity: 1 - split / 100,
          }}
        >
          <h1 className="text-8xl font-black leading-none tracking-tight">
            research
            <br />
            scientist
          </h1>

          <p className="mt-6 max-w-md text-xl text-gray-600">
            AI, BCI, machine learning and intelligent systems.
          </p>
        </div>

        {/* Backend */}
        <div
          className="flex flex-col justify-center items-end"
          style={{
            opacity: split / 100,
          }}
        >
          <h1 className="text-8xl font-black leading-none tracking-tight text-right">
            backend
            <br />
            engineer
          </h1>

          <p className="mt-6 max-w-md text-xl text-gray-600 text-right">
            APIs, cloud infrastructure, distributed systems and data platforms.
          </p>
        </div>
      </div>
    </section>
  );
}