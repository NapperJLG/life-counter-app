function renderPlayerOneScoreAsHtml() {
  var lifecounter = new LifeCounter;
  var view = new LifeCounterView(lifecounter);
  if(view.renderPlayerOne() !== "<p>20</p>") {
    throw new Error("Player 1 score not rendered as HTML string!")
  };
};
renderPlayerOneScoreAsHtml();

function renderPlayerTwoScoreAsHtml() {
  var lifecounter = new LifeCounter;
  var view = new LifeCounterView(lifecounter);
  if(view.renderPlayerTwo() !== "<p>20</p>") {
    throw new Error("Player 2 score not rendered as HTML string!")
  };
};
renderPlayerTwoScoreAsHtml();
