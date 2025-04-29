import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserContext"; // ✅ 추가
import Logo from "../Image/logo2.png";

function Login() {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async () => {
        const formData = new FormData();
        formData.append("username", userId);
        formData.append("password", password);
        try {
            const response = await fetch("https://clos21.kr/login", {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            const data = await response.text();
            console.log("📡 서버 응답 상태코드:", response.status, data);

            if (!response.ok) {
                console.warn("❌ 로그인 실패:", data);
                setErrorMsg("로그인 실패");
                return;
            }

            // 로그인 성공 후 세션 확인
            const userResponse = await fetch("https://clos21.kr/user/me", {
                method: "GET",
                credentials: "include",
            });

            if (userResponse.ok) {
                const userInfo = await userResponse.json();
                localStorage.setItem("user", JSON.stringify(userInfo));
                setUser(userInfo); // ✅ 상태 업데이트
                alert("로그인 성공!");
                navigate("/");
            } else {
                console.warn("❌ 세션 사용자 정보 불러오기 실패");
            }

        } catch (error) {
            console.error("🚨 로그인 중 오류 발생:", error);
            setErrorMsg("서버 오류 발생");
        }
    };

    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:mt-60 sm:overflow-hidden">
            <img alt="Logo" className="pl-6 pt-1" src={Logo} />
            <div className="px-4 py-2 sm:px-10">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">Login Your Account</span>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="w-full space-y-6">
                        <input
                            type="text"
                            placeholder="Your ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="rounded-lg border border-gray-300 w-full py-2 px-4 shadow-sm focus:ring-2 focus:ring-purple-600"
                        />
                        <input
                            type="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-lg border border-gray-300 w-full py-2 px-4 shadow-sm focus:ring-2 focus:ring-purple-600"
                        />
                        {errorMsg && <div className="text-red-500 text-center">{errorMsg}</div>}
                        <button
                            onClick={handleLogin}
                            className="py-2 px-4 bg-black hover:bg-indigo-700 text-white w-full font-semibold rounded-3xl"
                        >
                            Login!
                        </button>
                        <Link to="/register">
                            <button className="py-2 px-4 bg-black hover:bg-indigo-700 text-white w-full font-semibold rounded-3xl">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs text-gray-500">This data are test</p>
            </div>
        </div>
    );
}

export default Login;