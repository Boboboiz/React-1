import { produce } from "immer";
const initialState = {
  users: [],
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = produce(state, (draft) => {
    switch (type) {
      case "user/UPDATE_USER_LIST": {
        draft.users = payload;
        break;
      }
      default: {
        break;
      }
    }
  }); // draft là bản coppy của state
  return newState;
};

export default reducer;
