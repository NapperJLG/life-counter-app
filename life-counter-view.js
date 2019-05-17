var LifeCounterView = function() {
  this.lifecounter = new LifeCounter
}

LifeCounterView.prototype = {
  playerOneLifeTotalString: function() {
    return "<p>" + this.lifecounter._playerOneLifeTotal + "</p>"
  },

  playerTwoLifeTotalString: function() {
    return "<p>" + this.lifecounter._playerTwoLifeTotal + "</p>"
  }
};
