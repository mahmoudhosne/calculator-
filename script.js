'use strict';

let activeField = 0;
// values will store in current number
let currentNumber = [0, '', 0];
// if true active field = 0 else = 1
let active = true;

// function to get dom element
const getDomEle = function (className) {
  return document.querySelector(`.${className}`);
};

let firstField = getDomEle('value-input--0');
let secondField = getDomEle('value-input--2');

const operationSignField = getDomEle('operation');
// all numbers buttons

const btn0 = getDomEle('btn-00');
const btn1 = getDomEle('btn-1');
const btn2 = getDomEle('btn-2');
const btn3 = getDomEle('btn-3');
const btn4 = getDomEle('btn-4');
const btn5 = getDomEle('btn-5');
const btn6 = getDomEle('btn-6');
const btn7 = getDomEle('btn-7');
const btn8 = getDomEle('btn-8');
const btn9 = getDomEle('btn-9');

const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
// just btn zero has exeption case
btn0.addEventListener('click', function () {
  if (firstField.textContent > 0) {
    document.querySelector(`.value-input--${activeField}`).textContent +=
      btn0.textContent;
  } else {
    document.querySelector(`.value-input--${activeField}`).textContent =
      btn0.textContent;
  }
});
const clickEvent = function (arrayBtns) {
  for (let i = 0; i < arrayBtns.length; i++) {
    arrayBtns[i].addEventListener('click', function () {
      if (!operationSignField.textContent) {
        document.querySelector(`.value-input--${activeField}`).textContent +=
          arrayBtns[i].textContent;
        currentNumber[activeField] = firstField.textContent;
      } else {
        activeField = 2;
        document.querySelector(`.value-input--${activeField}`).textContent +=
          arrayBtns[i].textContent;
        currentNumber[activeField] = secondField.textContent;
      }
    });
  }
};

//////////////////////////////////////////////////////
// btns operation sign
const devide = getDomEle('btn-devide');
const muiltplye = getDomEle('btn-muiltplye');
const mines = getDomEle('btn-mines');
const plus = getDomEle('btn-plus');

const btnEquall = document.querySelector('.btn-equall');
const btnResult = document.querySelector('.value-result');
//////=================
const btnsOperationsSigns = [devide, muiltplye, mines, plus];
const clickEventaOpearionSign = function (btnsArray, operationSign) {
  for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].addEventListener('click', function () {
      if (activeField === 0 && firstField.textContent) {
        operationSign.textContent = btnsArray[i].textContent;
        currentNumber[1] = operationSign.textContent;
        active = false;
      } else if (activeField === 2) {
        if (currentNumber[1] === '+' && secondField.textContent) {
          firstField.textContent = +currentNumber[0] + +currentNumber[2];
          currentNumber[0] = firstField.textContent;
          operationSign.textContent = btnsArray[i].textContent;
          currentNumber[1] = operationSign.textContent;
          secondField.textContent = '';
          btnResult.textContent = '';
        } else if (currentNumber[1] === '-' && secondField.textContent) {
          firstField.textContent = +currentNumber[0] - +currentNumber[2];
          currentNumber[0] = firstField.textContent;
          operationSign.textContent = btnsArray[i].textContent;
          currentNumber[1] = operationSign.textContent;
          secondField.textContent = '';
          btnResult.textContent = '';
        } else if (currentNumber[1] === '*' && secondField.textContent) {
          firstField.textContent = +currentNumber[0] * +currentNumber[2];
          currentNumber[0] = firstField.textContent;
          operationSign.textContent = btnsArray[i].textContent;
          currentNumber[1] = operationSign.textContent;
          secondField.textContent = '';
          btnResult.textContent = '';
        } else if (currentNumber[1] === '/' && secondField.textContent) {
          firstField.textContent = +currentNumber[0] / +currentNumber[2];
          currentNumber[0] = firstField.textContent;
          operationSign.textContent = btnsArray[i].textContent;
          currentNumber[1] = operationSign.textContent;
          secondField.textContent = '';
          btnResult.textContent = '';
        }
      }
    });
  }
};

btnEquall.addEventListener('click', function () {
  if (!active) {
    activeField = 2;
    currentNumber[activeField] = +document.querySelector(
      `.value-input--${activeField}`
    ).textContent;
    const [indexZero, indexOne, indexTwo] = [...currentNumber];
    if (
      firstField.textContent >= 1 &&
      secondField === 0 &&
      operationSignField.textContent === '/'
    ) {
      // TODO to Eng ahmed => infinty
      btnResult.textContent = 'عذرا لايمكن القسمه علي صفر';
    } else {
      if (indexOne === '+') {
        btnResult.textContent = +indexZero + +indexTwo;
      } else if (indexOne === '-') {
        btnResult.textContent = +indexZero - +indexTwo;
      } else if (indexOne === '*') {
        btnResult.textContent = +indexZero * +indexTwo;
      } else if (indexOne === '/') {
        btnResult.textContent = +indexZero / +indexTwo;
      }
    }
  }
});

