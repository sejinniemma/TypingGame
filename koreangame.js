'use srict'

const starterBtn = document.querySelector('.starter');
const wordDisplay = document.querySelector('.world-display');
const wordDisplayArray = ['바나나','사과','연필','밥','과일'];
const inputBox = document.querySelector('.word-input-box');
const wordInput = document.querySelector('input');
const time = document.querySelector('.time');
const Score = document.querySelector('.score');

let isPlaying = false;
let timeInterval;
let score = 0;
let timeDuration=5; 


starterBtn.addEventListener('click', () => {
        buttonChange('Start!');
        displayItems();
        write();
        run();
   })



   let i=0;
   function displayItems(){
   setInterval( ()=>{
       if(i<wordDisplayArray.length){
       wordDisplay.innerHTML = wordDisplayArray[i];
       i++;
       wordInput.value="";
       
        } else {
            wordDisplay.innerHTML = 'fail';
        }
      } ,3000)
    }



function write (){
    wordInput.addEventListener('input',()=>{
        if(wordDisplay.innerText===""){
          e.target.value="";
         
        }
        else if(wordInput.value === wordDisplay.innerText){
            wordInput.value="";
            score++;
            Score.innerHTML = score;
          }
          else if(wordInput.value !== wordDisplay.innerText){
             return;
          }
          
      })
    }
  

// Make timer
function run(){
  timeInterval = setInterval(countDown, 3000);
}

function countDown(){
  timeDuration > 0 ? --timeDuration : isPlaying;
     if(isPlaying){
      clearInterval(timeInterval);
      buttonChange('loading');
     }
    time.innerHTML = timeDuration;
}



// button change
function buttonChange(text){
  starterBtn.innerText = text;
  text === 'Start!' ? starterBtn.classList.remove('loading') : starterBtn.classList.add('loading');
}