import { useState } from "react";
import { useNavigate } from "react-router-dom";

//redux, middleware
import { useDispatch } from "react-redux";
import { __signUpUser, __userCheck } from "../redux/modules/userSlice";

//Lottie style
import Lottie from "lottie-react";
import { loginLottie } from "../assets/lottie";

//style
import styled from "styled-components";
import '../shared/Common/Common.css';

const SignUp = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  // 회원가입/ 로그인 state
  const [userCheck, setUserCheck] = useState(false)
  const [username, setUsername] = useState('')
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
    // 서버요청시 : id만, 지금은 test
    const signup_data = {
      "email": "janet.weaver@reqres.in",
      "password": "Janet" 
    }
    console.log(username)
    dispatch(__userCheck(signup_data))
    // 디스패치 -> 서버에 중복체크 요청 /api/user/idcheck
    // useSelect에서 코드값 200이면 true로 바꿔.
    // if(statuscode === 200) { 
    //   console.log('중복체크pass', userCheck)
      setUserCheck(true)
    // }else{
    //   alert('중복된 아이디입니다.')
    // }
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
    // const signup_data = {
    //   username : username,
    //   userPassword : userPw,
    //   userPasswordCheck : userPwCheck,
    // }
    // test
    const signup_data = {
      "email": "janet.weaver@reqres.in",
      "password": "Janet" }
    // 중복확인 여부
    !userCheck ? 
      alert('아이디 중복확인을 해주세요')
    : 
      console.log('중복확인pass', userCheck)
      dispatch(__signUpUser(signup_data))


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
    // 회원가입 성공하면 로그인 페이지로 이동
    // navigate('/login')
  }


  // signIn T/F로 로그인-회원가입 창 분기함.
  return (
    <Contain>
      <BoxBox>
        <SignupBox>
          <Title>
            <p className='maintit'>항해 언니</p>
            <p className='subtit'>예뻐지고 싶은 언니들의 커뮤니티</p>
          </Title>
          <Box>
            <p>회원 가입</p>
            <IdBox>
              <div className="signin_box">
                <p>아이디</p>
                <div className='double_btn'>
                  <input 
                    value={username || ""}
                    type='text'  
                    placeholder='아이디를 입력해주세요'
                    onChange={(e)=>{
                      // console.log(username)
                      setUsername(e.target.value)}}
                    />
                  <button onClick={dupCheck}>중복확인</button>
                </div>
              </div>
              <>
                <p>비밀번호</p>
                <input
                  value={userPw || ""} 
                  type='password' 
                  placeholder='비밀번호를 입력해주세요'
                  onChange={(e)=>{
                    // console.log(userPw)
                    setUserPw(e.target.value)}}
                />
              </>
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
            </IdBox>
            <MoveBox>
              <button className='login_btn' onClick={goSignIn}>
                회원가입하기
              </button>
              <p onClick={()=>{navigate("/login")}}>
                이미 회원이신가요?
              </p>
            </MoveBox>
          </Box>      
        </SignupBox>
        <ImgBox>
          <Lottie animationData ={loginLottie}/>
        </ImgBox>
      </BoxBox>
    </Contain>
  )
}

const Contain = styled.div`
  width: 100vw;
	height: 100vh;
	background-color: #ffec99;
	/* background-color: #fff3bf; */
	/* background-color: #e5dbff; */
`
const BoxBox = styled.div`
  position: relative;
  width: 1400px;
  height:900px;
  margin: 0 auto;
  /* border: 1px solid red; */
`
const SignupBox = styled.div`
  position : absolute;
  z-index: 10;
  top: 20%;
  left: 7%;
  /* transform: translate(-50%, -50%); */
`
const ImgBox = styled.div`
  width: 900px;
  height: 700px;
  position : absolute;
  /* top: 2%; */
  left: 35%;
`
const Title = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-family: 'GongGothicMedium';
  border: 1px solid red;
  .maintit{
    font-size: 65px;
    margin-bottom: 10px;
  }
  .subtit{
    font-size: 30px;
  }
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
const IdBox= styled.div`
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


export default SignUp;
