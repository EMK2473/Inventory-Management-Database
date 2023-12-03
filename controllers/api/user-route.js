const router = require("express").Router();
const { User, Product, Category } = require("../../models");

// get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    console.log("userData:", userData);
    res.json({ users: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    console.log("userData:", userData);
    res.json({ users: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    const userData = await newUser.save(); // we can use newUser.create() if needed, but this works
    // save() Validates this instance, and if the validation passes, persists it to the database.
    console.log("USERDATA", userData.id);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true; 
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// post user logging in at /login view
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user = {
        username: userData.username
      };
      res.status(200).json({ user: userData, message: "Logged in!" });
    });
    console.log('REQ SESSIONS:', req.session)
  } catch (err) {
    res.status(400).json(err);
  }
});
// delete user by :id
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: { id: req.params.id },
    });
    if (!deletedUser) {
      res.status(404).json({ message: "No user found!" });
      return;
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// put/update existing User
router.put("/:id", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("User ID:", req.params.id);
    const [numOfUpdatedRows, updatedUsers] = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    console.log("Number of Updated Rows:", numOfUpdatedRows);
    console.log("Updated Users:", updatedUsers);
    return res.status(200).json(updatedUsers);
  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

// delete product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProduct) {
      res.status(404).json({ message: "No Product found!" });
      return;
    }
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  req.session.logged_in
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
});

module.exports = router;
