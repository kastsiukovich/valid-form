// input1 
var input1 = document.getElementById('first-name');
var span2_1 = document.getElementById('one-input2');

input1.addEventListener("input", function () {
   input1.onblur = function () {
      if (input1.value.trim() === '') {
         input1.classList.add('invalid');
      }
      else if (input1.value.length <= 5 && input1.value.trim() !== '') {
         input1.classList.add('invalid');
         input1.nextElementSibling.style.display = 'block';
         span2_1.style.display = 'block';
      }
   }
})
function checked1() {
   input1.onfocus = function () {
      if (this.classList.contains('invalid')) {
         this.classList.remove('invalid');
         input1.nextElementSibling.style.display = 'none';
         span2_1.style.display = 'none';
      }
   }
}
input1.addEventListener('blur', checked1);

// input1.onblur = function () {
//    if (input1.value.trim() === '') {
//       input1.classList.add('invalid');
//    } else if (input1.value.length >= 5 && input1.value.trim() !== '') {
//    } else {
//       input1.classList.add('invalid');
//       input1.nextElementSibling.style.display = 'block';
//       span2_1.style.display = 'block';
//    }
// };
// input1.onfocus = function () {
//    if (this.classList.contains('invalid')) {
//       this.classList.remove('invalid');
//       input1.nextElementSibling.style.display = 'none';
//       span2_1.style.display = 'none';
//    }
// };

// inpu2
var input2 = document.getElementById('two-name');
var span2_2 = document.getElementById('two-input');
var newSpan = document.createElement('span');
var div2 = document.getElementsByClassName('two-input')[0];
// input2.addEventListener('input', function () {
//    input2.onblur = function () {
//       if (input2.value.trim() === '') {
//          input2.classList.add('invalid');
//       } else if (input2.value[0] !== input2.value[0].toUpperCase()) {
//          input2.classList.add('invalid');
//          newSpan.setAttribute('class', 'block');
//          newSpan.innerText = 'Error! Первая буква должна быть прописной';
//          newSpan.style.fontSize = '10px';
//          div2.append(newSpan);
//       } else if (input2.value.length < 5 && input2.value.trim() !== '') {
//          input2.classList.add('invalid');
//          span2_2.style.display = 'block';
//       }
//    }
// });
function checked2() {
   input2.addEventListener('input', function () {
      input2.onblur = function () {
         if (input2.value.trim() === '') {
            input2.classList.add('invalid');
         } else if (input2.value[0] !== input2.value[0].toUpperCase()) {
            input2.classList.add('invalid');
            newSpan.setAttribute('class', 'block');
            newSpan.innerText = 'Error! Первая буква должна быть прописной';
            newSpan.style.fontSize = '10px';
            div2.append(newSpan);
         } else if (input2.value.length < 5 && input2.value.trim() !== '') {
            input2.classList.add('invalid');
            span2_2.style.display = 'block';
         }
      }

      input2.onfocus = function () {
         if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            span2_2.style.display = 'none';
            newSpan.setAttribute('class', 'none');
         }
      }
   })

}
input2.addEventListener('blur', checked2);
// input3

var input3 = document.getElementById('three-name');
var span3_1 = document.getElementById('three-input');
var span3_2 = document.createElement('span');
var div3 = document.getElementsByClassName('three-input')[0];
// input3.addEventListener('input', function () {
//    input3.onblur = function () {
//       if (input3.value.trim() === '') {
//          input3.classList.add('invalid');
//       } else if (!input3.value.includes('http://') && !input3.value.includes('https://')) {
//          input3.classList.add('invalid');
//          span3_1.style.display = 'block';
//       } else if (input3.value.length < 10 && input3.value.trim() !== '') {
//          input3.classList.add('invalid');
//          // span3_2.setAttribute('class', 'block');
//          span3_2.style.display = 'block';
//          span3_2.style.fontSize = '10px';
//          span3_2.innerText = 'Error! url должен быть не менее 10 символов';
//          div3.append(span3_2);
//       }
//    }
// })
function checked3() {
   input3.onblur = function () {
      if (input3.value.trim() === '') {
         input3.classList.add('invalid');
      } else if (!input3.value.includes('http://') && !input3.value.includes('https://')) {
         input3.classList.add('invalid');
         span3_1.style.display = 'block';
      } else if (input3.value.length < 10 && input3.value.trim() !== '') {
         input3.classList.add('invalid');
         // span3_2.setAttribute('class', 'block');
         span3_2.style.display = 'block';
         span3_2.style.fontSize = '10px';
         span3_2.innerText = 'Error! url должен быть не менее 10 символов';
         div3.append(span3_2);
      }
   }
   input3.onfocus = function () {
      if (this.classList.contains('invalid')) {
         this.classList.remove('invalid');
         span3_1.style.display = 'none';
         span3_2.style.display = 'none';

      }
   }
}
input3.addEventListener('blur', checked3)


