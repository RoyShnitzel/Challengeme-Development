const { User } = require("../models");

module.exports = function checkAdmin(req, res, next) {
  User.findOne({
    where: { userName: req.user.userName },
  }).then((user) => {
    if (user.permission === "admin") {
      next();
    } else {
      res.status(403).json({ message: "UnAuthorized" });
    }
  });
};
