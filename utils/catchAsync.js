module.exports = (fn) => {
  return (req, res, ext) => {
    fn(req, res, next).catch(next);
  };
};
