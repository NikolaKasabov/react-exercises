import React, { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext({
  setSearchTerm: () => { },
  cocktails: [],
  isLoading: false,
});

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetch(url + searchTerm)
      .then(res => res.json())
      .then(data => {
        const cocktails = data.drinks;
        if (cocktails) {
          setCocktails(cocktails);
        } else {
          setCocktails([]);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchTerm]);

  return <AppContext.Provider value={{
    setSearchTerm,
    cocktails,
    isLoading
  }}>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider };
