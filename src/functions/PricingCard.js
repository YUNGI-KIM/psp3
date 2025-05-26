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

                const combined = [
                    ...vehicleData.map((v) => ({
                        id: v.id,
                        name: v.name,
                        category: "자동차",
                        image: v.image,
                        features: v.features || [],
                        price: v.priceAfterTax || "가격 정보 없음",
                        buttonText: v.buttonText || "시승 신청",
                    })),
                    ...accessoryData.map((a) => ({
                        id: a.id,
                        name: a.name,
                        category: a.category || "차량 악세서리",
                        image: a.image,
                        features: a.features || [],
                        price: a.price,
                        buttonText: a.buttonText || "구매",
                    })),
                ];

                setProducts(combined);
            } catch (error) {
                console.error("🚨 데이터 불러오기 실패:", error);
            }
        };

        fetchData();
    }, []);

    const pageTypes = pageType && pageType !== 'all' ? pageType.split('|') : ['all'];

    let availableProducts = products;
    if (pageTypes[0] !== 'all') {
        availableProducts = products.filter(product => pageTypes.includes(product.category));
    }

    const categories = [...new Set(availableProducts.map(product => product.category))];

    const filteredProducts = activeCategory === 'all'
        ? availableProducts
        : availableProducts.filter(product => product.category === activeCategory);

    let pageTitle;
    if (customTitle) {
        pageTitle = customTitle;
    } else {
        if (categories.includes("자동차") && categories.length === 2) {
            const otherCategory = categories.find(c => c !== "자동차");
            pageTitle = `${otherCategory} 판매`;
        } else {
            pageTitle = pageType === 'all' ? '전체 상품' : `${pageTypes.join(', ')} 판매`;
        }
    }

    return (
        <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">{pageTitle}</h1>
            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                showFilter={showFilter && categories.length > 1}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500">해당 카테고리에 상품이 없습니다.</p>
                )}
            </div>
        </div>
    );
}

export default ProductCatalog;