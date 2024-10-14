"use client"
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

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
    <Swiper spaceBetween={50} slidesPerView={1}>
      {data?.map((post) => (
        <SwiperSlide key={post.id}>
          <div className="post-container">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="likes-comments">
              <span>Likes: {post.likes}</span>
              <span>Comments: {post.comments}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};
