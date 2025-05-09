import { title } from "framer-motion/client";
import { s } from "framer-motion/m";

function AdminSupportFn(i) {

    const status = [ "Incomplete","Completed"]
    const Data = [
         { Name: "user", RequestDate:"2025/04/12", title:"집에 보내주세요", status: 1	 }
        ,{ Name: "aaaa", RequestDate:"2025/05/02", title:"asdfasfasf", status: 0	 }
        ,{ Name: "bbbb", RequestDate:"2025/04/30", title:"asdf", status: 0	 }
        ,{ Name: "cccc", RequestDate:"2025/05/01", title:"집에 보내주세요", status: 1	 }


    ]


    return (
        <tr>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div class="flex items-center">
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {Data[i].Name}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">
                    {Data[i].RequestDate}
                </p>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-no-wrap">
                    {Data[i].title}
                </p>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                    </span>
                    <span class="relative">
                        {status[Data[i].status]}
                    </span>
                </span>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Answer
                </a>
            </td>
        </tr>
    );
}

export default AdminSupportFn;