const btnRemoveNumByNum = getDomEle('btn-x');
btnRemoveNumByNum.addEventListener('click', function () {
  let x = firstField.textContent;
  x = x.split('');
  console.log(x);
  x = x.slice(0, -1);
});

//   let slicNumByNum = [];
//   slicNumByNum.push(currentNumber[0]);
//   slicNumByNum.slice(0, -1);
//   currentNumber[0] = slicNumByNum.join('');
//   firstField.textContent = currentNumber[0];
// } else if (
//   firstField.textContent &&
//   !secondField.textContent &&
//   operationSignField.textContent
// ) {
//   let sliceOperationSign = [];
//   sliceOperationSign.push(currentNumber[1]);
//   sliceOperationSign = sliceOperationSign.slice(0, -1);
//   currentNumber[1] = sliceOperationSign.join('');
//   operationSignField.textContent = currentNumber[1];
// } else if (
//   firstField.textContent &&
//   secondField.textContent &&
//   operationSignField.textContent
// ) {
//   let sliceNumByNum = [];
//   sliceNumByNum.push(currentNumber[2]);
//   sliceNumByNum = sliceNumByNum.slice(0, -1);
//   currentNumber[2] = sliceNumByNum.join('');
//   secondField.textContent = currentNumber[2];
// } else if (
//   firstField.textContent &&
//   secondField.textContent &&
//   operationSignField.textContent &&
//   btnResult.textContent
// ) {
//   firstField.textContent = '';
//   secondField.textContent = '';
//   operationSignField.textContent = '';
// }
clickEvent(btns);
clickEventaOpearionSign(btnsOperationsSigns, operationSignField);

// //reset all fields

const btnAc = document.querySelector('.btn-ac');
btnAc.addEventListener('click', function () {
  document.querySelector('.value-input--0').textContent = '';
  document.querySelector('.value-input--2').textContent = '';
  document.querySelector('.operation').textContent = '';
  document.querySelector('.value-result').textContent = '';
  activeField = 0;
  active = true;
  currentNumber = [0, '', 0];
});

/// close program
const btnClose = getDomEle('btn-close');
const content = getDomEle('content');

btnClose.addEventListener('click', function () {
  content.classList.add('hidden');
});
// =========================================
// const btnsOperationsSigns = [devide, muiltplye, mines, plus];
// const clickEventaOpearionSign = function (arrayBtns, inputValue) {
//   for (let i = 0; i < arrayBtns.length; i++) {
//     arrayBtns[i].addEventListener('click', function () {
//       inputValue.textContent = arrayBtns[i].textContent;
//       currentNumber[1] = inputValue.textContent;
//       currentNumber[0] = +document.querySelector(`.value-input--${activeField}`)
//         .textContent;
//       activeField = 1;
//       active = false;
//     });
//   }
// };

// //btns equall and result output
// const btnEquall = document.querySelector('.btn-equall');
// const btnResult = document.querySelector('.value-result');
// btnEquall.addEventListener('click', function () {
//   if (!active) {
//     activeField = 1;
//     currentNumber[2] = +document.querySelector(`.value-input--${activeField}`)
//       .textContent;
//     if (currentNumber[1] === '+') {
//       btnResult.textContent = +currentNumber[0] + +currentNumber[2];
//     } else if (currentNumber[1] === '-') {
//       btnResult.textContent = +currentNumber[0] - +currentNumber[2];
//     } else if (currentNumber[1] === '*') {
//       btnResult.textContent = +currentNumber[0] * +currentNumber[2];
//     } else if (currentNumber[1] === '/') {
//       btnResult.textContent = +currentNumber[0] / +currentNumber[2];
//     }
//   }
// });
// clickEvent(btns);
// clickEventaOpearionSign(btnsOperationsSigns, operationSignField);

// //reset all fields

// const btnAc = document.querySelector('.btn-ac');
// btnAc.addEventListener('click', function () {
//   document.querySelector('.value-input--0').textContent = '';
//   document.querySelector('.value-input--1').textContent = '';
//   document.querySelector('.operation').textContent = '';
//   document.querySelector('.value-result').textContent = '';
//   activeField = 0;
//   active = true;
//   currentNumber = [0, '', 0];
// });

// /// close program
// const btnClose = getDomEle('btn-close');
// const content = getDomEle('content');

// btnClose.addEventListener('click', function () {
//   content.classList.add('hidden');
// });
