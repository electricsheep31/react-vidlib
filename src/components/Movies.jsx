import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./pagination";
import Genres from "./genres";

import { paginate } from "../utils/paginate";

import { listGroup } from "../common/listGroup";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    itemsPerPage: 3,
  };

  //in an application where backend services are consumed, the best place to initialize genres and movies
  //are in the componentDidMount lifecycle hook because it can take time before data is loaded and
  //a runtime error can occur because some state properties can be undefined

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handlePageClick = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index] = { ...movies[index] };

    //either syntax is fine, the goal is never mutate the state directly because movies[index]
    //initially references the object in the state. movies[index] needs to be instantiated with
    //a clone of either the parsed movie object or the movie object at index using the spread
    //operator. to see the direct state mutation, do:
    //console.log(this.state.movies[index]);

    movies[index].liked = !movies[index].liked;
    // movies[index].liked = movie.liked ? false : true;

    this.setState({
      movies: movies,
    });
  };

  handleGenreClick = (genre) => {
    this.setState({
      currentGenre: genre,
      currentPage: 1,
    });
  };

  render() {
    const {
      movies: allMovies,
      itemsPerPage,
      currentPage,
      genres,
      currentGenre,
    } = this.state;

    // if currentGenre is truthy, then use filter method
    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    let { length: count } = filtered;
    const filteredMovies = paginate(filtered, currentPage, itemsPerPage);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>VIDLY</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Genres
                items={genres}
                currentSelection={currentGenre}
                onSelectChange={this.handleGenreClick}
              />
            </div>
            <div className="col">
              {count === 0 && <p>There are no movies in the database</p>}
              {count > 0 && <p>Showing {count} movies in the database.</p>}

              <MoviesTable
                movies={filteredMovies}
                handleDelete={this.handleDelete}
                onLikeToggle={this.handleLike}
              />

              <Pagination
                itemsCount={count}
                itemsPerPage={itemsPerPage}
                onPageChange={this.handlePageClick}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
