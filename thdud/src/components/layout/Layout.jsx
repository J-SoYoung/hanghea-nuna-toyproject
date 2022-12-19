import React from "react";
import styled from "styled-components";

// styled components 패키지다운

const Layout = ({ children }) => {
  return (
    <>
      <StLayout>{children}</StLayout>
    </>
  );
};

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding-top: 30px;
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby6FmXiEBPT4ITbgNA5CgmOsn7tqoAetwxcvEcQNuukkRBBEIyMcFQ.0.woff2)
      format("woff2");
    unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19,
      U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOIl3I7dAGs2lYoVAUOdqfkBNGBJWUFERI.75.woff2)
      format("woff2");
    unicode-range: U+7a49, U+7a4d-7a4e, U+7a57, U+7a61-7a62, U+7a69, U+7a6b,
      U+7a70, U+7a74, U+7a76, U+7a79, U+7a7d, U+7a7f, U+7a81, U+7a84, U+7a88,
      U+7a92-7a93, U+7a95, U+7a98, U+7a9f, U+7aa9-7aaa, U+7aae-7aaf, U+7aba,
      U+7ac4-7ac5, U+7ac7, U+7aca, U+7ad7, U+7ad9, U+7add, U+7adf-7ae0, U+7ae3,
      U+7ae5, U+7aea, U+7aed, U+7aef, U+7af6, U+7af9-7afa, U+7aff, U+7b0f,
      U+7b11, U+7b19, U+7b1b, U+7b1e, U+7b20, U+7b26, U+7b2d, U+7b39, U+7b46,
      U+7b49, U+7b4b-7b4d, U+7b4f-7b52, U+7b54, U+7b56, U+7b60, U+7b6c, U+7b6e,
      U+7b75, U+7b7d, U+7b87, U+7b8b, U+7b8f, U+7b94-7b95, U+7b97, U+7b9a,
      U+7b9d, U+7ba1, U+7bad, U+7bb1, U+7bb4, U+7bb8, U+7bc0-7bc1, U+7bc4,
      U+7bc6-7bc7, U+7bc9, U+7bd2, U+7be0, U+7be4, U+7be9, U+7c07, U+7c12,
      U+7c1e, U+7c21, U+7c27, U+7c2a-7c2b, U+7c3d-7c3f, U+7c43, U+7c4c-7c4d,
      U+7c60, U+7c64, U+7c6c, U+7c73, U+7c83, U+7c89, U+7c92, U+7c95,
      U+7c97-7c98, U+7c9f, U+7ca5, U+7ca7, U+7cae, U+7cb1-7cb3, U+7cb9, U+7cbe,
      U+7cca, U+7cd6, U+7cde-7ce0, U+7ce7, U+7cfb, U+7cfe, U+7d00, U+7d02,
      U+7d04-7d08, U+7d0a-7d0b, U+7d0d, U+7d10, U+7d14, U+7d17-7d1b, U+7d20-7d21,
      U+7d2b-7d2c, U+7d2e;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOalvI7dAGs2lYoVAUOdqfkBNGBJWUFERI.37.woff2)
      format("woff2");
    unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
  }
`;

export default Layout;
