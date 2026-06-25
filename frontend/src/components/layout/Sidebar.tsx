import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Briefcase,
  Users,
  ClipboardList,
  Target,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: Briefcase,
  },
  {
    name: "Candidates",
    path: "/candidates",
    icon: Users,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: ClipboardList,
  },
  {
    name: "Matches",
    path: "/matches",
    icon: Target,
  },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 border-r bg-white">

      <div className="p-5 border-b">

        <h2 className="text-xl font-bold">
          AI Recruiter
        </h2>

      </div>

      <div className="p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`
              }
            >
              <Icon size={18} />

              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}