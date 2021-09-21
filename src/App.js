import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rewardpage from "./Pages/Rewardpage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/reward/:id" component={Rewardpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
