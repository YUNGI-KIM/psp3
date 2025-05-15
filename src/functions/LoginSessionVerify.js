import { useEffect } from "react";
import { useUser } from "../contexts/UserContext"; // Context 가져오기

export default function LoginSessionVerify() {
    const { setUser } = useUser(); // Context 사용!

    useEffect(() => {
        const loginVerify = async () => {
            try {
                const response = await fetch("https://clos21.kr/user/me", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.status === 401) {
                    console.warn("Unauthorized (401)");
                    localStorage.removeItem("user");
                    setUser(null);
                    return;
                }

                if (response.ok) {
                    const data = await response.json();
                    console.log("Authorized", data);
                    localStorage.setItem("user", JSON.stringify(data));
                    setUser(data);
                } else {
                    console.warn(`Authorized Failed (status: ${response.status})`);
                    localStorage.removeItem("user");
                    setUser(null);
                }
            } catch (error) {
                console.error("Error:", error);
                localStorage.removeItem("user");
                setUser(null);
            }
        };

        loginVerify();
    }, []);

    return null; // 화면에 아무것도 출력하지 않음
}
