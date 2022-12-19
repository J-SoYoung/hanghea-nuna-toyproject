import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { __deletePost } from "../../redux/modules/postSlice";

const DetailContent = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(state);
  }, [state]);

  const deleteHandler = () => {
    if (!window.confirm("해당글을 삭제하시겠습니까?")) return;
    dispatch(__deletePost(state));
    navigate(`/`);
  };

  const updateHandler = () => {
    if (!window.confirm("해당글을 수정하시겠습니까?")) return;
    const newContent = {
      id: state.id,
      category: state.category,
      title: state.title,
      price: state.price,
      content: state.content,
      imageBefore: state.imageBefore,
      imageAfter: state.imageAfter,
      hospitalAdress: state.hospitalAdress,
      doctor: state.doctor,
    };
    navigate(`/postingEdit`, { state: newContent });
  };
  return (
    <DetailSection>
      <div className="title">
        <h3>글제목: </h3>
        <p>{state.title}</p>
        <h3>
          <span>글번호:</span>
        </h3>
        <p>{state.id}</p>
        <button onClick={deleteHandler}>게시글 삭제</button>
        <button onClick={updateHandler}>게시글 수정하기</button>
      </div>
      <article className="content">
        <h2>내 용</h2>
        <div className="img">
          <img
            src="https://www.mangoboard.net/mgImg/com/template/TPL03312_Minibanner_Template.jpg"
            alt="이미지 전"
          ></img>
          <img
            src="https://www.mangoboard.net/mgImg/com/template/TPL05466_Minibanner_Template.jpg"
            alt="이미지 후"
          ></img>
        </div>

        <div className="contentText">
          <h2>시술 정보</h2>
          <h3>가격: </h3>
          <p className="price">{state.price}</p>
          <p>
            <span>내용:</span>
            {state.content}
          </p>
        </div>
      </article>
      <h2>병원 정보</h2>
      <div className="info">
        <p>
          <span>병원 주소:</span>
          {state.hospitalAdress}
        </p>
        <p>
          <span>원 장:</span> {state.doctor}
        </p>
        <p>
          <span>카테고리:</span> {state.category}
        </p>
      </div>
    </DetailSection>
  );
};

const DetailSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  font-family: "Noto Sans KR";

  //타이틀 css
  .title {
    border: 2px solid black;
    padding: 1% 2%;
    margin-bottom: 2%;
    p {
      display: inline-block;
      width: 30%;
      font-size: 1.2rem;
    }
    h3 {
      display: inline-block;
      width: 10%;
    }
  }

  //내용 css
  .content {
    padding: 1% 2%;
    margin-bottom: 2%;
    box-sizing: border-box;
    .img {
      display: flex;

      img {
        width: calc(100% - 20px);
        padding: 2% 2%;
      }
    }
    .contentText {
      padding: 2% 2%;
      p {
        font-size: 1.2rem;
        span {
          padding-right: 1%;
          font-weight: bold;
        }
      }
      .price {
        display: inline-block;
        width: 80%;
        font-size: 1.2rem;
      }
      h3 {
        display: inline-block;
        width: 5%;
      }
    }
  }

  //정보 css

  .info {
    padding: 1% 2%;
    margin-bottom: 2%;
    border: 2px solid black;
    p {
      font-size: 1.2rem;
      span {
        display: inline-block;
        padding: 1% 1%;
        font-weight: bold;
      }
    }
  }
`;

export default DetailContent;
