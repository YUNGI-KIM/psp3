import DropDown from "../functions/DropDown";
import Header from "../functions/Header";

import ProductCatalog from "../functions/PricingCard";
import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Buy({ pageType: defaultPageType }) {
    const { brand, name } = useParams();
    const location = useLocation();

    // 경로에 따라 분기
    let pageType = "all";
    let searchInput = "";

    if (location.pathname.startsWith("/buy/car/")) {
        pageType = "자동차";
        searchInput = brand || "";
    } else if (location.pathname.startsWith("/buy/acc/")) {
        pageType = "차량 악세서리";
        searchInput = name || "";
    } else {
        pageType = defaultPageType || "all";
    }

    return (
        <div className="flex flex-col w-full">
            <Header />
            <DropDown />
            <div className="flex w-full">
                <ProductCatalog pageType={pageType} brandInput={searchInput} showFilter={true} />
            </div>
        </div>
    );
}
export default Buy;