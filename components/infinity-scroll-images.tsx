"use client";

import { getImages } from "@/actions/get-images";
import useToolkitStore from "@/hooks/useToolkitStore";
import { ImageT } from "@/types/types";
import { Loader2 } from "lucide-react";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageBox from "./image-box";
import ImageModal from "./image-modal";
import ImagesLoad from "./images-load-skeleton";
import dynamic from "next/dynamic";

const ImageEditor = dynamic(() => import("./image-editor"), {
  ssr: false,
});

export default function InfiniteScrollImages({
  search,
  initialImages,
}: {
  search: string | undefined;
  initialImages: ImageT[] | undefined;
}) {
  const { isImgEditorShown, setIsImgEditorShown, toolkitImage } =
    useToolkitStore();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [images, setImages] = useState<ImageT[] | undefined>(initialImages);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ref, inView] = useInView();

  const loadMoreImages = useCallback(async () => {
    setIsLoading(true);
    const next = page + 1;
    const newImages = await getImages({ search, page: next });
    if (newImages?.length) {
      setPage(next);
      setImages((prev: any[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...newImages,
      ]);
    } else {
      setHasMore(false);
    }
    setIsLoading(false);
  }, [page, search]);

  const handleModal = (id: string) => {
    setModalImage(id);
    setModalOpen(true);
  };

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      const timeoutId = setTimeout(() => {
        loadMoreImages();
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, loadMoreImages, hasMore, isLoading]);

  useEffect(() => {
    setImages(initialImages);
    setPage(1);
    setHasMore(true);
  }, [initialImages]);

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      getImages({ search, page: 1 }).then((newImages) => {
        setImages(newImages);
        setPage(2);
        setHasMore(true);
        setIsLoading(false);
      });
    }
  }, [search]);

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-3 py-4 relative">
      {images && images.length === 0 && <p>No images</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {images?.map((img) => (
          <div key={img.id.toString()} className="relative">
            <div className="group md:aspect-square w-full overflow-hidden rounded-l">
              <ImageBox img={img} handleModal={handleModal} />
            </div>
          </div>
        ))}
        {hasMore && (
          <div
            ref={ref}
            className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 lg:col-span-4"
          >
            <Loader2 className="animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      {modalOpen && modalImage && (
        <Suspense fallback={<ImagesLoad />}>
          <ImageModal id={modalImage} setModalOpen={setModalOpen} />
        </Suspense>
      )}
      {toolkitImage && isImgEditorShown && <ImageEditor />}
    </div>
  );
}
