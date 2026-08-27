import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import contactPhoto from "../../assets-images/contactimage.png";

export default function Contact() {
  const formRef = useRef(null);
  const contactHeroRef = useRef(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [showContactHero, setShowContactHero] = useState(false);

  useEffect(() => {
    const section = contactHeroRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContactHero(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_652mt6s",
        "template_g89zoeq",
        formRef.current,
        {
          publicKey: "Qb957rFGSa9cKC1vl",
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="bg-white"
      style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* ================= HERO ================= */}
      <section
        ref={contactHeroRef}
        className="relative overflow-hidden border-b border-[#d9d9d9] bg-white"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* REDUCED FROM 815px -> 745px */}
          <div className="relative min-h-[600px] lg:min-h-[745px]">
            {/* ================= LEFT CONTENT ================= */}
            <div
              className={`
                relative
                z-20
                pt-20
                lg:pt-[135px]
                lg:ml-[-40px]
                max-w-[610px]

                transition-all
                duration-[1800ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  showContactHero
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-[220px] opacity-0"
                }
              `}
            >
              {/* HEADING */}
              <h1
                className="
                  flex
                  items-end
                  text-[90px]
                  md:text-[110px]
                  lg:text-[150px]
                  xl:text-[150px]
                  leading-[0.82]
                  tracking-[-0.07em]
                  font-[600]
                  text-[#303030]
                  mb-[36px]
                  whitespace-nowrap
                "
              >
                <span>contact</span>

                <span
                  aria-hidden="true"
                  className="
                    block
                    shrink-0
                    w-[13px]
                    h-[13px]
                    md:w-[17px]
                    md:h-[17px]
                    lg:w-[22px]
                    lg:h-[22px]
                    xl:w-[22px]
                    xl:h-[22px]
                    rounded-full
                    bg-[#303030]
                    ml-[14px]
                    mb-[2px]
                    md:mb-[3px]
                    lg:mb-[4px]
                  "
                />
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[22px]
                  md:text-[25px]
                  lg:text-[26px]
                  leading-[1.42]
                  font-[300]
                  tracking-[-0.02em]
                  text-[#8a8a8a]
                  max-w-[510px]
                "
              >
                Get in touch with me via social media
                <br className="hidden sm:block" />
                or send me an email.
              </p>

              {/* SOCIAL LINKS */}
              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-[84px]
                  gap-y-[40px]
                  mt-[58px]
                  max-w-[600px]
                "
              >
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vivinthambidurai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-[20px] w-fit"
                >
                  <div
                    className="
                      w-[70px]
                      h-[70px]
                      rounded-full
                      bg-[#169bd5]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[30px]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FaLinkedinIn />
                  </div>

                  <span className="text-[20px] font-[600] text-[#169bd5]">
                    LinkedIn
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/VivinAT04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-[20px] w-fit"
                >
                  <div
                    className="
                      w-[70px]
                      h-[70px]
                      rounded-full
                      bg-[#343434]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[30px]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FaGithub />
                  </div>

                  <span className="text-[20px] font-[600] text-[#343434]">
                    GitHub
                  </span>
                </a>

                {/* Email */}
                <a
                  href="#email-form"
                  className="group flex items-center gap-[20px] w-fit"
                >
                  <div
                    className="
                      w-[70px]
                      h-[70px]
                      rounded-full
                      bg-[#f25555]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[29px]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <span className="text-[20px] font-[600] text-[#f25555]">
                    Email
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vivin.x_/"
                  className="group flex items-center gap-[20px] w-fit"
                >
                  <div
                    className="
                      w-[70px]
                      h-[70px]
                      rounded-full
                      bg-[#ef007c]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[30px]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <FaInstagram />
                  </div>

                  <span className="text-[20px] font-[600] text-[#ef007c]">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div
              className={`
                hidden
                lg:block
                absolute
                right-[10px]
                bottom-[-60px]
                z-10

                transition-all
                duration-[2000ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                delay-[200ms]

                ${
                  showContactHero
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[260px] opacity-0"
                }
              `}
            >
              <img
                src={contactPhoto}
                alt="Vivin Anitha Thambidurai"
                className="
                  w-[640px]
                  xl:w-[680px]
                  max-w-none
                  object-contain
                  object-bottom
                  select-none
                  pointer-events-none
                "
              />
            </div>

            {/* MOBILE IMAGE */}
            <div
              className={`
                lg:hidden
                flex
                justify-center
                mt-10

                transition-all
                duration-[1800ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                delay-[200ms]

                ${
                  showContactHero
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[140px] opacity-0"
                }
              `}
            >
              <img
                src={contactPhoto}
                alt="Vivin Anitha Thambidurai"
                className="
                  w-[420px]
                  max-w-full
                  object-contain
                  object-bottom
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EMAIL SECTION ================= */}
      <section
        id="email-form"
        className="
          bg-[#f7f7f7]
          pt-[58px]
          pb-24
          lg:pb-28
        "
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="lg:ml-[-40px]">
            <h2
              className="
                text-[40px]
                md:text-[44px]
                lg:text-[46px]
                leading-[1.15]
                font-[300]
                tracking-[-0.035em]
                text-[#444444]
                mb-[34px]
              "
            >
              Send me an email
            </h2>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid lg:grid-cols-2 gap-x-[42px] gap-y-8"
            >
              <div className="space-y-[27px]">
                <div>
                  <label className="block mb-[7px] text-[15px] leading-none font-[400] text-[#4f4f4f]">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    className="
                      w-full
                      h-[51px]
                      rounded-[3px]
                      border
                      border-[#ababab]
                      bg-white
                      px-4
                      text-[16px]
                      text-[#444444]
                      outline-none
                      focus:border-[#6f6f6f]
                    "
                  />
                </div>

                <div>
                  <label className="block mb-[7px] text-[15px] leading-none font-[400] text-[#4f4f4f]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    className="
                      w-full
                      h-[51px]
                      rounded-[3px]
                      border
                      border-[#ababab]
                      bg-white
                      px-4
                      text-[16px]
                      text-[#444444]
                      outline-none
                      focus:border-[#6f6f6f]
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block mb-[7px] text-[15px] leading-none font-[400] text-[#4f4f4f]">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={7}
                  className="
                    w-full
                    min-h-[179px]
                    rounded-[3px]
                    border
                    border-[#ababab]
                    bg-white
                    px-4
                    py-3
                    text-[16px]
                    text-[#444444]
                    resize-none
                    outline-none
                    focus:border-[#6f6f6f]
                  "
                />
              </div>

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="lg:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-[-4px]">
                {status === "success" && (
                  <p className="text-[16px] font-[500] text-green-600">
                    ✓ Email sent successfully
                  </p>
                )}

                {status === "error" && (
                  <p className="text-[16px] font-[500] text-red-600">
                    Failed to send email. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    h-[64px]
                    min-w-[200px]
                    px-[40px]
                    bg-[#3d3d3d]
                    hover:bg-[#2f2f2f]
                    text-white
                    text-[20px]
                    font-[600]
                    rounded-[6px]
                    border
                    border-[#353535]
                    shadow-sm
                    transition-all
                    duration-200
                    hover:translate-y-[-1px]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  {sending ? "Sending..." : "Send email"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 