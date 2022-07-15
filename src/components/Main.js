import '../styles/auth/auth.css'
import React from 'react';
import vdokhnovitely from '../images/vdoknovitely.png'
import welcome from '../images/welcome.png'

const Main = () => {
    return (
        <div className="welcome">
            <div className="welcomeCtn" style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <div id="welcomeLogo" style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "40px 0 0 75px",
                    marginRight:"10px"
                }}>
                    <img src={vdokhnovitely} style={{
                        width: "240px"
                    }}/>
                    <img src={welcome} style={{
                        width: "600px"
                    }}/>
                </div>
                <div id="welcomeTxtBox" style={{
                    maxWidth: "500px"
                }}>
                    <p style={{
                        fontFamily: "Jost",
                        fontWeight: "500",
                        fontSize: "40px",
                        color: "white"
                    }}>Привет, Мечтатель!</p>
                    <p style={{
                        fontFamily: "Jost",
                        fontWeight: "300",
                        fontSize: "22px",
                        color: "white",
                        lineHeight:"24px",
                    }}>Добро пожаловать в «Дневник мечты»: здесь ты найдешь ответы на важные вопросы,
                        лучше узнаешь себя и поймешь, что для тебя по-настоящему важно.</p>
                    <button className="nextButton"  style={{
                        background:"white",
                        color:"#41008B"
                    }}>Вперёд к мечте!
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Main;
