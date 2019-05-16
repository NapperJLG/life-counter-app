window.onload = function() {
  
  view = new LifeCounterView
  controller = new LifeCounterController(view)

  controller.updateDOM();
};
