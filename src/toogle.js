import React,{useState} from "react";
import asia from './images/asia.jpg'
  
const ToggleSwitch = ({ label }) => {
  const [show,setshow] = useState(false)
  return (
    <>

      <div className="container">
        {label}{" "}
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
               name={label} id={label} onClick={() => {setshow(!show)}}/>
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    {
      show && 
      <div>
        <h1>Asia Cup</h1>
        <br />
        <img src={asia} alt="Asia Cup" width={300} height={300} /><br />
        <p>
        The Asian Cricket Council Asia Cup is a men's One Day International and Twenty20 International cricket tournament. It was established in 1983 when the Asian Cricket Council was founded as a measure to promote goodwill between Asian countries. It was originally scheduled to be held every two years. The Asia Cup is the only continental championship in cricket and the winning team becomes the champions of Asia. It alternates every 2-years between ODI and T20I formats.
        The first Asia cup was held in 1984 in Sharjah in the United Arab Emirates where the council's offices were based (until 1995). India boycotted the 1986 tournament due to strained cricketing relations with Sri Lanka. Pakistan boycotted the 1990–91 tournament due to strained political relations with India and the 1993 tournament was cancelled for the same reason. The ACC announced that the tournament would be held biennially from 2009 onwards.[3] The ICC has ruled that all games played in the Asia Cup have official ODI status.
        After downsizing the Asian Cricket Council in 2015, it was announced by the ICC that Asia Cup events from 2016 would be played on a rotation basis between One Day International and Twenty20 International format, on the basis of the format of upcoming world events.[4] As a result, the 2016 event was the first event played in the T20I format and functioned as a preparatory tournament ahead of the 2016 ICC World Twenty20.
        India, with seven titles (six ODI and one T20I), is the most successful team in the tournament. Sri Lanka is the second most successful team, with five. Sri Lanka has played the most Asia Cups (14) followed by India, Pakistan and Bangladesh who have played 13 each.
        </p>
      </div>
    }
    </>
  );
};
  
export default ToggleSwitch;