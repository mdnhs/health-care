import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FetchDetails = () => {
  const { serviceId } = useParams();

  const [services, setServices] = useState([]);
  // serviece data load using fetch
  useEffect(() => {
    fetch("https://mdnhs.github.io/jsonapi/heart.json")
      .then((res) => res.json())
      .then((data) => {
        /*<----- Data Finding For While After Login & toSting 
                For Show Details Data-----> */
        const foundService = data.find(
          (service) => service.key.toString() === serviceId
        );
        setServices(foundService);
        console.log(foundService);
      });
  }, [serviceId]);
  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <div className="max-w-lg my-1">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="/">
              <img className="rounded-t-lg" src={services?.img} alt="" />
            </a>
            <div className="p-5">
              <a href="/">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {services?.title}
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                {services?.discription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchDetails;
