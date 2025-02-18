import React from "react";
import Image from "next/image";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import { PiBriefcaseThin } from "react-icons/pi";
import { Heading } from "@/components";
import { MotionDiv } from "@/components/MotionDiv";

const About = () => {
  const content = [
    {
      icon: <IoCodeSlashOutline />,
      title: "Technical Skills",
      description:
        "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS , Bootstrap",
    },
    {
      icon: <SlGraduation />,
      title: "Education",
      description:
        "Bachelor's Degree in Arts - Sociology | Studied at Alexandria University. Completed Frontend Development training at Route Academy.",
    },
    {
      icon: <PiBriefcaseThin />,
      title: "Experience",
      description:
        "Worked on multiple web development projects, focusing on responsive design, performance optimization, and interactive user interfaces.",
    },
  ];

  const iconVariants = (delay) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      },
    },
  });

  const tools = [
    { icon: "/react.svg", name: "React" },
    { icon: "/tailwind.svg", name: "tailwind" },
    { icon: "/bootstrap.svg", name: "bootstrap" },
    { icon: "/redux.svg", name: "redux" },
    { icon: "/react-query.svg", name: "react-query" },
    { icon: "/postman.svg", name: "postman" },
    { icon: "/next-js.svg", name: "next-js" },
    { icon: "/git.svg", name: "git" },
    { icon: "/figma.svg", name: "figma" },
    { icon: "/framer-motion.png", name: "Framer Motion" },
  ];

  return (
    <div className="container py-10 px-2">
      <Heading label={"Introduction"} title={"About me"} />
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-16 my-10 w-full">
        <div className="w-80 rounded-2xl hover:shadow-2xl hover:-translate-y-2 duration-500">
          <Image
            src={"/abanoub.jpg"}
            alt="Personal Image"
            className="w-full rounded-2xl border-2 border-gray-400"
            width={320}
            height={320}
            priority
          />
        </div>
        <div className="md:flex-1 px-5">
          <p className="mb-10 font-ovo">
            I am a dedicated Frontend Developer with a strong foundation in
            modern web technologies. With hands-on experience in building
            interactive and responsive applications, I am passionate about
            crafting user-friendly digital experiences. My journey in web
            development has allowed me to work on diverse projects, refining my
            skills in React.js, Next.js, and UI/UX best practices.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {content.map((item, index) => (
              <li
                key={index}
                className="border-2 border-gray-400 rounded-xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-500"
              >
                <span className="text-3xl">{item.icon}</span>
                <div className="mt-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-bold mt-8 mb-4">Tools I Use :</h4>
          <div className="flex flex-wrap gap-5">
            {tools.map((tool, index) => (
              <MotionDiv
                key={index}
                variants={iconVariants(index * 0.3)}
                initial="initial"
                animate="animate"
                className="border-2 border-gray-400 p-2 rounded-xl w-14 h-14"
              >
                <Image src={tool.icon} alt={tool.name} width={48} height={48} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
