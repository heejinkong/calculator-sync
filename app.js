const firstValue = document.getElementById('first');
const secondValue = document.getElementById('second');

const submitForm = document.getElementById('form');
const output = document.getElementById('output');

// 결과값 출력 핸들러
const formSubmitHandler = (event) => {
  event.preventDefault();

  // 덧셈 함수 호출
  const result = add(Number(firstValue.value), Number(secondValue.value));

  // 결과 값 출력
  output.textContent = result;
};

submitForm.addEventListener('submit', formSubmitHandler);

// 덧셈 함수
const add = (a, b) => a + b;