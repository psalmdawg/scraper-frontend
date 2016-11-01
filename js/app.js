window.onload = function (){
  console.log("page loaded")
  carousel();
}
var slideIndex = 1;

function carousel(){
  var pics = document.getElementsByClassName("mySlides");
    for(var i=0;i<pics.length;i++){
      pics[i].style.display = "none";
    };
    slideIndex ++;
  if (slideIndex > pics.length)
    { slideIndex = 1 }

  pics[slideIndex -1].style.display = "block";
  setTimeout(carousel, 5000)
}
// carousel();


// window.onload(carousel())

// showDivs(slideIndex)

// function plusDivs(n){
//   showDivs(slideIndex += n);
// }

// function showDivs(n){
//
//   var x = document.getElementsByClassName("mySlides");
//     console.log(x)
//
//   if (n > x.length)
//     { slideIndex = 1 }
//   if( n < 1)
//     { slideIndex = x.length }
//   for(var i=0;i<x.length;i++){
//     x[i].style.display = "none";
//   }
//
//   console.log(slideIndex)
//
// }
// carousel()

// function showValue(newValue){
//   document.getElementById("range").innerHTML=newValue;
// }
// function zoom(zoom){
//   document.getElementById("zoomVal").innerHTML=zoom;
//   var pic = document.getElementById('julesCartwheel');
//   pic.style.width = zoom + "%"
// }

// var jlCart = document.getElementById('julesCartwheel')
// function outerTimer(){
//   document.getElementById("timerbox").innerHTML = 0;
//   var time = 0;
//   function timer(){
//     time +=1
//     document.getElementById("timerbox").innerHTML = time ;
//     console.log(time)
//   }
//   setInterval(timer,1000)
// }
