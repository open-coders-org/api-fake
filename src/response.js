module.exports = (res) => (data) => {
  const { statusCode = 200 } = data;
  return res.status(statusCode).send(data);
};
