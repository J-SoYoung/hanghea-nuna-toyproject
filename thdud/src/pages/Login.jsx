import { useState } from "react";
import { useNavigate } from "react-router-dom";

// dispatch
import { useDispatch } from "react-redux";
import { __loginUser } from "../redux/modules/userSlice";

// Lottie style
import Lottie from "lottie-react";
import { loginLottie } from "../assets/lottie";
import { pickLottie } from "../assets/lottie";

// style 
import styled from "styled-components";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 회원가입/ 로그인 state
  const [username, setUsername] = useState('')
  const [userPw, setUserPw] = useState('')
  
  
  // 로그인 정보가 있는 (토큰이 만료되기 전) 유저가 로그인을 시도.
  // 로그인 과정을 또 거쳐야 하나? 아! 이건 서버까지 가지 않아도
  // 내가 로그인 부분을 해결할 수 있지 않을까?


  // 아이디, 비밀번호 정규식 --------------- 
  // id:영문-숫자 4,10 , pw:영문,숫자 8-20자 
  function isId(asValue) {
    var regExp =  /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/g;    
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
    return regExp.test(asValue);
  }

  // 로그인 버튼 클릭 ----------------- 
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
    // const login_data = {
    //   username : username,
    //   userPassword : userPw
    // } 
    const login_data = {
      "email": "janet.weaver@reqres.in",
      "password": "Janet" }
      console.log(login_data)
    dispatch(__loginUser(login_data))
    setUsername("")
    setUserPw("")
    //로그인 성공하면 메인페이지이동
    navigate("/")  
  }

  return (
    <Contain>
      <BoxBox>
        <BBox>
          <div className='MiniBox'>
            <Lottie animationData ={pickLottie}/>
            <Lottie animationData ={pickLottie}/>
            <Lottie animationData ={pickLottie}/>
          </div>
          <div className='ImgBox'>
            <Lottie animationData ={loginLottie}/>
          </div>
        </BBox>
        <LoginBox>
          <Title>항해 언니</Title>
          <p>예뻐지고 싶은 언니들의 커뮤니티</p>
          <Box>
            <p>로그인</p>
            <IdBox>
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
            </IdBox>
            <MoveBox>
              <button className='login_btn' onClick={goLogin}>
                로그인하기
              </button>
              <p onClick={()=>{navigate("/signUp")}}>
                아직 회원이 아니신가요?
              </p>
            </MoveBox>
          </Box>      
        </LoginBox>
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
  /* border:1px solid red;  */

`
const BBox = styled.div`
  width: 100%;
  heigth:100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  .MiniBox{
    display: flex;
    width : 500px;
    height: 240px;
    /* border:1px solid red;  */
    position: absolute;
    top: 5%;
    left: -10%;
  }
  .ImgBox{
    width: 850px;
    height: 700px;
    position : absolute;
    top: 0;
    left: 40%;
    /* transform: translateY(50%); */
  }
`

const LoginBox = styled.div`
  position : absolute;
  z-index: 10;
  top: 60%;
  left: 10%;
  transform: translateY(-50%);
`
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

export default Login;
