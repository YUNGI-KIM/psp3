import React, { useEffect, useState } from "react";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";

function AccForCar() {
    const [productData, setProductData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

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
                setFilteredProducts(data);
            })
            .catch((error) => {
                console.error("데이터 불러오기 실패:", error);
            });
    }, []);

    // 검색 input이 변경될 때마다 필터링
    useEffect(() => {
        if (!searchInput.trim()) {
            setFilteredProducts(productData);
        } else {
            const lowerInput = searchInput.trim().toLowerCase();
            setFilteredProducts(productData.filter(
                p =>
                    (p.name && p.name.toLowerCase().includes(lowerInput)) ||
                    (p.brand && p.brand.toLowerCase().includes(lowerInput))
            ));
        }
    }, [searchInput, productData]);

    return (
        <>
            <Header />
            <div className="py-8 max-w-6xl mx-auto">
                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                        placeholder="제품명 또는 브랜드명으로 검색"
                        className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <ProductCatalog
                    pageType="차량 악세서리"
                    showFilter={false}
                    products={filteredProducts}
                />
            </div>
        </>
    );
}

export default AccForCar;