"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getPlaiceholder } from "plaiceholder";

export const addImage = async (url: string, keywords: string[]) => {
  try {
    // Fetch the image and generate the base64 placeholder
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch image!");
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    // Create the image with the base64 placeholder
    const image = await db.image.create({
      data: {
        url,
        blurHash: base64,
      },
    });

    for (const word of keywords) {
      // Check if the keyword already exists
      let keyword = await db.keyword.findFirst({
        where: {
          word: word,
        },
      });

      // If the keyword does not exist, create it
      if (!keyword) {
        keyword = await db.keyword.create({
          data: {
            word: word,
          },
        });
      }

      // Link the image to the keyword
      await db.imageKeywords.create({
        data: {
          imageId: image.id,
          keywordId: keyword.id,
        },
      });
    }

    // Revalidate the path to update the cache
    revalidatePath("/images");
    return {
      message: "Successfully updated.",
      status: "green",
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Error has occured, try again later.",
      status: "error",
    };
  }
};
