import MeetupItem from "./MeetupItem";

import classes from "./MeetupList.module.css";

const MeetupList = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            title={meetup.title}
            description={meetup.description}
            image={meetup.image}
            address={meetup.address}
            id={meetup.id}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
