import React from 'react';

import productImage1 from '/ImageSrc/Estimate/Hyundai/Sonata/sonataInterior.png';
import productImage2 from '/ImageSrc/Estimate/Hyundai/Sonata/sonataInterior.png';
import carImage1 from '/ImageSrc/Estimate/Hyundai/Sonata/sonataInterior.png';
import carImage2 from '/ImageSrc/Estimate/Hyundai/Sonata/sonataInterior.png';

const defaultProductsData = [
    { id: 1, name: '스마트폰', category: '전자기기', image: productImage1, features: ['6.7인치 올레드 디스플레이', '트리플 카메라 시스템', '5G 지원', '방수 및 방진 기능', '고속 충전'], price: '120만', buttonText: '구매하기' },
    { id: 2, name: '노트북', category: '전자기기', image: productImage2, features: ['15.6인치 FHD 디스플레이', '인텔 i7 프로세서', '16GB RAM', '512GB SSD', '백라이트 키보드', '지문 인식 센서', '10시간 배터리 수명'], price: '150만', buttonText: '장바구니에 담기' },
    { id: 3, name: '소나타', category: '자동차', image: carImage1, features: ['파노라마 선루프', 'Bose 프리미엄 사운드', '10.25인치 내비게이션', '앰비언트 라이트', '스마트 트렁크', '헤드업 디스플레이'], price: '3,200만', buttonText: '시승 신청' },
    { id: 4, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 5, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 6, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 7, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 8, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 9, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 10, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' },
    { id: 11, name: '아반떼', category: '자동차', image: carImage2, features: ['LED 헤드라이트', '스마트 크루즈 컨트롤', '운전자 주의 경고', '8인치 인포테인먼트', '무선 충전'], price: '2,500만', buttonText: '시승 신청' }
];

function ProductCard({ product }) {
    return (
        <div
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden w-full h-full transition-transform hover:scale-105"
            style={{ boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1), 6px 6px 6px rgba(0, 0, 0, 0.1)" }}
        >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded-full">{product.category}</span>
                </div>
                <ul className="flex-1 space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300">• {feature}</li>
                    ))}
                </ul>
                <div className="mt-auto text-center">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{product.price}₩</p>
                    <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg">
                        {product.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

function CategoryFilter({ categories, activeCategory, onCategoryChange, showFilter }) {
    if (!showFilter) return null;
    return (
        <div className="flex flex-wrap justify-center space-x-2 mb-8">
            <button
                className={`px-4 py-2 mb-2 rounded-full ${activeCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => onCategoryChange('all')}
            >
                전체 상품
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 mb-2 rounded-full ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

function ProductCatalog({ pageType, showFilter = true, customTitle, products = defaultProductsData }) {
    const [activeCategory, setActiveCategory] = React.useState('all');

    pageType = pageType || 'all';
    const pageTypes = pageType !== 'all' ? pageType.split('|') : ['all'];

    let availableProducts = products;

    if (pageTypes[0] !== 'all') {
        availableProducts = products.filter(product => pageTypes.includes(product.category));
    }

    const categories = [...new Set(availableProducts.map(product => product.category))];

    const filteredProducts = activeCategory === 'all'
        ? availableProducts
        : availableProducts.filter(product => product.category === activeCategory);

    let pageTitle;
    console.log(categories);
    if (customTitle) {
        pageTitle = customTitle;
    } else {
        if (categories.includes("자동차") && categories.length === 2) {
            const otherCategory = categories.find(c => c !== "자동차");
            pageTitle = `${otherCategory} 판매`;
            console.log(otherCategory);
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