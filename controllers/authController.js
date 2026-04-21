const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

console.log("Register API hit");

  try {
    const { name, email, password } = req.body;

    // Check user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json("User already exists");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json("User Registered");
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json("User not found");

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json("Invalid credentials");

//     // Create token
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };