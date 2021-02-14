import React from "react";
import StyledMain from "../../styled-components/StyledMain";
import GlobalStylesComponent from "../../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStylesComponent />
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default Layout;
