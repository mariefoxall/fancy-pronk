import bestinShowCups from "../assets/best-in-show-cups.jpg";
import bestinShowTrophy from "../assets/best-in-show-trophy.jpg";
import ceram from "../assets/ceram-corner.jpg";
import lampMaze from "../assets/chainmail-lamp-bead-maze.jpg";

const receptionLamp = {
  currentBid: 400,
  currentWinner: "JAZZ",
  incrementValue: 10,
  itemId: "reception-lamp",
  itemName: "Reception Lamp",
  description: "Thrown porcelain, stain, lucite",
  imgSrc: bestinShowCups,
  altText:
    "Thrown porcelain lamp with stacked bubble base, ceramic and lucite shade",
};

const portalLamp = {
  currentBid: 550,
  incrementValue: 10,
  itemId: "portal-lamp",
  itemName: "Portal Lamp",
  description: 'Steel wire, paper, glass, 72" tall',

  imgSrc: bestinShowTrophy,
  altText:
    "Paper mache 6-ft tall portal lamp with blue, lime green, coral and lavender paint.",
};

const chainPile = {
  currentBid: 470,
  incrementValue: 10,
  itemId: "chain-pile-lamp",
  itemName: "Pile of Chain Lamp",
  description: "Tinted porcelain, thrown lamp base",
  imgSrc: ceram,
  altText: "Pink chainmail porcelain table lamp",
};

const standLamp = {
  currentBid: 700,
  incrementValue: 25,
  itemId: "standing-lamp",
  itemName: "Standing Lamp",
  description: 'Thrown porcelain, poured porcelain shade, 55" tall',
  imgSrc: lampMaze,
  altText: "Tall thrown porcelain lamp with blue, pink and yellow accents",
};

export const allAuctionitems = [
  receptionLamp,
  portalLamp,
  chainPile,
  standLamp,
];
