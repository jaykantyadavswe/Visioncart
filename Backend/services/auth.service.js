import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const registerUser = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name, email, password: hashedPassword
    });

    console.log("USER CREATED:", user);

    return user;
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const secret = process.env.JWT_SECRET;

    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role || 'customer',
        },
        secret,
        { expiresIn: '7d' }
    );

    return { user, token };
};

export { registerUser, loginUser };