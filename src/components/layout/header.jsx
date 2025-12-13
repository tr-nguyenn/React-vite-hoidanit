import {Link} from "react-router-dom";
import "./header.css";
const Header = () => {
  //anchor  viết tắt là a
  return (
    <ul>
      <li>
        <Link class="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/users">User</Link>
      </li>
      <li>
        <Link to="/products">Product</Link>
      </li>
    </ul>
  );
};

export default Header;
