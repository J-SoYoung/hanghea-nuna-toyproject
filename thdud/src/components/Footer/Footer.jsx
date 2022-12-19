import styled from "styled-components";

function Footer() {
  return (
    <STFooter>
      <div className="inner">
        <ul>
          <li>KyuMin</li>
          <li>Sora</li>
          <li>ChumBaek</li>
          <li>SoYoung</li>
          <li>JinYoung</li>
          <li>SuMin</li>
        </ul>
      </div>
    </STFooter>
  );
}

const STFooter = styled.footer`
  background-color: #dcd0e6da;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-top: 100px;
  div {
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      li {
        margin-right: 20px;
        font-size: 13px;
      }
    }
  }
`;

export default Footer;
