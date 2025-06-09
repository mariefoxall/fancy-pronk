/* eslint-disable react/prop-types */
import "./Item.css";
import { Link } from "react-router";

export default function ItemPreview({ item }) {
  const { currentBid, currentWinner, itemId, itemName, imgSrc, altText } = item;

  const linkParam = `/item?x=${itemId}`;

  return (
    <Link to={linkParam}>
      <div className="auction-item-section">
        <h3>{itemName}</h3>
        <img className="auction-image" src={imgSrc[0]} alt={altText} />
        <div className="bid-info">
          <p>Current bid: ${currentBid}</p>
          {currentWinner && <p className="winner">({currentWinner})</p>}
        </div>
      </div>
    </Link>
  );
}
