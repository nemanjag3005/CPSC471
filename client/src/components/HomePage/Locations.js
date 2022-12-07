import React from "react";
import { Element } from "react-scroll";

const Locations = () => {
  return (
    <div className="bg-gray-800">
      <Element name="locations">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-gray-200">
            Available at 6 locations in Calgary.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex items-center justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym Sarcee
              </h1>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym Southwest
              </h1>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym Northeast
              </h1>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym Northland
              </h1>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym Downtown
              </h1>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-600 py-8 px-8">
              <h1 className="text-xl text-red-700 font-bold">
                Muscle Gym 51st
              </h1>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Locations;
