import { useState } from 'react';

export function LikeButton() {
  const [likeState, setLikeState] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikeState((old) => old + 1);
    setColorIndex((old) => (old > 4 ? old * 0 : old + 1));
  };

  return (
    <div>
      <button
        style={{ height: 35, width: 60, backgroundColor: colorArr[colorIndex] }}
        value={likeState}
        onClick={handleClick}
      >
        {likeState} Likes
      </button>
    </div>
  );
}
