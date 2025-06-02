import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartImg from "../Image/etc/cart.png";

// 카테고리 필터
function CategoryFilter({ categories, activeCategory, onCategoryChange, showFilter }) {
    if (!showFilter) return null;
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
                className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => onCategoryChange('all')}
            >
                전체 상품
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

//  제품 카드 (장바구니 기능 포함)
function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate('/purchase', { state: { product } });
    };

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(product);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        navigate('/cart');
    };

    return (
        <div
            className="flex flex-col rounded-lg border overflow-hidden transition-transform hover:scale-105 bg-white dark:bg-gray-800 shadow"
        >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-6 flex flex-col flex-grow bg-[#1e293b] text-white">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <span className="text-xs bg-indigo-500 px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                    {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-bold">{product.price}₩</p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-[#E0E7FF] w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <img src={cartImg} alt="장바구니" className="w-5 h-5"/>
                    </button>
                </div>
                <button
                    onClick={handleBuy}
                    className="bg-indigo-600 hover:bg-indigo-700 w-full py-2 rounded-lg font-semibold"
                >
                    {product.buttonText || '구매'}
                </button>
            </div>
        </div>
    );
}

//  전체 제품 카탈로그
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

    const categories = [...new Set(availableProducts.map(p => p.category))];

    const filteredProducts = activeCategory === 'all'
        ? availableProducts
        : availableProducts.filter(p => p.category === activeCategory);

    const pageTitle = customTitle
        ? customTitle
        : (categories.includes("자동차") && categories.length === 2)
            ? `${categories.find(c => c !== "자동차")} 판매`
            : pageType === 'all'
                ? '전체 상품'
                : `${pageTypes.join(', ')} 판매`;

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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">해당 카테고리에 상품이 없습니다.</p>
                )}
            </div>
        </div>
    );
}

export default ProductCatalog;