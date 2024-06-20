"use server";
import { db } from "@/lib/db";

export const getOneImage = async (id: string) => {
  try {
    const imageData = await db.image.findUnique({
      where: {
        id: id,
      },
      include: {
        imageKeywords: {
          select: {
            keyword: true,
          },
        },
      },
    });

    return imageData;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
