const express = require("express");
const router = express.Router();
const { User, Otp } = require("../models");
const crypto = require("crypto");

// Generate random 6 digit OTP
function generateOTP() {
  return ("" + Math.floor(100000 + Math.random() * 900000));
}

// Register & Send OTP
router.post("/register", async (req, res) => {
  const { phone } = req.body;

  let user = await User.findOne({ where: { phone } });
  if (!user) {
    user = await User.create({ phone, isVerified: false });
  }

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min expiry

  await Otp.create({ phone, code, expiresAt });

  // For demo: log OTP instead of sending SMS
  console.log(`OTP for ${phone}: ${code}`);

  res.json({ message: "OTP generated. Check console (simulated SMS)" });
});

// Verify OTP
router.post("/verify", async (req, res) => {
  const { phone, code } = req.body;

  const record = await Otp.findOne({
    where: { phone, code },
    order: [["createdAt", "DESC"]], // latest OTP
  });

  if (!record) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  if (record.expiresAt < new Date()) {
    return res.status(400).json({ error: "OTP expired" });
  }

  await User.update({ isVerified: true }, { where: { phone } });
  res.json({ message: "Phone verified!" });
});

module.exports = router;
