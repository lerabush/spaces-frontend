import '../../styles/auth/auth.css'
import React from 'react';
import logoV from '../../images/logoV.png'
import lock from '../../images/lock.svg'
import envelop from '../../images/envelop.svg'

function Login() {
    return (
        <div className="register" style={{
            margin: "100px auto 0 auto",
            fontFamily: "Jost"
        }}>
            <div className="registerCtn">
                <img src={logoV}/>
                <p style={{
                    color: "#41008B",
                    fontWeight: "500",
                    fontSize: "34px",
                    margin: "20px 0 0 0"
                }}>Вход</p>
                <p style={{
                    color: "#41008B",
                    fontWeight: "300",
                    fontSize: "24px",
                    margin: "0 0 10px 0"
                }}>Введи свой логин и пароль</p>
                <form id="login">
                    <div className="userInput">
                        <img src={envelop}
                             style={{
                                 marginRight:"10px"
                             }}/>
                        <input required pattern="^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$" type="text" placeholder="Логин"></input>
                    </div>
                    <div className="userInput">
                        <img src={lock} style={{
                            marginRight:"10px"
                        }}/>
                        <input  required pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                                type="password" placeholder="Пароль"></input>
                    </div>
                    <button type="submit" className="nextButton" style={{
                        background:"linear-gradient(263.18deg, #0E053A 22.81%, #BE70A2 90.06%)",
                        border:"none",
                        color:"white"
                    }}>
                        Войти
                    </button>
                </form>

                <div id="linkToRegister" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <p>У тебя ещё нет аккаунта? &nbsp;</p>
                    <a href="#">Создать</a>
                </div>

            </div>
        </div>
    );
}

export default Login;