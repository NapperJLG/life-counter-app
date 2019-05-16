function startGameWith20Life () {
  lifecounter = new LifeCounter;
  if(lifecounter._playerOneLifeTotal !== 20 || lifecounter._playerTwoLifeTotal !== 20 ) {
    throw new Error("life totals are not starting at 20!");
  };
};
startGameWith20Life();

function playerOneLifeTotalPlusOne () {
  lifecounter = new LifeCounter;
  lifecounter.increasePlayerOneLifeTotal();
  if(lifecounter._playerOneLifeTotal !== 21) {
    throw new Error("Player 1 life total hasn't increased!");
  };
};
playerOneLifeTotalPlusOne();

function playerTwoLifeTotalPlusOne () {
  lifecounter = new LifeCounter;
  lifecounter.increasePlayerTwoLifeTotal();
  if(lifecounter._playerTwoLifeTotal !== 21) {
    throw new Error("Player 2 life total hasn't increased!");
  };
};
playerTwoLifeTotalPlusOne();

function playerOneLifeTotalMinusOne () {
  lifecounter = new LifeCounter;
  lifecounter.decreasePlayerOneLifeTotal();
  if(lifecounter._playerOneLifeTotal !== 19) {
    throw new Error("Player 1 life total hasn't decreased!");
  };
};
playerOneLifeTotalMinusOne();

function playerTwoLifeTotalMinusOne () {
  lifecounter = new LifeCounter;
  lifecounter.decreasePlayerTwoLifeTotal();
  if(lifecounter._playerTwoLifeTotal !== 19) {
    throw new Error("Player 2 life total hasn't decreased!");
  };
};
playerTwoLifeTotalMinusOne();

function resetPlayerLifeTotals () {
  lifecounter = new LifeCounter;
  lifecounter.increasePlayerOneLifeTotal();
  lifecounter.decreasePlayerTwoLifeTotal();
  lifecounter.resetTotals();
  if(lifecounter._playerOneLifeTotal !== 20 || lifecounter._playerTwoLifeTotal !== 20 ) {
    throw new Error("life totals were not reset to 20!");
  };
};
resetPlayerLifeTotals();
