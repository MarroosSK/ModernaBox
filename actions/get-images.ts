"use server";

import { db } from "@/lib/db";

export const getImages = async ({
  search = "",
  page = 1,
  limit = 8,
}: { search?: string; page?: number; limit?: number } = {}) => {
  const skip = (page - 1) * limit;
  try {
    const queryData =
      search && search.length > 0
        ? {
            imageKeywords: {
              some: {
                keyword: {
                  word: {
                    contains: search,
                  },
                },
              },
            },
          }
        : {};

    const imagesData = await db.image.findMany({
      skip: skip,
      take: limit,
      where: queryData,
      orderBy: {
        createdAt: "desc",
      },
    });

    return imagesData;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
