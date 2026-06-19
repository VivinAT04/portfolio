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
    <main className="bg-[#f5f5f5]">
      <section id="about" className="min-h-screen px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-7xl font-bold mb-6">about.</h2>

              <p className="text-3xl text-gray-600 leading-relaxed mb-8">
                I'm a postgraduate student pursuing an MSc in Advanced Computer
                Science at the University of Sheffield, United Kingdom.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Since 2021, I've enjoyed turning complex problems into elegant
                software solutions. When I'm not developing something, you'll
                find me exploring new technologies, building side projects,
                contributing to open source or working out in the gym.
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

      <section className="border-t bg-white px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Backend Engineer</h2>
            <ul className="space-y-4 text-xl text-gray-600">
              <li>Python Development</li>
              <li>FastAPI & APIs</li>
              <li>AWS Cloud Services</li>
              <li>Distributed Systems</li>
              <li>Data Engineering</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div
                className="w-full h-full rounded-full shadow-xl"
                style={{
                  background:
                    "conic-gradient(#04112d 0% 75%, #dbe7ff 75% 100%)",
                }}
              />

              <div className="absolute inset-10 bg-white rounded-full flex flex-col items-center justify-center font-bold text-center">
                <span className="text-2xl">75% Code</span>
                <span className="text-xl">25% Research</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">Research Scientist</h2>
            <ul className="space-y-4 text-xl text-gray-600">
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

      <section className="border-t bg-white px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center">My Skills</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {skills.map((item) => (
              <div
                key={item.skill}
                className="bg-[#f5f5f5] rounded-xl shadow p-6 text-center"
              >
                <h3 className="font-bold text-xl mb-4">{item.skill}</h3>

                <div className="h-64 bg-white rounded-lg flex items-end overflow-hidden">
                  <div
                    className="w-full bg-[#04112d]"
                    style={{ height: `${item.level}%` }}
                  />
                </div>

                <p className="mt-4 text-2xl font-bold">{item.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Featured here & there</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              My research work has been published in Scopus-indexed and
              international conference venues, connecting AI, fitness technology
              and rural IoT infrastructure.
            </p>

            <Link to="/research" className="underline text-lg font-medium">
              View research & publications
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold">
                AI Fitness Coach: Smart Posture Correction & Workout Assistant
              </h3>
              <p className="text-gray-600 mt-2">
                TANZ Research Journal, Scopus Indexed · May 2025
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold">
                Enhancing Smart Energy Metering and Billing with LoRa Technology
              </h3>
              <p className="text-gray-600 mt-2">
                University of Kelaniya, SCSE 2025 · IEEE Collaboration
              </p>
            </div>
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

      <section className="border-t px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">My story</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              My journey connects software engineering, research and personal
              growth — from building backend systems and cloud projects to
              exploring AI, brain-computer interfaces and intelligent systems.
            </p>

            <Link to="/story" className="underline text-lg font-medium">
              Read my story
            </Link>
          </div>

          <div className="bg-white rounded-xl h-80 flex items-center justify-center shadow-sm">
            Story Visual
          </div>
        </div>
      </section>
    </main>
  );
}