import React from 'react';
import '../../../styles/auth/auth.css'
import angry from "../../../images/angry.png"
import sad from "../../../images/sad.png"
import neutral from "../../../images/neutral.png"
import smile from "../../../images/smile.png"
import happy from "../../../images/happy.png"
function EmodjiStrength(props) {
    //TODO сохранение выбранного смайла и навыка в мапу, передача в родительский компонент
    return (
        <div className="emodjiCtn" style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            padding:"5px 0 5px 0"
        }}>
            <div className="skillName" style={{
                background:"#F9F6FF",
                color:"#41008B",
                width:"250px",
                height:"56px",
                fontFamily:"Jost",
                fontWeight:"500",
                borderRadius:"12px",
                border:"2px solid #41008B"
            }}>
                <p>{props.text}</p>
            </div>
            <div className="emojiCollection">
                <label>
                    <input required type="radio" id="angry" name="emotion" value="angry"/>
                    <img src={angry}/>
                </label>
                <label>
                    <input required type="radio" id="sad" name="emotion" value="sad"/>
                    <img src={sad}/>
                </label>
                <label>
                    <input  required type="radio" id="neutral" name="emotion" value="neutral"/>
                    <img src={neutral}/>
                </label>
                <label>
                    <input required  type="radio" id="smile" name="emotion" value="smile"/>
                    <img src={smile}/>
                </label>
                <label>
                    <input required type="radio" id="happy" name="emotion" value="angry"/>
                    <img src={happy}/>
                </label>

            </div>
        </div>
    );
}

export default EmodjiStrength;