import React from 'react'
import {useState} from "react"
import { GoUpload } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import AddcontentModal from '../modals/AddcontentModal';
import SharebrainModal from '../modals/SharebrainModal';
const Topbar = ({title}) => {
  const [addcontent,setAddContent]=useState(false);
  const [shareContent,setShareContent]=useState(false);
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
        <div className="flex gap-4">
          <div className="flex gap-2 border border-gray-200 rounded-lg items-center px-4 py-2 text-sm cursor-pointer hover:-translate-y-1 transition-all duration-200 hover:bg-primary-light hover:text-primary hover:border-primary" onClick={()=>setShareContent(true)}>
            <GoUpload className="size-3" />
            <p>Share brain</p>
          </div>
          <div className="flex gap-2 bg-primary text-white font-medium rounded-lg px-4 py-2 text-sm items-center hover:-translate-y-1 transition-all duration-200 hover:shadow-[0_0_8px_var(--color-primary)] cursor-pointer" onClick={()=>setAddContent(true)}>
            <FaPlus className="size-3" />
            <p>Add content</p>
          </div>
        </div>
      </div>
      
        {addcontent &&<AddcontentModal onClose={()=>setAddContent(false)}/>}
     
    </div>
  );
}

export default Topbar