  function nightDayHnadler(e){
    var target = document.querySelector('body');
    if(e.value=='야간모드 변경')
    {
      target.style.background = 'black'
      target.style.color = 'white'
      e.value = '주간모드 변경';

      var alist = document.querySelectorAll('a');
      var i=0;
      while(i<alist.length){
        alist[i].style.color = 'green';
        i= i + 1;
      }

    } else {
      target.style.background = 'white'
      target.style.color = 'black'
      e.value = '야간모드 변경';

      var alist = document.querySelectorAll('a');
      var i=0;
      while(i<alist.length){
        alist[i].style.color = 'red';
        i= i + 1;
      }
    }
  }
