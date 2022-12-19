import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const Comment = () => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.comment);
  // id로 넘어오는 값을 받는다 치고 1로 고정시켜서 데이터 출력함함
  const idx = 1;
  console.log(commentList);

  //댓글창stae, 수정여부state
  const [isComment, setIsComment] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // 댓글text
  const [commentText, setCommentText] = useState("");

  const add_comment = () => {
    if (commentText === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    // commentId는 서버에서 넣어줌, 임시로넣음
    // postId필요한가? 나만 필요한가?
    const newComment = {
      postId: 1,
      commentId: Math.floor(Math.random() * 100),
      comment: commentText,
      username: "로그인아직",
    };
    console.log("댓글 등록/", newComment);
    //dispatch(addComment(newComment));
    setCommentText("");
  };

  const del_comment = (id) => {
    console.log("댓글 삭제/", id);
    // dispatch
  };

  const edit_starCommit = (id) => {
    console.log("isEdit?/", id);
    // dispatch
  };

  const edit_endCommit = () => {
    console.log("수정완료/");
    // dispatch
  };

  return (
    <>
      <ComWriteBox>
        <CommentBtn
          onClick={() => {
            setIsComment(!isComment);
          }}
        >
          (말풍선) 댓글쓰기
        </CommentBtn>
        {!isComment ? null : (
          <>
            <div className="com_box">
              <textarea
                className="com_textarea"
                value={commentText || ""}
                placeholder="좋은 정보는 모이면 모일수록, 좋지요~! 댓글을 작성해주세요."
                onChange={(e) => {
                  // console.log(e.target.value)
                  setCommentText(e.target.value);
                }}
              />
              <button onClick={add_comment}>등록</button>
            </div>
            {/* <div>글자수:____</div> */}
          </>
        )}
      </ComWriteBox>

      <ComListBox>
        {commentList.map((c) => {
          // console.log(c)
          return (
            <div key={c.id} className="com_box">
              <div className="com_username">{c.username}</div>
              {!isEdit ? (
                <div className="com_text">{c.comment}</div>
              ) : (
                <>
                  <textarea
                    className="com_edit_textarea"
                    defaultvalue={commentText || ""}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCommentText(e.target.value);
                    }}
                  />
                </>
              )}
              {/* id가 내 id면 삭제, 수정버튼 보여주기 */}
              {!isEdit ? (
                <div className="comBtn_box">
                  <button
                    onClick={() => {
                      del_comment(c.id);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      setIsEdit(!isEdit);
                    }}
                  >
                    수정
                  </button>
                </div>
              ) : (
                <div className="comBtn_box">
                  <button
                    onClick={() => {
                      setIsEdit(!isEdit);
                    }}
                  >
                    수정취소
                  </button>
                  <button
                    onClick={() => {
                      edit_endCommit(c.id);
                    }}
                  >
                    수정완료
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </ComListBox>
    </>
  );
};

const ComListBox = styled.div`
  padding: 15px 25px;
  box-sizing: border-box;
  .com_box {
    border: 3px solid #e5dbff;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;

    box-sizing: border-box;
    .com_username {
      width: 180px;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #dcd0e6da;
      /* background-color: #ffec99; */
      /* background-color: #fff3bf; */
      /* background-color: #e5dbff; */
    }
    .com_text {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    .com_edit_textarea {
      width: 100%;
      height: 60px;
      /* resize: none; */
      outline: none;
      border: none;
      padding: 5px 10px;
      box-sizing: border-box;
    }
    .comBtn_box {
      width: 150px;
      height: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      display: flex;
      button {
        width: 50px;
        background-color: #dcd0e6da;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
`;
const ComWriteBox = styled(ComListBox)`
  textarea {
    width: 100%;
    height: 60px;
    /* resize: none; */
    outline: none;
    border: none;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  button {
    width: 130px;
    height: 100%;
    background-color: #dcd0e6da;
    border: none;
    cursor: pointer;
    /* margin: 10px; */
  }
`;
const CommentBtn = styled.p`
  width: 200px;
  height: 40px;
  /* color: #7950f2; */
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #dcd0e6da;
`;
export default Comment;

//-------------------------------------- memo
// 다음번엔 날짜를 받는것도 좋을 것 같다.
// 후속처리 1시간전 이런 것도 시도해보자.
// 네이버 블로그 댓글창 보기
// 코멘트도 컴포넌트 더 쪼갤 수 있다. (item, list, writer)
// const commentList = () =>{
//       <CommentItem />
