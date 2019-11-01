/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';

/* Style imports */
import './styles.css';

/*** End Imports ***/

const Movie = (props) => {

    // helper function
    // event handlers for static component
    const { title, overView, views, image } = props;
    let imageUrl = 'http://image.tmdb.org/t/p/w185/' + image
    return (
        <div className="movie-wrapper">
            <div className="movie-image">
                <img src={imageUrl} />
            </div>
            <div className="movie-overview">{overView}</div>
            <div className="movie-title">{title}</div>
            <div className="movie-views">{views} Views</div>


        </div>

    );
};

/**
 * all prop types which can be passed to this component
 */
Movie.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Movie.defaultProps = {

};

export default Movie;