export const formatPrice = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number / 100);
}

export const getUniqueValues = () => {}
