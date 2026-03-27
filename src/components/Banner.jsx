import "../assets/styles/banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="Logo de Vinyl Store" className="banner-logo" />
      <h2 className="banner-title">
        <span>&#9961;</span> Vinyl Store
      </h2>
    </div>
  );
};

export default Banner;
