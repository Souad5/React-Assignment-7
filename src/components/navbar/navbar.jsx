import React, { useState } from "react";
import AuctionTable from "../table/Table";
import BookmarkCart from "../bookmarkCart/bookmarkcart";

const Navbar = () => {
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-20">
        <div className="navbar-start">
          <h1 className="text-blue-500 font-bold text-2xl">
            Action<span className="text-yellow-500">Gallery</span>
          </h1>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-[15px]">Home</a>
          <a className="btn btn-ghost text-[15px]">Auctions</a>
          <a className="btn btn-ghost text-[15px]">Categories</a>
          <a className="btn btn-ghost text-[15px]">How it works</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
        </div>
      </div>

      <main className="bg-[url('../B11A7-Simple-React-Assignment/assets/Banner-min.jpg')] border bg-cover bg-center w-full h-[530px] pt-32 py-20 px-20">
        <h1 className="font-bold text-5xl text-white mt-4">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-white text-xl opacity-50 mt-4">
          Discover rare collectibles, luxury goods, and vintage <br />
          treasures in our curated auctions
        </p>
        <button className="btn mt-4">Explore Auctions</button>
      </main>

      <section className="bg-blue-100 p-12">
        <div>
          <h1 className="text-[32px]">Active Auctions</h1>
          <p className="text-[20px]">Discover and bid on extraordinary items</p>
        </div>
        <div className="grid grid-cols-4  gap-2 mt-4">
          <div className="col-span-3 h-[625px]  bg-white rounded-xl">
            <AuctionTable favorites={favorites} setFavorites={setFavorites} ></AuctionTable>
          </div>

          <div >
            <BookmarkCart
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
