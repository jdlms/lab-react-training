export function CreditCard(props) {
  const backgroundColor = () => {
    return props.bgColor !== '#eeeeee' ? 'white' : 'black';
  };

  const obscureCreditCardNumber = props.number
    .split('')
    .map((num, i) => {
      if (i === 3 || i === 7 || i === 11) {
        return `\u26B9 `;
      }
      return i < props.number.length - 4 ? '\u26B9' : num;
    })
    .join('');

  return (
    <div
      style={{
        marginBottom: 3,
        height: 90,
        width: 190,
        backgroundColor: `${props.bgColor}`,
        borderRadius: 10,
      }}
    >
      <span>{props.type}</span>
      <p style={{ color: backgroundColor() }}>{obscureCreditCardNumber}</p>
    </div>
  );
}

{
  /* <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"
/>; */
}
