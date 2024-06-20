const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-neutral-500 before:to-transparent`;

export function SingleImageSkeleton() {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-lg">
      <div
        className={`relative w-[250px] h-[300px] object-cover bg-slate-200 animate-pulse ${shimmer}`}
      />
    </div>
  );
}

export function ImagesComponentSkeleton() {
  return (
    <div className="mt-5 space-y-6 pb-[5px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
        <SingleImageSkeleton />
      </div>
    </div>
  );
}
