import styled from "styled-components";

function Header() {
  return (
    <STNavbar>
      <STInner>
        <div className="logo">
          <a href="/" className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5501/5501044.png"
              alt="logo"
              width="60px"
              height="60px"
            />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="/logIn">로그인</a>
            {/* login 값이 false이면 로그아웃 출력 되게 구현해야함 */}
          </li>
          <li>
            <a href="logIn">회원가입</a>
          </li>
          <li>
            <a href="/postingPage">글 작성</a>
          </li>
        </ul>
      </STInner>
    </STNavbar>
  );
}

const STNavbar = styled.header`
  width: 100%;
  height: 80px;
  background-color: #dcd0e6da;
`;

const STInner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;

  div.logo {
    width: 60px;
    height: 60px;
    margin: 10px 0px 10px 15px;
  }
  ul {
    display: flex;
    margin: 35px 20px 0px 0px;
    list-style: none;
    display: flex;
    li {
      display: flex;
      a {
        padding: 13px 15px;
        display: block;
        font-size: 13px;
        color: #5c5656;
        text-decoration: none;
        &:hover {
          background-color: #9179c9da;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Header;
