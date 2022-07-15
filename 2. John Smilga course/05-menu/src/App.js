import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// create an array with all categories
const allCategories = [
  'all',
  ...items.reduce((acc, cur) => {
    if (!acc.includes(cur.category)) {
      acc.push(cur.category);
    }
    return acc;
  }, []),
];

function App() {
  const [meals, setMeals] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');

  function onCategorySelectHandler(category) {
    setSelectedCategory(category);
  }

  // filter meals by selected category
  let selectedMeals;
  if (selectedCategory === 'all') {
    selectedMeals = meals;
  } else {
    selectedMeals = meals.filter(meal => meal.category === selectedCategory);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={categories} onCategorySelect={onCategorySelectHandler} />

      <Menu meals={selectedMeals} />
    </section>
  </main>;
}

export default App;
