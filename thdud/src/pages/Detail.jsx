import Layout from "../components/layout/Layout";
import DetailContent from "../components/Detailcomponents/Detailcontent";
import Comment from "../components/Comment/Comment";
import styled from "styled-components";

const Detail = () => {
  return (
    <Layout>
      <DetailContent />
      <CommentBox>
        <Comment />
      </CommentBox>
    </Layout>
  );
};

const CommentBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export default Detail;
