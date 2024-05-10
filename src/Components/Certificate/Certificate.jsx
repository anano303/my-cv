import React, { useState } from "react";
import certificate1 from "./certificate1.jpg";
import certificate2 from "./certificate2.jpg";
import certificate3 from "./certificate3.jpg";
import certificate4 from "./certificate4.jpg";
import certificate5 from "./certificate5.jpg";
import icon1 from "./icons/Prime.jpg";
import icon2 from "./icons/development.jpg";
import icon3 from "./icons/sales.jpeg";
import icon4 from "./icons/sales.jpeg";
import icon5 from "./icons/magistr.png";
import icon6 from "./icons/bacal.png";
import "./Certificate.css";

const Certificates = () => {
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  const divs = [
    { id: 1, icon: icon1, text: "სადაზღვევო კომპანია პრაიმი" },
    { id: 2, icon: icon2, text: "Front-End Development" },
    { id: 3, icon: icon3, text: "გაყიდვები" },
    { id: 4, icon: icon4, text: "მენეჯმენტი" },
    { id: 5, icon: icon5, text: "მაგისტრატურა" },
    { id: 6, icon: icon6, text: "ბაკალავრიატი" },
  ];

  const certificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
  ];

  const handleClick = (divId) => {
    if (divId === 1) {
      setSelectedCertificates(certificates);
      setShowScroll(true);
    } else {
      setSelectedCertificates([certificates[divId - 1]]);
      setShowScroll(false);
    }
  };

  const handleClose = () => {
    setSelectedCertificates([]);
    setShowScroll(false);
  };

  return (
    <div className="certificates">
      <h1>სერთიფიკატები</h1>
      <div className="certificates-box">
        {divs.map((div) => (
          <div
            key={div.id}
            onClick={() => handleClick(div.id)}
            className="certificate"
          >
            <img className="icon" alt="icon" key={div.id} src={div.icon} />
            <p>{div.text}</p>
          </div>
        ))}
        {selectedCertificates.length > 0 && (
          <div
            className={`modal ${showScroll ? "scroll" : ""} ${
              showScroll && selectedCertificates.length === 5 ? "row" : ""
            }`}
            onClick={handleClose}
          >
            {selectedCertificates.map((certificate, index) => (
              <img
                key={index}
                src={certificate}
                alt={`certificate ${index + 1}`}
                className="modal-image"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
