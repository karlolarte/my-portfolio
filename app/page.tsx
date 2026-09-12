import Image from "next/image";
import SocialLink from "./components/SocialLink";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Button from "./components/Button";
import MyProjects from "./components/Projects/MyProjects";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col items-center justify-between">
        <div className="mt-5 flex h-20 w-1/2 items-center justify-center gap-7 rounded-full bg-white/15 p-5 shadow-xl md:w-1/4">
          <SocialLink name="GitHub" Icon={FaGithub} href="https://github.com/champagniee" />
          <SocialLink name="LinkedIn" Icon={FaLinkedin} href="https://github.com/champagniee" />
          <SocialLink name="FaFacebook" Icon={FaFacebook} href="https://github.com/champagniee" />
        </div>
        <div className="flex w-full flex-1 flex-col justify-center gap-5 md:flex-row">
          <div className="flex flex-1 items-end justify-center md:items-center md:justify-end">
            <Image
              src="/dp.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="md:w- h-auto w-100 rounded-full md:w-72 lg:w-96"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-2 transition-transform duration-300 ease-in-out md:items-start md:justify-center">
            <h1 className="text-5xl text-white md:text-7xl">Karl Olarte.</h1>
            <p className="ps-2 text-xl text-white"> A Full-Stack Software Engineer.</p>
            <Button name="Contact me." />
          </div>
        </div>
      </div>
      <MyProjects />
    </>
  );
}
