import jwt from  'jsonwebtoken';

const verifyUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("decode user : ", decoded);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error, "error in user decoded");
        
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyUser;
