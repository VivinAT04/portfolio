import { Link } from "react-router-dom";

export default function About() {
  const cards = [
    "🎓 Sheffield",
    "🧠 Research",
    "💻 GitHub",
    "🏆 Ambassador",
    "☁️ AWS",
    "📚 Papers",
  ];

  const skills = [
    { skill: "Python", level: 95 },
    { skill: "Backend", level: 90 },
    { skill: "AWS", level: 80 },
    { skill: "Research", level: 75 },
    { skill: "Frontend", level: 70 },
  ];

  return (
    <main className="bg-[#f5f5f5] text-[#0f172a]">
      <section id="about" className="min-h-screen px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[88px] md:text-[100px] font-black tracking-[-0.05em] leading-none text-[#2b2b2b] mb-8">
                about.
              </h2>

              <p className="text-[30px] leading-[1.35] font-light text-gray-500 max-w-[560px] mb-12">
                I'm a postgraduate at the University of Sheffield, United Kingdom.
              </p>

              <p
                className="text-[20px] leading-[2] text-gray-700 font-medium max-w-[620px]"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  hyphens: "auto",
                }}
              >
                Since 2021, I've enjoyed turning complex problems into elegant
                software solutions. When I'm not developing something, you'll
                find me exploring new technologies, building side projects,
                contributing to open source, or working out in the gym.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-[450px] h-[550px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-xl">Your Photo Here</span>
              </div>
            </div>
          </div>

          <div className="border-t mt-16 pt-10">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {cards.map((card) => (
                <div
                  key={card}
                  className="bg-white rounded-xl h-32 shadow-sm flex items-center justify-center font-semibold hover:scale-105 transition"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="border-y border-gray-300 bg-white px-8 py-32">
  <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.15fr_1fr] gap-20 items-center">
    {/* Left */}
    <div>
      <h2 className="text-[44px] font-light leading-tight text-gray-700 mb-8">
        Backend
        <br />
        Engineer
      </h2>

      <div className="w-16 h-[2px] bg-gray-700 mb-8" />

      <ul className="space-y-4 text-[18px] leading-relaxed text-gray-600">
        <li>Python Development</li>
        <li>FastAPI & APIs</li>
        <li>AWS Cloud Services</li>
        <li>Distributed Systems</li>
        <li>Data Engineering</li>
      </ul>
    </div>

    {/* Center Diagram */}
    <div className="flex justify-center">
      <svg
        width="390"
        height="390"
        viewBox="0 0 390 390"
        className="drop-shadow-2xl"
      >
        {/* Circle */}
        <circle cx="195" cy="195" r="190" fill="#d9dde3" />

        {/* Dark Section */}
        <path
          d="
            M195 195
            L195 5
            A190 190 0 0 1 359 291
            Z
          "
          fill="#061120"
        />

        {/* Vertical Divider */}
        <line
          x1="195"
          y1="195"
          x2="195"
          y2="5"
          stroke="white"
          strokeWidth="6"
        />

        {/* Diagonal Divider */}
        <line
          x1="195"
          y1="195"
          x2="359"
          y2="291"
          stroke="white"
          strokeWidth="6"
        />

        {/* Labels */}
        <text
          x="115"
          y="202"
          textAnchor="middle"
          fill="#374151"
          fontSize="25"
          fontWeight="700"
        >
          Coder
        </text>

        <text
          x="300"
          y="172"
          textAnchor="middle"
          fill="white"
          fontSize="21"
          fontWeight="700"
        >
          Researcher
        </text>
      </svg>
    </div>

    {/* Right */}
    <div>
      <h2 className="text-[44px] font-light leading-tight text-gray-700 mb-8">
        Research
        <br />
        Scientist
      </h2>

      <div className="w-16 h-[2px] bg-gray-700 mb-8" />

      <ul className="space-y-4 text-[18px] leading-relaxed text-gray-600">
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Brain Computer Interfaces</li>
        <li>Signal Processing</li>
        <li>Scientific Research</li>
      </ul>
    </div>
  </div>
</section>

      <section className="border-t px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] rounded-xl bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">Add Your Image Here</span>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-10">Random Facts</h2>
            <ul className="space-y-5 text-xl text-gray-600">
              <li>I enjoy learning across multiple disciplines.</li>
              <li>I try to contribute software to every field I explore.</li>
              <li>I enjoy optimizing systems and workflows.</li>
              <li>I spend time researching technology trends.</li>
              <li>I enjoy backend engineering more than frontend.</li>
              <li>I like connecting research ideas with real-world products.</li>
              <li>My long-term goal is becoming a world-class engineer.</li>
            </ul>
          </div>
        </div>
      </section>

<section className="border-t bg-white px-8 py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-[180px_1fr] gap-6 items-end">
      <div className="hidden md:flex flex-col justify-between h-[430px] pb-24 text-gray-500 font-bold text-lg">
        <span>Jedi</span>
        <span>Ninja</span>
        <span>Geek</span>
        <span>Newbie</span>
      </div>

      <div>
        <h2 className="text-[44px] font-light text-gray-700 text-right mb-8">
          My skills
        </h2>

        <div className="relative h-[430px] border-l border-b border-gray-300">
          <div className="absolute inset-0 flex flex-col justify-between pb-24">
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
            <div className="border-t border-gray-200" />
          </div>

          <div className="relative z-10 h-full flex items-end gap-8 px-8">
            {[
              { skill: "Python", level: 95, color: "bg-[#62b8ad]" },
              { skill: "Backend", level: 90, color: "bg-[#e5b1a5]" },
              { skill: "AWS", level: 95, color: "bg-[#e7b52d]" },
              { skill: "Research", level: 75, color: "bg-[#c79a5d]" },
              { skill: "Gym", level: 40, color: "bg-[#d84242]" },
            ].map((item) => (
              <div
                key={item.skill}
                className={`${item.color} w-[180px] rounded-t-lg shadow-md flex flex-col justify-end items-center pb-8 text-white`}
                style={{ height: `${item.level}%` }}
              >
                <div className="text-[54px] font-bold leading-none drop-shadow">
                  {item.level}
                  <span className="text-2xl ml-1">%</span>
                </div>
                <p className="mt-5 text-lg font-bold">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="border-t bg-white px-8 py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-[56px] font-light text-gray-800 mb-8">
        Featured here & there
      </h2>

      <p className="text-[21px] leading-[1.9] text-gray-600 mb-10">
        My research work has been published in Scopus-indexed journals and
        international conferences covering Artificial Intelligence, Fitness
        Technology, IoT Systems, and Brain-Computer Interfaces. These
        publications reflect my passion for combining research with practical
        software engineering.
      </p>

      <Link
        to="/research"
        className="text-xl underline underline-offset-4 hover:text-black transition"
      >
        View research & publications
      </Link>
    </div>

    {/* Right Collage */}
    <div className="relative h-[520px]">
      <img
        src="/images/tanz-research.png"
        alt="TANZ Research Journal"
        className="absolute top-0 left-[28%] w-[300px] rounded-md shadow-2xl rotate-[-7deg] z-20"
      />

      <img
        src="/images/scse-2025.png"
        alt="SCSE 2025"
        className="absolute bottom-0 left-[5%] w-[280px] rounded-md shadow-2xl rotate-[-10deg] z-30"
      />

      <img
        src="/images/ieee-xplore.png"
        alt="IEEE Xplore"
        className="absolute bottom-8 right-[2%] w-[310px] rounded-md shadow-2xl rotate-[7deg] z-40"
      />
    </div>
  </div>
</section>

      <section className="border-t bg-white px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-[#f5f5f5] rounded-xl h-80 flex items-center justify-center shadow-sm">
            Voluntary Work Visual
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">Voluntary works</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I have contributed as a Python programming mentor, robotics lab
              advisory member and student leader, supporting education,
              technology and community initiatives.
            </p>

            <Link to="/voluntary" className="underline text-lg font-medium">
              View voluntary works
            </Link>
          </div>
        </div>
      </section>

<section className="border-t bg-white px-8 py-28">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.9fr] gap-20 items-center">

    {/* Left Image */}
    <div className="relative">

      {/* Rectangle */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <img
          src="/images/story.jpg"
          alt="Story"
          className="w-full h-[430px] object-cover"
        />
      </div>

      {/* Circle Profile */}
      <div className="absolute left-[-55px] top-10 w-44 h-44 rounded-full bg-white p-2 shadow-xl">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

    </div>

    {/* Right Content */}
    <div>

      <h2 className="text-[58px] font-light text-gray-800 mb-8">
        My story
      </h2>

      <p className="text-[21px] leading-[1.9] text-gray-600 mb-10">
        Learn a little more about my journey—from discovering software
        development to building backend systems, contributing to open source,
        conducting AI research, and pursuing my Master's degree in Advanced
        Computer Science at the University of Sheffield. My story reflects how
        curiosity, persistence, and continuous learning have shaped the engineer
        I am today.
      </p>

      <Link
        to="/story"
        className="text-xl underline underline-offset-4 hover:text-black transition"
      >
        Read my story
      </Link>

    </div>

  </div>
</section>
    </main>
  );
}