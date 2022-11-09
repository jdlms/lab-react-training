import { useEffect } from 'react';
import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

export function Dice() {
  const [diceState, setDiceState] = useState(diceEmpty);

  const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleClick = () => {
    setDiceState(diceEmpty);
    setTimeout(() => {
      const randomDice = dice[Math.floor(Math.random() * dice.length)];
      setDiceState((old) => (old = randomDice));
    }, 1000);
  };

  return (
    <div>
      <img
        style={{ width: 70, height: 70 }}
        src={diceState}
        alt="one die"
        onClick={handleClick}
      />
    </div>
  );
}
