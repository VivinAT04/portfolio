import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import contactPhoto from "../../assets-images/Vivin_AT.jpeg";

export default function Contact() {
  return (
    <div className="bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto min-h-[70vh] px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h1 className="text-7xl md:text-8xl font-black text-zinc-900 mb-6">
              contact.
            </h1>

            <p className="text-2xl text-zinc-500 leading-relaxed max-w-md mb-2">
              Get in touch with me via social media or send me an email.
            </p>

            <p className="text-base text-zinc-500 mb-16">
              Let's build something together.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-16 max-w-lg">
              <a
                href="https://www.linkedin.com/in/vivinthambidurai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center text-white text-2xl">
                  <FaLinkedinIn />
                </div>

                LinkedIn
              </a>

              <a
                href="https://github.com/VivinAT04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center text-white text-2xl">
                  <FaGithub />
                </div>

                GitHub
              </a>

              <a
                href="mailto:vivinthambidurai@gmail.com"
                className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
              >
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl">
                  <FaEnvelope />
                </div>

                Email
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
              >
                <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl">
                  <FaInstagram />
                </div>

                Instagram
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white border border-zinc-200 rounded-3xl p-5">
              <img
                src={contactPhoto}
                alt="Vivin Anitha Thambidurai"
                className="w-[360px] h-[470px] rounded-2xl object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#efefef] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-light text-zinc-800 mb-12">
            Send me an email
          </h2>

          <form className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <label className="block mb-2 text-lg">Name</label>

                <input
                  type="text"
                  className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Email</label>

                <input
                  type="email"
                  className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white outline-none focus:border-zinc-900"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-lg">Message</label>

              <textarea
                rows={8}
                className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white resize-none outline-none focus:border-zinc-900"
              />
            </div>
          </form>

          <div className="flex justify-end mt-8">
            <button
              className="bg-zinc-900 text-white px-10 py-4 rounded-lg hover:bg-zinc-800 transition"
              type="submit"
            >
              Send email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}