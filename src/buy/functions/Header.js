import { useNavigate } from "react-router-dom";

import Logo from '../../Image/logo2.png';


function Header() {
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

            {/* 내비게이션 바 */}
            <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
                <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">부속부품</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">견적</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
                </div>
            </nav>
        </div>
    );
}
export default Header;
