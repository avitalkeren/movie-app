import React from "react";
import { Switch, Route } from "react-router-dom";
import { MovieDetails, MovieList , progressHOC } from ".";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={progressHOC("movies")(MovieList)} />
      <Route path="/:id" component={MovieDetails} />
    </Switch>
  </main>
);

export default Main;
