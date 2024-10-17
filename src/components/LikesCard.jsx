import React from "react";

const LikesCard = ({ likes }) => {
  return (
    <div className="likes-card">
      <span className="text-lg font-semibold text-black">Likes: {likes}</span>
    </div>
  );
};

export default LikesCard;
