import sonata from '../../Image/Estimate/Hyundai/Sonata/sonataInterior.png';

function PricingCard() {
    return (
        <div className="flex pt-3">
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg icing-box lg:max-w-none lg:flex">

                    {/* 왼쪽 카드 내용 */}
                    <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                            아반떼밀이
                        </h3>

                        <img alt="Sonata Interior" src={sonata} className="w-full rounded-xl object-cover mt-6" />

                        <div className="mt-8">
                            <div className="flex items-center">
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                                <h4 className="flex-shrink-0 px-4 text-sm font-semibold text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    설명
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>

                            <ul className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {[
                                    "All unlimited components",
                                    "Own custom Tailwind styles",
                                    "Unlimited Templates",
                                    "Free premium dashboard",
                                    "Best ranking",
                                    "Premium SVG",
                                    "My wife",
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.285 6.708l-11.02 11.02-5.657-5.657 1.414-1.415 4.243 4.243 9.606-9.606z" />
                                            </svg>
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700 dark:text-gray-200">
                                            {text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 오른쪽 가격 카드 */}
                    <div className="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                            가격
                        </p>
                        <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900 dark:text-white">
                            <span>1억₩</span>
                        </div>
                        <div className="mt-6">
                            <button type="button" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                구매
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PricingCard;
