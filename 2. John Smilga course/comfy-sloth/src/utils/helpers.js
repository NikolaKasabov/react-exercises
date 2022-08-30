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
