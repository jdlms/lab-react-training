export function BoxColor({ r, g, b }) {
  return (
    <div
      style={{ width: 200, height: 50, backgroundColor: `rgb(${r},${g},${b})` }}
    >
      <p>
        rgb({r}
        {g}
        {b})
      </p>
    </div>
  );
}
