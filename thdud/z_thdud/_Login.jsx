import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import '../shared/Common/Common.css';

const _Login = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // 회원가입/ 로그인 박스 
  const [is_signIn, is_setSignIn] = useState(false)
  // 회원가입/ 로그인 state
  const [username, setUsername] = useState('')
  const [userCheck, setUserCheck] = useState(false)
  const [userPw, setUserPw] = useState('')
  const [userPwCheck, setUserPwCheck] = useState('')

  // 아이디, 비밀번호 정규식 
  // id:영문-숫자 4,10 , pw:영문,숫자 8-20자 
  function isId(asValue) {
    var regExp =  /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/g;    
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    return regExp.test(asValue);
  }

  // 중복체크
  const dupCheck = () =>{
    if(!isId(username)){ 
      alert('영문과 숫자를 포함하는 4-10자의 이내의 아이디를 입력해주세요')
      return 
    }
    setUserCheck(true)
    console.log('중복체크pass', userCheck)
    dispatch()
  }
  
  // 로그인
  const goLogin = () => {
    // 정규식 체크
    if(!isId(username)){ 
      console.log(isId(username)) 
      alert('영문과 숫자를 포함하는 4-10자의 이내의 아이디를 입력해주세요')
      return 
    }
    if(!isPassword(userPw)){ 
      console.log(isPassword(userPw))
      alert('영문과 숫자를 포함하는 8-15자 이내의 비밀번호를 입력해주세요')
      return 
    }
    // user데이터전송
    const user_data = {
      username : username,
      userPassword : userPw
    }
    console.log(user_data)
    // dispatch(user_data)
    
    // -------------------------------
    // 버튼 누르면 
    // input에서 username, password받고 
    // 정규식 처리후 데이터와 함께
    // ---- dispatch, redux ---- 
    // 서버 통신 => instance(url).post('/api/user/login',유저데이터)
    // 서버통신 성공하면 
    // 토큰을 받아서 쿠키를 로컬에 저장함
    // is_login=true
    // ---- 결과 나오면 -----
    // 로그인 결과 띄우기 
    // input들은 초기화시키기
    // T메인페이지로 넘어감, F커서=>id, 알림창띄우기
    // --------------------------------
    setUsername("")
    setUserPw("")
    navigate("/")  
  }

  // 회원가입
  const goSignIn = () =>{
    console.log('회원가입', username, userPw, userPwCheck)
    // 정규식 체크
    if(!isId(username)){ 
      console.log(isId(username)) 
      alert('영문과 숫자를 포함하는 4-10자의 이내의 아이디를 입력해주세요')
      return 
    }
    if(!isPassword(userPw)){ 
      console.log(isPassword(userPw))
      alert('영문과 숫자를 포함하는 8-15자 이내의 비밀번호를 입력해주세요')
      return 
    }
    if(userPw !== userPwCheck){
      alert('비밀번호를 다시 한번 더 입력하세요')
      return
    }
    // user데이터전송
    const user_data = {
      username : username,
      userPassword : userPw,
      userPasswordCheck : userPwCheck,
    }
    // 중복확인 여부
    console.log(userCheck)
    !userCheck ? 
    alert('아이디 중복확인을 해주세요')
    : 
    console.log('중복확인pass', user_data)
    // dispatch(user_data)

//----------------------------------------
    // 회원가입 버튼 누르면 
    // /api/user/idcheck 중복확인 
    // input에서 id 중복확인, 서버로 dispatch(결과404면 state:false)
    // 결과T/F: userCheck -> T면, 회원가입 유저정보 서버에 넘김
    // 정규식 처리후 데이터와 함께
    // 서버 통신 id, pw, pwcheck 보냄 
    // ---- dispatch, redux ---- 
    // 서버 통신 => instance(url).post('/api/user/signup',유저데이터)
    // 서버통신 성공! 
    // ----결과 나오면 -----
    // 회원가입 결과 띄우기 
    // 로그인 컴포넌트로 넘어감, F커서=>id, 알림창띄우기
    // input들은 초기화시키기
//----------------------------------------
    setUsername("")
    setUserPw("")
    setUserPwCheck("")
    // 회원가입 성공하면 로그인 컴포넌트로 변경
    is_setSignIn(false)
  }


  // signIn T/F로 로그인-회원가입 창 분기함.
  return (
    <>
      <Title>항해 언니</Title>
      <Box>
        {is_signIn?<p>회원 가입</p>:<p>로그인</p>}
        <IdBox>
          {is_signIn?
            <div className="signin_box">
              <p>아이디</p>
              <div className='double_btn'>
                <input 
                  value={username || ""}
                  type='text'  
                  placeholder='아이디를 입력해주세요'
                  onChange={(e)=>{
                    // console.log(username)
                    setUsername(e.target.value)
                    
                  }}
                  />
                <button onClick={dupCheck}>중복확인</button>
              </div>
            </div>
          :
            <div className="login_box">
              <p>아이디</p>
              <input 
                value={username || ""}
                type='text'  
                placeholder='아이디를 입력해주세요'
                onChange={(e)=>{
                  // console.log(username)
                  setUsername(e.target.value)}}
                />
            </div>
          }
        </IdBox>
        <PwBox>
          <p>비밀번호</p>
          <input
            value={userPw || ""} 
            type='password' 
            placeholder='비밀번호를 입력해주세요'
            onChange={(e)=>{
              // console.log(userPw)
              setUserPw(e.target.value)}}
          />
          {is_signIn?
            <>
              <p>비밀번호 확인</p>
              <input
                value={userPwCheck || ""} 
                type='password' 
                placeholder='비밀번호를 한번 더 입력해주세요'
                onChange={(e)=>{
                  // console.log(userPwCheck)
                  setUserPwCheck(e.target.value)}}
              />
            </>
          : "" }
        </PwBox>
        <MoveBox>
          {is_signIn?
          <>
            <button className='login_btn' onClick={goSignIn}>
              회원가입하기
            </button>
            <p onClick={()=>{
              is_setSignIn(!is_signIn)
              setUsername("")
              setUserPw("")
              }}>
              이미 회원이신가요?
            </p>
          </>
          : 
          <>
            <button className='login_btn' onClick={goLogin}>
              로그인하기
            </button>
            <p onClick={()=>{
              is_setSignIn(!is_signIn)
              setUsername("")
              setUserPw("")
              }}>
              아직 회원이 아니신가요?
            </p>
          </>
          }
        </MoveBox>
      </Box>      
    </>
  )
}


// 로그인페이지
// 공통인 부분들을 최대한 사용
const Title = styled.p`
  font-size: 65px;
  font-weight:600;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'GongGothicMedium';
`;
const Box = styled.div`
  width: 550px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 3px gray;
  font-family: 'GongGothicMedium';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  p{
    font-size : 25px;
    margin: 10px 0 30px;
  }
`;

const PwBox= styled.div`
  width: 100%;
  p{
    font-size: 18px;
    margin: 10px 0 5px 0;
  }
  input{
  width:100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
  border: 1px solid #74c0fc;
}
`;
// 위의 스타일 받아서 적용함 -> 추가로 더 적용시킴
const IdBox = styled(PwBox)`
  .double_btn{
    display: flex;
    button {
      width : 100px;
      height: 40px;
    }
  }
`;


const MoveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  button{
    margin: 15px 0 10px;
    height: 35px;
    width: 40%;
    cursor: pointer;
  }
  p{
    cursor: pointer;
    font-size:16px;
  }
`;


export default _Login;
