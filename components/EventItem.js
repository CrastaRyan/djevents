import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/EventItem.module.css";

const EventItem = (props) => {
  return (
    <div className={styles["event"]}>
      <div className={styles["img"]}>
        <Image
          src={props.ele.image ? props.ele.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
      <div className={styles["info"]}>
        <span>
          {props.ele.date} at {props.ele.time}
        </span>
        <h3>{props.ele.name}</h3>
      </div>

      <div className={styles["link"]}>
        <Link href={`/events/${props.ele.slug}`}>
          <a className={styles['btn']}>Details</a>
        </Link>
      </div>

      <br />
    </div>
  );
};

export default EventItem;
