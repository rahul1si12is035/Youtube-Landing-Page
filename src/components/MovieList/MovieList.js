
// ------------------------------ IMPORTS
// *    Style imports

// *    Library imports
import React, { Component } from "react";
import PropTypes from 'prop-types';

// *    Component imports

import Movie from './Movie/Movie';
import './styles.css';


// ----------------------------- END IMPORTS

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: []
        }
    }

    componentWillMount() {

    };

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=5d8360bb23f9c84de115ce525e06b1cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')

            .then(res => res.json())
            .then((json) => {
                this.setState({
                    movieList: json.results
                })
            })
    };

    // --------------------------------------------------------- helper function

    // --------------------------------------------------------- Server calls

    // --------------------------------------------------------- listeners

    // --------------------------------------------------------- views

    // --------------------------------------------------------- render
    render() {
        const { movieList } = this.state;
        const { searchValue, isOpen } = this.props;
        let newMovieList = movieList, customMovieListWrapper = {};
        if (searchValue) {
            newMovieList = newMovieList.filter(movie => {
                return movie.original_title.toString().toLowerCase().indexOf(searchValue) !== -1 || movie.overview.toString().toLowerCase().indexOf(searchValue) !== -1
            });
        }
        if (!isOpen) {
            customMovieListWrapper = {
                paddingLeft: '74px'
            }
        }

        return (
            <div style={customMovieListWrapper} className="movie-list-wrapper">
                <h3>Recommended</h3>
                <div className="movie-list">
                    {
                        newMovieList && newMovieList.length && newMovieList.map((movie) => {
                            return (
                                <Movie
                                    title={movie.original_title}
                                    overView={movie.overview}
                                    views={movie.vote_count}
                                    image={movie.poster_path}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}

/**
 * all prop types which can be passed to this component
 */
MovieList.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
MovieList.defaultProps = {

};

export default MovieList;