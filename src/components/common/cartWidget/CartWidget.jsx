import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <IoCart size="30px" />
      </Link>
    </div>
  );
};
