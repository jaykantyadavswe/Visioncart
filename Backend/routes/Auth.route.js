import Router from 'express';
import { checkActive, register, login } from '../controllers/auth.controller.js';
import { validRegister } from '../validations/auth.validations.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = Router();


router.get('/', checkActive);
router.post("/register", validRegister, register);
router.post("/login", login);
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected route accessed",
        user: req.user,
    });
});

export default router;



