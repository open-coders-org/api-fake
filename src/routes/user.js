module.exports = (router) => {
  router.get('/user', (_, res) => {
    return res.send({
      message: 'working',
      statusCode: 200
    });
  });
  return router;
};
