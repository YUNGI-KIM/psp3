import { useEffect } from "react";

export default function LoginSessionVerify() {

    const loginVerify = async () => {
        try {
            const response = await fetch("https://clos21.kr/user/me", {
                method: "GET",
                credentials: "include",
            });

            if (response.status === 401) {
                console.warn("❌ 인증 실패 (401)");
                localStorage.removeItem("user");
                return;
            }

            if (response.ok) {
                const data = await response.json();
                console.log("✅ 인증 성공", data);
                localStorage.setItem("user", JSON.stringify(data));
            } else {
                console.warn(`❌ 인증 실패 (status: ${response.status})`);
                localStorage.removeItem("user");
            }
        } catch (error) {
            console.error("🚨 로그인 중 네트워크 오류:", error);
            localStorage.removeItem("user");
        }
    };

    useEffect(() => {
        loginVerify();
    }, []);

    return null; // 화면에 아무것도 표시하지 않음
}