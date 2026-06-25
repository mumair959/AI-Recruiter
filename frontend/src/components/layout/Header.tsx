import { LogOut } from "lucide-react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.service";

export default function Header() {

    const navigate = useNavigate();
    const { user, setToken, setUser } = useAuth();

    const handleLogout = async () => {

    try {

        await logout();

    } catch {}

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setToken(null);

    setUser(null);

    navigate("/login");
    };


    return (
        <div className="h-16 border-b px-6 flex items-center justify-between">

        <h2 className="font-semibold text-lg">
            Recruitment Dashboard
        </h2>

        {user !=null && <span>Welcome, {user?.name}</span>}
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border rounded"
        >
            <LogOut size={16} />

            Logout
        </button>

        </div>
    );
}