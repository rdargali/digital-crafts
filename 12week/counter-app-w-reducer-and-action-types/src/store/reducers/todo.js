const initialState = {
  ToDo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return {
        ToDo: state.ToDo.concat(action.payload)
      };

    // case "REMOVE_TO_DO": {
    //   return {};
    // }

    default:
      return state;
  }
};

export default reducer;
