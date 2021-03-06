import React, { useState } from "react";
import { connect } from "react-redux";
import {loadMovies} from "../../redux/actions/MoviesAction";
import {updateSearchQuery} from "../../redux/actions/QueryAction";
import {loadTvShows} from "../../redux/actions/TvShowsAction";


const Search = props => {
  const [search, setSearch] = useState("");
  const { loadMovies, updateSearchQuery, loadTvShows } = props;

  const isSelected = props.isSelected;  

  const handleSubmit = e => {
    e.preventDefault();
    isSelected?loadMovies(search):loadTvShows(search);
    updateSearchQuery(search);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form
      className="search-container c-flex-container"
      onSubmit={e => handleSubmit(e)}
    >
      <input
        type="text"
        className="search-bar"
        id="search-bar"
        placeholder="Search for movies?"
        onChange={e => handleChange(e)}
      />
      <button className="search-bar__button" onClick={e => handleSubmit(e)}>
        <span className="search-bar__icon">&#9906;</span>
      </button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
    query: state.query,
    tvShows: state.tvShows,
    isSelected: state.isSelected
  };
}

const mapDispatchToProps = {
  loadMovies,
  updateSearchQuery,
  loadTvShows
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
