import React from 'react';
import { CommentCard } from "./CommentCard";
import { LikesCard } from "./LikesCard";

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      {/* Media rendering logic */}
      {post.media_url ? (
        post.media_url.match(/\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv|mpg|mpeg)$/i) ? (
          <video controls width="100%">
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
        <LikesCard likes={post.likes} /> {/* Display likes for the post */}
        <h4>Comments:</h4>
        {Array.isArray(post.comments) && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} /> {/* Render CommentCard */}
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
};

export default Post;
