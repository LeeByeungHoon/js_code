

//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, 
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        }
    ]
};


console.log(articles.articleList[0].title);
console.log(articles.articleList[2].writer);


var bbs = articles.articleList;

console.log(bbs[0].viewCount);

for (var t of bbs) {
    console.log(t.title);
}