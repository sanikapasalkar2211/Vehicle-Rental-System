import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);
        return hashPass;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}


export const comparePassword = async (password, hashPass) => {
    try {
        // Compare the plain password with the hashed password
        const isMatch = await bcrypt.compare(password, hashPass);

        return isMatch; // Return the result of the comparison (true or false)
    } catch (error) {
        console.error('Error comparing password:', error);
        throw error; // Re-throw the error after logging it
    }
};

