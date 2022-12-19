import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postPost } from "../../redux/modules/postSlice";
import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    category: "",
    imageBefore: "",
    imageAfter: "",
    content: "",
    price: "",
    hospitalAdress: "",
    doctor: "",
  });

  const onSubmitHandler = () => {
    if (post.title === "") {
      alert("제목을 입력해주세요");
    } else if (post.category === "") {
      alert("카테고리를 선택해주세요!");
    } else if (post.content === "") {
      alert("내용을 입력해주세요!");
    } else {
      dispatch(__postPost(post));
      navigate("/");
    }
  };

  return (
    <STForm onSubmit={onSubmitHandler}>
      <STTitle>
        <STLabel>제목</STLabel>
        <STInput
          type="text"
          maxLength={"15"}
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, title: value });
          }}
        />
      </STTitle>
      <STCategory>
        <STCLabel>수술부위</STCLabel>
        <STSelect
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, category: value });
          }}
        >
          <option value="" defaultValue>
            카테고리를 선택해주세요
          </option>
          <option value="eye">눈성형</option>
          <option value="nose">코성형</option>
          <option value="chin">턱성형</option>
          <option value="liposuction">지방흡입</option>
        </STSelect>
      </STCategory>
      <STImage>
        <STImageLabel>전</STImageLabel>
        <input
          type="url"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, imageBefore: value });
          }}
        />
        <STImageLabel>후</STImageLabel>
        <input
          type="url"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, imageAfter: value });
          }}
        />
      </STImage>
      <STContent>
        <STTextarea
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, content: value });
          }}
        />
      </STContent>
      <STPrice>
        <STPriceLabel>시술 비용</STPriceLabel>
        <input
          style={{ fontSize: "bold" }}
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, price: value });
          }}
        />
        <STPriceLabel> 원</STPriceLabel>
      </STPrice>
      <STDoctor>
        <STInfoLabel>병원이름</STInfoLabel>
        <input
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, hospitalAdress: value });
          }}
        ></input>
        <STInfoLabel>원장님 성함</STInfoLabel>
        <input
          type="text"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, doctor: value });
          }}
        ></input>
      </STDoctor>
      <STBDIV>
        <STButton type="submit">완료</STButton>
      </STBDIV>
    </STForm>
  );
};

const STForm = styled.form`
  margin: 2% 0% 5% 15%;
  width: 60%;
  border: 1px solid black;
  border-radius: 25px;
  background-color: rgb(255, 255, 255);
  padding: 50px 50px 30px 40px;
`;
const STTitle = styled.div`
  width: 800px;
  height: 50px;
  margin: 10px 0px 30px 10px;
`;

const STLabel = styled.label`
  font-size: 30px;
  margin-right: 20px;
  font-weight: bold;
`;

const STInput = styled.input`
  width: 80%;
  height: 30px;
`;

const STCategory = styled.div`
  width: 60%;
  height: 30px;
  margin-bottom: 20px;
`;

const STCLabel = styled.label`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const STSelect = styled.select``;

const STImage = styled.div`
  margin-bottom: 20px;
`;

const STImageLabel = styled.label`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STContent = styled.div`
  width: 100%;
  height: 500px;
`;

const STTextarea = styled.textarea`
  width: 100%;
  height: 500px;
  font-size: 15px;
`;

const STPrice = styled.div`
  height: 30px;
  margin: 30px 0px 15px 0px;
`;

const STPriceLabel = styled.label`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STDoctor = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const STInfoLabel = styled.label`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  font-weight: bold;
`;

const STButton = styled.button`
  width: 50px;
  height: 30px;
`;

const STBDIV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
export default Form;
