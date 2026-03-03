
    let randomNumber;
    let computerMove;
    let score=JSON.parse(localStorage.getItem('score')) ||{
        wins:0,
        losses:0,
        draws:0
      };
    
    updateScoreElement();

    function updateScoreElement(){
       document.querySelector('.js-score').textContent=`Wins: ${score.wins}  , Losses: ${score.losses}  , Draws: ${score.draws}`; 
    }
    

    function randomComMove(){
      randomNumber=Math.random();
    }

    function computerMoveFun(){
       if(randomNumber>=0 && randomNumber<1/3){
      computerMove='rock';
      }
       else if(randomNumber>=1/3 && randomNumber<2/3){
       computerMove='paper';
      }
      else{
       computerMove='scissors';
      }
      
    }

    function findScore(result){
       if(result===' Game Draw! ')
        score.draws++;
       else if(result===' You loss! ')
        score.losses++;
       else
        score.wins++;
    }
      
    
     
    function playGame(playerMove){

         let result='';

        if(playerMove==='rock'){
            if(computerMove=='rock')
              result = " Game Draw! ";
            else if(computerMove=='paper')
              result = " You loss! ";
            else
              result = " You Win! ";
        }
        else if(playerMove==='paper'){
            if(computerMove=='paper')
              result = " Game Draw! ";
            else if(computerMove=='scissors')
              result = " You loss! ";
            else
              result = " You Win! ";
        }
        else{
            if(computerMove=='scissors')
              result = " Game Draw! ";
            else if(computerMove=='rock')
              result = " You loss! ";
            else
              result = " You Win! ";
        }  
        
      findScore(result);  
      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement(); 

      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML=`You 
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
  
    }
    
    
   
    document.getElementById("rock").onclick=function(){

       randomComMove();
       computerMoveFun();

       playGame('rock');
      
    }

    document.getElementById("paper").onclick=function(){

      randomComMove();
      computerMoveFun();

      playGame('paper');
    
    }

    document.getElementById("scissors").onclick=function(){

      randomComMove();
      computerMoveFun();

      playGame('scissors');

    }

    document.getElementById("resetScore").onclick=function(){

      score.draws=0;
      score.losses=0;
      score.wins=0;

      localStorage.removeItem('score');

      updateScoreElement();
    }

