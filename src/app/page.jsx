"use client"
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const fetchPost = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/post`
    );
    console.log(data);
    return data;
  };
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost,
  });
  if (isLoading) return <div> Loading...</div>;
  if (isError) return <div> Error.... please contact administration {error.message}</div>;


  return (
  <div>
    <h2>Posts</h2>
    <ul>
      {data?.map((post, index) =>(
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  </div>
  );
};
