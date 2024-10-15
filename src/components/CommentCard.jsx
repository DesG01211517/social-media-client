import React from "react";
import { LikesCard } from "./LikesCard";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>{comment.content}</p>
      <LikesCard likes={comment.likes} /> {/* Display likes for the comment */}
    </div>
  );
};

export default CommentCard;
