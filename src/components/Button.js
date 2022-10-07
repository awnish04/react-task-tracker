import { click } from "@testing-library/user-event/dist/click";
import PropTypes from "prop-types";

const Button = ({ color, text ,onClick }) => {
  return (
    <button

      onClick={onClick}
      style={{ backgroundColor: color }}
      className="flex items-center  text-white text-center mr-5 px-4 py-2 rounded-md ml-8 text-decoration-none"
    >
      {text}
    </button>
  );
};
 
Button.defaultProps = {
  color: "black",
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func,
};

export default Button;

// bg-gradient-to-r from-gray-500 to-slate-500
