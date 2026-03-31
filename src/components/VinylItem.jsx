import "../assets/styles/vinylItem.css";

const VinylItem = ({ name, cover, artist, isSpecialOffer, year }) => {
  console.log("test");
  return (
    <li className="vs-vinyl-item">
      <img
        src={`/img/${cover}`}
        className="vs-vinyl-item-cover"
        alt={"pochette vinyle de " + name}
      />
      <p>{name}</p>
      <span className="artist">{artist}</span>
      {isSpecialOffer && <div className="vs-promo">promo</div>}
      <p className="year">{year}</p>
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
