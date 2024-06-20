"use server";

import { db } from "@/lib/db";

export const fetchKeywords = async () => {
  try {
    const keywordsData = await db.keyword.findMany();
    return keywordsData;
  } catch (error: unknown) {
    throw new Error(`An error happened: ${error}`);
  }
};
