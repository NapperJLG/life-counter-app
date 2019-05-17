var LifeCounterController = function(view) {
  this.view = view
  this.setup();
};

LifeCounterController.prototype = {
  renderPlayerOneLifeTotal: function() {
    return this.view.playerOneLifeTotalString()
  },

  renderPlayerTwoLifeTotal: function() {
    return this.view.playerTwoLifeTotalString()
  },

  updateDOM: function() {
    console.log('updateDOM called')
    document.getElementById('player-one-total').innerHTML = this.renderPlayerOneLifeTotal();
    document.getElementById('player-two-total').innerHTML = this.renderPlayerTwoLifeTotal();
  },

  setup: function() {
    var self = this;
    var playeroneplus = document.getElementById('player-one-increase');
    var playeroneminus = document.getElementById('player-one-decrease');
    var playertwoplus = document.getElementById('player-two-increase');
    var playertwominus = document.getElementById('player-two-decrease');
    var reset = document.getElementById('reset-button')

    playeroneplus.addEventListener('click', function() {
      self.view.lifecounter.increasePlayerOneLifeTotal();
      console.log(this.view)
      self.updateDOM();

    });

    playeroneminus.addEventListener('click', function() {
        self.view.lifecounter.decreasePlayerOneLifeTotal();
        console.log(this.view)
        self.updateDOM();

    });

    playertwoplus.addEventListener('click', function() {
        self.view.lifecounter.increasePlayerTwoLifeTotal();
        console.log(this.view)
        self.updateDOM();

    });

    playertwominus.addEventListener('click', function() {
        self.view.lifecounter.decreasePlayerTwoLifeTotal();
        console.log(this.view)
        self.updateDOM();

    });

    reset.addEventListener('click', function() {
        self.view.lifecounter.resetTotals();
        console.log(this.view)
        self.updateDOM();

    });

}
};
