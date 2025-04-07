import { useNavigate } from "react-router-dom";
import Header from "../buy/functions/Header";

function Support(){
    const navigate = useNavigate();
    
    
    return (
    <div>
        {Header()}
        
        <div className="w-full h-full bg-gray-200 absolute space-y-2 pt-10"> 
            
            <div class= "text-center text-2xl font-black">고객지원</div>
            <div class= "text-center">1:1 상담 신청하기</div>
            <div class=" relative text-center">
                <label for="name-with-label" class="px-5 text-gray-700">
                    이름
                </label>
                <input type="text" id="name-with-label" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="이름"/>
            </div>
            <div class=" relative text-center mr-5">
                <label for="name-with-label" class="px-5 text-gray-700">
                    이메일
                </label>
                <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="E-mail"/>
            </div>
            <div class=" relative text-center mr-10">
                <label for="name-with-label" class="px-5 text-gray-700">
                    휴대 전화
                </label>
                <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="휴대 전화, - 생략"/>
            </div>
            <div class="flex items-start ml-127 mb-4">
                <label for="message" class="w-40 text-gray-700 text-base mr-4 pt-11">
                    상담 문의 내용 입력
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="문의하기"
                    rows="4"
                    class="rounded-lg border border-gray-300 px-3 py-3 w-96 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                ></textarea>
                </div>
            <button
                onClick={() => navigate('/')}
                className="ml-183 px-4 py-2 bg-gray-200 hover:bg-gray-400 text-black rounded-lg text-base"
            >
                신청
            </button>

        </div> 
    </div>

    )
}

export default Support;