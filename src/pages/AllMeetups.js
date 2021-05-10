import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-getting-started-81408-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setData(meetups);
        console.log("data is: ", data);
      });
  }, []);

  if (!data) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList data={data} />
    </section>
  );
}

export default AllMeetupsPage;
