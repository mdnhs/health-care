import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  // destructuring
  const { key, title, img, discription } = props.card;
  return (
    <div className="max-w-lg my-1">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="/">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {title}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{discription}</p>
          <Link to={`/details/${key}`}>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="/"
            >
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
