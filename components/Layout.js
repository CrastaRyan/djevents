import React from "react";
import Head from "next/head";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

const Layout = (props) => {

  const router = useRouter();

  return (
    <>
      <Meta />
      <Header />
      
      { router.pathname === '/' && <Showcase /> }

      <div className={styles["container"]}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
