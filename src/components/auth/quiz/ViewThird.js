import React, {Component} from 'react';
import vdokhnovitely2 from '../../../images/vdoknovitely2.png'
import sally26 from '../../../images/Saly-26.png'
class ViewThird extends Component {
    render() {
        let selectedProps = []
        const handleClick= async (e) =>{
            const nextButton = document.querySelector(`.nextButton`)
            nextButton.classList.add(`nextButtonClicked`)
        }
        const handleSelect = async(e)=>{
            const selected = e.target;
            const character = e.target.innerText
            selectedProps.push(character)
            selected.style.border = "2px solid #41008b"
        }
        return (
            <div id="quizThird">
                <div style={{
                    fontFamily:"Jost",
                    marginLeft:"65px",
                    marginRight:"65px",
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
                            }}>Какой я?</p>
                            <p align="left">Выбери наиболее близкие для себя суждения</p>
                        </div>
                        <img src={sally26} style={{
                            height:"200px",
                            top:"-50px",
                            position:"relative",
                            marginRight:"20px"
                        }}>
                        </img>
                    </div>
                    <div className="gridCharacters">
                        <div id="firstRow" className="row1">
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#F0E0FF"
                            }}>
                                Интроверт
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#FFF4CD"
                            }}>
                                Экстраверт
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#DFE8F5"
                            }}>
                                Серьезный
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#CEFFCD"
                            }}>
                                Легкомысленный
                            </div>
                        </div>
                        <div id="secondRow" className="row2">
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#CEFFCD"
                            }}>
                                Индивидуалист
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#FFEBCD"
                            }}>
                                Командный игрок
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#E0EDFF"
                            }}>
                                Организованный
                            </div>
                        </div>
                        <div  id="thirdRow" className="row1">
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#FFF4CD"
                            }}>
                                Оптимист
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#E0EDFF"
                            }}>
                                Пессимист
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#F0E0FF"
                            }}>
                                Лидер
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#FFF4CD"
                            }}>
                                Исполнитель
                            </div>
                        </div>
                        <div id="fourthRow" className="row2">
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#E0EDFF"
                            }}>
                                Бескорыстный
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#CEFFCD"
                            }}>
                                Творческий
                            </div>
                            <div onClick={handleSelect} className="characterItem" style={{
                                background:"#E0EDFF"
                            }}>
                                Скромный
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} type="submit" className="nextButton" style={{
                        border:"none",
                        color:"white",
                        margin:"20px auto 30px auto",
                    }}>
                        Далее
                    </button>
                </div>

            </div>
        );
    }
}


export default ViewThird
