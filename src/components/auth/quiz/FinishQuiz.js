import React from 'react';
import '../../../styles/auth/auth.css'
import vdokhnovitely2 from '../../../images/vdoknovitely2.png'
import sally10 from '../../../images/Saly-10.png'
const FinishQuiz = () => {

    const handleClick= async (e) =>{
        const nextButton = document.querySelector(`.nextButton`)
        nextButton.classList.add(`nextButtonClicked`)
    }
  return(
      <div>
          <img align="left" src={vdokhnovitely2} style={{
              height:"50px",
              maxWidth:"300px",
              marginLeft:"65px"
          }}/>
          <div align="left" id="quizFinish" style={{
              margin:"20px 0 0 65px",
          }}>
              <div id="congrats" style={{
                  display:"flex",
                  flexDirection:"row",
                  alignItems:"center",
                  justifyContent:"space-around",
                  marginRight:"200px"
              }}>
                  <img src={sally10} style={{
                      height:"600px"
                  }}/>
                  <div align="center" id="congratsText" style={{
                      marginLeft:"100px",
                      marginRight:"100px"
                  }}
                  >
                      <p style={{
                          fontFamily:"Jost",
                          fontSize:"58px",
                          fontWeight:"500",
                          color:"#41008B"
                      }}
                        >Поздравляем!</p>
                      <p style={{
                          fontFamily:"Jost",
                          fontSize:"24px",
                          fontWeight:"300",
                          color:"#41008B"
                      }} >Ты уже на пути к своей мечте...</p>
                      <button onClick={handleClick} type="submit" className="nextButton" style={{
                          border:"none",
                          color:"white",
                          margin:"20px auto 0 auto"
                      }}>
                          Далее
                      </button>
                  </div>

              </div>
          </div>
      </div>

  );
}

export default FinishQuiz