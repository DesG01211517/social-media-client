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

  //   return (
  //     <div>
  //       <h2>Posts</h2>
  //       <Swiper spaceBetween={50} slidesPerView={1}>
  //         {data?.map((post) => (
  //           <SwiperSlide key={post.id}>
  //             <PostCard post={post.id} />
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //   );
  // }

  return (
    <div className="swiper-container">
      <h2 className="text-center font-thin">Posts</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="post-container">
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              {post.media_url ? (
                post.media_url.match(
                  /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv|mpg|mpeg)$/i
                ) ? (
                  <video controls width="80%">
                    <source src={post.media_url} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={post.media_url} alt={post.title} />
                )
              ) : (
                <p>No media available</p>
              )}

              <div className="likes-comments">
                <span>Likes: {post.likes.length}</span>
                <h4>Comments:</h4>
                {Array.isArray(post.comments) && post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                      <p>{comment.content}</p>
                      {/* Assuming each comment has likes */}
                    </div>
                  ))
                ) : (
                  <p>No comments available</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
