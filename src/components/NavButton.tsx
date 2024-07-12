import { Link } from "react-router-dom";

function NavButton({ text, link }) {
  return <Link to={link}>{text}</Link>;
}

export default NavButton;
