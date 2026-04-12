import { vinylsList } from "../datas/vinylsList";
import "../assets/styles/shoppingList.css";
import VinylItem from "./VinylItem";

const ShoppingList = () => {
  const categories = vinylsList.reduce((acc, vinyl) => {
    if (!acc.includes(vinyl.category)) {
      acc.push(vinyl.category);
    }
    return acc;
  }, []);

  return (
    <>
      <div className="vs-vinyl-list">
        <h4>CATEGORIES </h4>
        <ul>
          {categories.map((cat) => {
            return <li key={cat}>{cat}</li>;
          })}
        </ul>
      </div>
      <ul className="vs-vinyl-list">
        {vinylsList.map(({ name, cover, id, artist, year }) => {
          return (
            <>
              <VinylItem
                key={id}
                cover={cover}
                name={name}
                artist={artist}
                year={year}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

const ShoppingListStyled = styled.div``;

export default ShoppingList;
