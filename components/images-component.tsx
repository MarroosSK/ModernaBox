import React from "react";
import InfiniteScrollImages from "./infinity-scroll-images";
import { getImages } from "@/actions/get-images";

const ImagesComponent = async ({ search }: any) => {
  const allImages = await getImages({ search });

  return (
    <div>
      <InfiniteScrollImages search={search} initialImages={allImages} />
    </div>
  );
};

export default ImagesComponent;
