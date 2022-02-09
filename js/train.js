function train_data(){
          var cow = ["1일차 연습","2일차 연습","3일차 연습"];
          var i = 0;
          var length = cow.length //유동적인 배열의 길이를 length로 대입해줌
          var day = 7; //입사일
          while (i< length) {
            document.write('<li>');
            document.write('<a href="2022-2-');
            document.write(day); //7일부터 배열의 길이만큼 증가함
            document.write('.html">');
            document.write(cow[i]);
            document.write('</a>');
            document.write('</li>');
            i++;
            day++;
          }
        }
        buildMenu(document.getElementById('link'));


            // <!-- 2일차 코드 연습목록 url을 반복문을 이용하여 입사일인 7일을 기점으로 순서대로 링크가 나오게 했음 -->
