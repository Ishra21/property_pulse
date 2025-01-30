import React, { useEffect } from "react";
import PropertyFeatureCard from "../components/PropertyFeatureCard";
import HeroSection from "../components/HeroSection";
import FeaturedCard from "../components/FeaturedCard";
import PropertyCard from "../components/PropertyCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );



  useEffect(() => {

    // if (!user) {
    //   navigate("/login")
    // }
    if (isError && message) {
      toast.error(message, {
        position: "bottom-center",
        theme: "colored"
      })
    }
  }, [user, isError, message])


if(isLoading) {
    return <LoadingScreen/>
}

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Rental And Owners */}

      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <PropertyFeatureCard
              role={"renter"}
              heading={"For Renters"}
              subHeading={
                "Find your dream rental property. Bookmark properties and contact owners."
              }
              buttonText={"BrowseProperties"}
            />
            <PropertyFeatureCard
              role={"owners"}
              heading={"For Property Owners"}
              subHeading={
                "List your properties and reach potential tenants. Rent as an airbnb or long term."
              }
              buttonText={"Add Property"}
            />
          </div>
        </div>
      </section>

      {/* Featured Properties */}

      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeaturedCard />
            <FeaturedCard />
          </div>
        </div>
      </section>

      {/* Recent Properties */}

      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </section>

      {/* View All */}
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default Home;
