import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/404.module.css";

import { FaExclamationTriangle } from "react-icons/fa";

const Notfound = () => {
  return (
    <div>
      <Meta title="Page Not Found" />
      <div className={styles["error"]}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Notfound;
