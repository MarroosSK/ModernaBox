import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/arrow.svg";
import { Button } from "../ui/button";
export const HeroSectionCTA = () => {
  return (
    <>
      <Button asChild size="lg" className="dark:bg-secondary dark:text-white ">
        <Link href="/images" className="flex items-center gap-x-2">
          {`Get Started`}
          <Image className="h-6 w-6 text-white" src={arrow} alt="arrow" />
        </Link>
      </Button>
    </>
  );
};
