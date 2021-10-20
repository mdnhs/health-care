import React from "react";

const TopBanner = () => {
  return (
    <div>
      <div className="py-12 bg-gray-50 md:py-24">
        <div className="grid max-w-screen-xl -mt-10 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
            <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">
              The best way to get health consultants
            </h1>
            <p className="mb-6 text-lg text-gray-600 xl:text-xl lg:mb-8 xl:mb-10">
              Pain, discomfort & loss of appetite can be early signs of
              something serious. Tomorrow’s quality of life can be decided
              today. Take charge of your health.
            </p>
            <div className="flex mb-6 space-x-4">
              <input
                type="text"
                placeholder="enter your email..."
                className="flex-1  px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none"
              />
              <button className="inline-block px-5 py-2 font-semibold md:text-sm text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </div>
          <div className="order-1 mx-2 lg:w-10/12 col-span-2 md:order-2 xl:col-span-3 lg:ml-20">
            <img
              src="https://cdn.dribbble.com/users/2372549/screenshots/5447990/media/8de2c8dd81a171b26070196e61d13856.png"
              className="rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
