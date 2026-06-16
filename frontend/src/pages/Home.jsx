import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import {useState,useEffect,useRef} from "react"
import {useContentStore} from "../store/ContentStore"
import ContentCard from '../components/ContentCard'


const Home = () => {
  const {fetchContent,contents}=useContentStore()
 useEffect(()=>{
  fetchContent();
 },[]);
  console.log("contents:",contents)
  
  return (
    <div>
      <Layout title={"My Brain"}>
        <div className=" mt-20 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-12">
          {contents
            ?.filter((item) => item)
            .map((item) => (
              <ContentCard key={item._id} item={item} />
            ))}
        </div>
      </Layout>
    </div>
  );
}

export default Home