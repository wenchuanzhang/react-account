import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Tags from "views/tags";
import Money from "views/Money/Index";
import Statistics from "views/Statistics";
import NoMatch from "views/NoMatch";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
