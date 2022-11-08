import { useState } from 'react';

export function ClickablePicture(props) {
  const [glassesState, setGlassesState] = useState(false);

  const handleClick = () => setGlassesState(!glassesState);

  return (
    <>
      <img
        src={glassesState ? props.imgClicked : props.img}
        alt="Smiling Ironhacker without pixel sunglasses"
        onClick={handleClick}
      />
    </>
  );
}
