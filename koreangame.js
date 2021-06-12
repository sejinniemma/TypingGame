'use srict'

// 1.랜덤배열을 만들고 버튼을 누르면 1초마다 바뀌게 하기
// 2.타이핑의 VALUE값이 배열의 인덱스번호와 같으면 점수증가
// 3.버튼클릭후 타이머 변수설정후 줄이기 0일때 멈추기 
// SCORe가 5이면 '합격'(TIEMR이내 OR 0) 타이머0,SORE<5 FAIL

const starter = document.querySelector('.starter');
const worldDisplay= document.querySelector('.world-display');
const worldDisplayArray = ['바나나','사과','연필','밥','과일'];
const inputBox = document.querySelector('.word-input-box');
const input = document.querySelector('input');
const time = document.querySelector('.time');
const Score = document.querySelector('.score');
let score = 0;
let timeDuration=5; 

starter.addEventListener('click', () => {
        displayItems();
        write();
        Time();
   })

   let i=0;
   function displayItems(){
   setInterval( ()=>{
       if(i<worldDisplayArray.length){
       worldDisplay.innerHTML = worldDisplayArray[i];
       i++;
       input.value="";
        } else {
            worldDisplay.innerHTML = 'fail';
        }
      } ,3000)
    }

function write(){
    input.addEventListener('input',(e)=>{
     
        if(worldDisplay.innerHTML===""){
          e.target.value="";
        }
        else if(e.target.value === worldDisplay.innerHTML){
            Score.innerHTML = score + 1;
            score++;
            input.value="";
          }
           else if(e.target.value !== worldDisplay.innerHTML){
            return;
          }
      })
    }
  


function Time(){

  let clock=setInterval(()=>{
     if(timeDuration===0){
      clearInterval(clock);
      worldDisplay.innerHTML = 'fail';
    }
    time.innerHTML = timeDuration;
    --timeDuration;
  },3000)
}

