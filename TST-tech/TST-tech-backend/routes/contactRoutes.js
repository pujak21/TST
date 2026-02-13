const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ success: true, msg: "Message saved" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
