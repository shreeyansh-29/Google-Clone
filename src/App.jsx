import React from "react";
import "./App.css";
import Home from "./pages/home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search?q=:urlSlug" children={<SearchPage />} />
          <Route exact path="/" children={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
