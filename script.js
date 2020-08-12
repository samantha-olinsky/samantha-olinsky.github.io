
function changeMargin() {
  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var h = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  let hdiv2 = - ( h / 2);
  let wdiv2 = - ( w / 2);

  document.getElementById("illustration").style.marginTop = hdiv2+"px";
  document.getElementById("illustration").style.marginLeft = wdiv2+"px";
};

changeMargin();
window.onresize = changeMargin;
