export function formatPrice(number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number / 100);
}

export function getUniqueValues(products, valueType) {
  if (valueType === 'colors') {
    const uniqueColors = [];
    products.forEach(product => {
      product.colors.forEach(color => {
        if (!uniqueColors.includes(color)) {
          uniqueColors.push(color);
        }
      });
    });
    return uniqueColors;
  } else {
    const temp = [];
    products.forEach(p => {
      if (!temp.includes(p[valueType])) {
        temp.push(p[valueType]);
      }
    });
    return temp;
  }
}

export function getProductsMaxPrice(products) {
  const prices = products.map(p => p.price);
  return Math.max(...prices);
}

export function filterProducts(allProducts, filters) {
  let tempProducts = [...allProducts];

  // filter by search text
  tempProducts = tempProducts.filter(product => {
    return product.name.toLowerCase().includes(filters.text.toLowerCase());
  });

  // filter by category
  if (filters.category !== 'all') {
    tempProducts = tempProducts.filter(product => product.category === filters.category);
  }

  // filter by company
  if (filters.company !== 'all') {
    tempProducts = tempProducts.filter(product => product.company === filters.company);
  }

  // filter by color
  if (filters.color !== 'all') {
    tempProducts = tempProducts.filter(product => product.colors.includes(filters.color));
  }

  // filter by price
  tempProducts = tempProducts.filter(product => product.price <= filters.price);

  // filter by shipping available
  if (filters.shipping !== false) {
    tempProducts = tempProducts.filter(product => product.shipping);
  }

  return tempProducts;
}

export function sortProducts(products, sortBy) {
  const tempProducts = [...products];

  if (sortBy === 'price-lowest') {
    tempProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-highest') {
    tempProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-a') {
    tempProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  } else if (sortBy === 'name-z') {
    tempProducts.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
  }

  return tempProducts;
}

// returns array of numbers representing the stars, e.g.: for 3.6 stars -> [1, 1, 1, 0.6, 0]
export function getStarsAsArray(stars = 0) {
  const starsNumbers = [0, 0, 0, 0, 0];
  const hasHalfStar = stars % 1 !== 0;
  
  // add full stars
  for (let i = 0; i < Math.floor(stars); i++){
    starsNumbers[i] = 1;
  }

  // add half star, if it has one
  if (hasHalfStar) {
    starsNumbers[Math.floor(stars)] = stars % 1;
  }

  return starsNumbers.slice(0, 5);
}
