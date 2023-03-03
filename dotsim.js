// const lunch = [
//   "국밥",
//   "콩나물무침",
//   "샐러드 닭가슴살",
//   "맥주",
//   "파스타",
//   "짬뽕",
//   "컵밥",
//   "한솥도시락",
//   "생라면",
//   "불고기",
//   "siri얼",
// ];


// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min) // 최댓값은 제외)
// }

// console.log(lunch[getRandomInt[0, lunch.length]]);

const dinner = [
  "떡볶이",
  "라면",
  "치킨",
  "소주",
  "맥주",
  "햄버거",
  "우동",
  "볶음밥",
  "짜장면",
  "탕수육",
  "짬뽕",
  "한우"
]

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(dinner[getRandomNumber(0, dinner.length)]);

// 소숫점이 아닌 수 -1 음수, 0, 1양수
// 이를 정수 : integer라고 함