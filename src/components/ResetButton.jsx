import PropTypes from "prop-types";
import "./ResetButton.css";

function ResetButton({ onReset }) {
  return (
    <button type="button" className="reset-button" onClick={onReset}>
      Reiniciar partida
    </button>
  );
}

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ResetButton;