// input4
var input4 = document.getElementsByClassName('input-four')[0];
var span4_2 = document.createElement('span');
var div4 = document.getElementsByClassName('four-input')[0];
// input4.addEventListener('input', function () {
//    input4.onblur = function () {
//       if (input4.value.trim() === '') {
//          input4.classList.add('invalid');
//          span4_2.setAttribute('class', 'block');
//          span4_2.setAttribute('style', 'font-size: 10px');
//          span4_2.innerText = 'Вы не указали дату запуска сайта!';
//          div4.append(span4_2);
//       }
//    }
// })
function checked4() {
   input4.onblur = function () {
      if (input4.value.trim() === '') {
         input4.classList.add('invalid');
         span4_2.setAttribute('class', 'block');
         span4_2.setAttribute('style', 'font-size: 10px');
         span4_2.innerText = 'Вы не указали дату запуска сайта!';
         div4.append(span4_2);
      }
   }
   input4.onfocus = function () {
      if (this.classList.contains('invalid')) {
         this.classList.remove('invalid');
         span4_2.setAttribute('class', 'none');
      }
   }
}
input4.addEventListener('blur', checked4);
// input5
// divh1.insertAdjacentHTML('beforeend', '<span id="two-input2">Error! Первая буква должна быть прописной</span>')
var input5 = document.getElementsByClassName('input-five')[0];
var span5_1 = document.getElementById('five-input');
function checked5() {
   input5.onblur = function () {
      if (input5.value === '') {
         input5.classList.add('invalid');
      } else if (input5.value < 100) {
         input5.classList.add('invalid');
         span5_1.style.display = 'block';
      }
   }
   input5.onfocus = function () {
      if (this.classList.contains('invalid') || input5.value > 100) {
         this.classList.remove('invalid');
         span5_1.style.display = 'none';
      }
   }
}

input5.addEventListener('blur', checked5)
//input6
var input6 = document.getElementById('six-name');
var span6 = document.getElementById('six-input');
var span6_2 = document.getElementById('six-input2');
function checked6() {
   input6.onblur = function () {
      if (input6.value.trim() === '') {
         input6.classList.add('invalid');
      } else if (input6.value.length <= 5 && input6.value.trim() !== '') {
         input6.classList.add('invalid');
         span6_2.style.display = 'block';
      } else if (!input6.value.includes('@')) {
         input6.classList.add('invalid');
         input6.nextElementSibling.style.display = 'block';
      }
   };
   input6.onfocus = function () {
      if (this.classList.contains('invalid')) {
         this.classList.remove('invalid');
         input6.nextElementSibling.style.display = 'none';
         span6_2.style.display = 'none';
      }
   };
}
input6.addEventListener('blur', checked6);


// input7
// var input7 = document.querySelector('.input-seven');
// var span7 = document.getElementById('seven-input');
// input7.addEventListener('mousedown', function (event) {
//    console.log(event.key)
//    span7.style.display = 'block';
// })
// function checked7() {
//    if (document.activeElement.value == '0') {
//       span7.style.display = 'block';

//    } else {
//       span7.style.display = 'none';
//    }
// }
// input7.addEventListener('blur', checked7);

// input10
var input10 = document.getElementById('content');
var span10 = document.getElementById('nine-input');
input10.addEventListener('input', function () {
   if (input10.value.length < 10 || input10.value.trim().length < 10) {
      span10.innerText = 'Описание должно быть больше 10 символов!';
      span10.style.cssText = 'display: block; font-size: 10px'
   } else {
      span10.style.cssText = 'display: none;'
   }
})
function checked10() {
   if (input10.value === '' || input10.value.length < 10) {
      input10.classList.add('invalid');
      span10.innerText = 'Описание не заполнено!';
      span10.style.display = 'block';
      // input10.style.borderColor = 'red';

   } else {
      span10.style.display = 'none';
      input10.classList.remove('invalid');
      // input10.style.borderColor = 'black';
   }

}
input10.addEventListener('blur', checked10)

// Submit
var btn = document.getElementsByClassName('but')[0];
function checked() {
   checked1();
   checked2();
   checked3();
   checked4();
   checked5();
   checked6();
   // checked7();
   checked10();
}

btn.onclick = function () {
   checked();
   if (document.querySelector('.invalid') !== null) {
      checked()
      document.querySelector('.invalid').focus();
   } else {
      btn.type = 'submit';
   }
}

// var btn = document.querySelector("#btn1");
// var num = 0;
// function proverka() {
//    checkRazrab();
//    checkSite();
//    checkURL();
//    checkDate();
//    checkPoset();
//    checkEmail();
//    checkRadio();
//    checkOpis();
// }
// btn.onclick = function () {
//    proverka();
//    if (document.querySelector(".auto") !== null) {
//       proverka();
//       document.querySelector(".auto").focus();
//    }
//    else {
//       btn.type = "submit";
//    }
// }