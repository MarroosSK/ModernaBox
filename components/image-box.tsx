"use client";

import useToolkitStore from "@/hooks/useToolkitStore";
import { ImageT } from "@/types/types";
import { EllipsisVertical, Fullscreen } from "lucide-react";
import Image from "next/image";

const ImageBox = ({
  img,
  handleModal,
}: {
  img: ImageT;
  handleModal: (id: string) => void;
}) => {
  const { handleToolkit } = useToolkitStore();

  return (
    <div className="relative group">
      <Image
        src={img.url}
        alt="img"
        height={400}
        width={400}
        placeholder="blur"
        blurDataURL={img.blurHash}
        className="w-full sm:w-[250px] h-[300px] object-cover"
      />
      <div className="bg-sky-600/35 p-2 rounded-lg absolute top-2 right-2 z-10 flex flex-col items-center gap-2 transform translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <EllipsisVertical
          className="font-bold text-white text-2xl w-8 h-8 cursor-pointer hover:text-sky-600 transition-all"
          onClick={() => handleToolkit(img)}
        />
        <Fullscreen
          onClick={() => handleModal(img.id)}
          className="font-bold text-white text-2xl w-8 h-8 cursor-pointer hover:text-sky-600 transition-all"
        />
      </div>
    </div>
  );
};

export default ImageBox;
