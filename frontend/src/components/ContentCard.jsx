import React from 'react'
import {useState,useEffect,useRef} from "react"
import { TbWorld } from "react-icons/tb";
import {Link, useActionData } from 'react-router-dom';
import { FaCopy } from "react-icons/fa";
import { FaC } from 'react-icons/fa6';
import { FaRegTrashAlt } from "react-icons/fa";
import { useContentStore } from '../store/ContentStore';
import { useAuthStore } from '../store/useAuthStore';
// import {TweetEmbed} from "react-tweet-embed"
const ContentCard = ({item}) => {
  const {deleteContentId,contents}=useContentStore();
  const deleteC=async(id)=>{
    const res=await deleteContentId(id);
  }
     const twitterRef = useRef(null);

    useEffect(() => {
      const loadTwitter = () => {
        if (
          item.contentType === "Twitter" &&
          window.twttr &&
          twitterRef.current
        ) {
          window.twttr.widgets.load(twitterRef.current);
        }
      };

      setTimeout(loadTwitter, 500);
    }, [contents]);

    const getYoutubeThumbnail = (url) => {
      const regExp =
        /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

      const match = url.match(regExp);

      const videoId = match && match[2].length === 11 ? match[2] : null;

      return videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : "";
    };
    const TwitterEmbed = ({ link }) => {
     
    
      return (
        <div
          ref={twitterRef}
          
        className="h-48 overflow-hidden "
        >
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      );
    };
    const getTweetId = (link) => {
      try {
        const url = new URL(link);

        const match = url.pathname.match(/status\/(\d+)/);

        return match ? match[1] : null;
      } catch {
        return null;
      }
    };
    const getYoutubeId=(link)=>{
        const url = new URL(link)
        const videoId = url.searchParams.get("v") || url.pathname.split("/").pop()
        if (videoId)
            return videoId;
    }
    const UrlCard = ({ link }) => {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg px-4 py-2 mt-2 border border-gray-200 h-20 flex justify-between items-center gap-4"
        >
          <div className="p-2 bg-purple-500 rounded-lg flex justify-center items-center w-10">
            <TbWorld className="text-white size-5" />
          </div>

          <div className="text-xs text-blue-500 hover:underline break-all">
            {link}
          </div>
        </a>
      );
    };
  return (
    <div className="bg-white flex flex-col gap-4 justify-center  rounded-lg py-4 px-6">
      <div
        className={`${item.contentType === "Youtube" ? "text-primary" : item.contentType === "Twitter" ? "text-blue-500" : "text-purple-500"} 
      ${item.contentType === "Youtube" ? "bg-primary-light" : item.contentType === "Twitter" ? "bg-blue-200" : "bg-purple-200"} 
       px-4 py-1 text-xs rounded-lg font-medium w-16  items-center flex justify-center`}
      >
        {item.contentType}
      </div>

      {/* text */}
      <div>
        <p className="font-medium text-sm ">{item.title}</p>
      </div>
      <div className="w-full h-48 flex justify-center">
        {item.contentType === "Youtube" && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="
    relative

    w-full
    h-48
    my-2

    overflow-hidden

    rounded-2xl

    group

    cursor-pointer
  "
          >
            {/* THUMBNAIL */}
            <img
              src={getYoutubeThumbnail(item.link)}
              alt={item.title}
              className="
      w-full
      h-full

      object-cover

      group-hover:scale-105

      transition-all duration-500
    "
            />

            {/* OVERLAY */}
            <div
              className="
      absolute inset-0

      bg-black/20

      group-hover:bg-black/30

      transition-all duration-300
    "
            />

            {/* PLAY BUTTON */}
            <div
              className="
      absolute inset-0

      flex items-center justify-center
    "
            >
              <div
                className="
        bg-red-600

        rounded-2xl

        p-4

        shadow-2xl

        group-hover:scale-110

        transition-all duration-300
      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </a>
        )}

        {item.contentType === "Twitter" && <TwitterEmbed link={item.link} />}
        {item.contentType === "URL" && (
          <UrlCard link={item.link} className="py-2" />
        )}
      </div>
      <div>
        <p className="text-xs text-gray-400">{item.description}</p>
      </div>
      {/* //buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg border border-gray-200 text-xs flex gap-2 items-center hover:border-primary hover:text-primary cursor-pointer transition-all duration-200 hover:bg-primary-light">
          <FaCopy />
          Copy Link
        </button>
        <button className="px-4 py-2 rounded-lg border bg-primary text-white border-primary text-xs flex gap-2 items-center hover:border-primary hover:text-primary cursor-pointer transition-all duration-200 hover:bg-primary-light"  onClick={()=>deleteC(item._id)}>
          <FaRegTrashAlt />
          Delete
        </button>
      </div>

    
    </div>
  );
}

export default ContentCard