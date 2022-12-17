export function auth(req, res, next) {
    if (req.query.auth === "true") {
      if (req.query.admin === "true") {
        req.admin = true;
      } else {
        req.admin = false;
      } 
      next();
    } else {
      res.send("Not authorised to access");
    }
  }