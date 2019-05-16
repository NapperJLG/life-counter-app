var LifeCounterView = function() {
  this.lifecounter = new LifeCounter
}

LifeCounterView.prototype = {
  playerOneLifeTotalString: function() {
    return "<p>" + lifecounter._playerOneLifeTotal + "</p>"
  },

  playerTwoLifeTotalString: function() {
    return "<p>" + lifecounter._playerTwoLifeTotal + "</p>"
  }
};
