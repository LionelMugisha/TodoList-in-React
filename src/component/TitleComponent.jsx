import React from "react";
import Navigation from "./layout/Navigation";

function Title()  { 

    return (
        <div className="flex justify-around mt-5">
            <div>
                <p className="text-2xl font-bold">Itinerary tracker</p>
            </div>
            <div className="align-center mt-100px">
                <Navigation />
            </div>
        </div>  
    );
}

export default Title;