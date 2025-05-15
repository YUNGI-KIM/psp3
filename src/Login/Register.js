import { useNavigate } from "react-router-dom";
import Logo from "../Image/logo2.png";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();  // 반드시 필요

        if (password !== confirmPassword) {
            setErrorMsg("비밀번호가 일치하지 않습니다.");
            return;
        }

        const formData = new FormData();
        formData.append("name", firstName + lastName);
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await fetch("https://clos21.kr/user", {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            const result = await response.text();
            console.log("status:", response.status);
            console.log("res:", result);

            if (response.ok) {
                alert("회원가입 성공!");
                navigate("/login"); // 로그인 페이지로만 이동!
            } else {
                setErrorMsg(result || "회원가입 실패");
            }
        } catch (error) {
            console.error("Register Error:", error);
            setErrorMsg("서버 오류가 발생했습니다.");
        }
    };

    return (
        <div className="bg-white text-center rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:mt-60 sm:overflow-hidden">
            <img alt="Logo" className="p-10" src={Logo} />
            <span className="text-sm text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account?
                <a href="/login" className="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </a>
            </span>

            <div className="p-6 mt-8">
                <div>
                    <div className="flex gap-4 mb-2">
                        <input type="text" placeholder="성" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                               className="rounded-lg border-gray-300 w-full py-2 px-4 shadow-sm" />
                        <input type="text" placeholder="이름" value={lastName} onChange={(e) => setLastName(e.target.value)}
                               className="rounded-lg border-gray-300 w-full py-2 px-4 shadow-sm" />
                    </div>
                    <div className="mb-2">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="rounded-lg border-gray-300 w-full py-2 px-4 shadow-sm" />
                    </div>
                    <div className="mb-2">
                        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="rounded-lg border-gray-300 w-full py-2 px-4 shadow-sm" />
                    </div>
                    <div className="mb-2">
                        <input type="password" id="password-confirm" placeholder="Password Confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                               className="rounded-lg border-gray-300 w-full py-2 px-4 shadow-sm" />
                    </div>

                    {errorMsg && <div className="text-red-500 text-sm mb-2">{errorMsg}</div>}

                    <button type="button"
                            onClick={handleSubmit}
                            className="py-2 px-4 bg-black hover:bg-indigo-700 text-white w-full font-semibold rounded-3xl">
                        Commit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
