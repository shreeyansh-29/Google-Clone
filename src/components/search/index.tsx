/* eslint-disable no-empty-pattern */
import {useState} from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import Micicon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../../stateProvider";
import {actionTypes} from "../../reducer";

type Iprops = {
  hideButtons?: boolean;
  query?: string;
};

const Search = ({hideButtons = false, query = ""}: Iprops) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState(query);
  const history = useHistory();

  const search = (e: any) => {
    e.preventDefault();
    if (!input.length) return;
    dispatch({type: actionTypes.SET_SEARCH_TERM, term: input});

    history.push({pathname: `/search?q=${input.trim()}`, state: input.trim()});
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          autoComplete="off"
        />
        <Micicon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
