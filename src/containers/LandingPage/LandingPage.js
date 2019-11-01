
// ------------------------------ IMPORTS
// *    Style imports

// *    Library imports
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import MovieList from "../../components/MovieList/MovieList";
import './styles.css';

// *    Component imports


// ----------------------------- END IMPORTS

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            searchValue: ''
        }
    }

    componentWillMount() {

    };

    componentDidMount() {

    };

    // --------------------------------------------------------- helper function

    // --------------------------------------------------------- Server calls

    // --------------------------------------------------------- listeners

    onClickMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    onChangeSearch = (searchValue) => {
        this.setState({
            searchValue
        });
    };


    // --------------------------------------------------------- views

    // --------------------------------------------------------- render
    render() {
        const { isOpen, searchValue } = this.state;
        return (
            <div className="landing-page-wrapper">
                <Navbar
                    onClickMenu={this.onClickMenu}
                    onChangeSearch={this.onChangeSearch}
                />
                <div className="menu-movie-wrapper">
                    <div>
                        <Menu isOpen={isOpen} />
                    </div>
                    {/* <div class> */}
                    <MovieList searchValue={searchValue} isOpen={isOpen} />
                    {/* </div> */}
                </div>
            </div>
        );
    }

}

/**
 * all prop types which can be passed to this component
 */
LandingPage.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
LandingPage.defaultProps = {

};

export default LandingPage;