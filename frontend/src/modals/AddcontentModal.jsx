import React from 'react'
import { useState ,useRef,useEffect} from 'react'
import {Plus} from "lucide-react" 
import { useContentStore } from '../store/ContentStore'
const AddcontentModal = ({onClose}) => {

    const [form,setForm]=useState({
        title:"",
        description:"",
        link:"",
        contentType:"URL"
    })
    const {create,fetchContent}=useContentStore();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const res=await create(form);
    
     
      await fetchContent()
      onClose();
    }
    const modalRef=useRef(null);
    const dropDownRef=useRef(null);
    useEffect(()=>{
      const handleRef=(e)=>{
        if(modalRef && !modalRef.current.contains(e.target)){
          onClose();
        }

        if(dropDownRef && !dropDownRef.current.contains(e.target)){
          setContentTypeOpen(false);
        }
      }
      document.addEventListener("mousedown",handleRef);
      return ()=>{
        document.removeEventListener("mousedown",handleRef)
      }
    },[])
    const [contentTypeOpen,setContentTypeOpen]=useState(false);
    const handleChange=(e)=>{
       setForm({
         ...form,
         [e.target.name]: e.target.value,
       });
    }
    const setContentType=(type)=>{
      setForm({...form,contentType:type});
      setContentTypeOpen(false)
    }
  return (
    <div className="z-50 fixed inset-0 backdrop-blur-xs flex justify-center items-center px-4 bg-black/30  ">
      <div
        className="bg-white flex flex-col gap-4  px-6 py-4 rounded-lg w-84 "
        ref={modalRef}
      >
        {/* heading */}
        <div className="flex  items-center gap-2">
          <Plus className=" bg-primary-light text-primary rounded-lg size-10 p-3" />
          <div>
            <p className="font-serif font-bold ">Add Content</p>
            <p className="text-xs text-gray-400">
              Save something to your second brain
            </p>
          </div>
        </div>
        {/* form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* title */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium">TITLE*</p>
            <input
              type="text"
              placeholder="Enter a title"
              className="outline-none px-4 py-2 border border-gray-200 rounded-lg placeholder:text-sm focus-within:border-primary focus-within:shadow-[0_0_8px_var(--color-primary-soft)] "
              onChange={handleChange}
              value={form.title}
              name="title"
            />
          </div>
          {/* link */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium">LINK*</p>
            <input
              type="text"
              placeholder="https://.."
              className="outline-none px-4 py-2 border border-gray-200 rounded-lg placeholder:text-sm focus-within:border-primary focus-within:shadow-[0_0_8px_var(--color-primary-soft)] "
              onChange={handleChange}
              value={form.link}
              name="link"
            />
          </div>
          {/* description */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium">DESCRIPTION*</p>
            <textarea
              type="text"
              placeholder="What's this about.."
              className="outline-none px-4 py-2 border border-gray-200 rounded-lg placeholder:text-sm focus-within:border-primary focus-within:shadow-[0_0_8px_var(--color-primary-soft)] "
              onChange={handleChange}
              value={form.description}
              rows="4"
              name="description"
            />
          </div>
          {/* content type */}
          <div className="relative" ref={dropDownRef}>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium">CONTENT TYPE</p>
              {/* <input
              type="text"
              placeholder="Enter a title"
              className="outline-none px-4 py-2 border border-gray-200 rounded-lg placeholder:text-sm focus-within:border-primary focus-within:shadow-[0_0_8px_var(--color-primary-soft)] "
              onChange={handleChange}
              value={form.title}
              name="title"
            /> */}
              <div
                tabIndex={0}
                onClick={() => setContentTypeOpen(true)}
                className=" px-4 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary focus:shadow-[0_0_8px_var(--color-primary-soft)] relative"
              >
                {form.contentType}
              </div>
              {contentTypeOpen && (
                <div className="border border-gray-200 rounded-lg absolute w-full bg-white top-16 ">
                  <div
                    className="text-sm py-1 px-2 text-gray-400 hover:bg-gray-200"
                    onClick={() => setContentType("URL")}
                  >
                    URL
                  </div>
                  <div
                    className="text-sm  py-1 px-2 text-gray-400 hover:bg-gray-200"
                    onClick={() => setContentType("Youtube")}
                  >
                    Youtube
                  </div>
                  <div
                    className="text-sm   py-1 px-2 text-gray-400 hover:bg-gray-200"
                    onClick={() => setContentType("Twitter")}
                  >
                    Twitter
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* buttons */}
          <div className="flex w-full gap-4">
            <button
              className="w-full border border-gray-200 text-gray-400  text-xs font-medium rounded-lg hover:bg-primary-light hover:border-primary hover:text-primary px-4 py-2 cursor-pointer transition-all duration-200"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
            <button
              className="w-full border  px-4 py-2 cursor-pointer bg-primary text-white font-medium rounded-lg text-xs hover:scale-105 transition-all duration-200"
              type="submit"
            >
              Save Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddcontentModal