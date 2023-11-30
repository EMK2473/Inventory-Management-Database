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
router.post("/", async (req, res) => {
  try {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    const userData = await newUser.save(); // we can use newUser.create() if needed, but this works
    // save() Validates this instance, and if the validation passes, persists it to the database.
    console.log("USERDATA", userData.id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

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

module.exports = router;
