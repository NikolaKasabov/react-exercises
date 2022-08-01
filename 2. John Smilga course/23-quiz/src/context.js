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
});

const AppProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });
  const [isLoading, setIsLoading] = useState(false);

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
    axios.get(url)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function submitHandler(ev) {
    ev.preventDefault();
    fetchData();
  }

  return (
    <AppContext.Provider value={{
      formValues,
      changeFormHandler,
      submitHandler,
    }}>{children}</AppContext.Provider>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
