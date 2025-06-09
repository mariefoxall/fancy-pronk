import { Database } from "firebase-firestore-lite";

const db = new Database({ projectId: "fancy-pronk" });

const itemARef = db.ref("Item-A/item-a");
export const itemA = await itemARef.get();

export const getBidsForItem = async (itemId) => {
  const query = db.ref(itemId);
  return (await query?.list())?.documents;
};

export const setBidToDB = async (itemId, bid, name, email, phone, nickname) => {
  await db.ref(itemId).add({
    bid,
    name,
    phone,
    email,
    nickname,
  });
};
