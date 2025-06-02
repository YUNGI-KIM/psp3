import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
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

// 제품 카드 (장바구니/구매)
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
        <div className="flex flex-col rounded-lg border overflow-hidden transition-transform hover:scale-105 bg-white dark:bg-gray-800 shadow">
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
                        <img src={cartImg} alt="장바구니" className="w-5 h-5" />
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

// 전체 제품 카탈로그
function ProductCatalog({ pageType, brandInput = "", showFilter = true, customTitle }) {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState(brandInput);

    const location = useLocation();

    // brandInput이 바뀌면 input도 동기화
    useEffect(() => {
        setSearchInput(brandInput);
    }, [brandInput]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [vehicleRes, accessoryRes] = await Promise.all([
                    fetch("https://clos21.kr/api/vehicle-products"),
                    fetch("https://clos21.kr/api/accessory-products"),
                ]);
                const [vehicleData, accessoryData] = await Promise.all([
                    vehicleRes.json(),
                    accessoryRes.json(),
                ]);
                // 검색어(brandInput)가 있으면 이름/브랜드 모두 부분매칭
                const lowerKeyword = brandInput ? brandInput.toLowerCase() : "";

                // pageType에 따라 분기
                let filteredVehicleData = vehicleData;
                let filteredAccessoryData = accessoryData;

                if (pageType === "자동차") {
                    filteredAccessoryData = [];
                } else if (pageType === "차량 악세서리") {
                    filteredVehicleData = [];
                }

                if (lowerKeyword) {
                    filteredVehicleData = filteredVehicleData.filter(
                        v =>
                            (v.brand && v.brand.toLowerCase().includes(lowerKeyword)) ||
                            (v.name && v.name.toLowerCase().includes(lowerKeyword))
                    );
                    filteredAccessoryData = filteredAccessoryData.filter(
                        a =>
                            (a.brand && a.brand.toLowerCase().includes(lowerKeyword)) ||
                            (a.name && a.name.toLowerCase().includes(lowerKeyword))
                    );
                }

                const combined = [
                    ...filteredVehicleData.map((v) => ({
                        id: v.id,
                        name: v.name,
                        category: "자동차",
                        image: v.image,
                        features: v.features || [],
                        price: v.priceAfterTax || "가격 정보 없음",
                        buttonText: v.buttonText || "시승 신청",
                    })),
                    ...filteredAccessoryData.map((a) => ({
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
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [brandInput, pageType]);

    // 여러 카테고리(자동차/악세서리) 자동 분류
    const pageTypes = pageType && pageType !== 'all' ? pageType.split('|') : ['all'];
    let availableProducts = products;
    if (pageTypes[0] !== 'all') {
        availableProducts = products.filter(product => pageTypes.includes(product.category));
    }
    const categories = [...new Set(availableProducts.map(p => p.category))];
    const filteredProducts = activeCategory === 'all'
        ? availableProducts
        : availableProducts.filter(p => p.category === activeCategory);

    // 검색 input 핸들링
    const handleBrandInputChange = e => setSearchInput(e.target.value);
    const handleSearch = e => {
        e.preventDefault();
        // 분기: 자동차 or 악세서리 or 전체
        if (searchInput.trim()) {
            if (pageType === "차량 악세서리") {
                navigate(`/buy/acc/${searchInput.trim()}`);
            } else if (pageType === "자동차") {
                navigate(`/buy/car/${searchInput.trim()}`);
            } else {
                // all일 경우 자동차/악세서리 모두에서 검색
                navigate(`/buy/${searchInput.trim()}`);
            }
        } else {
            if (pageType === "차량 악세서리") {
                navigate(`/buy/acc`);
            } else if (pageType === "자동차") {
                navigate(`/buy/car`);
            } else {
                navigate(`/buy`);
            }
        }
    };

    const pageTitle =
        customTitle
            ? customTitle
            : pageType === 'all'
                ? '전체 상품'
                : (categories.includes("자동차") && categories.length === 2)
                    ? `${categories.find(c => c !== "자동차")} 판매`
                    : pageType === '자동차'
                        ? '자동차 판매'
                        : pageType === '차량 악세서리'
                            ? '차량 악세서리 판매'
                            : `${pageTypes.join(', ')} 판매`;

    return (
        <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">{pageTitle}</h1>
            <form onSubmit={handleSearch} className="flex justify-center mb-8">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleBrandInputChange}
                    placeholder="브랜드명 또는 제품명으로 검색 (예: 현대, 와이퍼, 기아...)"
                    className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg">검색</button>
            </form>
            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                showFilter={showFilter && categories.length > 1}
            />
            {isLoading ? (
                <div className="text-center py-10 text-indigo-500 font-semibold text-lg">불러오는 중...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">해당 카테고리에 상품이 없습니다.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductCatalog;