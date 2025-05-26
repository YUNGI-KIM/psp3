import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";

function AccForCar() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://clos21.kr/api/accessory-products", {
            method: "GET",
            credentials: "include"
        })
            .then((response) => {
                if (!response.ok) throw new Error("네트워크 응답 오류");
                return response.json();
            })
            .then((data) => {
                setProductData(data);
            })
            .catch((error) => {
                console.error("데이터 불러오기 실패:", error);
            });
    }, []);

    return (
        <>
            <Header />
            <div>
                <ProductCatalog pageType="차량 악세서리" showFilter={false} products={productData} />
            </div>
        </>
    );
}

export default AccForCar;