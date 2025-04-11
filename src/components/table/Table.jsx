import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuctionTable = ({ favorites, setFavorites }) => {
  const [auctions, setAuctions] = useState([]);


  useEffect(() => {
    fetch("/auctions.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  const handleFavorite = (item) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === item.id);
    
    if (!isAlreadyFav) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
      toast(`${item.title} added to your favorite list`);
    }
    
  };

  return (
    <>
      <table className="w-full bg-white rounded-xl">
        <thead>
          <tr className="border-b border-blue-100">
            <th className="text-start p-4">Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((item) => (
            <tr key={item.id} className="border-b border-blue-100">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-15 h-12 rounded"
                  />
                  <span className="flex-grow">{item.title}</span>
                </div>
              </td>

              <td className="text-center font-bold">${item.currentBidPrice}</td>
              <td className="text-center">{item.timeLeft}</td>
              <td className="text-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => handleFavorite(item)}
                  color={favorites.some((fav) => fav.id === item.id) ? 'red' : 'black'}
                  className={favorites.some((fav) => fav.id === item.id) ? 'cursor-not-allowed' : 'cursor-pointer'}
                  
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
};
export default AuctionTable;