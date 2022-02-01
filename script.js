// input1 
var input1 = document.getElementById('first-name');
var span2_1 = document.getElementById('one-input2');

input1.addEventListener("input", function () {
   if (input1.value.length <= 5 || input1.value.trim().length <= 5) {
      input1.classList.add('invalid');
      span2_1.innerHTML = 'Название должно иметь не менее 6 символов';
      span2_1.style.display = 'block';
   } else {
      input1.classList.remove('invalid');
      span2_1.style.display = 'none';
   }
})

function checked1() {
   if (input1.value.trim() === '') {
      input1.classList.add('invalid');
      span2_1.innerHTML = 'Вы не ввели данные!';
      span2_1.style.display = 'block';
   } else {
      input1.classList.remove('invalid');
      span2_1.style.display = 'none';
   }
}
input1.addEventListener('blur', checked1);

// inpu2
var input2 = document.getElementById('two-name');
var span2_2 = document.getElementById('two-input');
var newSpan = document.createElement('span');
var div2 = document.getElementsByClassName('two-input')[0];


input2.addEventListener('input', function () {
   if (input2.value[0] !== input2.value[0].toUpperCase()) {
      input2.classList.add('invalid');
      span2_2.innerHTML = 'Error! Первая буква должна быть прописной';
      span2_2.style.display = 'block';
   } else {
      input2.classList.remove('invalid');
      span2_2.style.display = 'none';
   }

})

function checked2() {
   if (input2.value.trim() === '') {
      input2.classList.add('invalid');
      span2_2.innerHTML = 'Вы не ввели данные!'
      span2_2.style.display = 'block';
   } else {
      input2.classList.remove('invalid');
      span2_2.style.display = 'none';
   }


}
input2.addEventListener('blur', checked2);


var input3 = document.getElementById('three-name');
var span3_1 = document.getElementById('three-input');
var span3_2 = document.createElement('span');
var div3 = document.getElementsByClassName('three-input')[0];
input3.addEventListener('input', function () {
   if (!input3.value.includes('http://')) {
      input3.classList.add('invalid');
      span3_1.innerHTML = 'Error! Название URL должно содержать http:// или https://'
      span3_1.style.display = 'block';
   } else {
      input3.classList.remove('invalid');
      span3_1.style.display = 'none';
   }
})
function checked3() {
   if (input3.value.trim() === '') {
      input3.classList.add('invalid');
      span3_2.innerText = 'Вы не ввели данные!'
      span3_2.style.display = 'block';
      span3_2.style.fontSize = '10px';
      div3.append(span3_2);
   } else {
      input3.classList.remove('invalid');
      span3_2.style.display = 'none';
   }
}
input3.addEventListener('blur', checked3)



// input4
var input4 = document.getElementsByClassName('input-four')[0];
var span4_2 = document.getElementById('four-input');
var div4 = document.getElementsByClassName('four-input')[0];
input4.addEventListener('input', function () {
   input4.classList.remove('invalid');
   span4_2.style.display = 'block';

});

function checked4() {
   if (input4.value === '') {
      input4.classList.add('invalid');
      span4_2.innerHTML = 'Error! Вы не указали дату!';
      span4_2.style.cssText = 'display: block; font-size: 10px';
   } else {
      input4.classList.remove('invalid');
      span4_2.style.display = 'none';
   }
}
input4.addEventListener('blur', checked4);

// input5

var input5 = document.getElementsByClassName('input-five')[0];
var span5_1 = document.getElementById('five-input');
input5.addEventListener('input', function () {
   if (input5.value < 100) {
      input5.classList.add('invalid');
      span5_1.innerHTML = 'Error! Колличество посетителей должно быть боьше 100!';
      span5_1.style.display = 'block';
   } else {
      input5.classList.remove('invalid');
      span5_1.style.display = 'none';
   }
});

function checked5() {
   if (input5.value === '') {
      input5.classList.add('invalid');
      span5_1.innerHTML = 'Вы не ввели данные';
      span5_1.style.display = 'block';
   } else {
      input5.classList.remove('invalid');
      span5_1.style.display = 'none';
   }
}
input5.addEventListener('blur', checked5);


//input6
var input6 = document.getElementById('six-name');
var span6 = document.getElementById('six-input');
var span6_2 = document.getElementById('six-input2');
input6.addEventListener('input', function () {
   if (!input6.value.includes('@')) {
      input6.classList.add('invalid');
      span6.innerHTML = 'Error! E-mail должен содержать @!';
      span6.style.display = 'block';
   } else {
      input6.classList.remove('invalid');
      span6.style.display = 'none';
   }
})
function checked6() {
   if (input6.value.trim() === '') {
      input6.classList.add('invalid');
      span6.innerHTML = 'Вы не ввели данные!';
      span6.style.display = 'block';
   } else {
      input6.classList.remove('invalid');
      span6.style.display = 'none';
   }
}
input6.addEventListener('blur', checked6);




// input7
// var input7 = document.querySelector('.input-seven');
// var span7 = document.getElementById('seven-input');
// input7.addEventListener('mousedown', function () {
//    console.log()
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

// input8
var radioF = 0;
var radio = document.getElementsByClassName('input-eight');

// var check1 = document.getElementById('eight-name-1');
// var check2 = document.getElementById('eight-name-1');
// var check3 = document.getElementById('eight-name-1');
var span8 = document.getElementById('eight-input');
radio[0].addEventListener("change", function () {
   span8.style.color = "white";
   radioF++;
})
radio[1].addEventListener("change", function () {
   span8.style.color = "white";
   radioF++;
})
radio[2].addEventListener("change", function () {
   span8.style.color = "white";
   radioF++;
})

function checked8() {
   for (key of radio) {
      if (!key.checked) {
         span8.innerHTML = 'Вы не выбрали способ размещения';
         span8.style.display = 'block';
      } else {
         span8.style.display = 'none';
         break;
      }
   }
}


// function checked8() {
//    if (check1.checked === false || check2.checked === false || check3.checked === false) {
//       span8.classList.add('invalid');
//       span8.innerHTML = 'Вы не выбрали способ размещения';
//       span8.style.display = 'block';
//    } else {
//       span8.classList.remove('invalid');
//       span8.style.display = 'none';
//    }
// }

// input9
var input9 = document.getElementById('ten-name');
var span9 = document.getElementById('ten-input');
function checked9() {
   if (input9 === false) {

      span9.innerHTML = 'Поле обязательно для заполнения';
      span9.style.display = 'block';
      // valid = false;
   } else {
      span9.style.display = 'none';
      // valid = true;
   }
}


// input10
var input10 = document.getElementById('content');
var span10 = document.getElementById('nine-input');
input10.addEventListener('input', function () {
   if (input10.value.length < 10 || input10.value.trim().length < 10) {
      input10.classList.add('invalid');
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
   } else {
      span10.style.display = 'none';
      input10.classList.remove('invalid');
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
   checked8();
   checked9()
   checked10();
}

btn.onclick = function () {
   checked();
   if (document.querySelector('.invalid') !== null) {
      checked();
      document.querySelector('.invalid').focus();
   } else {
      btn.type = 'submit';
   }
}
