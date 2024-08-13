import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/arrow.svg";
export const HeroSectionCTA = () => {
  return (
    <>
      <Link
        href="/images"
        className="flex items-center gap-x-2 bg-indigo-500 text-white p-2 rounded-md"
      >
        {`Open Editor`}
        <Image className="h-6 w-6 text-black" src={arrow} alt="arrow" />
      </Link>
    </>
  );
};
