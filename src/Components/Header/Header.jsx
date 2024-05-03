import logo from "../../assets/logo-no-background.png";
import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <img alt="logo" src={logo} className="logo" />
      <Navbar />
      <img alt="icon" />
    </div>
  );
};
export default Header;
