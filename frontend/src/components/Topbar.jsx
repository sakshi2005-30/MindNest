import React from 'react'
import { GoUpload } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Topbar = ({title}) => {
  return (
    <div className="py-4 border border-gray-100 bg-white px-8">
      <div className="flex justify-between">
        {/* title */}
        <div className="font-serif font-bold text-lg">{title}</div>
        {/* search box */}
        <div className="focus-within:border-primary focus-within:shadow-[0_0_25px_rgba(244,63,94,0.12)] flex gap-2 border border-gray-200 text-sm rounded-lg w-84 items-center px-4">
          <CiSearch className="size-5  text-gray-400" />
          <input
            type="text"
            className=" outline-none text-sm text-gray-400 placeholder:text-sm"
            placeholder="Share your brain..."
          />
        </div>
        {/* buttons */}
        <div className="flex">
          <div>
            <GoUpload />
            <p>Share brain</p>
          </div>
          <div>
            <CiSquarePlus />
            <p>Share brain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar