
/*

-- num이 전역변수라서 increase함수 이외에도 
   num의 상태값을 변경시킬 가능성이 존재한다.

// 카운팅
let num = 0; // 카운트 상태 변수

// 카운트 상태 변경 함수
const increase = function() {
    return ++num;
};

console.log(increase());
console.log(increase());

num = 999;

console.log(increase()); // 3?? => 1000
*/


//=======================================

/*

-- num이 지역변수라서 함수 호출시 재초기화되는 문제

const increase = function() {
    let num = 0; // 상태변수를 지역변수 처리
    return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase()); // 3?
*/


//==================================

// const increaseClosure = function() {

//     let num = 0; // 상태 변수

//     return function() {
//         return ++num;
//     };
// };

// const increase = increaseClosure();



const increaseClosure = () =>{
    let num = 0; // 상태변수 (지역 변수)

    function increase(){
        return ++num;
    }
    return increase
    // return () => ++num;
};

const result = increaseClosure();

console.log(result());
console.log(result());
console.log(result());

// 즉시 실행 함수
const result2 = (() => {
    let num = 0;
    return () => ++num;
})();
console.log(result2());
console.log(result2());
console.log(result2());
// const another = function() {
//     return ++num;
// }

// another();
