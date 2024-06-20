/* eslint-disable @next/next/no-img-element */

import { getOneImage } from "@/actions/get-one-image";

import Image from "next/image";
import { Card } from "./ui/card";

interface ImageModalProps {
  id: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageModal = async ({ id, setModalOpen }: ImageModalProps) => {
  const data = await getOneImage(id);

  //console.log(data);

  return (
    <Card className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/90">
      <div className="fixed inset-0" onClick={() => setModalOpen(false)} />
      <div className="relative mx-2 w-full max-w-3xl overflow-hidden rounded-md bg-white shadow-md dark:bg-[#020817] animate-zoom">
        <div
          className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black text-3xl text-white hover:text-gray-400"
          onClick={() => setModalOpen(false)}
        >
          &times;
          <span className="sr-only">Close Modal</span>
        </div>

        <div className="flex items-center justify-center h-[80vh] p-4">
          {data?.url && (
            <Image
              src={data.url}
              alt="Image"
              className="max-w-full max-h-full object-contain"
              width={500}
              height={500}
            />
          )}
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 mt-2 py-4">
          {data?.imageKeywords.map((keyW) => (
            <div
              key={keyW.keyword.id}
              className="flex items-center bg-transparent border border-black dark:border-white px-2 py-1 rounded text-primary"
            >
              {keyW.keyword.word}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ImageModal;
