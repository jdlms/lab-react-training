export function Rating(props) {
  const roundedRating = () => {
    let rating = Math.round(props.children);
    if (rating === 0) {
      return '☆☆☆☆☆';
    } else if (rating === 1) {
      return '★☆☆☆☆';
    } else if (rating === 2) {
      return '★★☆☆☆';
    } else if (rating === 3) {
      return '★★★☆☆';
    } else if (rating === 4) {
      return '★★★★☆';
    } else if (rating === 5) {
      return '★★★★★';
    }
  };
  return (
    <div>
      <span>{roundedRating()}</span>
    </div>
  );
}
