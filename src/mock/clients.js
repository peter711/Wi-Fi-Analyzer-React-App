const AMOUNT_OF_CLIENTS = 10;

export default (maxX, maxY) => {
  const clients = [];
  const min = 10;

  for (let i = 0; i < AMOUNT_OF_CLIENTS; i++) {
    clients.push({
      cx: Math.floor(Math.random() * (maxX - min + 1)) + min,
      cy: Math.floor(Math.random() * (maxX - min + 1)) + min
    });
  }
  return clients;
};
