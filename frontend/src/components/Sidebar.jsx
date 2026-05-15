import React from 'react'
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { PiLink } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { CiHome, CiYoutube } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {

 const {logout}=useAuthStore()
 const navigate=useNavigate();
 const userLogout=async()=>{
  await logout();
  navigate("/");
 }
  return (
    <div className="fixed    h-screen w-58  ">
      <div className="flex flex-col h-full justify-between  pl-8 pr-4 py-4  bg-white border border-gray-100">
        <div>
          {/* Logo */}
          <NavLink to="/" className="flex gap-2 items-center">
            <LuBrain className="size-6 bg-primary p-1 text-white  rounded-lg" />
            <p className="font-bold  font-serif">MindNest</p>
          </NavLink>
          {/* urls */}
          <div className="text-[10px] font-bold text-gray-400 mt-6">
            NAVIGATION
          </div>
          <div className=" flex flex-col mt-4 gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-xl transition-all duration-200 hover:translate-x-1
        ${
          isActive
            ? "bg-primary-light border border-primary-soft text-primary font-medium"
            : "hover:bg-gray-50 hover:translate-x-1"
        }`
              }
            >
              {({ isActive }) => (
                <>
                  <CiHome
                    className={`text-gray-400 size-5
                    ${isActive && "text-primary"}`}
                  />
                  <p className="text-sm">Home</p>
                </>
              )}
            </NavLink>
            <NavLink
              to="/youtube"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-xl transition-all duration-200 hover:translate-x-1
        ${
          isActive
            ? "bg-primary-light border border-primary-soft text-primary font-medium"
            : "hover:bg-gray-50 "
        }`
              }
            >
              {({ isActive }) => (
                <>
                  <CiYoutube
                    className={`text-gray-400 size-5
                    ${isActive && "text-primary"}`}
                  />
                  <p className="text-sm">Youtube</p>
                </>
              )}
            </NavLink>
            <NavLink
              to="/twitter"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-xl transition-all duration-200
        ${
          isActive
            ? "bg-primary-light border border-primary-soft text-primary font-medium"
            : "hover:bg-gray-50 hover:translate-x-1"
        }`
              }
            >
              {({ isActive }) => (
                <>
                  <RiTwitterXFill
                    className={`text-gray-400 size-5
                    ${isActive && "text-primary"}`}
                  />
                  <p className="text-sm">Twitter</p>
                </>
              )}
            </NavLink>
            <NavLink
              to="/urls"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-xl transition-all duration-200 hover:translate-x-1
        ${
          isActive
            ? "bg-primary-light border border-primary-soft text-primary font-medium"
            : "hover:bg-gray-50 "
        }`
              }
            >
              {({ isActive }) => (
                <>
                  <PiLink
                    className={`text-gray-400 size-5
                    ${isActive && "text-primary"}`}
                  />
                  <p className="text-sm">Urls</p>
                </>
              )}
            </NavLink>
          </div>
        </div>

        {/* logout */}
        <div 
        onClick={()=>userLogout()}
        className="group flex gap-2 items-center hover:bg-primary-light  p-2 rounded-lg cursor-pointer transition-all duration-200 my-4">
          <IoLogOutOutline className="size-5 text-gray-400 group-hover:text-primary transition-all duration-200" />

          <p className="text-sm text-gray-400 group-hover:text-primary transition-all duration-200">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar