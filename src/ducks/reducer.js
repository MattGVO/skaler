const initialState = {
  numOfStrings: 6,
  scaleName: "A Major/Aeolian",
  scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  tuningName: "",
  user: null,
  tuning: ["E", "A", "D", "G", "B", "E", "A", "D"],
  userTunings: [],
};

const NUM_OF_STRINGS = "NUM_OF_STRINGS";
const SCALE_NAME = "SCALE_NAME";
const SCALE_NOTES = "SCALE_NOTES";
const USER_DATA = "USER_DATA";
const UPDATE_TUNING = "UPDATE_TUNING";
const UPDATE_TUNING_NAME = "UPDATE_TUNING_NAME"
const UPDATE_USER_TUNINGS = "UPDATE_USER_TUNINGS"

export function updateUserTunings(userTunings){
  return {
    type: UPDATE_USER_TUNINGS,
    payload: userTunings
  }
}

export function updateString(numOfStrings) {
  return {
    type: NUM_OF_STRINGS,
    payload: parseInt(numOfStrings)
  };
}

export function updateScale(scaleName) {
  return {
    type: SCALE_NAME,
    payload: scaleName
  };
}

export function updateScaleNotes(scaleNotes) {
  return {
    type: SCALE_NOTES,
    payload: scaleNotes
  };
}

export function updateUser(userData) {
  return {
    type: USER_DATA,
    payload: userData
  };
}


export function updateDuxTuning(tuning) {
  return {
    type: UPDATE_TUNING,
    payload: tuning
  };
}

export function updateTuningName(tuningName){
  return {
    type: UPDATE_TUNING_NAME,
    payload: tuningName
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NUM_OF_STRINGS:
      return { ...state, numOfStrings: action.payload };
    case SCALE_NAME:
      return { ...state, scaleName: action.payload };
    case SCALE_NOTES:
      return { ...state, scaleNotes: action.payload };
    case USER_DATA:
      return { ...state, user: action.payload };
    case UPDATE_TUNING:
      return { ...state, tuning: action.payload };
    case UPDATE_TUNING_NAME:
      return { ...state, tuningName: action.payload}
    case UPDATE_USER_TUNINGS:
      return { ...state, userTunings: action.payload}
    default:
      return state;
  }
}
