import {
FaLinkedinIn,
FaInstagram,
FaGithub,
FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
return ( <div className="bg-[#f5f5f5]">
{/* Hero Section */} <section className="max-w-7xl mx-auto min-h-[70vh]px-8 lg:px-16 py-24"> <div className="grid lg:grid-cols-2 items-center gap-12">
{/* Left */} <div> <h1 className="text-7xl md:text-8xl font-black text-zinc-900 mb-6">
contact. </h1>


        <p className="text-2xl text-zinc-500 leading-relaxed max-w-md mb-2">
          Get in touch with me via social media or send me an email.
        </p>
        <p className="text-m text-zinc-500 leading-relaxed max-w-md mb-16">Lets build something together</p>
        <br/>

        <div className="grid grid-cols-2 gap-y-10 gap-x-16 max-w-lg">
          <a
            href="https://www.linkedin.com/in/vivinthambidurai/"
            className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
          >
            <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl">
              <FaLinkedinIn />
            </div>
            LinkedIn
          </a>

          <a
            href="https://github.com/VivinAT04"
            className="flex items-center gap-4 text-lg font-medium hover:opacity-80 transition"
          >
            <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-white text-2xl">
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
        <img
          src="/images/contact-image.png"
          alt="Contact"
          className="w-full max-w-xl object-cover"
        />
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
              className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-lg">Message</label>
          <textarea
            rows="8"
            className="w-full border border-zinc-400 rounded-md px-4 py-4 bg-white resize-none"
          />
        </div>
      </form>

      <div className="flex justify-end mt-8">
        <button className="bg-zinc-800 text-white px-10 py-4 rounded-lg hover:bg-zinc-700 transition">
          Send email
        </button>
      </div>
    </div>
  </section>
</div>


);
}
