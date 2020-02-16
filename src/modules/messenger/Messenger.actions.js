export const MESSENGER_ACTIONS = {
  SEND_MESSAGE: 'M_SEND_MESSAGE',
  SELECT_CHAT: 'M_SELECT_CHAT',
};

export const selectChat = data => ({
  type: MESSENGER_ACTIONS.SELECT_CHAT,
  payload: data,
});

export const sendMessage = data => ({
  type: MESSENGER_ACTIONS.SEND_MESSAGE,
  payload: data,
});
