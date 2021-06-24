# Typing-game ver.1

## ✨ Introduce Service



🎮 Game which is getting a point whenever you are typing same korean word quickly 🎮 



<img width="566" alt="제목 없음" src="https://user-images.githubusercontent.com/80943394/123236281-a2f71d00-d517-11eb-9ed1-110ff9448df6.png">




### for whom ?
- This is the Korean Typing game for student in Australia who are learning Korean from my sister.
 - When they put same word with the word which is given, they can get a score.
 - if they get more then 5 score within 3ms, they will win the game.
 - I hope they can enjoy studying Korean by using this game.
 


### main function 
 - setInterval
 


### error 🐱‍🚀


    1. 빈값일때 점수증가 문제(빈값으로 서로 같아지면서)
    
       게임이 시작되고 나서 첫번째 단어가 나오기 전에 타이핑을 하고 지우게 되면 
       input.value값과 화면에 나오는 innerText의 값이 빈값으로 같아지면서 점수가 증가했다.
       이 것을 해결해기위해 조건에 && 연산자를 이용해서 두개의 값이 일치하고 input.value값이 빈값이 아니여야 점수가 올라갈 수 있도록 했다.
       
    
    2.string templete의 html요소 DOM으로 불러오기 실패
      
      게임이 끝나거나 졌을때 혹은 이겼을 때 나오는 replay창을 html이 아닌 javascript에서 string templete을 이용해 'The End'나 'you are a master'이라는 문구가 
      들어갈 수 있는 text라는 parameter를 전달하는 함수를 만들었으나 
      
      실제 string templete 안에 있는 button태그를 DON요소로 불러와서 addeventLister에 버튼을 누르면 게임이 재시작 될 수 있는 기능을 구현하고자 했으나 
      여러시도 끝에 불러오는 방법을 찾지 못했고 
      
      결국 html에 태그로 replay창을 만들고 quertselevtor로 가져와서 버튼에 기능을 추가 할 수 있었고
      message.innerText에 문구를 넣고 visiblity를 이용해 게임이 이기거나 졌을 때 replay창이 보여질 수 있게 구현했다.
      
      
      3.글자 따라나오는 문제
 
