const cookieSet = (req, res, next) => {
  const options = {
    signed: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 15,
    sameSite: true,
  };

  res
    .cookie("username", `${req.username}`, options)
    .cookie("password", `${req.hashedPassword}`, options)
    .redirect("/api/auth");

  next();
};

module.exports = { cookieSet };
