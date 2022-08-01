import axios from 'axios';
import React, { useState, useContext } from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext({
  formValues: {},
  changeFormHandler: () => { },
  submitHandler: () => { },
  isLoading: false,
  showForm: true,
  hasError: false,
  questions: [],
  currentQuestionIndex: 0,
  checkAnswer: () => { },
  showModal: false,
  correctAnswers: 0,
  closeModal: () => { },
  openNextQuestion: () => { },
});

const AppProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function changeFormHandler(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    setFormValues(old => {
      return { ...old, [name]: value };
    });
  }

  function fetchData() {
    const url = `${API_ENDPOINT}amount=${formValues.amount}&difficulty=${formValues.difficulty}&category=${table[formValues.category]}&type=multiple`;

    setIsLoading(true);
    setHasError(false);
    axios.get(url)
      .then(data => {
        if (data.data?.results?.length > 0) {
          setQuestions(data.data.results);
          setShowForm(false);
        } else {
          setHasError(true);
        }
      })
      .catch(err => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }

  function submitHandler(ev) {
    ev.preventDefault();
    fetchData();
  }

  function checkAnswer(isCorrect) {
    if (isCorrect) {
      setCorrectAnswers(old => old + 1);
    }

    openNextQuestion();
  }

  function openNextQuestion() {
    setCurrentQuestionIndex(old => {
      if (old >= questions.length - 1) {
        // it was the last question
        openModal();
        return 0;
      } else {
        return old + 1;
      }
    });
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setCorrectAnswers(0);
    setShowForm(true);
    setShowModal(false);
  }

  return (
    <AppContext.Provider value={{
      formValues,
      changeFormHandler,
      submitHandler,
      isLoading,
      showForm,
      hasError,
      questions,
      currentQuestionIndex,
      checkAnswer,
      showModal,
      correctAnswers,
      closeModal,
      openNextQuestion,
    }}>{children}</AppContext.Provider>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
