const Cart = () => {
  const chapmanTalkin = { name: "Talkin' bout a revolution", price: 35 };
  const sadePromise = { name: "Promise", price: 15 };
  const badJackson = { name: "Bad", price: 19 };
  return (
    <div>
      <h3>Panier : </h3>
      <ul>
        <li>
          {chapmanTalkin.name} : {chapmanTalkin.price}€
        </li>
        <li>
          {sadePromise.name} :{sadePromise.price}€
        </li>
        <li>
          {badJackson.name} :{badJackson.price}€
        </li>
      </ul>
      <p>
        Total : {chapmanTalkin.price + sadePromise.price + badJackson.price}
      </p>
    </div>
  );
};

export default Cart;
