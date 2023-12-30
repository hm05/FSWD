// Asynchronous function to simulate fetching data with a 3-second delay
exports.fetchDataAsync = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 'Async data fetched';
        resolve(data);
      }, 3000); // 3-second delay
    });
  };
  