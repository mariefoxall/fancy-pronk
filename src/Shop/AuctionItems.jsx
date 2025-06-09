import bestinShowCups from "../assets/best-in-show-cups.jpg";
import bestinShowTrophy from "../assets/best-in-show-trophy.jpg";
import ceram from "../assets/ceram-corner.jpg";
import lampMaze from "../assets/chainmail-lamp-bead-maze.jpg";
import mermaid1 from "../assets/mermaid.jpg";
import mermaid2 from "../assets/mermaid-2.jpg";
import mermaid3 from "../assets/mermaid-3.jpg";
import betty1 from "../assets/betty.jpg";
import betty2 from "../assets/betty-2.jpg";
import betty3 from "../assets/betty-3.jpg";
import betty4 from "../assets/betty-5.jpg";
import lemon1 from "../assets/lemon-peeled.jpg";
import lemon2 from "../assets/lemon-peeled-2.jpg";
import lemon3 from "../assets/lemon-peeled-3.jpg";

import { getBidsForItem } from "../firebase";

const littleMermaid = {
  currentBid: 425,
  currentWinner: "",
  incrementValue: 10,
  itemId: "little-mermaid",
  itemName: "The Little Mermaid",
  description:
    "A true to life sized representation of the white plastic VHS covers that Disney used to have in the nineties. Porcelain and one billion glazes, some rare earth colour changing glazes. Cone 6 Oxidation.",
  imgSrc: [mermaid1, mermaid2, mermaid3],
  altText: "Porcelain rendition of The Little Mermaid VHS cover",
};

const tunnel = {
  currentBid: 425,
  incrementValue: 10,
  itemId: "tunnel-of-love",
  itemName: "The Tunnel of Love",
  description:
    "A true to life sized Betty and Veronica digest, folded with a Lisa Frank ad on the back cover. Porcelain and one billion glazes, some rare earth colour changing glazes. Cone 6 Oxidation. ",

  imgSrc: [betty1, betty2, betty3, betty4],
  altText:
    "A true to life sized porcelain Betty and Veronica digest, folded with a Lisa Frank ad on the back cover",
};

const peeledLemon = {
  currentBid: 250,
  incrementValue: 10,
  itemId: "peeled-lemon",
  itemName: "Peeled Lemon",
  description:
    "A life sized peeled lemon. This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. This lemon has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. ",
  imgSrc: [lemon1, lemon2, lemon3],
  altText: "Porcelain sculpture of a peeled lemon",
};

export const allAuctionitems = [littleMermaid, tunnel, peeledLemon];

export const getAuctionItemDBInfo = async (auctionItem) => {
  const allBids = await getBidsForItem(auctionItem.itemId);
  console.warn("allBids", allBids);
  if (allBids && allBids.length) {
    allBids.sort((a, b) => b.bid - a.bid);
    auctionItem.currentBid = allBids[0].bid;
    auctionItem.currentWinner = allBids[0].nickname;
  }
  return auctionItem;
};

export const getAuctionItemsWithBids = async () => {
  const settledAuctionItems = [];
  const mappedAuctionItems = allAuctionitems.map(async (auctionItem) => {
    console.warn("something in here", { auctionItem });
    return await getAuctionItemDBInfo(auctionItem);
  });
  await Promise.allSettled(mappedAuctionItems).then((promises) => {
    promises.forEach((promise) => {
      console.warn("something in here with a promise", { promise });

      settledAuctionItems.push(promise.value);
    });
  });
  return settledAuctionItems;
};
