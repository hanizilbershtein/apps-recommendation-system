const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router();

const appsModel = require("../models/appsModel");

router.post("/app", async (req, res) => {
  try {
    const { category, age, rating } = req.body;

    const listApp = await appsModel
      .where("category").equals(category)
      .where("min_age").lte(age)
      .where("rating").gte(rating);

    const reqData = listApp.sort(() => (Math.random() > 0.5 ? 1 : -1)).splice(0, 3);

    res.send(reqData);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
