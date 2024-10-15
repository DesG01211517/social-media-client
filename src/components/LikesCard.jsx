import React from "react";

const LikesCard = ({ likes }) => {
  return (
    <div className="likes-card">
      <span>Likes: {likes}</span>
    </div>
  );
};

export default LikesCard;
