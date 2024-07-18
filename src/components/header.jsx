import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link>
        <img src="/logo.png" className="h-16" alt="Trimer-logo" />
      </Link>
    </nav>
  );
};

export default Header;
