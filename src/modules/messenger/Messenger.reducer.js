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
          timestamp: '16 Feb, 19:16',
        }, {
          senderID: 'test1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16 Feb, 19:16',
        }, {
          senderID: 'test2',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16 Feb, 19:16',
        },
      ],
    }, {
      chatID: '2',
      users: ['test1', 'test2'],
      messages: [
        {
          senderID: 'test1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16 Feb, 19:16',
        }, {
          senderID: 'test1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16 Feb, 19:16',
        }, {
          senderID: 'test2',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor augue enim, sed interdum lectus mattis interdum.',
          timestamp: '16 Feb, 19:16',
        },
      ],
    },
  ],
  userID: 'test2',
};

export default (state = initialState, action) => {
  let updatedChats = null;
  switch (action.type) {
    case MESSENGER_ACTIONS.SELECT_CHAT:
      return {
        ...state,
        selectedChatID: action.payload.chatID,
      };
    case MESSENGER_ACTIONS.SEND_MESSAGE:
      updatedChats = [...state.chats];
      updatedChats
        .find(chat => chat.id === action.payload.chatID)
        .messages
        .push({
          senderID: action.payload.senderID,
          message: action.payload.message,
          timestamp: formatDate(new Date()),
        });
      return {
        ...state,
        chats: updatedChats,
      };
    default:
      return state;
  }
};
