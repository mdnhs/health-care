import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const FetchServices = () => {
    const [services, setServices] = useState([]);
    // data load using fetch
    useEffect(() => {
      fetch("https://mdnhs.github.io/jsonapi/heart.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <div>
        <h4 className="mb-5 text-center text-2xl font-bold text-gray-800 md:text-2xl lg:text-2xl">
          Our Services
        </h4>
        <div className="flex items-center justify-center my-5">
          <div className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {services.map((card) => (
              <ServiceCard card={card} key={card.key}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FetchServices;