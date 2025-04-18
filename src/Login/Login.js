import { Link } from "react-router-dom";
import Logo from "../Image/logo2.png";


function Login() {
    return (

        <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:mt-60 sm:overflow-hidden">
            <img alt="Logo" className="pl-6 pt-1"  src={Logo}/>
            <div class="px-4 py-2 sm:px-10">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div class="relative flex justify-center text-sm leading-5">
                        <span class="px-2 text-gray-500 bg-white">
                            Login Your Account
                        </span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="w-full space-y-6">
                        <div class="w-full">
                            <div class=" relative ">
                                <input type="id" id="search-form-price" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your ID" />
                            </div>
                        </div>
                        <div class="w-full">
                            <div class=" relative ">
                                <input type="password" id="search-form-location" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your PassWord" />
                            </div>
                        </div>

                        <div>
                            <span class="block w-full rounded-md ">
                                <Link to="/">
                                    <button type="button" class="py-2 px-4 bg-black hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-3xl ">
                                        Login!
                                    </button>
                                </Link>
                            </span>
                        </div>
                        <div>
                            <span class="pb-2 block w-full rounded-md ">
                                <Link to="/register">
                                    <button type="button" class="py-2 px-4 bg-black hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-3xl ">
                                        Resister
                                    </button>
                                </Link>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
            <div class="px-4 py-4 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p class="text-xs leading-5 text-gray-500">
                    This data are test
                </p>
            </div>
        </div>

    );
}

export default Login;