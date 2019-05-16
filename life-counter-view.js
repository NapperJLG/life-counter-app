var LifeCounterView = function(lifecounter) {
  this.lifecounter = lifecounter
}

LifeCounterView.prototype = {
  renderPlayerOne: function() {
    return "<p>" + lifecounter._playerOneLifeTotal + "</p>"
  },

  renderPlayerTwo: function() {
    return "<p>" + lifecounter._playerTwoLifeTotal + "</p>"
  }
};
