const initialState = {
  numOfStrings: 6,
  scaleName: "A Major/Aeolian",
  scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  user: null,
  drawerDisplay: false,
  tuning: ["E", "A", "D", "G", "B", "E", "A", "D"]
};

const NUM_OF_STRINGS = "NUM_OF_STRINGS";
const SCALE_NAME = "SCALE_NAME";
const SCALE_NOTES = "SCALE_NOTES";
const USER_DATA = "USER_DATA";
const DRAWER_DISPLAY = "DRAWER_DISPLAY";
const UDATE_TUNING = "UDATE_TUNING";

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

export function drawerDisplay(display) {
  return {
    type: DRAWER_DISPLAY,
    payload: display
  };
}

export function updateTuning(tuning) {
  return {
    type: UDATE_TUNING,
    payload: tuning
  };
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
    case DRAWER_DISPLAY:
      return { ...state, drawerDisplay: action.payload };
    case UDATE_TUNING:
      return { ...state, tuning: action.payload };
    default:
      return state;
  }
}
