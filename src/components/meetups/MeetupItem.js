import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ title, description, image, address, id }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  const toggleFavorite = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, title, description, image, address });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>
            {itemIsFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
