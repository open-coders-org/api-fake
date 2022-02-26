module.exports = async (router) => {
  router.get('/users', (_, res) => {
    return res.send({
      message: 'working',
      statusCode: 200
    });
  });
};
