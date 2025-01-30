import React from "react";
import Search from "../components/Search";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/Pagination";


const Properties = () => {
    return (
        <>
            <Search />
            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </div>
                <Pagination />
            </section>
        </>
    );
};

export default Properties;
