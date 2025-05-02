import { useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; // Context 가져오기

export default function LoginSessionVerify() {
    const { setUser } = useUser(); // Context 사용!

    const loginVerify = async () => {
        try {
            const response = await fetch("https://clos21.kr/user/me", {
                method: "GET",
                credentials: "include",
            });

            if (response.status === 401) {
                console.warn("❌ 인증 실패 (401)");
                localStorage.removeItem("user");
                setUser(null); // ✅ context도 초기화
                return;
            }

            if (response.ok) {
                const data = await response.json();
                console.log("✅ 인증 성공", data);
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data); // ✅ context 반영
            } else {
                console.warn(`❌ 인증 실패 (status: ${response.status})`);
                localStorage.removeItem("user");
                setUser(null);
            }
        } catch (error) {
            console.error("🚨 로그인 중 네트워크 오류:", error);
            localStorage.removeItem("user");
            setUser(null);
        }
    };

    useEffect(() => {
        loginVerify();
    }, [loginVerify]);

    return null; // 화면에 아무것도 출력하지 않음
}