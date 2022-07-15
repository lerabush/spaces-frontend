import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main";
import Login from "./components/auth/Login.";
import Register from "./components/auth/Register";
import Second from "./components/auth/quiz/ViewSecond";
import ViewSecond from "./components/auth/quiz/ViewSecond";
import EmodjiStrength from "./components/auth/quiz/EmodjiStrength";
import ViewThird from "./components/auth/quiz/ViewThird";
import FinishQuiz from "./components/auth/quiz/FinishQuiz";
import {BrowserRouter as Router,
Route,Link,Navigate} from "react-router-dom";
import {Routes} from "react-router";

class App extends Component{
    render(){
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/register/quiz/second" element={<ViewSecond/>}/>
                        <Route path="/register/quiz/third" element={<ViewThird/>}/>
                        <Route path="/register/quiz/finish" element={<FinishQuiz/>}/>
                    </Routes>
                </div>
            </Router>

        );
    }

}

export default App;
