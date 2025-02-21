module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((err) => {
    if (!res.headersSent) {
      next(err); // Only call next() if headers haven't been sent
    }
  });
};

