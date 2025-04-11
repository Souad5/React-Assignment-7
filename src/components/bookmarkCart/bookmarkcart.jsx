import React from "react";

const BookmarkCart = ({ favorites, onRemoveFavorite }) => {
  const isEmpty = favorites.length === 0;

  return (
    <div>
      <table className="w-full bg-white rounded-xl shadow text-left">
        <thead>
          <tr className="border-b border-blue-100">
            <th className="p-4 text-lg font-semibold text-center">
              ❤️ Favorite Items
            </th>
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr className="border-b border-blue-100">
              <td className="p-4">
                <h2 className="text-center font-medium">No favorites yet</h2>
                <p className="text-sm text-gray-500 text-center">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </td>
            </tr>
          ) : (
            favorites.map((item) => (
              <tr key={item.id} className="border-b border-blue-100">
                <td className="p-4">
                  <div className="flex items-center justify-between pb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-10 object-cover rounded mr-2"
                    />
                    <div className="flex-grow">
                      <div className=" text-gray-800 text-[14px]">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        ${item.currentBidPrice} &nbsp;&nbsp; Bids: {item.bidsCount}
                      </div>
                    </div>
                    <button
                      className="text-xl text-gray-500 hover:text-red-500 ml-4 cursor-pointer"
                      onClick={() => onRemoveFavorite(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr className="p-4 flex justify-between text-sm text-gray-700">
            <td>Total Bids Amount</td>
            <td className="font-bold text-black">
              $
              {favorites.reduce((sum, item) => sum + item.currentBidPrice, 0).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BookmarkCart;
