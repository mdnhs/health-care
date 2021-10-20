import React from "react";
import { NavLink } from "react-router-dom";
import FetchData from "../FetchData/FetchData";
import Partner from "../Partner/Partner";
import Rating from "../Rating/Rating";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <TopBanner></TopBanner>
      <FetchData></FetchData>
      {/* service show more button */}
      <div className="flex items-center justify-center my-5">
        <NavLink to="/services">
          <button className="inline-block px-5 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8 md:transform md:-translate-y-2">
            Show More Services
          </button>
        </NavLink>
      </div>
      <Partner></Partner>
      <Rating></Rating>
    </div>
  );
};

export default Home;
