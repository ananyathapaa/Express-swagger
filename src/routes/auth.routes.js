const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: User created
 */

router.post("/signup", async(req,res)=>{

  try {

    const user = await User.create(req.body);

    res.status(200).json({
      success:true,
      user
    });

  } catch (err) {

    res.status(500).json({
      success:false,
      message:err.message
    });
  }
});

module.exports = router;
