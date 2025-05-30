import React, { useEffect, useState } from 'react';

function ProductCatalog({ pageType, showFilter = true, customTitle }) {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [vehicleRes, accessoryRes] = await Promise.all([
                    fetch("https://clos21.kr/api/vehicle-products"),
                    fetch("https://clos21.kr/api/accessory-products"),
                ]);

                const [vehicleData, accessoryData] = await Promise.all([
                    vehicleRes.json(),
                    accessoryRes.json(),
                ]);

                const vehicleMapped = vehicleData.map((v) => ({
                    id: v.id,
                    name: v.name,
                    category: "자동차",
                    image: v.image,
                    features: v.features || [],
                    price: v.priceAfterTax || "가격 정보 없음",
                    buttonText: v.buttonText || "시승 신청",
                }));

                const accessoryMapped = accessoryData.map((a) => ({
                    id: a.id,
                    name: a.name,
                    category: a.category || "차량 악세서리",
                    image: a.image,
                    features: a.features || [],
                    price: a.price,
                    buttonText: a.buttonText || "구매",
                }));

                const combined = [...vehicleMapped, ...accessoryMapped];
                setProducts(combined);
            } catch (error) {
                console.error("🚨 데이터 불러오기 실패:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>{customTitle || "상품 카탈로그"}</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} width={100} />
                        <h3>{product.name}</h3>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <button>{product.buttonText}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductCatalog;