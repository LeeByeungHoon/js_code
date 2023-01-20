
// 스프레드 : 안전한 객체, 배열 복사
const foodList = ['자장면', '볶음밥', '탕수육'];

// const copyfoodList = [];
// for (let f of foodList){
//     copyfoodList.push(f);
// }

const copyFoodList = [...foodList, '떡볶이', '파스타'];

foodList[1] = '짬뽕';
copyFoodList[2] = '깐풍기';

const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
const copyEmp = {
    ...emp,
    isCopy : true,
    age : 50};

console.log('원본 : ',foodList);
console.log('사본 : ',copyFoodList);
console.log('원본 : ',emp);
console.log('사본 : ',copyEmp);