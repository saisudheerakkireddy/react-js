import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API_URL}${restaurantId}`);
    const restaurantMenuData = await data.json();
    setResInfo(restaurantMenuData.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;