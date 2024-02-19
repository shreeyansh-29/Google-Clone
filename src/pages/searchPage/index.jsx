/* eslint-disable no-unused-vars */
import {useStateValue} from "../../stateProvider";
import useGoogleSearch from "../../components/useGoogleSearch";
import {Link, useLocation} from "react-router-dom";
import Search from "../../components/search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import User from "../../assets/user.jpg";

import "./searchPage.css";

const SearchPage = () => {
  const [{term}, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term);
  const location = useLocation();
  const query = location.state;

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            alt="google.com"
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons query={query} />
        </div>
        <div className="searchPage__right">
          <AppsIcon fontSize={"large"} />
          <Avatar src={User} />
        </div>
      </div>
      <div className="searchPage__options">
        <div className="searchPage__optionsLeft">
          <div className="searchPage__option">
            <SearchIcon />
            <p>All</p>
          </div>
          <div className="searchPage__option">
            <DescriptionIcon />
            <p>News</p>
          </div>
          <div className="searchPage__option">
            <ImageIcon />
            <p to="">Images</p>
          </div>
          <div className="searchPage__option">
            <LocalOfferIcon />
            <p to="">Shopping</p>
          </div>
          <div className="searchPage__option">
            <RoomIcon />
            <p to="">Maps</p>
          </div>
          <div className="searchPage__option">
            <MoreVertIcon />
            <p to="">More</p>
          </div>
        </div>
        <div className="searchPage__optionsRight">
          <div className="searchPage__option">
            <p to="">Settings</p>
          </div>
          <div className="searchPage__option">
            <p to="">Tools</p>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item, index) => (
            <div className="searchPage__result" key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a
                href={item.link}
                className="searchPage__resultTitle"
                target="_blank"
                rel="noreferrer"
              >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
