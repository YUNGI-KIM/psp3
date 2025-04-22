import { Link, useNavigate } from "react-router-dom";
import Logo from "../Image/logo2.png";
import { useState } from "react";

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("password", password);

        try {
            const response = await fetch("https://clos21.kr/login", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMsg(errorData.message || "로그인 실패");
                return;
            }

            const data = await response.json();
            console.log("로그인 성공:", data);
            alert("로그인 성공:", data);
            navigate("/"); // 로그인 성공 후 홈으로 이동
        } catch (error) {
            console.error("로그인 오류:", error);
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
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Your ID"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                className="rounded-lg border border-gray-300 w-full py-2 px-4 shadow-sm focus:ring-2 focus:ring-purple-600"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="password"
                                placeholder="Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-lg border border-gray-300 w-full py-2 px-4 shadow-sm focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        {errorMsg && (
                            <div className="text-red-500 text-sm text-center">{errorMsg}</div>
                        )}

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
