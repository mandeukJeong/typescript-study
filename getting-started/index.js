// 문자열 타입
var nickname = 'captain';
// 숫자 타입
var age = 100;
// 진위 타입
var isLogin = false;
// 객체 타입
var hero = { name: 'captain', age: 100 };
// 배열 타입
// 문자열 배열
var companies1 = ['네이버', '삼성', '인프런'];
var companies2 = ['네이버', '삼성', '인프런'];
// 숫자 배열
var cards1 = [13, 7, 2, 4];
var cards2 = [13, 7, 2, 4];
// 튜플 타입
var items = ['hi', 1];
// any
var myName = '캡틴';
myName = 10;
var score = 100;
// null, undefined
var empty = null;
var nothingAssigned;
// 함수 입력값, 반환값 타입 정의
function sayWord(word) {
    return word;
}
// 옵셔널 파라미터
function sayMyName(firstName, lastName) {
    return 'my name : ' + firstName + ' ' + lastName;
}
