import React from "react";
import Head from "next/head";
import Meta from "./Meta";
import styles from '../styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
    <Meta/>
    <Header/>  

    <div className={styles['container']}>
        {props.children}

    </div>
    <Footer/>
    </>
  );
};

export default Layout;
