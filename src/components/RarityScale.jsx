const RarityScale = (props) => {
  const rarityValue = props.rarityValue;
  console.log(props.rarityValue);
  return <div>{rarityValue ? rarityValue : null} 💎</div>;
};

export default RarityScale;
