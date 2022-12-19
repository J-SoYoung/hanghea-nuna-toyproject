import { useState } from "react";
import styled from "styled-components";
import CardSlider from "../CardSlider/CardSlider";

function MainBody() {
  //const { isLoading, error, posts } = useSelector((state) => state.posts);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("eye");
  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tableClickHandler(0, "eye")}
        >
          눈
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tableClickHandler(1, "nose")}
        >
          코
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? "is-active" : ""}
          onClick={() => tableClickHandler(2, "chin")}
        >
          턱
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 3 ? "is-active" : ""}
          onClick={() => tableClickHandler(3, "liposuction")}
        >
          지방흡입
        </li>
      ),
    },
  ];

  const tableClickHandler = (index, category) => {
    setActiveIndex(index);
    setActiveCategory(category);
    console.log(index, category);
  };

  return (
    <div>
      <div className="tabTitle">
        <STTab className="tabs is-boxed">
          {tabContArr.map((section) => {
            return section.tabTitle;
          })}
        </STTab>
      </div>
      <div clssName="card">
        <CardSlider category={activeCategory} />
      </div>
    </div>
  );
}

const STTab = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 3px solid purple;
  padding: 0px 20px 0px 20px;
  //border: 1px solid;
  li {
    text-align: center;
    width: 25%;
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
`;
export default MainBody;
