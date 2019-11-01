
// ------------------------------ IMPORTS
// *    Style imports

// *    Library imports
import React, { Component } from "react";
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';

// *    Component imports


// ----------------------------- END IMPORTS

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    };

    componentDidMount() {

    };

    // --------------------------------------------------------- helper function

    // --------------------------------------------------------- Server calls

    // --------------------------------------------------------- listeners

    // --------------------------------------------------------- views

    // --------------------------------------------------------- render
    render() {
        const { isOpen } = this.props;
        return (
            <div className="menu-wrapper">
                <MenuItem
                    message={"Home"}
                    iconName={"home"}
                    isSelected
                    isOpen={isOpen}
                />
                <MenuItem
                    message={"Trending"}
                    iconName={"eco"}
                    isOpen={isOpen}
                />
                <MenuItem
                    message={"Trending"}
                    iconName={"subscriptions"}
                    isOpen={isOpen}
                />

                <div></div>
                <MenuItem
                    message={"Library"}
                    iconName={"video_library"}
                    isOpen={isOpen}
                />
                <MenuItem
                    message={"History"}
                    iconName={"history"}
                    isOpen={isOpen}
                />
                <MenuItem
                    message={"Watch Later"}
                    iconName={"watch_later"}
                    isOpen={isOpen}
                />
                <div></div>

            </div>
        );
    }

}

/**
 * all prop types which can be passed to this component
 */
Menu.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Menu.defaultProps = {

};

export default Menu;