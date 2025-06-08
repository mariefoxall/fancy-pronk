/* eslint-disable react/prop-types */
import "./Item.css";
import { useState } from "react";

export default function Item({ item, handleChange }) {
  const {
    currentBid,
    currentWinner,
    incrementValue,
    itemId,
    itemName,
    description,
    imgSrc,
    altText,
  } = item;
  const [error, setError] = useState(false);

  const checkBid = (event) => {
    if (
      event.target.value < currentBid + incrementValue &&
      event.target.value > 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const clearError = () => {
    setError(false);
  };

  return (
    <div className="auction-item-section">
      <h3>{itemName}</h3>
      <p>{description}</p>
      <img className="auction-image" src={imgSrc} alt={altText} />
      <div className="bid-info">
        <p>Current bid: ${currentBid}</p>
        <p className="winner">({currentWinner})</p>
      </div>
      <p>
        Your bid: ${" "}
        <input
          className="bid-input"
          onChange={handleChange}
          onBlur={checkBid}
          onFocus={clearError}
          id={itemId}
          type="number"
          name={itemId}
          min={currentBid + incrementValue}
        ></input>
      </p>
      {error && (
        <p className="bid-error">
          Oops! Please enter a minimum bid of {currentBid + incrementValue}
        </p>
      )}
    </div>
  );
}
