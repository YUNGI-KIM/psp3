// Buy.js (상위 컴포넌트)
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import DropDown from "../functions/DropDown";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";

function Buy() {
    const { brand, name } = useParams();
    const location = useLocation();

    // 라우트에 따라 분기
    let pageType = "all";
    let brandInput = "";

    if (location.pathname.startsWith("/buy/car/")) {
        pageType = "자동차";
        brandInput = brand || "";
    } else if (location.pathname.startsWith("/buy/acc/")) {
        pageType = "차량 악세서리";
        brandInput = name || "";
    } else if (brand) {
        // /buy/:brand (자동차+악세서리 모두에서 검색)
        pageType = "all";
        brandInput = brand;
    } else {
        // 모두 조회 조건에서 검색 아닐 때
        pageType = "all";
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