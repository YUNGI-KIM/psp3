import React from "react";
import { useParams, useLocation } from "react-router-dom";
import DropDown from "../functions/DropDown";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";

function Buy({ defaultPageType }) {
    const { brand, name } = useParams();
    const location = useLocation();

    let pageType = "all";
    let brandInput = "";

    if (location.pathname.startsWith("/buy/car/")) {
        pageType = "자동차";
        brandInput = brand || "";
    } else if (location.pathname.startsWith("/buy/acc/")) {
        pageType = "차량 악세서리";
        brandInput = name || "";
    } else {
        pageType = defaultPageType || "all";
        brandInput = "";
    }

    return (
        <div className="flex flex-col w-full">
            <Header />
            <DropDown />
            <div className="flex w-full">
                <ProductCatalog
                    pageType={pageType}
                    brandInput={brandInput}
                    showFilter={true}
                />
            </div>
        </div>
    );
}

export default Buy;