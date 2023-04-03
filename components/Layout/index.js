import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LazyLoadComponent } from "react-lazy-load-image-component";
const Layout = ({ children, }) => {
  return (
    <>
     <LazyLoadComponent>
      <Header />
     </LazyLoadComponent>
      {children}
      <LazyLoadComponent>
      <Footer />
      </LazyLoadComponent>

    </>
  );
};

export default Layout;
