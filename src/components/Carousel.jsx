import { useState } from 'react';

export function Carousel({ images }) {
  const [carouselState, setCarouselState] = useState(0);

  const handleLeftClick = () =>
    setCarouselState((old) => (old <= -3 ? 0 : old - 1));

  const handleRightClick = () =>
    setCarouselState((old) => (old > images.length - 2 ? 0 : old + 1));

  return (
    <div id="carousel">
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[Math.abs(carouselState)]} alt="" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}
