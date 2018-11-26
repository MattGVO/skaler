const initialState = {
  numOfStrings: 1,
  scaleName: "A Major/Aeolian",
  scaleNotes:['A','B','C#','D','E','F#','G#'],
  user: null,
};

const NUM_OF_STRINGS = "NUM_OF_STRINGS";
const SCALE_NAME = "SCALE_NAME";
const SCALE_NOTES = "SCALE_NOTES"
const USER_DATA = 'USER_DATA';

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

export function updateScaleNotes(scaleNotes){
  return{
    type: SCALE_NOTES,
    payload: scaleNotes
  }
}

export function updateUser(userData){
  return {
      type: USER_DATA,
      payload: userData
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUM_OF_STRINGS:
      return { ...state, numOfStrings: action.payload };
    case SCALE_NAME:
      return { ...state, scaleName: action.payload };
    case SCALE_NOTES:
      return {...state, scaleNotes: action.payload};
    case USER_DATA:
      return {...state, user: action.payload};
    default:
      return state;
    }
}
