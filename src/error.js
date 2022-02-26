const errors = (message) => ({
  404: {
    ok: false,
    message,
    statusCode: 404
  }
});

exports.notfound = (message) => errors(message)[404];
