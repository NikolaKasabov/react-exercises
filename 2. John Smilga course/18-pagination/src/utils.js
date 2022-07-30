const paginate = (arr) => {
  const itemsPerPage = 10;
  const paginatedArr = [];
  const pages = Math.ceil(arr.length / itemsPerPage);

  for (let i = 0; i < pages; i++) {
    const pageContent = arr.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage);
    paginatedArr.push(pageContent);
  }

  return paginatedArr;
}

export default paginate;
