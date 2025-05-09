function AdminSupportFn(i) {
    const status = [
        {
            word: "Incomplete",
            color: "absolute inset-0 bg-red-200 rounded-full opacity-50",
            text: "relative inline-block px-3 py-1 font-semibold leading-tight text-red-900"
        },
        {
            word: "Completed",
            color: "absolute inset-0 bg-green-200 rounded-full opacity-50",
            text: "relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
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
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {Data[i].title}
                </p>
            </td>

            {/* 상태 */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 hidden md:table-cell">
                <span className={status[Data[i].status].text}>
                    <span aria-hidden="true" className={status[Data[i].status].color}></span>
                    <span className="relative">
                        {status[Data[i].status].word}
                    </span>
                </span>
            </td>

            {/* 답변 링크 (항상 보이게) */}
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Answer
                </a>
            </td>
        </tr>
    );
}

export default AdminSupportFn;