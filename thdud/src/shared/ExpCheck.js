
//export로 바꿔서 로그인 회원가입 페이지에 import시켜놓기
function isId(asValue) {
  var regExp =  /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/g;    
  return regExp.test(asValue);
}

function isPassword(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
  return regExp.test(asValue);
}



export const emailCheck = (email) => {
  // aa_-.123Aaa@aa.com
  // ^[] : 첫번째 글짜가 0~9 a~z A~Z 이다.
  // ([-_.0-9a-zA-z])* : ()이것이 여러번(*)반복될 수 있다.
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;

  return _reg.test(email);
};

// 이렇게 사용
// const idcheck = () => {
//   if (!emailCheck(id)) {
//     window.alert("이메일 형식이 맞지 않습니다!");
//     return;
//   }
//   userApis
//     .idcheck(id)
//     .then((res) => {
//       console.log(res);
//       if (res.data === true) {
//         alert("사용 가능한 아이디입니다!");
//       }
//     })
//     .catch((err) => {
//       console.log(err);

//       alert("중복된 아이디가 존재합니다.");
//     });
// };
