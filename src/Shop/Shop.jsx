import { useState, useEffect } from "react";
import "./Shop.css";
import ItemPreview from "../ItemPreview/ItemPreview";
import { allAuctionitems, getAuctionItemsWithBids } from "./AuctionItems";

function Shop() {
  const [auctionItems, setAuctionItems] = useState(allAuctionitems);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getAuctionItemsWithBids();
        setAuctionItems([...data]);
      } catch {
        console.warn("oops");
      }
    }

    fetch();
  }, []);

  return (
    <div className="shop-page">
      <h2>FANCY PRONK</h2>
      <h2>Silent Auction</h2>
      <div className="form-description">
        <h3>Bids are now closed!</h3>
        <p>Winners will be contacted via email.</p>
        <br />
        <p>Thanks for participating in the auction :)</p>
      </div>

      {/* <h3>Bids close at 2pm EST Saturday, June 21</h3>
      <p className="form-description" id="form-description">
        To place a bid on a silent auction item, please click through to the
        item page!
        <br />
        <br />
        To check if you still have the high bid, refresh the page and see if
        your bid and nickname are displayed :)
        <br />
        <br />
        Please note that, as is typical in an auction, the starting bids are
        lower than market value. <br />
        Each item has a reserve price that must be met in order to guarantee the
        sale!
        <br />
        <br />
        If you have any questions or if you&apos;d like to retract a bid, please
        send an email to{" "}
        <a className="email-link" href="mailto:info@yyycollection.com">
          info@yyycollection.com
        </a>
      </p>

      <div className="auction-items">
        {auctionItems.length > 0 &&
          auctionItems.map((item) => {
            return <ItemPreview key={item.itemId} item={item} />;
          })}
      </div> */}
    </div>
  );
}

export default Shop;
