import React from "react";

function ScaleName (props) {
    return (
      <div>
        <select name="scaleName" onChange={props.handleChange} value={props.scaleName}>
          <option value="Major/Aeolian">Major/Aeolian</option>
          <option value="Minor/Ionian">Minor/Ionian</option>
          <option value="Dorian">Dorian</option>
          <option value="Phrygian">Phrygian</option>
          <option value="Lydian">Lydian</option>
          <option value="Mixolydian">Mixolydian</option>
          <option value="Locrian">Locrian</option>
          <option value="Harmonic Major">Harmonic Major</option>
          <option value="Harmonic Minor">Harmonic Minor</option>
          <option value="Major Pentatonic">Major Pentatonic</option>
          <option value="Minor Pentatonic">Minor Pentatonic</option>
        </select>
      </div>
    );
  }


export default ScaleName;