import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSessionVerify() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const loginVerify = async () => {
        try {
            const response = await fetch("https://clos21.kr/user/me", {
                method: "GET",
                credentials: "include", // ✅ 쿠키 인증 위해 쿠키 자동 첨부
            });

            console.log("📡 서버 응답 상태코드:", response.status);

            const data = await response.text();
            console.log(data);

            if (!response.ok) {
                console.warn("❌ 인증 실패:", data);
                setErrorMsg(data || "로그인 인증 실패");
                navigate("/login"); // 인증 실패 시 로그인 페이지로 이동
                return;
            }

            console.log("✅ 인증 성공:", data);
            // 인증 성공 시 원하는 동작 (예: 메인으로 이동) 추가 가능
            // navigate("/");
        } catch (error) {
            console.error("🚨 인증 요청 중 오류 발생:", error);
            setErrorMsg("서버 오류 발생");
            navigate("/login"); // 서버 오류 시도 로그인 페이지로 이동
        }
    };

    useEffect(() => {
        loginVerify();
    }, []);

    return (
        <>
            {/* 인증 검증 중 아무것도 안 보일 수 있음 */}
            {errorMsg && <div className="text-red-500 text-center">{errorMsg}</div>}
        </>
    );
}