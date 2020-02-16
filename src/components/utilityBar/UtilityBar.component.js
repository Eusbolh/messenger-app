import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_1.png';

class UtilityBar extends Component {
  render() {
    return (
      <div className="c-utility-bar-component">
        <div className="c-utility-bar-user">
          <div className="c-utility-bar-user-avatar-container">
            <img
              alt="user-avatar"
              className="c-utility-bar-user-avatar"
              src={UserAvatar}
            />
          </div>
          <div className="c-utility-bar-user-info">
            <div className="c-utility-bar-user-name">Cüneyt Emre Yavuz</div>
            <div className="c-utility-bar-user-status">Active</div>
          </div>
        </div>
        <div className="c-utility-bar-options">
          
        </div>
      </div>
    );
  }
}

UtilityBar.propTypes = {
};

UtilityBar.defaultProps = {
};

export default UtilityBar;
