import Header from "../buy/functions/Header"

function AnswerForQ() {
    const questions = [
        { name: "user", requestDate: "2025/04/12", title: "테스트 제목입니다", detail: " 지금 이 문장은 자동으로 엔터가 쳐지는지 테스트를 하기 위해 있는 문장이니 수정을 엄금합니다.", status: 1 },
        { name: "aaaa", requestDate: "2025/05/02", title: "receivec", status: 0 },
        { name: "bbbb", requestDate: "2025/04/30", title: "asdf", status: 0 },
        { name: "cccc", requestDate: "2025/05/01", title: "집에 보내주세요", status: 1 }
    ]

    return (
        <div>
            {Header()}

            <form class="flex justify-center w-full  space-x-3">

                <div class="w-full  text-center max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                    Answer - {questions[1].title}
                    <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    </div>

                    <div class="col-span-2">
                        <div class="col-span-2 lg:col-span-1">
                            <div class=" relative  py-5">
                                <input type="text" id="title" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="title" />
                            </div>
                        </div>
                        
                        <div class="col-span-2">
                            <label class="text-gray-700" for="name">
                                <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                </textarea>
                            </label>
                        </div>

                        <div class="col-span-2 text-right">
                            <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );

}
export default AnswerForQ;