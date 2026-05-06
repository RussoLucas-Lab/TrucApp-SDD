import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import anversoCard from "../assets/anverso_carta_truco.png";
import reverseCard from "../assets/reverse_card.png";
import "./WelcomeCard.css";

/**
 * WelcomeCard
 * Componente que muestra una carta de truco animada en el centro de la pantalla.
 * La carta gira (flip) al cargar y se puede cerrar con el botón "Comenzar".
 *
 * Props:
 * - onClose: función que se ejecuta cuando se cierra la carta
 */
function WelcomeCard({ onClose }) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const cardRef = React.useRef(null);
  const popupRef = React.useRef(null);

  // Animar la carta al montar el componente
  useEffect(() => {
    // Pequeño delay para asegurar que se renderice primero
    const timer = setTimeout(() => {
      setIsFlipping(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Esperar a que la animación inversa termine antes de ejecutar onClose
    setTimeout(() => {
      onClose();
    }, 750); // 0.75s es el tiempo de la animación scale inversa
  };

  return (
    <div
      ref={popupRef}
      className={`popup-card ${isClosing ? "close" : ""}`}
      aria-label="Bienvenida con carta de truco"
    >
      <div 
        ref={cardRef} 
        className={`card ${isFlipping ? "flip show" : ""} ${isClosing ? "closing" : ""}`}
      >
        {/* Back: Reverso de la carta */}
        <div className="card-back" style={{ backgroundImage: `url(${reverseCard})` }} />

        {/* Front: Anverso de la carta con botón */}
        <div className="card-front" style={{ backgroundImage: `url(${anversoCard})` }}>
          <button className="close-btn" id="close-popup" onClick={handleClose}>
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
}

WelcomeCard.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default WelcomeCard;
