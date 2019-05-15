function startGameWith20Life () {
  lifecounter = new LifeCounter;
  if(lifecounter.playerOneLifeTotal !== 20 || lifecounter.playerTwoLifeTotal !== 20 ) {
    throw new Error("life totals are not starting at 20!");
  };
};
startGameWith20Life();
