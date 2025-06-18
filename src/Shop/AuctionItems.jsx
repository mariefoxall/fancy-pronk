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
import term1 from "../assets/term.jpg";
import term2 from "../assets/term-2.jpg";
import term3 from "../assets/term-3.jpg";
import term4 from "../assets/term-4.jpg";
import metal1 from "../assets/metal.jpg";
import metal2 from "../assets/metal-2.jpg";
import metal3 from "../assets/metal-3.jpg";
import oyster4 from "../assets/oyster-full.jpg";
import oyster5 from "../assets/oyster-full2.jpg";
import oyster6 from "../assets/oyster-full-3.jpg";
import pomegranate1 from "../assets/pomegranate.jpg";
import pomegranate2 from "../assets/pomegranate-2.jpg";
import boot1 from "../assets/boot.jpg";
import boot2 from "../assets/boot-2.jpg";
import boot3 from "../assets/boot-3.jpg";
import boot4 from "../assets/boot-4.jpg";
import boot5 from "../assets/boot-5.jpg";
import boot6 from "../assets/boot-6.jpg";
import chainKeys1 from "../assets/chain-keys.jpg";
import chainKeys2 from "../assets/chain-keys-2.jpg";
import grapes1 from "../assets/grapes.jpg";
import grapes2 from "../assets/grapes-2.jpg";
import matches1 from "../assets/matches.jpg";
import matches2 from "../assets/matches-2.jpg";
import matches3 from "../assets/matches-3.jpg";

import { getBidsForItem } from "../firebase";

const littleMermaid = {
  currentBid: 425,
  currentWinner: "",
  incrementValue: 10,
  itemId: "the-little-mermaid",
  itemName: "The Little Mermaid",
  description: [
    "A true to life sized representation of the white plastic VHS covers that Disney used to have in the nineties. Porcelain and one billion glazes, some rare earth colour changing glazes. Cone 6 Oxidation.",
    "All pieces were made at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [mermaid1, mermaid2, mermaid3],
  altText: "Porcelain rendition of The Little Mermaid VHS cover",
};

const tunnel = {
  currentBid: 450,
  incrementValue: 10,
  itemId: "tunnel-of-love",
  itemName: "The Tunnel of Love",
  description: [
    "A true to life sized Betty and Veronica digest, folded with a Lisa Frank ad on the back cover. Porcelain and one billion glazes, some rare earth colour changing glazes. Cone 6 Oxidation. ",
    "All pieces were made at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [betty1, betty2, betty3, betty4],
  altText:
    "A true to life sized porcelain Betty and Veronica digest, folded with a Lisa Frank ad on the back cover",
};

const peeledLemon = {
  currentBid: 250,
  incrementValue: 10,
  itemId: "peeled-lemon",
  itemName: "Peeled Lemon",
  description: [
    "A life sized peeled lemon. This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. ",
    "This lemon has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. ",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [lemon1, lemon2, lemon3],
  altText: "Porcelain sculpture of a peeled lemon",
};
const terminator = {
  currentBid: 450,
  incrementValue: 10,
  itemId: "terminator",
  itemName: "Terminator VHS",
  description: [
    "A true to life sized representation of Terminator on VHS, double sided.",
    "Porcelain and one billion glazes, some rare earth colour changing glazes. Cone 6 Oxidation. ",
    "All pieces were made at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [term4, term1, term2, term3],
  altText: "Porcelain rendition of the classic Terminator film on VHS",
};

const heavyMetal = {
  currentBid: 375,
  incrementValue: 10,
  itemId: "heavy-metal",
  itemName: "Heavy Metal VHS",
  description: [
    "A true to life sized representation of Heavy Metal on VHS. Porcelain and one billion glazes. Cone 6 Oxidation. ",
    "All pieces were made at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [metal1, metal2, metal3],
  altText: "Porcelain rendition of the VHS film case of Heavy Metal",
};

const oyster = {
  currentBid: 300,
  incrementValue: 10,
  itemId: "oyster",
  itemName: "The Extremely Gay Oyster",
  description: [
    "A life sized BC Oyster (BC because it's pretty big). This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    " This oyster has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [oyster5, oyster4, oyster6],
  altText: "life-sized porcelain oyster with nerikomi detailing",
};
const pomegranate = {
  currentBid: 475,
  incrementValue: 10,
  itemId: "pomegranate",
  itemName: "Pomegranate",
  description: [
    "A life sized Pomegranate half. This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present.",
    " This piece has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. ",
    "Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. ",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [pomegranate2, pomegranate1],
  altText: "life-sized porcelain half-pomegranate with nerikomi detailing",
};
const boot = {
  currentBid: 475,
  incrementValue: 10,
  itemId: "boot",
  itemName: "The Boot",
  description: [
    "A size 8 nerikomi Doc Martin boot. This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. ",
    "This boot has no glaze and was made using repeating pattern nerikomi cane with coloured clay. The firing process makes a glazed surface with singular results. Porcelaneous stoneware, stains and oxides. Reduction salt fired, cone 10. ",
    "Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. This piece specifically has a large crack (shown in photos) that is mostly on the bottom of the piece and has been priced accordingly.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [boot1, boot2, boot3, boot4, boot5, boot6],
  altText: "Life-size porcelain Doc Marten boot with nerikomi detailing",
};
const chainKeys = {
  currentBid: 275,
  incrementValue: 10,
  itemId: "chain-keys",
  itemName: "Chain Keys",
  description: [
    'A key chain with a 14" chain and bull clip. There are two house keys and one bike lock key. ',
    "This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. This keychain has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced.",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [chainKeys1, chainKeys2],
  altText:
    'Porcelain key chain with 14" chain, bull clip, two house keys and one bike lock key',
};

const grapes = {
  currentBid: 500,
  incrementValue: 10,
  itemId: "grapes",
  itemName: "Grapes",
  description: [
    'A large bunch of grapes approx 8"x5"x5". This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. ',
    "These stripey grapes have no glaze and were made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. ",
    "Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. ",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [grapes1, grapes2],
  altText: "Porcelain bunch of grapes with nerikomi detailing",
};

const matches = {
  currentBid: 175,
  incrementValue: 10,
  itemId: "matches",
  itemName: "Book of Matches",
  description: [
    "A life sized book of matches using nerikomi cane pattern and reactive colour with tiny matches inside. This piece was atmospherically fired in the gas reduction salt kiln at Medalta in Medicine Hat Alberta during a year-long artist residency from September 2024 to present. ",
    "This matchbook has no glaze and was made using nerikomi techniques with coloured clay. The firing process makes a glazed surface with singular results. Porcelain, stains and oxides. Reduction salt fired, cone 10. Sculptural nerikomi pieces, especially fired in the atmospheric kilns may have small cracks and imperfections that are to be embraced. ",
    "This piece ships after July 12th, as it is part of a current exhibition.",
  ],
  imgSrc: [matches1, matches2, matches3],
  altText: "Porcelain life-sized book of matches with nerikomi detailing",
};

export const allAuctionitems = [
  littleMermaid,
  tunnel,
  peeledLemon,
  terminator,
  heavyMetal,
  oyster,
  pomegranate,
  boot,
  chainKeys,
  grapes,
  matches,
];

export const getAuctionItemDBInfo = async (auctionItem) => {
  const allBids = await getBidsForItem(auctionItem.itemId);
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
    return await getAuctionItemDBInfo(auctionItem);
  });
  await Promise.allSettled(mappedAuctionItems).then((promises) => {
    promises.forEach((promise) => {
      settledAuctionItems.push(promise.value);
    });
  });
  return settledAuctionItems;
};
