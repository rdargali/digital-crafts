const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "DOUBLE_COUNTER":
      return {
        ...state,
        counter: state.counter * 2
      };
    case "HALF_COUNTER":
      return {
        ...state,
        counter: state.counter / 2
      };

    default:
      return state;
  }
};

export default reducer;
