$(document).ready(function(){
  var svg = document.getElementById("svg");

  svg.addEventListener("load",function(){

    // change viewBox of the svg
    function resizeSVG() {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      if (vw > 1100) {
        // desktop sizes
        svg.setAttribute("viewBox", "350 300 2500 1800");
      } else {
        // mobile and tablet sizes
        svg.setAttribute("viewBox", "880 620 1450 1300");
      }
    };

    var myList = ["#desktop","#laptop","#dog","#owl","#city","#poster","#lanyard"]

    // get the inner element by id
    myList.forEach(function(item) {
      var itembx = item + "-whitebox"
      var itemOuter = item + "-outer"
      var timer;

      $(item).hover(function () {
          $(itembx).show();
          $(itemOuter).css({ stroke: "white" });
          $(itemOuter).css({ "stroke-width": "6px" });
      });

      $(item + "," + itembx).hover(function (e) {
          if (timer) timer = clearTimeout(timer)
      }).mouseleave(function (e) {
          timer = setTimeout(function () {
              $(itembx).hide();
              $(itemOuter).css({ "stroke-width": "0px" });
          }, 1)
      });
    });



    resizeSVG();
    window.onresize = resizeSVG;

  }, false);
});
