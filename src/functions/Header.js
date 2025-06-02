<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
=======
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> origin/feature_YUNGI-KIM
import { useUser } from "../contexts/UserContext";
import LogoW from "../ImageSrc/logo1.png";
import LogoB from "../ImageSrc/logo2.png";

function Header() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
<<<<<<< HEAD
    const [showFloatingNav, setShowFloatingNav] = useState(false);
=======
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const logoSrc = isHome ? LogoW : LogoB;
>>>>>>> origin/feature_YUNGI-KIM

    useEffect(() => {
        const handleScroll = () => {
            setShowFloatingNav(window.scrollY > 100); // 100px 이상 스크롤 시 표시
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setShowFloatingNav]);

    const handleLogout = async () => {
        try {
            const response = await fetch("https://clos21.kr/logout", {
                method: "GET",
                credentials: "include",
            });
            if (response.ok) console.log("Server Logout Success");
            else console.warn("Server Logout failed");
        } catch (error) {
            console.error("Server Logout req failed:", error);
        }
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login", { replace: true });
    };

    // 메인 vs 서브 분기
    const wrapperPos = isHome ? "fixed top-0 left-0" : "relative";
    const topBg     = isHome
        ? "bg-black/40 backdrop-blur-md shadow-lg"
        : "bg-inherit backdrop-blur-none shadow-none";
    const navBg     = isHome
        ? "bg-black/30 backdrop-blur-md border-t border-white/10"
        : "bg-inherit border-none";
    const textColor = isHome ? "text-white" : "text-gray-800";

    return (
<<<<<<< HEAD
        <>
            <div className="w-full bg-white shadow-md z-40 relative">
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
=======
        <header className={`${wrapperPos} w-full z-50 transition-colors duration-300 ${textColor}`}>
            {/* 헤더 상단 */}
            <div className={`${topBg} transition-colors duration-300`}>
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 py-4 gap-4">
                    {/* 로고 */}
                    <a href="/" className="hover:scale-105 transition-transform duration-300">
                        <img src={logoSrc} alt="Vroom" className="w-36" />
                    </a>

                    {/* 검색 */}
                    <div className={`flex items-center rounded-full px-4 py-2 w-full lg:max-w-md shadow-inner
                           ${isHome ? "bg-white/10 border border-white/20" : "bg-gray-100 border border-gray-300"}`}>
                        <input
                            type="text"
                            placeholder="모델명, 브랜드도 검색..."
                            className={`flex-1 bg-transparent outline-none placeholder-gray-500 text-sm
                         ${isHome ? "text-white" : "text-gray-800"}`}
                        />
                        <svg className={`w-5 h-5 ml-2 ${isHome ? "text-white" : "text-gray-500"}`}
                             fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
>>>>>>> origin/feature_YUNGI-KIM
                    </div>

                    {/* 로그인 / 회원가입 */}
                    <div className="flex gap-2">
                        {user ? (
                            <>
                                <span className="text-sm font-semibold">{user.name}님</span>
                                <button
                                    onClick={handleLogout}
                                    className={`px-4 py-2 text-sm rounded-lg transition
                             ${isHome
                                        ? "bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                                        : "bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-800"}`}
                                >
                                    로그아웃
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate("/login")}
                                    className={`px-4 py-2 text-sm rounded-lg transition
                             ${isHome
                                        ? "bg-white/10 border border-white/20 hover:bg-white/20 text-white"
                                        : "bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-800"}`}
                                >
                                    로그인
                                </button>
                                <button
                                    onClick={() => navigate("/register")}
                                    className={`px-4 py-2 text-sm rounded-lg shadow transition
                             ${isHome
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                                >
                                    회원가입
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

<<<<<<< HEAD
                {/* 기본 네비게이션 메뉴 */}
                <nav className="bg-black text-gray-300 p-2 sm:p-4 text-xs sm:text-sm md:text-base">
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-4 md:gap-6 max-w-screen-xl mx-auto">
                        <a href="/buy" className="text-gray-300 hover:text-yellow-200 px-2 py-1">차량구매</a>
                        <a href="/AccForCar" className="text-gray-300 hover:text-yellow-200 px-2 py-1">차량용품</a>
                        <a href="/Estimator" className="text-gray-300 hover:text-yellow-200 px-2 py-1">견적</a>
                        <a href="/CarInformation" className="text-gray-300 hover:text-yellow-200 px-2 py-1">차량정보</a>
                        <a href="/Support" className="text-gray-300 hover:text-yellow-200 px-2 py-1">고객지원</a>
                    </div>
                </nav>
            </div>

            {/* 스크롤 시 따라오는 내비게이션 메뉴 */}
            {showFloatingNav && (
                <nav className="fixed top-0 left-0 right-0 bg-black text-gray-300 p-4 sm:p-6 z-50 shadow-md transition-all duration-300">
                    <div className="flex justify-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
                        <a href="/buy" className="hover:text-yellow-200">차량구매</a>
                        <a href="/AccForCar" className="hover:text-yellow-200">차량용품</a>
                        <a href="/Estimator" className="hover:text-yellow-200">견적</a>
                        <a href="/CarInformation" className="hover:text-yellow-200">차량정보</a>
                        <a href="/Support" className="hover:text-yellow-200">고객지원</a>
                    </div>
                </nav>
            )}
        </>
=======
            {/* 내비게이션 메뉴 */}
            <nav className={`${navBg} transition-colors duration-300`}>
                <div className="flex justify-center gap-6 py-3 text-sm font-semibold">
                    {["차량구매", "차량용품", "견적", "차량정보", "고객지원"].map((label, idx) => {
                        const to =
                            label === "차량구매"    ? "/buy" :
                                label === "차량용품"    ? "/AccForCar" :
                                    label === "견적"        ? "/Estimator" :
                                        label === "차량정보"    ? "/CarInformation" :
                                            "/Support";
                        return (
                            <a key={idx} href={to}
                               className={`relative group transition-colors duration-200
                             ${isHome ? "text-white hover:text-yellow-300" : "text-gray-800 hover:text-yellow-500"}`}>
                                <span>{label}</span>
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300" />
                            </a>
                        );
                    })}
                </div>
            </nav>
        </header>
>>>>>>> origin/feature_YUNGI-KIM
    );
}

export default Header;