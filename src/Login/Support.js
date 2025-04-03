import { Link } from "react-router-dom";

function Support(){
    return (
        <Link to="/Support">
    <div className="space-y-4"> 
        <div>고객지원</div>
        <div>1:1 상담 신청하기</div>
        <div class=" relative ">
            <label for="name-with-label" class="px-5 text-gray-700">
                이름
            </label>
            <input type="text" id="name-with-label" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="이름"/>
        </div>
        <div class=" relative ">
            <label for="name-with-label" class="px-5 text-gray-700">
                이메일
            </label>
            <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="E-mail"/>
        </div>
        <div class=" relative ">
            <label for="name-with-label" class="px-5 text-gray-700">
                휴대 전화
            </label>
            <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="휴대 전화"/>
        </div>
        <div class=" relative ">
            <label for="name-with-label" class="px-5 text-gray-700">
                상담 신청 정보 입력
            </label>
            <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-100px py-20 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email" placeholder="제목"/>
        </div>
    </div>  
        </Link>
    );
}

export default Support;