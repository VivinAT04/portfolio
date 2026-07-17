import { Link } from "react-router-dom";
import myPhoto from "../../assets-images/my-photo.jpg";
import flowersImg from "../../assets-images/Flowers.png";
import jsartImg from "../../assets-images/JSART.png";
import certificateImg from "../../assets-images/AI Fitness Coach_ Smart Posture Correction-Certification.jpeg";
import uniPhoto from "../../assets-images/myUniPhoto.jpg";
import storyImg from "../../assets-images/backmac.png";
import profileImg from "../../assets-images/short.png";
import sheffieldImg from "../../assets-images/sheffield.jpg";
import researchImg from "../../assets-images/research.jpg";
import ambassadorImg from "../../assets-images/ambass.jpg";
import githubAchievementsImg from "../../assets-images/github-achievements.png";
import awsImg from "../../assets-images/image.png";
import paperImg from "../../assets-images/JSART.png";
export default function About() {
  const cards = [
    "🎓 Sheffield",
    "🧠 Research",
    "💻 GitHub",
    "🏆 Ambassador",
    "☁️ AWS",
    "📚 Papers",
  ];

  return (
    <main className="bg-white text-[#0f172a]">
<section id="about" className="min-h-screen px-8 pt-36 pb-24">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left */}
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
          find me exploring my cooking skills, reading books, or working
          out in the gym.
        </p>
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <div className="relative w-[450px] h-[550px] rounded-2xl overflow-hidden shadow-xl bg-white group">
          <img
            src={myPhoto}
            alt="Vivin"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: "center bottom" }}
          />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
        </div>
      </div>
    </div>

    {/* Bottom Cards */}
    <div className="border-t mt-16 pt-10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

        {/* Sheffield */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg">
            <img
              src={sheffieldImg}
              alt="Sheffield"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Research */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg">
            <img
              src={researchImg}
              alt="Research"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* GitHub */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg bg-white flex items-center justify-center">
            <img
              src={githubAchievementsImg}
              alt="GitHub Achievements"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        {/* Ambassador */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg">
            <img
              src={ambassadorImg}
              alt="Ambassador"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* AWS */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg">
            <img
              src={awsImg}
              alt="AWS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Papers */}
        <div className="bg-white rounded-xl border-2 border-[#d8d8d8] p-[5px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <div className="h-32 overflow-hidden rounded-lg">
            <img
              src={paperImg}
              alt="Published Research Paper"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
      <section className="border-t border-gray-200 bg-[#f5f5f5] px-8 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-16">
          <div className="justify-self-start">
            <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8 whitespace-nowrap">
              Part Engineer
            </h2>

            <div className="w-16 h-[2px] bg-[#3f4652] mb-8" />

            <ul className="space-y-4 text-[18px] leading-relaxed text-[#5b6470]">
              <li>Software Development</li>
              <li>Backend Engineering</li>
              <li>Python Programming</li>
              <li>Cloud Computing</li>
              <li>System Design</li>
            </ul>
          </div>

          <div className="flex justify-center justify-self-center">
            <svg width="390" height="390" viewBox="0 0 390 390" className="drop-shadow-2xl">
              <circle cx="195" cy="195" r="190" fill="#d6d6d6" />

              <path
                d="M195 195 L195 5 A190 190 0 0 1 359 291 Z"
                fill="#2f2f2f"
              />

              <line x1="195" y1="195" x2="195" y2="5" stroke="#f5f5f5" strokeWidth="6" />
              <line x1="195" y1="195" x2="359" y2="291" stroke="#f5f5f5" strokeWidth="6" />

              <text x="115" y="202" textAnchor="middle" fill="#111111" fontSize="35" fontWeight="700">
                Coder
              </text>

              <text x="300" y="172" textAnchor="middle" fill="#ffffff" fontSize="26" fontWeight="700">
                Researcher
              </text>
            </svg>
          </div>

          <div className="justify-self-end text-left ml-8">
            <h2 className="text-[44px] font-light leading-none text-[#3f4652] mb-8 whitespace-nowrap">
              Part Researcher
            </h2>

            <div className="w-16 h-[2px] bg-[#3f4652] mb-8" />

            <ul className="space-y-4 text-[18px] leading-relaxed text-[#5b6470]">
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Brain Computer Interfaces</li>
              <li>Signal Processing</li>
              <li>Scientific Research</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t bg-white px-8 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src={flowersImg}
              alt="Flowers"
              className="w-[420px] h-[520px] object-cover rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-10">Random Facts</h2>

            <ul className="space-y-5 text-[22px] text-gray-600">
              <li>I drink way too much coffee.</li>
              <li>I enjoy building things from scratch.</li>
              <li>I can't say no to a triple chocolate muffin.</li>
              <li>I love solving complex problems.</li>
              <li>I'm always curious about how things work.</li>
              <li>I enjoy learning beyond my coursework.</li>
              <li>I believe consistency beats motivation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t bg-[#f5f5f5] px-8 py-28 overflow-hidden">
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

      {/* Featured Section */}
      <section className="border-y border-gray-300 bg-white px-8 py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-[64px] font-light leading-none tracking-[-0.04em] text-[#1f2937] whitespace-nowrap mb-10">
              Featured here & there
            </h2>

            <p className="max-w-[560px] text-[22px] leading-[1.8] text-[#4b5563] mb-12">
              My work has been recognised through research publications,
              international websites, university representation, and selected
              student features. These milestones reflect my journey as a software
              engineer, researcher, and MSc Advanced Computer Science student.
            </p>

            <Link
              to="/featured"
              className="inline-flex w-fit items-center gap-2 text-[18px] font-medium text-[#1f2937] border-b border-[#1f2937] pb-1 transition-all duration-300 hover:gap-3"
            >
              View featured work
              <span>→</span>
            </Link>
          </div>

{/* Right */}
<div className="relative h-[460px]">
  <div className="absolute left-[40px] top-[120px] w-[250px] h-[330px] bg-white border border-gray-200 shadow-2xl rotate-[-8deg] overflow-hidden z-10">
    <img
      src={jsartImg}
      alt="JSTAR Publication"
      className="w-full h-full object-cover"
      style={{ objectPosition: "top center" }}
    />
  </div>

  <div className="absolute left-[240px] top-[20px] w-[250px] h-[330px] bg-white border border-gray-200 shadow-2xl rotate-[6deg] overflow-hidden z-20">
    <img
      src={certificateImg}
      alt="TANZ Research Journal Certificate"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center center" }}
    />
  </div>

  <div className="absolute left-[370px] top-[180px] w-[250px] h-[330px] bg-white border border-gray-200 shadow-2xl rotate-[3deg] overflow-hidden z-30">
    <img
      src={uniPhoto}
      alt="University of Sheffield"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center center" }}
    />
  </div>
</div>

        </div>
      </section>

      <section className="border-t bg-[#f5f5f5] px-8 py-24">
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

    {/* Left */}
    <div className="relative">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <img
          src={storyImg}
          alt="Workspace"
          className="w-full h-[430px] object-cover"
        />
      </div>

      <div className="absolute left-[-45px] top-8 w-44 h-44 rounded-full bg-white p-[6px] shadow-2xl">
        <img
          src={profileImg}
          alt="Vivin"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>

    {/* Right */}
    <div>
      <h2 className="text-[58px] font-light text-gray-800 mb-8">
        My story
      </h2>

      <p className="text-[21px] leading-[1.9] text-gray-600 mb-10">
        Learn a little more about my journey—from discovering software
        development to building backend systems, contributing to open
        source, conducting AI research, and pursuing my Master's degree in
        Advanced Computer Science at the University of Sheffield.
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