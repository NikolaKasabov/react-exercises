import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
  const {
    isLoading,
    showForm,
    questions,
    currentQuestionIndex,
    checkAnswer,
    correctAnswers,
    openNextQuestion,
  } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if (showForm) {
    return <SetupForm />;
  }

  const { question, incorrect_answers, correct_answer } = questions[currentQuestionIndex];

  // put the correct answer in random position
  const randomOrderAnswers = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * 4);
  randomOrderAnswers.splice(randomIndex, 0, correct_answer);

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">correct answers: {correctAnswers}/{currentQuestionIndex}</p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />

          <div className="btn-container">
            {randomOrderAnswers.map((answer, index) => {
              return (
                <button className="answer-btn"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(answer === correct_answer)}
                />
              );
            })}
          </div>
        </article>

        <button className="next-question" onClick={openNextQuestion}>next question</button>
      </section>
    </main>
  );
}

export default App;
