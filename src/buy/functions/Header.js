import { useNavigate } from "react-router-dom";
import Logo from '../../Image/logo2.png';
import { useEffect, useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

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

                    <button type="submit" className="relative p-2 rounded-full">
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="#999"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <div className="text-base font-semibold text-black">
                            {user.name}님
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>

            {/* 내비게이션 바 */}
            <nav className="flex-1 bg-black text-gray-300 p-4 md:flex justify-center text-lg">
                <div className="flex justify-between w-full max-w-screen-xlg mx-auto px-4 md:px-10 lg:px-20 xl:px-32">
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량구매</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/AccForCar">차량용품</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Estimator">견적</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">차량정보</a>
                    <a className="text-gray-300 hover:text-yellow-200 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Support">고객지원</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;