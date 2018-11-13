const initialState = {
  numOfStrings: 1
};

const NUM_OF_STRINGS = "NUM_OF_STRINGS";

export function updateString(numOfStrings) {
  return {
    type: NUM_OF_STRINGS,
    payload: 0 + parseInt(numOfStrings)
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUM_OF_STRINGS:
      return { ...state, numOfStrings: action.payload };
    default:
      return state;
  }
}
