function moveOverRedRover(front,back){
  var mover = document.getElementById(front), backStage = document.getElementById(back);
  mover.className = ' short-trans move';
  backStage.className = ' long-trans reveal';
}
function moveBackRedRover(front,back){
  var mover = document.getElementById(front), backStage = document.getElementById(back);
  mover.className += ' moved';
  backStage.className += ' revealed';
}