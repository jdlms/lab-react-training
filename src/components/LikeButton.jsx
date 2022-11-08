import { useState } from 'react';

export function LikeButton() {
  const [likeState, setLikeState] = useState(0);
  const [colorState, setColorState] = useState(0);

  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    setLikeState((old) => old + 1);
    setColorState((old) => {
      if (old > 4) {
        return old * 0;
      } else return old + 1;
    });
  };

  return (
    <div>
      <button
        style={{ height: 35, width: 60, backgroundColor: color[colorState] }}
        value={likeState}
        onClick={handleClick}
      >
        {likeState} Likes
      </button>
    </div>
  );
}
