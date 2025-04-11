
import { useNavigate } from "react-router-dom";
import Header from "../buy/functions/Header";


function Support() {
    const navigate = useNavigate();

    return (

    <div>
        <div>{Header()}</div>

            {/* 고객지원 본문 */}
            <div className="flex justify-center py-12 px-4">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl space-y-6">
                    <h2 className="text-center text-2xl font-bold text-gray-800">고객지원</h2>
                    <p className="text-center text-gray-600">1:1 상담 신청하기</p>

                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700">이름</label>
                            <input
                                type="text"
                                placeholder="이름"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">이메일</label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">휴대 전화</label>
                            <input
                                type="text"
                                placeholder="휴대 전화, - 생략"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">상담 문의 내용 입력</label>
                            <textarea
                                rows="5"
                                placeholder="문의하기"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                            ></textarea>
                        </div>
                        <div className="text-right pt-2">
                            <button
                                onClick={() => navigate('/')}
                                className="px-6 py-3 bg-black hover:bg-gray-700 text-white rounded-lg text-base"
                            >
                                신청
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
import { useNavigate } from "react-router-dom";
import Logo from '../Image/logo2.png';

function Support(){
    const navigate = useNavigate();
    
    
    return (
    <div>
        <div className="flex items-center justify-between p-4">
        <a href="/">
          <img className="w-40" src={Logo} alt="Logo" />
        </a>
        <div className="flex-1 flex justify-center">
          <input
            type="search"
            placeholder="Search"
            className="border rounded-full px-4 py-2 w-40 sm:w-140 ml-15.5 focus:outline-none text-base"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-400 text-black rounded-lg text-base"
          >
            로그인
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-400 text-white rounded-lg text-base"
          >
            회원가입
          </button>
        </div>
        </div>
        <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
        <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Estimate">견적</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
                <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
        </div>
      </nav>
        
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
                className="ml-183 px-4 py-2 bg-black hover:bg-gray-400 text-white rounded-lg text-base"
            >
                신청
            </button>

        </div> 
    </div>

    )
}

export default Support;