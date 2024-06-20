"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { SearchIcon, X } from "lucide-react";
import { Input } from "./ui/input";

const Search = ({
  search,
  allKeywords,
}: {
  search?: string;
  allKeywords: any[];
}) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search || "");
  const [query] = useDebounce(text, 1000);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/images`);
    } else {
      router.push(`/images?search=${query}`);
    }
  }, [query]);

  return (
    <div className="relative rounded-md shadow-sm">
      <div className="flex items-center gap-x-2">
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input
            value={text}
            placeholder="Search images..."
            onChange={(e) => setText(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-10  ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </>
        {text.length > 0 && (
          <X
            onClick={() => setText("")}
            className="absolute right-2 z-50 cursor-pointer"
          />
        )}
      </div>
      <div className="absolute z-10 mt-1 w-full max-h-[150px] md:max-h-60 overflow-y-auto mb-6">
        {allKeywords.map((keyW) => (
          <p
            key={keyW.id}
            className="flex cursor-pointer items-center justify-center gap-x-2 rounded bg-secondary px-4 py-3 text-sm font-medium leading-none text-primary transition-colors hover:bg-primary hover:text-background"
            onClick={() => setText(keyW.word)}
          >
            {keyW.word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Search;
