import React from "react";
import {useState,useEffect} from "react";
import { useContentStore } from "../store/ContentStore";
import Layout from "../components/Layout";
import ContentCard from "../components/ContentCard";

const Youtube = () => {
   const { contents, fetchContent } = useContentStore();

   useEffect(() => {
     fetchContent();
   }, []);

   const youtubeContent = contents.filter(
     (item) => item?.contentType === "Youtube",
   );

  return (
    <Layout title="Youtube">
      {youtubeContent.length === 0 ? (
        <div className=" flex flex-col items-center justify-center py-24">
          <p className="text-xl font-semibold text-gray-700">
            No Youtube content yet
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Save your favorite videos to start building your second brain.
          </p>
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {youtubeContent.map((item) => (
            <ContentCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Youtube;
