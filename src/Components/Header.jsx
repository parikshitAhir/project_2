import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <h1 className="nav">Navbar</h1>
            <li>
              <Link className="hm" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hm" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="hm" to="/Services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hm" to="/Contact">
                Contact
              </Link>
            </li>
            <input
              className="serch"
              type="text"
              placeholder="search the....."
            ></input>
            <button className="click">Click</button>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
