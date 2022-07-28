import React, { useState, useEffect, useCallback } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('My name is');
  const [value, setValue] = useState('random user');

  function titleAndValueHandler(ev) {
    const currentTitle = ev.target.dataset.label;
    setTitle(`My ${currentTitle} is`);
    setValue((user && user[currentTitle]) || 'random user');
  }

  const fetchUser = useCallback(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const userData = data.results[0];
        const newUser = {
          name: `${userData.name?.first} ${userData.name?.last}`,
          email: userData.email,
          age: userData.dob?.age,
          street: `${userData.location?.street?.number} ${userData.location?.street?.name}`,
          phone: userData.phone,
          password: userData.login?.password,
          image: userData.picture?.large
        };

        setUser(newUser);
        setTitle('My name is');
        setValue(newUser.name);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={user?.image || defaultImage} alt="random user" />
          <p className="user-title">{title}</p>
          <p className="user-value">{value}</p>

          <div className="values-list">
            <button className="icon" data-label='name' onMouseOver={titleAndValueHandler}>
              <FaUser />
            </button>
            <button className="icon" data-label='email' onMouseOver={titleAndValueHandler}>
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label='age' onMouseOver={titleAndValueHandler}>
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label='street' onMouseOver={titleAndValueHandler}>
              <FaMap />
            </button>
            <button className="icon" data-label='phone' onMouseOver={titleAndValueHandler}>
              <FaPhone />
            </button>
            <button className="icon" data-label='password' onMouseOver={titleAndValueHandler}>
              <FaLock />
            </button>
          </div>

          <button className="btn" type='button' onClick={fetchUser}>{isLoading ? 'loading...' : 'random user'}</button>
        </div>
      </div>
    </main>
  );
}

export default App;
