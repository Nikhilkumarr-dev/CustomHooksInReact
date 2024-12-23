import { useEffect, useState } from "react";

export function usePostTitle()
{
    const[post,setPost]=useState({});

  async function getPosts()
  {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json=await response.json();
    setPost(json);
  }

  useEffect(()=>{
    getPosts();
  },[])

  return post.title;
}
    
export function useFetch(url){

    const [finalData,setFinalData]=useState({});
    const [loading,setloading]=useState(true);
    async function getDetails()
    {
        setloading(true);
        const response= await fetch(url);
        const json= await response.json();
        setFinalData(json);
        setloading(false);
    }
    useEffect(()=>{
        getDetails();
    },[url])
    //url is the dependency where changing leading to different ouptut

    return {
        finalData
    }
}