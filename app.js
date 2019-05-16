window.onload = function() {
  var playerOneTotal = document.getElementById('player-one-total');
  var playerTwoTotal = document.getElementById('player-two-total');

  view = new LifeCounterView
  controller = new LifeCounterController(view)

  playerOneTotal.innerHTML = controller.renderPlayerOneLifeTotal();
  console.log(playerOneTotal.innerhtml)
  playerTwoTotal.innerHTML = controller.renderPlayerTwoLifeTotal();
};
