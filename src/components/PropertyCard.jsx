import { Link, useLocation } from "react-router-dom";
import PropertyImage from "../assets/properties/f1.jpg";

const PropertyCard = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      {pathname === "/saved-properties" ? (
        <button className="absolute top-0 left-0 mt-2 ml-2 w-8 h-8 p-2 rounded-full bg-white flex items-center justify-center transition-colors hover:bg-red-100">
          <i className="fas fa-trash text-red-600"></i>
        </button>
      ) : (
        <></>
      )}
      <img src={PropertyImage} alt="" className="object-cover rounded-t-xl" />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">Apartment</div>
          <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          $4,200/mo
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <i className="fa-solid fa-bed"></i> 3
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <i className="fa-solid fa-bath"></i> 2
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            1,500 <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <i className="fa-solid fa-money-bill"></i> Weekly
          </p>
          <p>
            <i className="fa-solid fa-money-bill"></i> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <span className="text-orange-700"> Boston MA </span>
          </div>
          <Link
            to="/property/123"
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
