"use strict";
window.onload = function addCellname(){
  let squares = document.querySelectorAll("#board div");

  for (let i = 0; i < squares.length; i++){
    squares[i].classList.add("square");
    squares[i].addEventListener("click",function(){
      console.log("square" + i + "clicker")

    });
  }
}
