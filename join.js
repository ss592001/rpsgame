const Pturn=document.getElementById("player-turn");
const Wins=document.getElementById("wins");
const turns=document.getElementById("turns");
const result=document.getElementById("res");
const start=document.getElementById("play");
const FResult=document.getElementById("final-Result");
const RockInput=document.getElementById("rock");
const PaperInput=document.getElementById("paper");
const ScissorsInput=document.getElementById("scissors");
const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';
 let CInput;
 let UInput;
 let beforeResult;

 const showAlert=(val)=>{
     alert(`you choose ${val} !!`);
 }
 const GetUserInput=()=>{
     UInput=prompt(`ROCK , PAPER OR SCISSORS`).toUpperCase();
 }
const compInput=()=>{
    const RandomValue=Math.random();
      if(RandomValue<0.33){
          CInput=ROCK;
      }
      else if(RandomValue<0.67){
          CInput=PAPER;
      }
      else{
          CInput=SCISSORS;
      }
}
function print(a,b){
    return `you choose ${a} and computer choose ${b}.`;
}

function Result(){
    const usrInpt=UInput;
    const RanCompIpt=CInput;
    if(turns.textContent>0){
    if(usrInpt===ROCK && RanCompIpt===SCISSORS || usrInpt===SCISSORS && RanCompIpt===PAPER ||
         usrInpt===PAPER && RanCompIpt===ROCK){
             result.textContent=print(usrInpt,RanCompIpt) +` Thus you won!!`;
             Wins.textContent++;
            
             
         }
         else if(usrInpt===RanCompIpt){
             result.textContent=print(usrInpt,RanCompIpt) + ` Thus its a draw!!`
             turns.textContent--;
         }
         else{
            result.textContent= print(usrInpt,RanCompIpt)+` Thus you loose!!`
            Wins.textContent--;
            turns.textContent--;
         }
         if(Wins.textContent<0){
            Wins.style.color="red";
        }
        else if(Wins.textContent>0){
            Wins.style.color="green";
        }
        else{
            Wins.style.color="black";
        }
        }
    }
    function PFResult(){
        const finalR=FResult;
        const finalWins=Wins.textContent
            if(finalWins===1){
            finalR.textContent=`you won ${finalWins} time.`;
            }
            else if(Wins.textContent>1){
                finalR.textContent=`you loose ${-finalWins} times. `;
            }
            else if(Wins.textContent===-1){
                finalR.textContent=`you loose ${-finalWins} time. `;
            }
            else if(Wins.textContent<-1){
                finalR.textContent=`you loose ${-finalWins} times. `;
            }
            else if(Wins.textContent===0){
                finalR.textContent=`Its a draw!!`;
            }
}
start.addEventListener('click',()=>{
    confirm("Do you want to start the game?");
    const NumberOfTurns=prompt("please enter the number of turns you want!!",'');
    turns.textContent=NumberOfTurns;
   Pturn.addEventListener('click',()=>{
    GetUserInput();
      compInput();
         Result();
      finalResult();
         if(turns.textContent===0){
            PFResult();
         }
   })
})
FResult.addEventListener('click',PFResult);
