export function Random({ min, max }) {
  const randomValue = () => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div>
      <p>
        Random value between {min} and {max}: {randomValue()}
      </p>
    </div>
  );
}
