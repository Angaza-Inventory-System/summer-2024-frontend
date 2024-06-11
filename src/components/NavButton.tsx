import { Link } from "react-router-dom";

const NavButton: React.FC<{ text: string; link: string }> = ({
  text,
  link,
}) => <Link to={link}>{text}</Link>;
export default NavButton;
