/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg"

import "./Welcome.css";

function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Boas Vindas</h2>
        <p>Clique para</p>
        <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do quiz" />

    </div>
  );
}

export default Welcome;