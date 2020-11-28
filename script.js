$(document).ready(function(){

  function changeMargin() {
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    let hpos = - ( h / 4);
    let wpos = - ( w / 4);

    document.getElementById("main").style.marginTop = hpos+"px";
    document.getElementById("main").style.marginLeft = wpos+"px";

  };


  function checktoChange() {
    if (document.getElementById("main").style.width > "500px") {
      document.getElementById("main").style.marginTop = "0px";
      document.getElementById("main").style.marginLeft = "0px";
    } else {
      changeMargin();
    }
  };

  checktoChange();
  window.onresize = checktoChange;

  var svg = document.getElementById("svg");
  var myList = ["#desktop","#laptop","#dog","#owl","#city","#poster","#lanyard"]
  // It's important to add an load event listener to the object,
  // as it will load the svg doc asynchronously
  svg.addEventListener("load",function(){
    // get the inner element by id
    myList.forEach(function(item) {
      var itembx = item + "-whitebox"
      var itemblur = item + "-blur"

      var timer;

      $(item).hover(function () {
          $(itembx).show();
          $(itemblur).show();
      });

      $(item + "," + itembx).hover(function (e) {
          if (timer) timer = clearTimeout(timer)
      }).mouseleave(function (e) {
          timer = setTimeout(function () {
              $(itembx).hide();
              $(itemblur).hide();
          }, 1)
      });
    });
  }, false);






});
