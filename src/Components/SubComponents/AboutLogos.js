import React from "react";
import { Image } from "semantic-ui-react";
import CDS from "../../Images/cds1.png";
import ADA from "../../Images/ada-logo1.svg";
import AES from "../../Images/AES1.png";
import Fellow from "../../Images/Fellow.png";
import NCC from "../../Images/ncc3.webp"
import Loyola from "../../Images/loyola.png"

const Logos = () => (
  <div className="myLogos">
    <Image.Group className="logoGroup" size="medium">
    <Image className="logoImage" src={Loyola} />
    <Image className="logoImage" src={NCC} />
      <Image className="logoImage" src={ADA} />
      <Image className="logoImage" src={CDS} />
      <Image className="logoImage" src={AES} />
      <Image className="logoImage" src={Fellow} />
      
      


    </Image.Group>
  </div>
);

export default Logos;
