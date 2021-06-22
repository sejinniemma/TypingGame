'use srict'
const GAME_TIME = 5;
const starterBtn = document.querySelector('.starter');
const wordDisplay = document.querySelector('.world-display');
const wordDisplayArray = ['바나나','사과','연필','밥','과일'];
const inputBox = document.querySelector('.word-input-box');
const wordInput = document.querySelector('input');
const time = document.querySelector('.time');
const Score = document.querySelector('.score');
const message = document.querySelector('.message');
const messageContainer = document.querySelector('.message_container');
const replayBtn = document.querySelector('.replay_button');


let isPlaying = false;
let timeDuration = GAME_TIME;
let score = 0;
let timeInterval;
let checkInterval;

buttonChange('Start!');

// click starterBtn
starterBtn.addEventListener('click', () => {
        gameStart();
   })

function gameStart(){
  buttonChange('loading');
  displayItems();
  run();
}

// display word array
  
   function displayItems(){
   let i=0;
   setInterval( ()=>{
       if(i < wordDisplayArray.length){
       wordDisplay.innerHTML = wordDisplayArray[i];
       i++;
       wordInput.value="";
        } 
      } ,3000)
    }


// put something Input
 wordInput.addEventListener('input', checkMatch);

    function checkMatch(){
      if(wordInput.value === wordDisplay.innerText){
        wordInput.value="";
        if(!isPlaying){
          return;
        }
        score++;
        Score.innerHTML = score;
        
        if(score >= 5 && timeDuration > 0){
          messageContainer.style.opacity=1;
          message.innerHTML = 'You are a master🤡'
        }
      }
    }
  

// Make timer
function run(){
  isPlaying = true;
  timeDuration = GAME_TIME;
  timeInterval = setInterval(countDown, 3000);
}

function countDown(){
  timeDuration > 0 ? --timeDuration : isPlaying = false;
     if(!isPlaying && score < 5){
      clearInterval(timeInterval);
      buttonChange('Start!');
      messageContainer.style.opacity=1;
      message.innerHTML='The End';
      
     }
    time.innerHTML = timeDuration;
}



// button change
function buttonChange(text){
  starterBtn.innerText = text;
  text === 'Start!' ? starterBtn.classList.remove('loading') : starterBtn.classList.add('loading');
}


// replay button
replayBtn.addEventListener('click',()=>{
        gameStart();
        messageContainer.style.opacity=0;
        score = 0;
        Score.innerHTML = score;
})





// opaicty 버튼땜에 안댐 다시 스트링템플릿으로 해보기
// 글자 따라나오는거 고치기
// 배열....?
// 한번만 글자 칠 수 있는 건 어케할수 있는지...
