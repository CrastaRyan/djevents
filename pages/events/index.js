import EventItem from "@/components/EventItem";
import { API_URL } from "config";

export default function EventsPage(props) {
  return (
    <div>
      <h1>My Events</h1>
      {props.evts.map((ele) => {
        return (
          <EventItem
            ele={ele}
            key={ele.id}
          />
        );
      })}

    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fetch(`${API_URL}` + "/api/events");
  let evts = await data.json();
  return {
    props: { evts },
    revalidate: 1,
  };
}
