// 문자열 타입
var nickname: string = 'captain';

// 숫자 타입
var age: number = 100;

// 진위 타입
var isLogin: boolean = false;

// 객체 타입
var hero: object = { name: 'captain', age: 100 };

// 배열 타입
// 문자열 배열
var companies1: Array<string> = ['네이버', '삼성', '인프런'];
var companies2: string[] = ['네이버', '삼성', '인프런'];

// 숫자 배열
var cards1: Array<number> = [13, 7, 2, 4];
var cards2: number[] = [13, 7, 2, 4];

// 튜플 타입
var items: [string, number] = ['hi', 1];

// any
var myName: any = '캡틴';
myName = 10;
var score: any = 100;

// null, undefined
var empty: null = null;
var nothingAssigned: undefined;

// 함수 입력값, 반환값 타입 정의
function sayWord(word: string): string {
    return word;
}

// 옵셔널 파라미터
function sayMyName(firstName: string, lastName?: string): string {
    return 'my name : ' + firstName + ' ' + lastName;
}