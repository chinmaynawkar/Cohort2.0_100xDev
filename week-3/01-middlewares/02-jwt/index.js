const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

//zod schemas to check email and password constraints
const passwordSchema = zod.string().min(6);
const emailSchema = zod.string().email();


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
   const usernameValid = emailSchema.safeParse(username);
   const passwordValid = passwordSchema.safeParse(password);

    if(!usernameValid.success || !passwordValid.success) {
        return null;
    }
    //creating a payload for JWT
    const token = jwt.sign({
        username
    }, jwtPassword);

    //return sign token
    return token;

    //function to check email is valid or not 
    function isValidEmail(username) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(username);
    }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    let answer = true;
    try {
        //Verify the JWT using the secret key
        jwt.verify(token,jwtPassword);

    } catch(error) {
        answer = false; // if verification fails
    }
    return answer;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    } else {
    return false;
    } 
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
