"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { PostCard } from "../components/PostCard";

export default function Home() {
  const fetchPost = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post`);
    console.log(data);
    return data;
  };
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPost,
  });
  if (isLoading) return <div> Loading...</div>;
  if (isError)
    return <div> Error.... please contact administration {error.message}</div>;

  return (
    <div className="swiper-container">
      <h2 className="text-center font-bold">Posts</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="post-container bg-gray-100 border border-gray-300 shadow-lg rounded-lg mx-auto p-6 max-w-2xl text-center">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-2xl font-bold mb-4">{post.content}</p>

              {post.media_url ? (
                post.media_url.match(
                  /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv|mpg|mpeg)$/i
                ) ? (
                  <video controls width="80%" className="mx-auto">
                    <source src={post.media_url} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={post.media_url}
                    alt={post.title}
                    className="w-full h-auto mx-auto"
                  />
                )
              ) : (
                <p className="text-gray-700 font-bold">No media available</p>
              )}

              <div className="likes-comments mt-4">
                <h4 className="font-bold">Comments:</h4>
                {Array.isArray(post.comments) && post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="comment mt-2 border-t pt-2 font-bold"
                    >
                      <p>{comment.content}</p>
                      <span className="text-sm text-gray-700 font-bold">
                        Likes: {post.likes.length}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="font-bold">No comments available</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
