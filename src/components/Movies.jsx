import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Movie from "../components/Movie";
import Pagination from "../components/pagination";
import Genres from "../components/genres";
import { paginate } from "../utils/paginate";
import { filterItems } from "../utils/filter";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    currentGenre: "All Genres",
    itemsPerPage: 3,
  };

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
    let arr = filterItems(this.state.movies, genre.name);
    console.log(arr);
    console.log(genre);
    this.setState({
      currentGenre: genre,
    });
    console.log(genre);
  };

  render() {
    const {
      movies,
      itemsPerPage,
      currentPage,
      genres,
      currentGenre,
    } = this.state;

    let { length: count } = movies;

    let slicedMovies = [];
    let showPagination = true;

    if (currentGenre === "All Genres") {
      console.log("thru");
      slicedMovies = paginate(movies, currentPage, itemsPerPage);
    } else {
      slicedMovies = filterItems(movies, currentGenre);
      count = slicedMovies.length;
      showPagination = false;
    }

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
                genres={genres}
                currentGenre={currentGenre}
                onGenreChange={this.handleGenreClick}
              />
            </div>
            <div className="col-9">
              {count === 0 && <p>There are no movies in the database</p>}
              {count > 0 && <p>Showing {count} movies in the database.</p>}

              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {slicedMovies.map((movie) => (
                    <Movie
                      key={movie._id}
                      movie={movie}
                      handleDelete={this.handleDelete}
                      onLikeToggle={() => this.handleLike(movie)}
                    />
                  ))}
                </tbody>
              </table>
              {showPagination ? (
                <Pagination
                  itemsCount={count}
                  itemsPerPage={itemsPerPage}
                  onPageChange={this.handlePageClick}
                  currentPage={currentPage}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
