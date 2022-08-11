const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req, res) => {
//   console.log("connect");
// });

// Register User's data
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, phone } = req.body;

  if (!firstName || !lastName || !email || !phone) {
    res.status(422).json("Please fill the data");
  }

  try {
    const preUser = await users.findOne({ email: email });
    console.log(preUser);

    if (preUser) {
      res.status(422).json("This user is already exist");
    } else {
      const addUser = new users({
        firstName,
        lastName,
        email,
        phone,
      });

      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// Get User's data
router.get("/getdata", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Get individual User's Data
router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userIndividual = await users.findById({ _id: id });
    console.log(userIndividual);
    res.status(201).json(userIndividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Update User's Data
router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedUser);
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await users.findByIdAndDelete({ _id: id });
    console.log(deleteUser);
    res.status(201).json(deleteUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
