# Typing-game ver.1

## โจ Introduce Service



๐ฎ Game which is getting a point whenever you are typing same korean word quickly ๐ฎ 



<img width="566" alt="์ ๋ชฉ ์์" src="https://user-images.githubusercontent.com/80943394/123236281-a2f71d00-d517-11eb-9ed1-110ff9448df6.png">




### for whom ?
- This is the Korean Typing game for student in Australia who are learning Korean from my sister.
 - When they put same word with the word which is given, they can get a score.
 - if they get more then 5 score within 3ms, they will win the game.
 - I hope they can enjoy studying Korean by using this game.
 


### main function 
 - setInterval
 


### error ๐ฑโ๐


    1. ๋น๊ฐ์ผ๋ ์ ์์ฆ๊ฐ ๋ฌธ์ (๋น๊ฐ์ผ๋ก ์๋ก ๊ฐ์์ง๋ฉด์)
    
       ๊ฒ์์ด ์์๋๊ณ  ๋์ ์ฒซ๋ฒ์งธ ๋จ์ด๊ฐ ๋์ค๊ธฐ ์ ์ ํ์ดํ์ ํ๊ณ  ์ง์ฐ๊ฒ ๋๋ฉด 
       input.value๊ฐ๊ณผ ํ๋ฉด์ ๋์ค๋ innerText์ ๊ฐ์ด ๋น๊ฐ์ผ๋ก ๊ฐ์์ง๋ฉด์ ์ ์๊ฐ ์ฆ๊ฐํ๋ค.
       ์ด ๊ฒ์ ํด๊ฒฐํด๊ธฐ์ํด ์กฐ๊ฑด์ && ์ฐ์ฐ์๋ฅผ ์ด์ฉํด์ ๋๊ฐ์ ๊ฐ์ด ์ผ์นํ๊ณ  input.value๊ฐ์ด ๋น๊ฐ์ด ์๋์ฌ์ผ ์ ์๊ฐ ์ฌ๋ผ๊ฐ ์ ์๋๋ก ํ๋ค.
       
    
    2.string templete์ html์์ DOM์ผ๋ก ๋ถ๋ฌ์ค๊ธฐ ์คํจ
      
      ๊ฒ์์ด ๋๋๊ฑฐ๋ ์ก์๋ ํน์ ์ด๊ฒผ์ ๋ ๋์ค๋ replay์ฐฝ์ html์ด ์๋ javascript์์ string templete์ ์ด์ฉํด 'The End'๋ 'you are a master'์ด๋ผ๋ ๋ฌธ๊ตฌ๊ฐ 
      ๋ค์ด๊ฐ ์ ์๋ text๋ผ๋ parameter๋ฅผ ์ ๋ฌํ๋ ํจ์๋ฅผ ๋ง๋ค์์ผ๋ 
      
      ์ค์  string templete ์์ ์๋ buttonํ๊ทธ๋ฅผ DON์์๋ก ๋ถ๋ฌ์์ addeventLister์ ๋ฒํผ์ ๋๋ฅด๋ฉด ๊ฒ์์ด ์ฌ์์ ๋  ์ ์๋ ๊ธฐ๋ฅ์ ๊ตฌํํ๊ณ ์ ํ์ผ๋ 
      ์ฌ๋ฌ์๋ ๋์ ๋ถ๋ฌ์ค๋ ๋ฐฉ๋ฒ์ ์ฐพ์ง ๋ชปํ๊ณ  
      
      ๊ฒฐ๊ตญ html์ ํ๊ทธ๋ก replay์ฐฝ์ ๋ง๋ค๊ณ  quertselevtor๋ก ๊ฐ์ ธ์์ ๋ฒํผ์ ๊ธฐ๋ฅ์ ์ถ๊ฐ ํ  ์ ์์๊ณ 
      message.innerText์ ๋ฌธ๊ตฌ๋ฅผ ๋ฃ๊ณ  visiblity๋ฅผ ์ด์ฉํด ๊ฒ์์ด ์ด๊ธฐ๊ฑฐ๋ ์ก์ ๋ replay์ฐฝ์ด ๋ณด์ฌ์ง ์ ์๊ฒ ๊ตฌํํ๋ค.
      
      
      3.๊ธ์ ๋ฐ๋ผ๋์ค๋ ๋ฌธ์ 
 
