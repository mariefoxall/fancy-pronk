import { Database } from "firebase-firestore-lite";

const db = new Database({ projectId: "fancy-pronk" });

const itemARef = db.ref("Item-A/item-a");
export const itemA = await itemARef.get();

console.warn(itemA);
