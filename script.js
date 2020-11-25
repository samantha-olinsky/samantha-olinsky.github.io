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
}

function checktoChange() {
  if (document.getElementById("illustration").style.width > "500px") {
    document.getElementById("illustration").style.marginTop = "0px";
    document.getElementById("illustration").style.marginLeft = "0px";
  } else {
    changeMargin();
  }
}

checktoChange();
window.onresize = checktoChange;

$(document).ready(function(){



var a = document.getElementById("theobject");

            // It's important to add an load event listener to the object,
            // as it will load the svg doc asynchronously
            a.addEventListener("load",function(){

                // get the inner DOM of the svg
                var svgDoc = a.contentDocument;
                // get the inner element by id
                var element = svgDoc.getElementById("desktop");
                // add behaviour
                element.addEventListener("mouseenter", reveal, false);
                element.addEventListener("mouseleave", hide, false);
            }, false);



});


function reveal(evt) {
  theId = evt.currentTarget.id
  comb = theId + "-whitebox"
  document.getElementById(comb).style.display = "block";
}
function hide(evt) {
  theId = evt.currentTarget.id
  comb = theId + "-whitebox"
  document.getElementById(comb).style.display = "none";
}
