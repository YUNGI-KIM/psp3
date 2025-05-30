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
        <header className="w-full bg-white shadow-sm z-50">
            <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4 max-w-screen-xl mx-auto px-6">
                <a href="/" className="hover:scale-105 transition-transform duration-300">
                    <img className="w-32 sm:w-36 md:w-40" src={Logo} alt="Logo" />
                </a>

                {/* 검색창 */}
                <div className="flex items-center gap-2 w-full lg:max-w-md">
                    <input
                        type="search"
                        placeholder="Search"
                        className="flex-1 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-gray-300 shadow-sm text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                    <button type="submit" className="p-2 rounded-full hover:bg-gray-100 transition">
                        <svg width="24" height="24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                    {user ? (
                        <>
                            <span className="text-sm md:text-base font-semibold text-gray-800">{user.name}님</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition rounded-lg text-sm"
                            >
                                로그아웃
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate('/login')}
                                className="px-4 py-2 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition rounded-lg text-sm"
                            >
                                로그인
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition rounded-lg text-sm"
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* 내비게이션 바 */}
            <nav className="bg-black/70 backdrop-blur-md sticky top-0 z-40 shadow-md">
                <div className="flex justify-center gap-6 py-3 max-w-screen-xl mx-auto text-sm font-semibold text-white">
                    <a href="/buy" className="hover:text-yellow-300 transition">차량구매</a>
                    <a href="/AccForCar" className="hover:text-yellow-300 transition">차량용품</a>
                    <a href="/Estimator" className="hover:text-yellow-300 transition">견적</a>
                    <a href="/CarInformation" className="hover:text-yellow-300 transition">차량정보</a>
                    <a href="/Support" className="hover:text-yellow-300 transition">고객지원</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;