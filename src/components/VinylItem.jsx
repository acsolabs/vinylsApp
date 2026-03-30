import "../assets/styles/vinylItem.css";
import RarityScale from "./RarityScale";

const VinylItem = ({ name, cover, artist, isSpecialOffer }) => {
  console.log("test");
  return (
    <li className="vs-vinyl-item">
      <img
        src={`/img/${cover}`}
        className="vs-vinyl-item-cover"
        alt={"pochette vinyle de " + name}
      />
      <p>{name}</p>
      <span>{artist}</span>
      {isSpecialOffer && <div className="vs-promo">promo</div>}
      {/* <RarityScale rarityValue={rarity} /> */}
    </li>
  );
};

export default VinylItem;

//  <li key={`${vinyl.id}`} className="vs-vinyl-item">
//               {vinyl.isBestSale && <span>🔥 </span>}
//               {vinyl.name}
//               {vinyl.isSpecialOffer && <div className="vs-promo">promo</div>}
//               <RarityScale rarityValue={vinyl.rarity} />
//             </li>
