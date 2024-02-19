import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from "../../components/search";
import User from "../../assets/user.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="header__right">
          <Link to="/">Gmail</Link>
          <Link to="/">Images</Link>
          <AppsIcon />
          <Avatar src={User} />
        </div>
      </div>

      <div className="home__body">
        <img
          alt="google.com"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <div className="home__location">
        <div className="location__left">India</div>
        <div className="location__right">
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
