var LifeCounter = function() {
  this._playerOneLifeTotal = 20
  this._playerTwoLifeTotal = 20
};

LifeCounter.prototype = {
  decreasePlayerOneLifeTotal: function() {
    this._playerOneLifeTotal -= 1
  },

  increasePlayerOneLifeTotal: function() {
    this._playerOneLifeTotal += 1
  },

  decreasePlayerTwoLifeTotal: function() {
    this._playerTwoLifeTotal -= 1
  },

  increasePlayerTwoLifeTotal: function() {
    this._playerTwoLifeTotal += 1
  },

  resetTotals: function() {
    this._playerOneLifeTotal = 20
    this._playerTwoLifeTotal = 20
  }
};
