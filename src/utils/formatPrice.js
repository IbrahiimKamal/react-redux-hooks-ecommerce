const formatPrice = (price) => {
  let formatedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return formatedPrice;
};

export { formatPrice };
