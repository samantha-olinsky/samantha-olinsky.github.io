$(document).ready(function(){
  var svg = document.getElementById("svg");
  svg.addEventListener("load",function(){

    var vw = Math.max(screen.availWidth || 0, window.innerWidth || 0);
    var vh = Math.max(screen.availHeight || 0, window.innerHeight || 0);

    var myList = ["#desktop","#laptop","#poster","#lanyard","#dog","#owl","#city"];
    // change viewBox of the svg
    function resizeSVG() {
      vw = Math.max(screen.availWidth || 0, window.innerWidth || 0);
      vh = Math.max(screen.availHeight || 0, window.innerHeight || 0);
      if (vw > 1100) {
        // desktop sizes
        svg.setAttribute("viewBox", "350 300 2500 1900");
        // get the inner element by id
        myList.forEach(function(item) {
          var itembx = item + "-whitebox"
          var itemOuter = item + "-outer"
          var timer;
          var itemRect = document.getElementById(item.replace(/^#/, "")).getBoundingClientRect();
          var change = {
            "#desktop": {changeX:vw/27, changeY:-(vh/4.5)},
            "#laptop": {changeX:-(vw/6.8), changeY:vh/10.8},
            "#poster": {changeX:-(vw/5.3), changeY:vh/9},
            "#lanyard": {changeX:-(vw/10), changeY:vh/7},
            "#dog": {changeX:-(vw/4.9), changeY:vh/18},
            "#owl": {changeX:-(vw/7), changeY:vh/10},
            "#city": {changeX:30, changeY:20}
          };
          $(itembx).css({ "top": itemRect.top + change[item].changeY});
          $(itembx).css({ "left": itemRect.left + change[item].changeX});

          $(item).hover(function () {
              $(itembx).show();
              $(itemOuter).css({ "visibility": "visible" });
          });

          $(item + "," + itembx).hover(function (e) {
              if (timer) timer = clearTimeout(timer)
          }).mouseleave(function (e) {
              timer = setTimeout(function () {
                  $(itembx).hide();
                  $(itemOuter).css({ "visibility": "hidden" });
              }, 1)
          });
        });
      } else {
        // mobile and tablet sizes
        svg.setAttribute("viewBox", "880 620 1450 1300");

        $("#mobile-nav").hide();

        document.getElementById("discoverButton").addEventListener("click", changeView);
        document.getElementById("forward-arrow").addEventListener("click", changeView);
        document.getElementById("back-arrow").addEventListener("click", goBack);
        document.getElementById("home").addEventListener("click", goHome);
      }
    };

    var currentPos = -1;
    var views = {
      "#desktop": "1300 1220 800 700",
      "#laptop": "1060 1220 800 700",
      "#poster": "1430 770 900 900",
      "#lanyard": "1650 1250 600 500",
      "#dog": "1590 1400 900 900",
      "#owl": "860 1020 800 700",
      "#city": "1430 770 900 900"
    };

    function changeView() {
      if (currentPos == 5) {
        currentPos = 0;
      } else {
        currentPos = currentPos + 1;
      };

      $(".welcome").hide();
      $("button").hide();
      $(".whitebox").hide();
      $("#mobile-nav").show();
      var currentViewBox = views[myList[currentPos]];
      var itembx = myList[currentPos] + "-whitebox" ;

      $(itembx).css({"width": vw-100 , "margin": " 0 auto", "position": "relative", "top": "410px"});
      $(itembx).show();

      TweenMax.to(svg, 2, {
        attr:{
          viewBox: currentViewBox
        },
        ease: Power3.easeOut
      });

    };

    function goBack() {
      if (currentPos == 0) {
        currentPos = 5;
      } else {
        currentPos = currentPos - 1;
      };
      $(".welcome").hide();
      $("button").hide();
      $(".whitebox").hide();
      $("#mobile-nav").show();
      var currentViewBox = views[myList[currentPos]];
      var itembx = myList[currentPos] + "-whitebox" ;

      $(itembx).css({"width": vw-100 , "margin": " 0 auto", "position": "relative", "top": "410px"});
      $(itembx).show();

      TweenMax.to(svg, 2, {
        attr:{
          viewBox: currentViewBox
        },
        ease: Power3.easeOut
      });

    };

    function goHome() {
      currentPos = -1;
      $(".welcome").show();
      $("button").show();
      $(".whitebox").hide();
      $("#mobile-nav").hide();

      TweenMax.to(svg, 2, {
        attr:{
          viewBox: "880 620 1450 1300"
        },
        ease: Power3.easeOut
      });

    };



    //DRAG BEHAVIOR -- NOT WORKING PROPERLY
    // // If browser supports pointer events
    // if (window.PointerEvent) {
    //   svg.addEventListener('pointerdown', onPointerDown); // Pointer is pressed
    //   svg.addEventListener('pointerup', onPointerUp); // Releasing the pointer
    //   svg.addEventListener('pointerleave', onPointerUp); // Pointer gets out of the SVG area
    //   svg.addEventListener('pointermove', onPointerMove); // Pointer is moving
    // } else {
    //   // Add all mouse events listeners fallback
    //   svg.addEventListener('mousedown', onPointerDown); // Pressing the mouse
    //   svg.addEventListener('mouseup', onPointerUp); // Releasing the mouse
    //   svg.addEventListener('mouseleave', onPointerUp); // Mouse gets out of the SVG area
    //   svg.addEventListener('mousemove', onPointerMove); // Mouse is moving
    //
    //   // Add all touch events listeners fallback
    //   svg.addEventListener('touchstart', onPointerDown); // Finger is touching the screen
    //   svg.addEventListener('touchend', onPointerUp); // Finger is no longer touching the screen
    //   svg.addEventListener('touchmove', onPointerMove); // Finger is moving
    // }
    //
    // // Create an SVG point that contains x & y values
    // var point = svg.createSVGPoint();
    // // This function returns an object with X & Y values from the pointer event
    // function getPointFromEvent (event) {
    //
    //   // If even is triggered by a touch event, we get the position of the first finger
    //   if (event.targetTouches) {
    //     point.x = event.targetTouches[0].clientX;
    //     point.y = event.targetTouches[0].clientY;
    //   } else {
    //     point.x = event.clientX;
    //     point.y = event.clientY;
    //   }
    //
    //   // We get the current transformation matrix of the SVG and we inverse it
    //   var invertedSVGMatrix = svg.getScreenCTM().inverse();
    //
    //   return point.matrixTransform(invertedSVGMatrix);
    // }
    //
    // // This variable will be used later for move events to check if pointer is down or not
    // var isPointerDown = false;
    //
    // // This variable will contain the original coordinates when the user start pressing the mouse or touching the screen
    // var pointerOrigin;
    //
    // // Function called by the event listeners when user start pressing/touching
    // function onPointerDown(event) {
    //   isPointerDown = true; // We set the pointer as down
    //
    //   // We get the pointer position on click/touchdown so we can get the value once the user starts to drag
    //   pointerOrigin = getPointFromEvent(event);
    // }
    //
    // // We save the original values from the viewBox
    // var viewBox = svg.viewBox.baseVal;
    //
    // // Function called by the event listeners when user start moving/dragging
    // function onPointerMove (event) {
    //   // Only run this function if the pointer is down
    //   if (!isPointerDown) {
    //     return;
    //   }
    //   // This prevent user to do a selection on the page
    //   event.preventDefault();
    //
    //   // Get the pointer position as an SVG Point
    //   var pointerPosition = getPointFromEvent(event);
    //
    //   // Update the viewBox variable with the distance from origin and current position
    //   // We don't need to take care of a ratio because this is handled in the getPointFromEvent function
    //   viewBox.x -= (pointerPosition.x - pointerOrigin.x);
    //   viewBox.y -= (pointerPosition.y - pointerOrigin.y);
    // }
    //
    // function onPointerUp() {
    //   // The pointer is no longer considered as down
    //   isPointerDown = false;
    // }





    resizeSVG();
    window.onresize = resizeSVG;

  }, false);
});
