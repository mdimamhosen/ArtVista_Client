import React from "react";

const ShopByPrice = () => {
  return (
    <div className="  py-8 px-4 lg:px-0 font-mono">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Shop by Price</h1>
          <p className="text-gray-600">
            Describe your products, collection, content etc...
          </p>
        </div>

        <div className="grid grid-cols-2 w-11/12 mx-auto lg:grid-cols-4 gap-8 mt-8">
          <div className="rounded-lg shadow-lg shadow-orange-50 p-6 text-center bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-lg lg:text-2xlfont-bold mb-2 text-amber-700">
              Under
            </h1>
            <h1 className="text-4xl lg:text-8xlfont-bold text-amber-800">
              $25
            </h1>
          </div>

          <div className="rounded-lg shadow-lg shadow-orange-50 p-6 text-center bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-lg lg:text-2xlfont-bold mb-2 text-amber-700">
              Under
            </h1>
            <h1 className="text-4xl lg:text-8xlfont-bold text-amber-800">
              $299
            </h1>
          </div>
          <div className="rounded-lg shadow-lg shadow-orange-50 p-6 text-center bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-lg lg:text-2xlfont-bold mb-2 text-amber-700">
              Under
            </h1>
            <h1 className="text-4xl lg:text-8xlfont-bold text-amber-800">
              $499
            </h1>
          </div>
          <div className="rounded-lg shadow-lg shadow-orange-50 p-6 text-center bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-lg lg:text-2xlfont-bold mb-2 text-amber-700">
              Under
            </h1>
            <h1 className="text-4xl lg:text-8xlfont-bold text-amber-800">
              $999
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByPrice;
