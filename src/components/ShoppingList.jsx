import { vinylsList } from "../datas/vinylsList";

const ShoppingList = () => {
  const categories = vinylsList.reduce((acc, vinyl) => {
    if (!acc.includes(vinyl.category)) {
      acc.push(vinyl.category);
      console.log(acc);
    }
    return acc;
  }, []);

  return (
    <>
      <div>
        <h4>Catégories : </h4>
        <ul>
          {categories.map((cat) => {
            return <li key={cat}>{cat}</li>;
          })}
        </ul>
      </div>
      <ul>
        {vinylsList.map((vinyl) => {
          return <li key={`${vinyl.id}`}>{vinyl.name}</li>;
        })}
      </ul>
    </>
  );
};

export default ShoppingList;
