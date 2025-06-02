// Buy.js (상위 컴포넌트)
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import DropDown from "../functions/DropDown";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";

function Buy({ pageType: defaultPageType }) {
    const { brand, name, keyword } = useParams();
    const location = useLocation();

    let pageType = defaultPageType || "all";
    let searchInput = "";

    if (location.pathname.startsWith("/buy/car")) {
        pageType = "자동차";
        searchInput = brand || "";
    } else if (location.pathname.startsWith("/buy/acc")) {
        pageType = "차량 악세서리";
        searchInput = name || "";
    } else if (location.pathname === "/buy" || location.pathname.startsWith("/buy/")) {
        pageType = "all";
        searchInput = keyword || "";
    } else {
        pageType = defaultPageType || "all";
    }

    return (
        <div className="flex flex-col w-full">
            <Header />
            <DropDown />
            <div className="flex w-full">
                <ProductCatalog
                    pageType={pageType}
                    brandInput={searchInput}
                    showFilter={true}
                />
            </div>
        </div>
    );
}
export default Buy;