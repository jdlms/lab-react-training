export function NumbersTable({ limit }) {
  const blocks = [];

  for (let i = 1; i <= limit; i++) {
    blocks.push(i);
  }

  return (
    <container
      style={{
        width: '450px',
        height: '300px',
        backgroundColor: 'grey',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {blocks.map((number) =>
        number % 2 === 0 ? (
          <span
            style={{
              display: 'inline',
              width: '90px',
              height: '60px',
              backgroundColor: 'red',
            }}
          >
            {number}
          </span>
        ) : (
          <span style={{ display: 'inline', width: '90px', height: '60px' }}>
            {number}
          </span>
        )
      )}
    </container>
  );
}
