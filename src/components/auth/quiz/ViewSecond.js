import React, {Component} from 'react';
import {connect} from 'react-redux';
import vdokhnovitely2 from '../../../images/vdoknovitely2.png'
import sally26 from '../../../images/Saly-26.png'
import EmodjiStrength from "./EmodjiStrength";
class ViewSecond extends Component {
    render() {
        //TODO создать мапу характеристик и эмоций
        const handleClick= async (e) =>{
            const nextButton = document.querySelector(`.nextButton`)
            nextButton.classList.add(`nextButtonClicked`)
        }
        return (
            <div id="quizSecond">
                <div style={{
                    fontFamily:"Jost",
                    marginLeft:"65px",
                    marginTop:"30px",
                    display:"flex",
                    flexDirection:"column",
                }}>
                    <img src={vdokhnovitely2} style={{
                        height:"50px",
                        maxWidth:"300px"
                    }}/>
                    <div className="quiz">
                        <div className="quizText">
                            <p align="left" style={{
                                fontWeight:"500",
                                color:"#41008B",
                                fontSize:"36px",
                                marginBottom:"10px",
                            }}>Какая у тебя суперсила?</p>
                            <p align="left">У каждого Мечтателя есть своя суперсила – сильное качество,
                                которое выделяет его, помогает добиваться желаемого</p>
                        </div>
                        <img src={sally26} style={{
                            height:"200px",
                            top:"-50px",
                            position:"relative",
                            marginRight:"20px"
                        }}>
                        </img>
                    </div>
                    <form className="gridWrapper">
                        <EmodjiStrength text="Коммуникация и сотрудничество"/>
                        <EmodjiStrength text="Генерация идей"/>
                        <EmodjiStrength text="Организация и координация"/>
                        <EmodjiStrength text="Творчество, создание нового"/>
                        <EmodjiStrength text="Поиск ресурсов"/>
                        <EmodjiStrength text="Достижение и преодоление"/>
                        <EmodjiStrength text="Критическое мышление"/>
                        <EmodjiStrength text="Лидерство, умение вести за собой"/>
                    </form>
                    <button onClick={handleClick} type="submit" className="nextButton" style={{
                        border:"none",
                        color:"white",
                        margin:"20px auto 0 auto"
                    }}>
                        Далее
                    </button>
                </div>

            </div>
        );
    }
}


export default ViewSecond
