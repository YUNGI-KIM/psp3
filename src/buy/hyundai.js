
import { useNavigate } from "react-router-dom";
import Logo from '../Image/logo2.png';

function Hyundai() {
    const navigate = useNavigate();
    return (

        <div className="flex flex-col w-full">
            {/* 상단 헤더 */}
            <div className="flex items-center justify-between p-4">
                <a href="/">
                    <img className="w-40" src={Logo} alt="Logo" />
                </a>
                <div className="flex-1 flex justify-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="border rounded-full px-4 py-2 w-40 sm:w-140 ml-15.5 focus:outline-none text-base"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-4 py-2 bg-gray-50 hover:bg-gray-400 text-black rounded-lg text-base"
                    >
                        로그인
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-4 py-2 bg-gray-900 hover:bg-gray-400 text-white rounded-lg text-base"
                    >
                        회원가입
                    </button>
                </div>
            </div>

            {/* 내비게이션 바 */}
            <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
                <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">견적</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
                </div>
            </nav>
            {/*________________________________________________________________________________________________________________________________________________________ */}
            <div className="mt-1 border rounded-full mr-10 ml-10 ">
                <div className="mb-1 flex mr-40 ml-40 justify-between">
                    <label class="text-gray-700" for="animals">
                        제조사
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                제조사를 선택해주세요.
                            </option>
                            <option value="dog">
                                현대자동차
                            </option>
                            <option value="cat">
                                기아자동차
                            </option>
                            <option value="hamster">
                                제네시스
                            </option>
                            <option value="parrot">
                                KGM모빌리티
                            </option>
                            <option value="spider">
                                쉐보레
                            </option>
                            <option value="goldfish">
                                르노자동차
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        가격대
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                가격대를 선택해주세요
                            </option>
                            <option value="dog">
                                ~2,000만원
                            </option>
                            <option value="cat">
                                2,000만원 ~ 4,000만원
                            </option>
                            <option value="hamster">
                                4,000만원 ~ 6,000만원
                            </option>
                            <option value="parrot">
                                6,000만원 ~ 8,000만원
                            </option>
                            <option value="spider">
                                8,000만원 ~ 10,000만원
                            </option>
                            <option value="goldfish">
                                10,000만원 ~
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        차 종
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                차종을 선택하세요
                            </option>
                            <option value="dog">
                                세단
                            </option>
                            <option value="cat">
                                SUV
                            </option>
                            <option value="hamster">
                                MPV
                            </option>
                            <option value="parrot">
                                CUV
                            </option>
                            <option value="spider">
                                경차
                            </option>
                        </select>
                    </label>


                    <label class="text-gray-700" for="animals">
                        연료
                        <select id="animals" class="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            <option value="">
                                연료방식을 선택해주세요
                            </option>
                            <option value="dog">
                                휘발유
                            </option>
                            <option value="cat">
                                경유
                            </option>
                            <option value="hamster">
                                LPG
                            </option>
                            <option value="parrot">
                                전기
                            </option>
                            <option value="spider">
                                수소
                            </option>
                        </select>
                    </label>

                </div>
                <div className=" mt-2 mb-2 flex-1 flex justify-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="border rounded-full px-4 py-2 w-40 sm:w-140 ml-15.5 focus:outline-none text-base"
                    />
                </div>
            </div>

            {/* ___________________________사진 ______________________________________________________ㅍ*/}

            <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pr    icing-box lg:max-w-none lg:flex">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
                        <h3 class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                            아반떼밀이
                        </h3>
                        <div class="mt-8">
                            <div class="flex items-center">
                                <h4 class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
                                    What&#x27;s included
                                </h4>
                                <div class="flex-1 border-t-2 border-gray-200">
                                </div>
                            </div>
                            <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        All illimited components
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Own custom Tailwind styles
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Unlimited Templates
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Free premium dashboard
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Best ranking
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Prenium svg
                                    </p>
                                </li>
                                <li class="flex items-start lg:col-span-1">
                                    <div class="flex-shrink-0">
                                        <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        My wife
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                            가격
                        </p>
                        <div class="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
                            <span>
                                1억₩
                            </span>
                        </div>
                        <div class="mt-6">
                            <div class="rounded-md shadow">
                                <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    구매
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hyundai;