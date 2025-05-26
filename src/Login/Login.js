import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Logo from "../ImageSrc/logo2.png";

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

            const data = await response.json();

            console.log("res status:", response.status, data);

            if (!response.ok) {
                console.warn("Login failed:", data.message);
                setErrorMsg(data.message || "로그인 실패"); // 서버 메시지 있으면 표시
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
                setUser(userInfo);
                alert("로그인 성공!");

                window.location.href = "/";
            } else {
                console.warn("Session load failed");
            }
        } catch (error) {
            console.error("login error", error);
            setErrorMsg("Server Error");
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

                <div className="mt-3 w-full space-y-6">
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

                    {/* ✅ 오류 메시지 입력 폼 밑에 표시 */}
                    {errorMsg && (
                        <div className="text-red-500 text-sm text-center">{errorMsg}</div>
                    )}

                    <button
                        onClick={handleLogin}
                        className="py-2 px-4 bg-black hover:bg-indigo-700 text-white w-full font-semibold rounded-3xl"
                    >
                        Login!
                    </button>

                    <button
                        onClick={() => navigate('/register')}
                        className="py-2 px-4 bg-black hover:bg-indigo-700 text-white w-full font-semibold rounded-3xl"
                    >
                        Register
                    </button>
                </div>
            </div>

            <div className="px-4 py-4 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs text-gray-500">This data are test</p>
            </div>
        </div>
    );
}

export default Login;