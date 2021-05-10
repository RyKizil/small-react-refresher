import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet</p>;
  } else {
    content = <MeetupList data={favoriteCtx} />;
  }
  return <section>{content}</section>;
}

export default FavoritesPage;
