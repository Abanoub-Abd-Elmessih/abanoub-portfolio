import Image from "next/image";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col justify-center py-24 md:py-0 items-center container flex-grow">
      <div>
        <Image
          src={"/abanoub.jpg"}
          alt="personal image"
          width={100}
          height={100}
          className="rounded-full w-40 h-40 object-cover object-top border-2 border-gray-400"
        />
      </div>
      <h3 className="text-xl md:text-2xl mb-4 mt-2 font-ovo">
        Hi! I'm Abanoub 👋
      </h3>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-ovo max-w-2xl text-center">
        Front-End Web developer based in Egypt
      </h1>
      <p className="max-w-3xl text-center mx-auto font-ovo tracking-wider my-4">
        I am a Front-End developer from Egypt, Alexandria
      </p>
      <div className="flex items-center gap-4 font-outfit">
        <Link
          href={"/contact"}
          className="flex items-center gap-2 hover:gap-5 px-8 py-2 border border-gray-500 rounded-full bg-black text-white hover:bg-white hover:text-black duration-300"
        >
          Contact Me
          <FiArrowUpRight className="size-5 text-lg" />
        </Link>
        <a
          href="/myResume.pdf"
          download={true}
          className="flex items-center gap-2 hover:gap-5 px-8 py-2 border border-gray-500 rounded-full hover:bg-black hover:text-white duration-300"
        >
          My Resume <BsDownload className="size-5" />
        </a>
      </div>
    </div>
  );
}
