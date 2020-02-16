export const MESSENGER_ACTIONS = {
  SELECT_CHAT: 'M_SELECT_CHAT',
};

export const selectChat = data => ({
  type: MESSENGER_ACTIONS.SELECT_CHAT,
  payload: data,
});
