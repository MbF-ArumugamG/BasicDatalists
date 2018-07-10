export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return action.user;
    default:
      return state;
  }
};