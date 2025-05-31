const asyncHandler = require('express-async-handler');


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;


    if (email === 'test@example.com' && password === '123456') {
        res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = {
    loginUser,
};
