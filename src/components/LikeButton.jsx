import React from 'react';
import { useState } from 'react';

const LikeButton = ({ onLike, likes }) => {
  const [like, setLike] = useState(likes);

  const addLike = () => {
    setLike(like + 1);
  };

  const handleLike = () => {
    onLike();
    addLike();
  };

  return (
    <button
      onClick={handleLike}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Likes: {like}
    </button>
  );
};

export default LikeButton;
