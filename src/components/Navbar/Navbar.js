
// ------------------------------ IMPORTS
// *    Style imports

// *    Library imports
import React, { Component } from "react";
import PropTypes from 'prop-types';

// *    Component imports
import logo from '../../youtube-logo.jpg';
import './styles.css';


// ----------------------------- END IMPORTS

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    

    // --------------------------------------------------------- helper function

    // --------------------------------------------------------- Server calls

    // --------------------------------------------------------- listeners

    onChangeSearch = (event) => {
        // this.setState({
        //     value: event.target.value
        // });
        this.props.onChangeSearch(event.target.value);
    };

    onClickMenu = () => {
        this.props.onClickMenu();
    };

    // --------------------------------------------------------- views

    // --------------------------------------------------------- render
    render() {
        const { searchValue } = this.props;
        return (
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <div className="hamburger-menu">
                        <i class="material-icons" onClick={this.onClickMenu}>
                            menu
                        </i>
                    </div>
                    <div className="youtube-logo-wrapper"><img className="youtube-logo" src={logo} /></div>
                </div>

                <div className="navbar-center">
                    <div className="navbar-center-input">
                        <input
                            types="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={this.onChangeSearch}
                        />
                    </div>
                    <div className="navbar-search-icon">
                        <i class="material-icons">
                            search
                    </i>
                    </div>
                </div>

                <div className="navbar-right">
                    <div className="navbar-right-icon">
                        <i class="material-icons">
                            videocam
                        </i>
                    </div>
                    <div className="navbar-right-icon">
                        <i class="material-icons">
                            apps
                        </i>
                    </div>
                    <div className="navbar-right-icon">
                        <i class="material-icons">
                            notification_important
                        </i>
                    </div>
                    <div className="navbar-right-icon">
                        <i class="material-icons">
                            account_circle
                        </i>
                    </div>
                </div>

            </div>
        );
    }

}

/**
 * all prop types which can be passed to this component
 */
Navbar.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Navbar.defaultProps = {

};

export default Navbar;