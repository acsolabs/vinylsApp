import { vinylsList } from "../datas/vinylsList";
import RarityScale from "./RarityScale";
import "../assets/styles/shoppingList.css";

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
        {vinylsList.map((vinyl) => {
          return (
            <li key={`${vinyl.id}`} className="vs-vinyl-item">
              {vinyl.isBestSale && <span>🔥 </span>}
              {vinyl.name}
              {vinyl.isSpecialOffer && <div className="vs-promo">promo</div>}
              <RarityScale rarityValue={vinyl.rarity} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShoppingList;
