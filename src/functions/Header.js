import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import LogoW from "../ImageSrc/logo1.png";
import LogoB from "../ImageSrc/logo2.png";

function Header() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    const logoSrc = isHome ? LogoW : LogoB;

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log("Header user status Changed:", user);
        console.log("User Permission: ", user.perm);
    }, [user]);


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

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            // 항상 전체 상품에서 검색 결과를 보여주도록 이동
            navigate(`/buy/${searchValue.trim()}`);
        } else {
            navigate('/buy');
        }
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
        <header className={`${wrapperPos} w-full z-50 transition-colors duration-300 ${textColor}`}>
            {/* 헤더 상단 */}
            <div className={`${topBg} transition-colors duration-300`}>
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 py-4 gap-4">
                    {/* 로고 */}
                    <a href="/" className="hover:scale-105 transition-transform duration-300">
                        <img src={logoSrc} alt="Vroom" className="w-36" />
                    </a>

                    {/* 검색 */}
                    <form
                        onSubmit={handleSearchSubmit}
                        className={`flex items-center rounded-full px-4 py-2 w-full lg:max-w-md shadow-inner
                                ${isHome ? "bg-white/10 border border-white/20" : "bg-gray-100 border border-gray-300"}`}>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder="모델명, 브랜드로 검색..."
                            className={`flex-1 bg-transparent outline-none placeholder-gray-500 text-sm
                            ${isHome ? "text-white" : "text-gray-800"}`}
                        />
                        <button type="submit" className="ml-1" aria-label="검색">
                            <svg className={`w-5 h-5 ${isHome ? "text-white" : "text-gray-500"}`}
                                 fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </form>

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

            {/* 내비게이션 메뉴 */}
            <nav className={`${navBg} transition-colors duration-300`}>
                <div className="flex justify-center gap-6 py-3 text-sm font-semibold">
                    {["차량구매", "차량용품", "견적", "차량정보", "고객지원"].map((label, idx) => {
                        const to =
                            label === "차량구매"    ? "/buy/car" :
                                label === "차량용품"    ? "/buy/acc" :
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
                    {user && user.perm === 1 && (
                        <a href="/adminMain"
                           className={`relative group transition-colors duration-200
                                ${isHome ? "text-white hover:text-yellow-300" : "text-gray-800 hover:text-yellow-500"}`}>
                            <span>Admin</span>
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300" />
                        </a>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
