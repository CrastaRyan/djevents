import EventItem from "@/components/EventItem";
import { API_URL } from "config";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      {props.evts.map((ele) => {
        return <EventItem ele={ele} key={ele.id} />;
      })}

      {props.evts.length > 0 && (
        <Link href="/events">
          <a className={styles["btn-secondary"]}>View more</a>
        </Link>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(`${API_URL}` + "/api/events");
  let data = await fetch(`${API_URL}` + "/api/events");
  let evts = await data.json();
  return {
    props: { evts: evts.slice(0, 3) },
    revalidate: 1,
  };
}
