import { useLayoutEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import HomePage from "../views/HomePage";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route path="/" element={<HomePage />} />
      </Wrapper>
    </BrowserRouter>
  )
}

export default RouterApp;