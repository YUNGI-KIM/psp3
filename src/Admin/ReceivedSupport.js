import AdminSupportFn from "../functions/AdminSupportFn";
import { useEffect, useState } from "react";

function ReceviedSupport() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://clos21.kr/api/articles", {
            method: "GET",
            credentials: "include"
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch articles");
                }
                return res.json();
            })
            .then((data) => {
                setArticles(data);
            })
            .catch((err) => {
                console.error("Error loading articles:", err);
            });
    }, []);

    return (
        <div>
            <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                <div class="py-8">
                    <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
                        <div className=" py-5 sm:py-0">
                        <h2 class="text-2xl leading-tight text-center">
                            Admin Support Session
                        </h2>
                        </div>
                        <div class="text-end">
                            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                <div class=" relative ">
                                    <input type="text" id="&quot;form-subscribe-Filter" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-center" placeholder="name" />
                                </div>
                                <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800  bg-white border-b border-gray-200  hidden md:table-cell">
                                            User
                                        </th>
                                        <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800  bg-white border-b border-gray-200  hidden md:table-cell">
                                            Requset at
                                        </th>
                                        <th scope="col" class="px-5 py-3 sm:px-2 sm:py-1 sm:text-sm text-sm font-normal text-left text-gray-800  bg-white border-b border-gray-200 ">
                                            Title
                                        </th>
                                        <th scope="col" class="px-5 py-3 sm:px-2 sm:py-1 sm:text-sm text-sm font-normal text-right text-gray-800  bg-white border-b border-gray-200 ">
                                            Status
                                        </th>
                                        <th scope="col" class="px-5 py-3 sm:px-2 sm:py-1 sm:text-sm text-sm font-normal text-right text-gray-800  bg-white border-b border-gray-200 ">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articles.map((article, index) => (
                                        <AdminSupportFn key={index} data={article} />
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} export default ReceviedSupport;