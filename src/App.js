import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import { Redirect, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <NavBar />
            <div>
              <Switch>
                <Route path="/movies/:id" component={MovieForm} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/customers" component={Customers} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" to="/movies" />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
