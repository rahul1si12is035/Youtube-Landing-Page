/*** Imports ***/

/* Library imports */
import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

/* Style imports */

/*** End Imports ***/

const MenuItem = (props) => {

    // helper function
    // event handlers for static component
    const { message, iconName, isSelected, isOpen } = props;
    let customStyle = {}, menuStyle = {}, customSpanStyle = {};
    if (isSelected) {
        customStyle = {
            color: '#f00',
        }
        menuStyle = {
            background: '#e5e5e5',
            fontWeight: '500'
        }
    }

    if (!isOpen) {
        menuStyle = {
            ...menuStyle,
            flexDirection: 'column',
            width: '72px',
            height: '44px',
            padding: '16px 0 14px 0',
            font: 'normal 11px/12px Roboto'
        }
        customSpanStyle = {
            marginRight: '0'
        }
    }
    return (
        <div style={menuStyle} className="menuitem-list">
            <span style={customSpanStyle}>
                <i style={customStyle} class="material-icons">
                    {iconName}
                </i>
            </span>
            {message}
        </div>
    );
};

/**
 * all prop types which can be passed to this component
 */
MenuItem.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
MenuItem.defaultProps = {

};

export default MenuItem;