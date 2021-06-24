# Typing-game ver.1

### ✨ 서비스 소개

### �What is this Game
 - This is the Korean Typing game for student in Australia who are learning Korean from my sister.
 - When they put same word with the word which is given, they can get a score.
 - if they get more then 5 score within 3ms, they will win the game.
 


### Main function
 - 한글단어의 배열을 만들고 
 let i=0을 선언해 배열의 길이보다 작을 때까지 3초마다 배열의 0번째 단어부터 화면에 나올 수 있게 한후에
 화면에 나온 글자와 addeventListener를 등록해 글자를 타이핑 했을때 input.value값과 화면에 나온 값이 같을때
 점수가 계속 1점씩 더해질 수 있도록 만들었다.
 


### 오류 해결


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
 
