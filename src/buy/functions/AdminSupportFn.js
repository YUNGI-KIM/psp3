function AdminSupportFn({ data }) {
    const status = [
        {
            word: "Incomplete",
            color: "absolute inset-0 bg-red-200 rounded-full opacity-50",
            text: "relative inline-block px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-1.5 md:text-base font-semibold leading-tight text-red-900"
        },
        {
            word: "Completed",
            color: "absolute inset-0 bg-green-200 rounded-full opacity-50",
            text: "relative inline-block px-1.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-1.5 md:text-base font-semibold leading-tight text-green-900"
        }
    ];

    return (
        <tr>
            {/* 이름 */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 hidden md:table-cell">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {data.name}
                        </p>
                    </div>
                </div>
            </td>

            {/* 요청 날짜 */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 hidden md:table-cell">
                <p className="text-gray-900 whitespace-no-wrap">
                    {data.createdAt}
                </p>
            </td>

            {/* 제목 (항상 보이게) */}
            <td className="pl-3 pr-1 py-4.5 text-xs break-all sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {data.title}
                </p>
            </td>

            {/* 상태 */}
            <td className="py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base bg-white border-b border-gray-200">
                <span className={status[data.status].text}>
                    <span aria-hidden="true" className={status[data.status].color}></span>
                    <span className="relative">
                        {status[data.status].word}
                    </span>
                </span>
            </td>

            {/* 답변 링크 (항상 보이게) */}
            <td className="py-2 px-2 text-xs text-right sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base bg-white border-b border-gray-200">
                <a onClick={()=>navigate("/AnsweForQ")} className="text-indigo-600 hover:text-indigo-900">
                    Answer
                </a>
            </td>
        </tr>
    );
}

export default AdminSupportFn;