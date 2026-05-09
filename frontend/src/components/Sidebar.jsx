
import {
    LogOut,
  BrainCircuit,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
const SidebarItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
      ${
        active
          ? "bg-gray-200 text-black font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="size-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
};
const Sidebar = () => {
  const { logout } = useAuthStore();

  return (
    <div className="h-screen w-64 bg-white/70 backdrop-blur-md border-r flex  border-gray-200 flex-col justify-between p-5">
      {/* TOP */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <BrainCircuit className="size-7" />
          <h1 className="text-xl font-semibold">MindNest</h1>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-3">
          <SidebarItem  text="All Content" active />

          <SidebarItem  text="Search" />

          <SidebarItem text="YouTube" />

          <SidebarItem text="Twitter" />

          <SidebarItem  text="URLs" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-3">
      

        <button
          onClick={logout}
          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-red-50 text-red-500"
        >
          <LogOut className="size-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
