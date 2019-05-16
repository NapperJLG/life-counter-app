function renderPlayerOneLifeTotal() {
  view = new LifeCounterView;
  controller = new LifeCounterController(view);
  if(controller.renderPlayerOneLifeTotal() !== "<p>20</p>") {
    throw new Error('player 1 life total not rendered!')
  }
};
renderPlayerOneLifeTotal();

function renderPlayerTwoLifeTotal() {
  view = new LifeCounterView;
  controller = new LifeCounterController(view);
  if(controller.renderPlayerTwoLifeTotal() !== "<p>20</p>") {
    throw new Error('player 2 life total not rendered!')
  }
};
renderPlayerTwoLifeTotal();
