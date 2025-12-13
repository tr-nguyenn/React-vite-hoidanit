import {Link, NavLink} from "react-router-dom";
import "./header.css";
const Header = () => {
  //anchor  viết tắt là a
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">User</NavLink>
      </li>
      <li>
        <NavLink to="/products">Product</NavLink>
      </li>
    </ul>
  );
};

export default Header;
