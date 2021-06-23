window.onscroll = function() {
  checkFaller();
  checkSwimmer();
  checkSperm();
};
var fallpositions = ["falling-0","falling-1","falling-2"]
var fallIndex = 0;
var fallerParent = document.getElementById("fallparent");
var fallerEnd = document.getElementById("fallend");
var faller = document.getElementById("fall");
var swimParent = document.getElementById("swimparent");
var swimEnd = document.getElementById("swimend");
var swimmer = document.getElementById("swimmer");

var spermParent = document.getElementById("spermparent");
var sperm = document.getElementById("sperm");

var frame = 50; 
var diff = document.documentElement.scrollTop;

function removeStylesFaller(){
    for (let i = 0; i < fallpositions.length; i++) {
        faller.classList.remove(fallpositions[i]);      
    }
}

function checkFaller() {
  if (window.pageYOffset >= fallerParent.offsetTop) {
    faller.classList.add("sticky");
    if (diff >= document.documentElement.scrollTop+frame || diff < document.documentElement.scrollTop-frame) {
        // downscroll code
        diff = document.documentElement.scrollTop;
        removeStylesFaller();
        (fallIndex < fallpositions.length) ? fallIndex++ : fallIndex = 0;
        faller.classList.add(fallpositions[fallIndex]);
        spacer = window.pageYOffset
    }
  } else {
    faller.classList.remove("sticky");
  }
  if (window.pageYOffset >= fallerEnd.offsetTop) {
    faller.classList.remove("sticky");
  }
}

function checkSwimmer() {
  if (window.pageYOffset >= swimParent.offsetTop) {
    swimmer.classList.add("sticky");
  } else {
    swimmer.classList.remove("sticky");
  }
  if (window.pageYOffset >= swimEnd.offsetTop) {
    swimmer.classList.remove("sticky");
  }
}

function checkSperm() {
  if (window.pageYOffset >= spermParent.offsetTop) {
    sperm.classList.add("sticky");
  } else {
    sperm.classList.remove("sticky");
  }
}


