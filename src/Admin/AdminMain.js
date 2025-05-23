import Header from '../functions/Header';
import ReceivedSupport from "./ReceivedSupport";
import SlideImage from "../Image/sideImage"

function AdminMainPage() {

    const unAnsweredCount = 5;
    const todayUnAnsweredCount = 2;

    const Image=0;

    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <span className="text-3xl font-bold text-indigo-600">{todayUnAnsweredCount}</span>
                        <span className="text-gray-600">오늘 들어온 문의 </span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <span className="text-3xl font-bold text-indigo-600">{unAnsweredCount}</span>
                        <span className="text-gray-600"> 현재까지 미답변 문의 </span>
                    </div>

                    <div className="flex items-center justify-center p-12">
                        <div className="mx-auto w-full max-w-[550px] bg-white">
                            <form className="py-6 px-9">
                                <div className="mb-6 pt-4">
                                    <label className="mb-5 block text-xl font-semibold text-[#07074D]">Upload Image For
                                        mainPage Slide</label>
                                    <div className="mb-8">
                                        <input type="file" name="file" id="file" className="sr-only"/>
                                        <label htmlFor="file"
                                               className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                            <div>
                                                <span className="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                                                <span
                                                    className="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                                                <span
                                                    className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">Browse</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Image Upload
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                        <ReceivedSupport/>

                    </div>
                </section>


                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
                    <div className="flex items-center p-4">
                            <span className="relative p-4 bg-purple-200 rounded-xl">
                                <svg width="40" fill="currentColor" height="40" className="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                </svg>
                            </span>
                        <span className="text-md pl-2 text-gray-800 dark:text-white">일간 매출</span>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="dark:text-white">현대차</span>
                            <span className="text-green-400">+$3,124</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="dark:text-white">기아</span>
                            <span className="text-green-400">+$23,240</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="dark:text-white">녹차</span>
                            <span className="text-red-400">-$1,904</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="dark:text-white">말차</span>
                            <span className="text-green-400">+$904</span>
                        </div>
                    </div>
                </div>

                {/* 월간 매출 */}
                <div className="p-4 bg-white shadow-lg rounded-xl dark:bg-gray-800">
                    <div className="flex items-center">
                            <span className="relative p-4 bg-purple-200 rounded-xl">
                                <svg width="40" fill="currentColor" height="40" className="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                </svg>
                            </span>
                        <p className="ml-2 text-black text-md dark:text-white">Monthly Total Sales</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-4xl font-bold text-gray-700 dark:text-gray-100">
                            34,500<span className="text-sm">$</span>
                        </p>
                        <div className="flex items-center mt-2 text-sm text-green-500">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                            </svg>
                            <span className="ml-1">5.5%</span>
                            <span className="ml-1 text-gray-400">vs last month</span>
                        </div>
                    </div>
                </div>
            </section>

            </div>
        </div>
    );
}

export default AdminMainPage;