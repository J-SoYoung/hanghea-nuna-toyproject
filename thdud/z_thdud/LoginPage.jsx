import { useState } from "react";
import styled from "styled-components";

// Lottie style
import Lottie from "lottie-react";
import { loginLottie } from "../src/assets/lottie";

// 컴포넌트
// import Login from "../components/Login";
import LoginN from "../src/pages/LoginN";
// import SignUp from "./SignUp";




const LoginPage = () => {
  // const is_signIn = [signin, setSignin] = useState(true)
  // 회원가입/ 로그인 박스 

  return (
    <Contain>
      <BoxBox>
        <LoginBox>
          {/* {is_signIn? <LoginN /> : <SignUp/>} */}
          <LoginN />
        </LoginBox>
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
`
const LoginBox = styled.div`
  position : absolute;
  z-index: 10;
  top: 60%;
  left: 20%;
  transform: translate(-50%, -50%);
`
const ImgBox = styled.div`
  width: 900px;
  height: 700px;
  position : absolute;
  /* top: 2%; */
  left: 40%;
`

export default LoginPage;
