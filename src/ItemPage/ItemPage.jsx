/* eslint-disable react/prop-types */
import "./ItemPage.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setBidToDB } from "../firebase";
import {
  allAuctionitems,
  getAuctionItemDBInfo,
  getAuctionItemsWithBids,
} from "../Shop/AuctionItems";

export default function ItemPage() {
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("x");
  const [bid, setBid] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [success, setSuccess] = useState(false);
  const [currentItem, setCurrentItem] = useState(
    allAuctionitems.find((item) => item.itemId === param)
  );

  useEffect(() => {
    setSuccess(false);
    const itemBasic = allAuctionitems.find((item) => item.itemId === param);
    setCurrentItem(itemBasic);
    async function fetch() {
      try {
        const data = await getAuctionItemDBInfo(itemBasic);
        setCurrentItem({ ...data });
      } catch {
        console.warn("oops");
      }
    }

    fetch();
  }, []);

  const checkBid = (event) => {
    if (
      event.target.value <
        currentItem.currentBid + currentItem.incrementValue &&
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

  const checkDisabled = () => {
    return !(name && email && phone && nickname && !error);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setNickname("");
    const bidInput = document.getElementsByName(`${currentItem.itemId}-bid`)[0];
    bidInput.value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dbResult = await setBidToDB(
        currentItem.itemId,
        bid,
        name,
        email,
        phone,
        nickname
      );
      console.warn(dbResult);
      async function fetch() {
        const data = await getAuctionItemDBInfo(currentItem);
        setCurrentItem({ ...data });
      }
      setSuccess(true);
      resetForm();
      fetch();
    } catch {
      console.warn("oops");
    }
  };

  const handleBidChange = (event) => {
    setSuccess(false);
    const { value } = event.target;
    const bidValue = Number(value);

    if (
      bidValue >= currentItem.currentBid + currentItem.incrementValue &&
      bidValue > 0
    ) {
      setBid(bidValue);
    }
  };

  const handleNameChange = (event) => {
    setSuccess(false);
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setSuccess(false);
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setSuccess(false);
    setEmail(event.target.value);
  };
  const handleNicknameChange = (event) => {
    setSuccess(false);
    setNickname(event.target.value);
  };

  return (
    <form
      id="bid-form"
      onSubmit={handleSubmit}
      noValidate
      className="submission-form"
      aria-describedby="form-description"
    >
      <div className="auction-item-page">
        <h3>{currentItem.itemName}</h3>
        <div className="pics-and-description">
          <div className="images">
            {currentItem.imgSrc.map((imgSrc) => {
              return (
                <img
                  key={imgSrc}
                  className="auction-image-page"
                  src={imgSrc}
                  alt={currentItem.altText}
                />
              );
            })}
          </div>
          <div>
            {currentItem.description.map((descripSection, index) => {
              return (
                <div>
                  <p key={index}>{descripSection}</p>
                  <br />
                </div>
              );
            })}
            <div className="bid-section">
              <div className="bid-info">
                <p>Current bid: ${currentItem.currentBid}</p>
                {currentItem.currentWinner && (
                  <p className="bid-winner">({currentItem.currentWinner})</p>
                )}
              </div>
              <p className="bid-instruction">
                New bids must be at least $10 higher than the current bid.
              </p>
              <p>
                Your bid: ${" "}
                <input
                  className="bid-input"
                  onChange={handleBidChange}
                  onBlur={checkBid}
                  onFocus={clearError}
                  id={currentItem.itemId}
                  type="number"
                  name={`${currentItem.itemId}-bid`}
                  min={currentItem.currentBid + currentItem.incrementValue}
                ></input>
              </p>
              {error && (
                <p className="bid-error">
                  Oops! Please enter a minimum bid of ${" "}
                  {currentItem.currentBid + currentItem.incrementValue}
                </p>
              )}{" "}
            </div>

            <div className="contact-info">
              <input
                type="text"
                name="name"
                onChange={handleNameChange}
                id="form-name"
                placeholder="Name"
                value={name}
                required
              ></input>
              <input
                type="email"
                name="email"
                onChange={handleEmailChange}
                id="form-email"
                placeholder="Email address"
                value={email}
                required
              ></input>

              <input
                type="tel"
                name="phone"
                onChange={handlePhoneChange}
                id="form-phone"
                placeholder="Phone number"
                value={phone}
                required
              ></input>
              <div className="nickname-input">
                <input
                  placeholder="Nickname"
                  id="form-nickname"
                  onChange={handleNicknameChange}
                  type="text"
                  name="nickname"
                  value={nickname}
                ></input>
                <p>(to display for winning bids)</p>
              </div>
            </div>

            <div className="submit-button-and-message">
              <button
                disabled={checkDisabled()}
                className="bid-submit-button"
                type="submit"
              >
                Submit
              </button>{" "}
              {success && (
                <p className="success">
                  Success! Your bid has been submitted :)
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  // return <p>;)</p>;
}
