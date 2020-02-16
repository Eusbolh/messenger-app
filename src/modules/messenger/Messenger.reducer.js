import { MESSENGER_ACTIONS } from './Messenger.actions';

export default (state = null, action) => {
  switch (action.type) {
    case MESSENGER_ACTIONS.SELECT_CHAT:
      return {
        ...state,
        selectedChatID: action.payload.chatID,
      };
    default:
      return state;
  }
};
