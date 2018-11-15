const initialState = {
  numOfStrings: 1,
  scaleName: "A Major/Aeolian",
};

const NUM_OF_STRINGS = "NUM_OF_STRINGS";
const SCALE_NAME = "SCALE_NAME";

export function updateString(numOfStrings) {
  return {
    type: NUM_OF_STRINGS,
    payload: parseInt(numOfStrings)
  };
}

export function updateScale(scaleName){
  return {
    type: SCALE_NAME,
    payload: scaleName
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUM_OF_STRINGS:
      return { ...state, numOfStrings: action.payload };
    case SCALE_NAME:
      return { ...state, scaleName: action.payload };
      default:
      return state;
    }
}
