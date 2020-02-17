import { formatDate } from 'common/helpers';
import { MESSENGER_ACTIONS } from './Messenger.actions';

const initialState = {
  selectedChatID: null,
  chats: [
    {
      chatID: '1',
      users: ['test1', 'test2'],
      messages: [
        {
          senderID: 'test1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 06:15 PM',
        }, {
          senderID: 'test1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 06:15 PM',
        }, {
          senderID: 'test2',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 09:15 PM',
        },
      ],
    }, {
      chatID: '2',
      users: ['test3', 'test2'],
      messages: [
        {
          senderID: 'test3',
          message: 'Lorem ipsum dolor sit amet,.',
          timestamp: '16.02.2020 06:15 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem scing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 06:15 PM',
        }, {
          senderID: 'test2',
          message: 'elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 07:12 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem ipsum dolor sit amet,.',
          timestamp: '16.02.2020 07:12 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem scing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test2',
          message: 'elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem ipsum dolor sit amet,.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem scing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test2',
          message: 'elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem ipsum dolor sit amet,.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test3',
          message: 'Lorem scing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        }, {
          senderID: 'test2',
          message: 'elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16.02.2020 08:01 PM',
        },
      ],
    },
  ],
  userID: 'test2',
};

export default (state = initialState, action) => {
  let targetChat = null;
  let updatedChats = null;
  switch (action.type) {
    case MESSENGER_ACTIONS.SELECT_CHAT:
      return {
        ...state,
        selectedChatID: action.payload.chatID,
      };
    case MESSENGER_ACTIONS.SEND_MESSAGE:
      updatedChats = [...state.chats];
      targetChat = updatedChats.find(chat => chat.chatID === action.payload.chatID);
      targetChat.messages
        .push({
          senderID: action.payload.senderID,
          message: action.payload.message,
          timestamp: formatDate(new Date()),
        });
      updatedChats = [targetChat, ...updatedChats.filter(chat => chat.chatID !== action.payload.chatID)];
      return {
        ...state,
        chats: updatedChats,
      };
    default:
      return state;
  }
};
