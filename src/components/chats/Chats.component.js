import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserAvatar from 'common/assets/user_avatar_2.png';
import Button from 'components/button/Button.component';

const chats = [
  {
    id: 'asdsadasdsadsad',
    contactName: 'Lorem Ipsum',
    lastMessageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastMessageDate: '2 hours ago',
  }, {
    id: 'qweqewqeqe',
    contactName: 'Lorem Ipsum',
    lastMessageContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    lastMessageDate: '2 hours ago',
  },
];

class Chats extends Component {
  renderChat = chat => (
    <Button
      classes="c-chats-chat"
      key={chat.id}
    >
      <div className="c-chats-chat-contact-avatar-container">
        <img
          alt="contact-avatar"
          className="c-chats-chat-contact-avatar"
          src={UserAvatar}
        />
      </div>
      <div className="c-chats-chat-content">
        <div className="c-chats-chat-info">
          <div className="c-chats-chat-contact-name">{chat.contactName}</div>
          <div className="c-chats-chat-last-message-date">{chat.lastMessageDate}</div>
        </div>
        <div className="c-chats-chat-last-message">{chat.lastMessageContent}</div>
      </div>
    </Button>
  )

  render() {
    return (
      <div className="c-chats-component">
        <div className="c-chats-list">
          {chats.map(chat => this.renderChat(chat))}
        </div>
      </div>
    );
  }
}

Chats.propTypes = {
};

Chats.defaultProps = {
};

export default Chats;
