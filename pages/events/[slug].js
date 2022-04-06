import React from "react";
import { API_URL } from "config";
import styles from "../../styles/Event.module.css";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

const EventPage = (props) => {
  const deleteEvent = (event) => {
    console.log("DELETE");
  };

  return (
    <div className={styles["event"]}>
      <div className={styles["controls"]}>
        <Link href={`/events/edit/${props.oneevent.id}`}>
          <a>
            <FaPencilAlt /> Edit Event
          </a>
        </Link>

        <a href="#" className={styles["delete"]} onClick={deleteEvent}>
          <FaTimes /> Delete Event
        </a>
      </div>

      <span>
        {props.oneevent.date} at {props.oneevent.time}
      </span>

      <h1>{props.oneevent.name}</h1>
      {
        props.oneevent.image && (
          <div className={styles['image']}>
            <Image src={props.oneevent.image}
              width={960}
              height={600}
            />

          </div>
        )
      }
      <h3>Performers: </h3>
      <p>{props.oneevent.performers }</p>

      <h3>Description:</h3>
      <p>
      {props.oneevent.description}
      </p>

      <h3>Venue: {props.oneevent.venue}</h3>

      <p>{props.oneevent.address}</p>

      <Link href={`/events`}>
        <a className={styles['back']}>{'<'} Go Back</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  let datas = await fetch(`${API_URL}` + `/api/events`);
  let events = await datas.json();

  let path_arr = [];
  events.forEach((element) => {
    path_arr.push({
      params: {
        slug: element.slug.toString(),
      },
    });
  });

  return {
    paths: path_arr,
    fallback: false, // it wll show 404 if path not found
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let aevent = await fetch(`${API_URL}` + `/api/events/${slug}`);
  let oneevent = await aevent.json();
  console.log("ONE EVENT");
  console.log(oneevent);
  return {
    props: {
      oneevent: oneevent,
    },
    revalidate: 1,
  };
}

export default EventPage;
