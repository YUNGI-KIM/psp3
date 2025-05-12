function AdminSupportFn(i) {
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

    const Data = [
        { Name: "user", RequestDate: "2025/04/12", title: "집에 보내주세요", status: 1 },
        { Name: "aaaa", RequestDate: "2025/05/02", title: "asdfasfasf", status: 0 },
        { Name: "bbbb", RequestDate: "2025/04/30", title: "asdf", status: 0 },
        { Name: "cccc", RequestDate: "2025/05/01", title: "집에 보내주세요", status: 1 }
    ];

    return (
        <tr>
            {/* 이름 */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 hidden md:table-cell">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {Data[i].Name}
                        </p>
                    </div>
                </div>
            </td>

            {/* 요청 날짜 */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 hidden md:table-cell">
                <p className="text-gray-900 whitespace-no-wrap">
                    {Data[i].RequestDate}
                </p>
            </td>

            {/* 제목 (항상 보이게) */}
            <td className="px-3 py-4.5 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {Data[i].title}
                </p>
            </td>

            {/* 상태 */}
            <td className="py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base bg-white border-b border-gray-200">
                <span className={status[Data[i].status].text}>
                    <span aria-hidden="true" className={status[Data[i].status].color}></span>
                    <span className="relative">
                        {status[Data[i].status].word}
                    </span>
                </span>
            </td>

            {/* 답변 링크 (항상 보이게) */}
            <td className="py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-5 md:text-base bg-white border-b border-gray-200">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Answer
                </a>
            </td>
        </tr>
    );
}

export default AdminSupportFn;