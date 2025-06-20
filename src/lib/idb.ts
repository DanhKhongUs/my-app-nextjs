import { openDB } from "idb";
import { IBlog } from "@/types/blogs";

const DB_NAME = "my-app-content";
const STORE_NAME = "content-store";

export const getDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

export async function getLatestBlogs(limit?: number): Promise<IBlog[]> {
  const data = await getContent<IBlog[]>("blogs");
  const sorted = (data ?? []).sort((a, b) => b.id - a.id);
  return limit ? sorted.slice(0, limit) : sorted;
}

export const saveContent = async <T>(key: string, value: T): Promise<void> => {
  const db = await getDB();
  await db.put(STORE_NAME, value, key);
};

export const getContent = async <T>(key: string): Promise<T | undefined> => {
  const db = await getDB();
  return await db.get(STORE_NAME, key);
};

export const getAllKeys = async (): Promise<IDBValidKey[]> => {
  const db = await getDB();
  return await db.getAllKeys(STORE_NAME);
};

export const deleteContent = async (key: string): Promise<void> => {
  const db = await getDB();
  await db.delete(STORE_NAME, key);
};
