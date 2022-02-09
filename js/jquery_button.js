
    var Link={
        LinkColor: function(color){
          $('a').css('color',color);
        }
      }
    // LinkColor:function(color) {
    //         var alist = document.querySelectorAll('a');
    //         var i=0;
    //         while(i<alist.length){
    //           alist[i].style.color = color;
    //           i= i + 1;
    //         }
    //       }
    }
    var Body={
    bodyColor: function(color) {
            $('body').css('color',color);
    },
    backColor: function(color) {
            $('body').css('backgroundColor',color);
          }
      }

      function nightDayHnadler(self){
        var target = document.querySelector('body');
        if(self.value=='야간모드 변경')
        {
          Body.backColor('black');
          Body.bodyColor('white');
          Link.LinkColor('gray');
          self.value = '주간모드 변경';
        } else {
          Body.backColor('white');
          Body.bodyColor('black');
          Link.LinkColor('red');
          self.value = '야간모드 변경';
        }
      }


// body객체와 link객체로 구분하여 메소드로 함수를 지정하였음.
