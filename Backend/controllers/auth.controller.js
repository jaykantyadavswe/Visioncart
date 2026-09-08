import { loginUser, registerUser } from "../services/auth.service.js";

export const checkActive = (req, res) => {
    res.status(200).json({ message: "Auth service is active" });
};

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { user, token } = await loginUser({
            email, password
        });

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

export { register, login };