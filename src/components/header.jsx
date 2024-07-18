import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimer-logo" />
      </Link>

      <div>
        <Button onClick={() => navigate("/auth")}>Login</Button>
      </div>
    </nav>
  );
};

export default Header;
