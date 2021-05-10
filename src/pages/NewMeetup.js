import { useHistory } from "react-router-dom";
import Form from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  const onAddMeetup = (data) => {
    fetch(
      "https://react-getting-started-81408-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <Form onAddMeetup={onAddMeetup} />
    </section>
  );
}

export default NewMeetupPage;
