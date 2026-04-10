import "../assets/styles/banner.css";
import logo from "../assets/logo.png";
import styled from "styled-components";

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

const BannerStyled = styled.div``;

export default Banner;
