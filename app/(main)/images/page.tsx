// "use client";

// import { motion } from "framer-motion";
import { fetchKeywords } from "@/actions/get-keywords";
import ImagesComponent from "@/components/images-component";
import { ImagesComponentSkeleton } from "@/components/images-component-skeleton";
import Search from "@/components/search";
import UploadImage from "@/components/upload-image";
import { Suspense } from "react";

const ImagesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const allKeywords = await fetchKeywords();

  return (
    <section className="container  flex flex-col md:flex-row  mt-32">
      <div className="w-full md:w-[250px] mt-10  shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8 space-y-3">
        <div className="w-full">
          <UploadImage />
        </div>
        <Search search={search} allKeywords={allKeywords} />
      </div>

      <div className="mx-auto min-h-screen mt-40 md:mt-32 flex  lg:ml-10 lg:mr-0 lg:mt-0  xl:ml-20">
        <div className="">
          <div>
            <Suspense key={search} fallback={<ImagesComponentSkeleton />}>
              <ImagesComponent search={search} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesPage;
