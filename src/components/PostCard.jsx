import React from "react";
import { CommentCard } from "./CommentCard";
import { LikesCard } from "./LikesCard";

const Post = ({ post }) => {
  return (
    <div className="post-container bg-gray-100 border border-gray-300 shadow-lg rounded-lg mx-auto p-6 w-1/2 text-center">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-3xl font-semibold mb-4">{post.content}</p>

      {post.media_url ? (
        post.media_url.match(
          /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv|mpg|mpeg)$/i
        ) ? (
          <video controls width="100%">
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
        <p className="text-gray-900 font-bold">No media available</p>
      )}

      <div className="likes-comments mt-4">
        <LikesCard likes={post.likes} />
        <h4 className="text-black font-bold">Comments:</h4>
        {Array.isArray(post.comments) && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p className="font-bold text-gray-700">No comments available</p>
        )}
      </div>
    </div>
  );
};

export default Post;
