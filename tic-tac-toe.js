window.onload = function() {
  const gameBoard = document.getElementById("board").children;
  const squares=document.querySelectorAll("#board div");
  var wins=["","","","","","","","",""];
  const xs= "X";
  const os="O";
  const statuss=document.getElementById("status");
  let winFactors=[[0,4,8],[0,3,6],[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

  let turn=xs;

  var i;

  for(i=0;i<squares.length;i++){
    squares[i].classList.add("square");
    squares[i].addEventListener('click',clicks,{once:true});
    squares[i].addEventListener('mouseenter',hoverStyle);
    squares[i].addEventListener('mouseleave',hoverRevert);
    squares[i].addEventListener('click',checkWinner);

  function clicks(event) {
    var plays= Array.from(squares);
    var index = plays.indexOf(event.target);
    console.log("Properly");

    if(turn==xs ){
      wins[index]= "X";
      event.target.innerHTML= xs;
      event.target.classList.add("X");
      turn=os;
    }
    else if(turn==os){
      wins[index]= "O";
      event.target.innerHTML=os;
      event.target.classList.add("O");
      turn=xs;
    }

  }

  function hoverStyle(event){
    event.target.classList.add('hover');
  }

  function hoverRevert(event){
    event.target.classList.remove('hover');
  }

  function checkWinner(){
    for (i=0; i<winFactors.length;i++){
      console.log (winFactors[i][0]);

      if(wins[winFactors[i][0]]=="X" && wins[winFactors[i][1]]=="X" && wins[winFactors[i][2]]=="X"){
        statuss.textContent="Congratulations! X is the Winner!";
        statuss.setAttribute('class','you-won');
      }
      else if(wins[winFactors[i][0]]=="O" && wins[winFactors[i][1]]=="O" && wins[winFactors[i][2]]=="O"){
        statuss.textContent="Congratulations! O is the Winner!";
        statuss.setAttribute('class','you-won');
      }
    }
  }

  document.querySelector("button").addEventListener("click", function (){
    for (var c of squares){
    c.addEventListener('click',clicks,{once:true});
    c.classList.remove("X");
    c.classList.remove("O");
    c.textContent = "";
    }

    turn = xs;
    wins=["","","","","","","","",""];
    statuss.classList.remove("you-won");
    statuss.textContent = "Move your mouse over a square and click to play an X or an O";

    
  });

}
}
