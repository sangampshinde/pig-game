'use strict';

//selecting element
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');


//variable declearation
let scores,currentScore,activePlayer,playing;

//initial condition
/*score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
const scores=[0,0]; //final score or acumlating scores 
let currentScore=0;
let activePlayer=0;
let playing=true;*/

//function area
const switchplayer=function()
{
  document.getElementById(`current--${activePlayer}`).textContent=0;
  currentScore=0;
  activePlayer=activePlayer===0?1:0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

const init=function()
{
   scores=[0,0]; //final score or acumlating scores 
   currentScore=0;
   activePlayer=0;
   playing=true;

  score0El.textContent=0;
  score1El.textContent=0;
  diceEl.classList.add('hidden');
  current0El.textContent=0;
  current1El.textContent=0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');//dont remove because player-1 always active at start
  player1El.classList.remove('player--active');


}

init();
//rolling dice functionality
btnRoll.addEventListener('click',function(){
  if(playing)
  {
    //1.generating random number from 1to6
    const dice=Math.trunc((Math.random()*6)+1);

    //2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    console.log(dice);

    //3.check for roll 1: 
    if(dice!==1)
    {
      //add dice to current score
      currentScore+=dice;
      //currentScore=currentScore+dice;
     // current0El.textContent=currentScore;//we need to change later
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }
    else
    {
      //if true switch player
      /*document.getElementById(`current--${activePlayer}`).textContent=0;
      currentScore=0;
      activePlayer=activePlayer=== 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player2El.classList.toggle('player--active');*/
      switchplayer();
    }
  }
});
btnHold.addEventListener('click',function(){
  if(playing)
{
//add  current score to active player score
scores[activePlayer]+=currentScore;
//scores[1]= scores[1]+currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];


//if current player score>=100
if(scores[activePlayer]>=20)
{
  //finish game
  diceEl.classList.add('hidden');
  playing=false;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else
{
  switchplayer();
}
}

//switch player
//switchplayer();

  
});
btnNew.addEventListener('click', init)
//{
  /*score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent=0;
  current1El.textContent=0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');//dont remove because player-1 always active at start
  player1El.classList.remove('player--active');*/
//})


