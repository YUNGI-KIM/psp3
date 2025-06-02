import DropDown from "../functions/DropDown";
import Header from "../functions/Header";

import ProductCatalog from "../functions/PricingCard";
import {useParams} from "react-router-dom";
import React from "react";


function Buy() {
    const { brand = "" } = useParams() || "";

    // const pageType = brand === "" ? "자동차" : brand + "|자동차";
    return (
        <div className="flex flex-col w-full">

            <Header />

            <DropDown />

            <div className="flex">
                {/*<ProductCatalog pageType={pageType} showFilter={false} />*/}
                <ProductCatalog pageType={"자동차"} brandInput={brand} showFilter={false} />
            </div>


        </div>
    );
}
export default Buy;