import { useUser } from "../contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAdmin({ children }) {
    const { user } = useUser();
    const location = useLocation();

    // user가 없거나 perm이 1이 아니면 메인페이지로 이동
    if (!user || user.perm !== 1) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // 통과시 자식 컴포넌트 렌더
    return children;
}

export default RequireAdmin;