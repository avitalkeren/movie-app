import React from "react";
import { Switch, Route } from "react-router-dom";
import { MovieDetails, MovieList } from ".";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/:id" component={MovieDetails} />
    </Switch>
  </main>
);

export default Main;
