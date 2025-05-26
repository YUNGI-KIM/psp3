import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Logo from '../ImageSrc/logo2.png';

function Header() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Header user status Changed:", user);
    }, [user]);

    const handleLogout = async () => {
        try {
            const response = await fetch("https://clos21.kr/logout", {
                method: "GET",
                credentials: "include",
            });

            if (response.ok) {
                console.log("Server Logout Success");
            } else {
                console.warn("Server Logout failed");
            }
        } catch (error) {
            console.error("Server Logout req failed:", error);
        }

        localStorage.removeItem("user");
        setUser(null);
        navigate("/login", { replace: true });
    };

    return (
        <div className="w-full">
            {/* 상단 헤더 */}
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 gap-3 lg:gap-0 max-w-screen-xl mx-auto w-full px-4">
                <a href="/">
                    <img className="w-32 sm:w-36 md:w-40" src={Logo} alt="Logo" />
                </a>

                {/* 검색창 */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-center">
                    <input
                        type="search"
                        placeholder="Search"
                        className="border rounded-full px-4 py-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-192 focus:outline-none text-sm md:text-base"
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

                {/* 로그인/로그아웃 버튼 */}
                <div className="flex items-center flex-wrap justify-center gap-2 lg:gap-4 mt-2 lg:mt-0">
                    {user ? (
                        <>
                            <span className="text-black text-sm md:text-base font-semibold whitespace-nowrap">{user.name}님</span>
                            <button
                                onClick={handleLogout}
                                className="px-3 py-2 bg-gray-50 hover:bg-gray-400 hover:text-yellow-200 text-black rounded-lg text-sm md:text-base"
                            >
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="px-3 py-2 bg-gray-50 hover:bg-gray-400 hover:text-yellow-200 text-black rounded-lg text-sm md:text-base"
                            >
                                로그인
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="px-3 py-2 bg-gray-900 hover:bg-gray-400 hover:text-yellow-200 text-white rounded-lg text-sm md:text-base"
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* 내비게이션 메뉴 */}
            <nav className="bg-black text-gray-300 p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-6 max-w-screen-xl mx-auto">
                    <a href="/buy" className="text-gray-300 hover:text-yellow-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md font-medium">차량구매</a>
                    <a href="/AccForCar" className="text-gray-300 hover:text-yellow-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md font-medium">차량용품</a>
                    <a href="/Estimator" className="text-gray-300 hover:text-yellow-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md font-medium">견적</a>
                    <a href="/CarInformation" className="text-gray-300 hover:text-yellow-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md font-medium">차량정보</a>
                    <a href="/Support" className="text-gray-300 hover:text-yellow-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md font-medium">고객지원</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
