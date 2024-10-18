import React from "react";
import { LikesCard } from "../components/LikesCard";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card bg-gray-200 border border-gray-300 shadow-md rounded-lg p-4 mb-2">
      <p className="text-gray-900 font-bold">{comment.content}</p>
      <LikesCard likes={comment.likes} />
    </div>
  );
};

export default CommentCard;
