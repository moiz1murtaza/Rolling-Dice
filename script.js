const dice1 = document.getElementById('dice-1');
const dice2 = document.getElementById('dice-2');
const rollButton = document.getElementById('roll-button');

rollButton.addEventListener('click', rollDice);

function rollDice() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  dice1.querySelector('.dice-face').textContent = dice1Value;
  dice2.querySelector('.dice-face').textContent = dice2Value;
}
function rollDice() {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
  
    const dice1Face = dice1.querySelector('.dice-face');
    const dice2Face = dice2.querySelector('.dice-face');
  
    dice1Face.textContent = dice1Value;
    dice2Face.textContent = dice2Value;
  
    // Add color class to the dice face
    dice1Face.className = `dice-face ${getDiceColorClass(dice1Value)}`;
    dice2Face.className = `dice-face ${getDiceColorClass(dice2Value)}`;
  }
  
  function getDiceColorClass(value) {
    switch (value) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      default:
        return '';
    }
  }