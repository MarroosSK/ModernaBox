"use client";

import useToolkitStore from "@/hooks/useToolkitStore";
import { ImageT } from "@/types/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { SingleImageUpload } from "./single-image-upload";
import { Button } from "./ui/button";

const UploadImage = () => {
  const defaultImg: ImageT = {
    id: "2131235438",
    url: "https://i.postimg.cc/mgxW6RZy/white-bg.jpg",
    blurHash:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAZEAAADMCAIAAAA9JAmdAAAD20lEQVR4nO3awU5TQQCG0blUmtYSjPH9n86NOw1RIRgYFxhAqcZaTPiSc5aTu57M/fIv7z98GmOMMeacyxhjWcbP5pxjjOXoc4B/tt2cvnvzeoxxcn+0LMvTC+vufO8FdOg5wD+7vPr28eJyjPHq4WzOvXfWnHPvHXToOcAxvlxer09XD++svRfWH/7yDj0HONLF56uHO2vOOeZ8+tGccz7HOcCRbm7nw7/hc72nvLOA/+fRv+FvHkfeWcDL8ajBe2cBL56eBZToWUDJX/WsZzkHOJ59FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWUGKfBZTYZwElehZQomcBJfZZQIl9FlCiZwElehZQYp8FlNhnASV6FlCiZwEl9llAiX0WUKJnASV6FlBinwWU2GcBJXoWUKJnASX2WUCJfRZQomcBJXoWkLE6WeyzgIzzs419FtCw265327WeBQRsN6dvz7d6FhCw267vLqwxxqvVarm5meOuZ+27buace6+hQ88BDrU6Wc7PNrvt+v5kub2dF1+uvl5d/7i5AF6A1cnyers+321+eQJ9ByFOvVtHQvCWAAAAAElFTkSuQmCC",
  };

  const [showDropZone, setShowDropZone] = useState(false);
  const { handleToolkit } = useToolkitStore();

  return (
    <>
      <h2 className="text-base font-bold tracking-wide">Start here</h2>
      <Button
        onClick={() => handleToolkit(defaultImg)}
        className="w-full mb-3 bg-neutral-600 dark:bg-secondary dark:text-white "
      >
        From Scratch
      </Button>
      {!showDropZone ? (
        <Button className="w-full mb-3" onClick={() => setShowDropZone(true)}>
          From image
        </Button>
      ) : (
        <Button
          className="w-full mb-3 bg-transparent hover:bg-transparent border border-red-500 text-red-500"
          onClick={() => setShowDropZone(false)}
        >
          X
        </Button>
      )}
      {showDropZone && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <SingleImageUpload setShowDropZone={setShowDropZone} />
        </motion.div>
      )}
    </>
  );
};

export default UploadImage;
