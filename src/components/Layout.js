import { Outlet } from "react-router-dom";
import Header from "./header";
import HomePage from "./homepage";
import { useState } from "react";
import Cart from "../components/cart";

function Layout() {
  const [url, setUrl] = useState(window.location.pathname);

  let content;

  switch (url) {
    case "/":
      content = (
        <>
          <Header />

          <HomePage />
        </>
      );
      break;

    case "/cart":
      content = <Cart />;
      break;
  }
  return <>
    {content}
  </>;
}

export default Layout;
