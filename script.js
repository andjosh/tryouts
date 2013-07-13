function introZenMode() {
  var intro = document.getElementById('intro'), 
    escape = document.getElementById('escape-hatch'),
    extras = document.getElementsByName('superfluous');
  intro.className = 'reveal long-trans';
  escape.className = 'reveal long-trans';
  for (var i=0;i<extras.length;i++){
    extras[i].className = 'gone long-trans';
  };
};
function exitZenMode() {
  var intro = document.getElementById('intro'), 
    escape = document.getElementById('escape-hatch'),
    extras = document.getElementsByName('superfluous');
  intro.className = 'gone short-trans';
  escape.className = 'gone short-trans';
  for (var i=0;i<extras.length;i++){
    extras[i].className = 'reveal short-trans';
  };
}
window.onscroll = function (e) {  
// called when the window is scrolled.
  introZenMode();
} 