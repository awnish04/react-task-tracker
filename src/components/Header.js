import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <div className=" bg-slate-200 mt-10 rounded-md py-10 ml-10 mr-10 flex justify-between ">
      <h1 className="text-3xl font-medium justify-center ml-5 ">{props.title}</h1>
      <Button color="black" text="Add" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

{
  /* <div className="bg-slate-300 py-10 ml-10 flex justify-between">
<h1 className="text-xl font-mono ">developedbyawnish</h1>
<ul className="flex items-center">
  <li>
    <a
      href="#"
      className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center px-4 py-2 rounded-md ml-8 text-decoration-none"
    >
      Resume
    </a>
  </li>
</ul>
</div> */
}
