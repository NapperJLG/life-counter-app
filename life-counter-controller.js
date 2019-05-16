var LifeCounterController = function(view) {
  this.view = view
};

LifeCounterController.prototype = {
  renderPlayerOneLifeTotal: function() {
    return this.view.playerOneLifeTotalString()
  },

  renderPlayerTwoLifeTotal: function() {
    return this.view.playerTwoLifeTotalString()
  },


};
