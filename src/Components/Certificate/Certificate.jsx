import React, { useState, useContext } from "react";
import certificate1 from "./certificate1.jpg";
import certificate2 from "./gtu.jpg";
import certificate3 from "./it step.jpg";
import certificate4 from "./magist.jpg";
import certificate5 from "./bacal.jpg";
import certificate6 from "./icons/sertificates/1000061599.jpg";
import certificate7 from "./icons/sertificates/1000061600.jpg";
import certificate8 from "./icons/sertificates/1000061601.jpg";
import icon1 from "./icons/Prime.jpg";
import icon2 from "./icons/development.jpg";
import icon3 from "./icons/sales.jpeg";
import icon4 from "./icons/managment.jpg";
import icon5 from "./icons/magistr.png";
import icon6 from "./icons/bacal.png";
import "./Certificate.css";
import prime1 from "./icons/sertificates/1000061602.jpg";
import prime2 from "./icons/sertificates/1000061603.jpg";
import prime3 from "./icons/sertificates/1000061604.jpg";
import prime4 from "./icons/sertificates/1000061605.jpg";
import prime5 from "./icons/sertificates/1000061606.jpg";
import prime6 from "./icons/sertificates/1000061607.jpg";
import prime7 from "./icons/sertificates/1000061608.jpg";
import prime8 from "./icons/sertificates/1000061609.jpg";
import stepSert from "./itStep.jpg";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";

const Certificates = () => {
  const { language } = useContext(LanguageContext);

  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  const divs = [
    { id: 1, icon: icon1, text: TEXTS[language].prime },
    { id: 2, icon: icon2, text: "FRONT-END DEVELOPMENT" },
    { id: 3, icon: icon3, text: TEXTS[language].sales },
    { id: 4, icon: icon4, text: TEXTS[language].management },
    { id: 5, icon: icon5, text: TEXTS[language].magistr },
    { id: 6, icon: icon6, text: TEXTS[language].bacal },
  ];

  const certificates = [
    [certificate1, certificate3, stepSert],
    [certificate6, certificate7, certificate8],
    certificate2,
    certificate4,
    certificate5,
  ];

  const primeCertificates = [
    prime1,
    prime2,
    prime3,
    prime4,
    prime5,
    prime6,
    prime7,
    prime8,
  ];

  const handleClick = (divId) => {
    if (divId === 1) {
      setSelectedCertificates(primeCertificates);
      setShowScroll(true);
    } else {
      const selectedCerts = certificates[divId - 2]; // Subtract 2 because divId starts from 2
      setSelectedCertificates(
        Array.isArray(selectedCerts) ? selectedCerts : [selectedCerts]
      );
      setShowScroll(false);
    }
  };

  const handleClose = () => {
    setSelectedCertificates([]);
    setShowScroll(false);
  };

  return (
    <div className="certificates-wrapper">
      <div className="certificates-box">
        {divs.map((div) => (
          <div
            key={div.id}
            onClick={() => handleClick(div.id)}
            className="certificate"
          >
            <img className="icon" alt="icon" src={div.icon} />
            <p>{div.text}</p>
          </div>
        ))}
        {selectedCertificates.length > 0 && (
          <div
            className={`modal ${showScroll ? "scroll" : ""}`}
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
