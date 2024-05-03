import MyImage from "../../assets/image.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <p>Hi!</p>
        <h1> I am Ani, </h1> <h1> a Front-End Developer</h1>
      </div>
      <div className="image-container">
        <img src={MyImage} alt="myImage" className="myImage" />
      </div>
    </div>
  );
};
export default Home;
