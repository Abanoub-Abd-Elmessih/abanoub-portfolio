import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import style from "./page.module.css";
import { IoMdMail } from "react-icons/io";
import { TypingAnimation } from "@/components";
import { LuMoveUpRight } from "react-icons/lu";

export default function Home() {
  const links = [
    {
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      icon: <FaLinkedin />,
    },
    { link: "https://github.com/Abanoub-Abd-Elmessih", icon: <FaGithub /> },
    { link: "mailto:abanoubabdelmessih110@gmail.com", icon: <IoMdMail /> },
    { link: "tel:+201559566765", icon: <FaPhone /> },
  ];
  return (
    <section className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center flex-grow-1">
      {/* Text Section */}
      <div>
        <p className="h4 fw-bold">hello 👋 ,I&apos;m</p>
        <h3 className="display-5 text-main fw-semibold">Abanoub Abdelmessih</h3>
        <TypingAnimation
          sequence={[
            "Web Developer",
            2000,
            "Front-End Developer",
            2000,
            "React Developer",
            2000,
          ]}
        />
        <p className="text-muted py-2">
          Passionate about crafting responsive, modern, and user-friendly
          websites that provide a great user experience.
        </p>
        <div className="buttons">
          <button className="btn btn-outline-primary me-3">
            CONTACT ME <LuMoveUpRight />
          </button>
          <button className="btn btn-dark ">
            DOWNLOAD CV <FaDownload />
          </button>
        </div>
        <ul className="list-unstyled d-flex gap-3 mt-3">
          {links.map((link) => (
            <a
              target="_blank"
              key={link.link}
              className={style.contact_links}
              href={link.link}
            >
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
      {/* Image Section */}
      <div>
        <Image
          src={"./hero.svg"}
          alt="hero image"
          width={550}
          height={550}
          className="w-100 d-none d-md-block"
        />
      </div>
    </section>
  );
}
