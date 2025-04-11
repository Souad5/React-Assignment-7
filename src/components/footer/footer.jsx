import React from "react";

const footer = () => {
  return (
    <>
      <div>
      <footer className="footer footer-horizontal footer-center  p-15">
  <aside>
    
    <p className="font-bold text-2xl text-blue-500">
      Auction<span className="text-yellow-500">Gallery</span>
     </p>
     <div className="flex gap-5">
    <p>Bid.</p>
    <p> Win.</p>
    <p> Own.</p>
     </div>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <p>Home</p>
    <p>Auctions</p>
    <p>Categories</p>
    <p>How to works</p>
    </div>
  </nav>
  <p>&copy;{new Date().getFullYear()} AuctionHub - All right reserved</p>
</footer>
      </div>
    </>
  );
};

export default footer;
