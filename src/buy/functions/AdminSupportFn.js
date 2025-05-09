function AdminSupportFn(){

    const status=["Completed","Incomplete"]
    const user=["user1","user2"]





    return(
<tr>
<td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
    <div class="flex items-center">
        <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">
                {user[0]}
            </p>
        </div>
    </div>
</td>
<td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
    <p class="text-gray-900 whitespace-no-wrap">
        2025/5/9
    </p>
</td>
<td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
    <p class="text-gray-900 whitespace-no-wrap">
            Hello
    </p>
</td>
<td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
        <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
        </span>
        <span class="relative">
            {status[0]}
        </span>
    </span>
</td>
<td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
    <a href="#" class="text-indigo-600 hover:text-indigo-900">
        Edit
    </a>
</td>
</tr>
    );
}

export default AdminSupportFn;