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

  updateDOM: function() {
    document.getElementById('player-one-total').innerHTML = controller.renderPlayerOneLifeTotal();
    document.getElementById('player-two-total').innerHTML = controller.renderPlayerTwoLifeTotal();
  }
};
