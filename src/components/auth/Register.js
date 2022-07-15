import '../../styles/auth/auth.css'
import React from 'react';
import logoV from '../../images/logoV.png'
import lock from '../../images/lock.svg'
import envelop from '../../images/envelop.svg'
import person from '../../images/person.svg'
import phone from '../../images/phone.svg'
import {Navigate} from 'react-router-dom';
//TODO Redux
function Register() {

    const handleClick= async (e) =>{
        const nextButton = document.querySelector(`.nextButton`)
        nextButton.classList.add(`nextButtonClicked`)
        return <Navigate to={"/quiz/second"}/>
    }

    return (
        <div className="register" style={{
            margin: "60px auto 0 auto",
            fontFamily: "Jost"
        }}>
            <div className="registerCtn">
                <img src={logoV}/>
                <p style={{
                    color: "#41008B",
                    fontWeight: "500",
                    fontSize: "34px",
                    margin: "20px 0 0 0"
                }}>Регистрация</p>
                <p style={{
                    color: "#41008B",
                    fontWeight: "300",
                    fontSize: "24px",
                    margin: "0 0 10px 0"
                }}>Заполни свой Дневник</p>
                <form id="register">
                    <div className="userInput">
                        <img src={person}
                             style={{
                                 marginRight:"10px"
                             }}/>
                        <input required min="2" type="text" placeholder="Фамилия и имя"></input>
                    </div>
                    <div className="userInput">
                        <img src={phone}
                             style={{
                                 marginRight:"10px"
                             }}/>
                        <input required pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                               type="text" placeholder="Номер телефона"></input>
                    </div>
                    <div className="userInput">
                        <img src={envelop}
                             style={{
                                 marginRight:"10px"
                             }}/>
                        <input required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                               type="text" placeholder="Логин/электронная почта"></input>
                    </div>
                    <div className="userInput">
                        <img src={lock} style={{
                            marginRight:"10px"
                        }}/>
                        <input required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                               type="password" placeholder="Пароль"></input>
                    </div>
                    <button onClick={handleClick} type="submit" className="nextButton" style={{
                        border:"none",
                        color:"white"
                    }}>
                        Зарегистрироваться
                    </button>
                </form>

                <div id="linkToLogin" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <p>У тебя уже есть аккаунт? &nbsp;</p>
                    <a href="#">Войти</a>
                </div>

            </div>
        </div>
    );

}

export default Register;