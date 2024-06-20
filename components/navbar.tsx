import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../public/logo.svg";
import { ThemeSwitcher } from "./theme-switcher";
import arrow from "../public/arrow.svg";

export default function Navbar() {
  return (
    <nav className="fixed z-20 flex flex-col sm:flex-row items-center justify-between w-full h-40 sm:h-24 px-4 py-10 backdrop-blur-md bg-transparent bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="">
        <div className="flex items-center gap-x-1.5">
          <Image className="w-15 h-15 " src={logo} alt="logo" />
          <h3 className=" text-2xl leading-4 font-bold">ModernaBox</h3>
        </div>
      </Link>

      <div className="flex items-center gap-x-2">
        <Button asChild className="dark:bg-secondary dark:text-white ">
          <Link href="/images" className="flex items-center gap-x-2">
            {`Get Started`}
            <Image className="h-6 w-6 " src={arrow} alt="arrow" />
          </Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
