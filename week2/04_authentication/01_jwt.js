/* A simple JWT Generation */
const jwt = require("jsonwebtoken");

// decode , verify, generate

const value = {
    name: "Hardik",
    accountNumber: 123123123
}
const secretKey = "secretKnownOnlyToServer";

// jwt generation
const token = jwt.sign(value, secretKey);
console.log(token);
// This secret is what makes the JWT protected from others.
// everytime we run the code a different token is generated.

// anyone can look at the token
console.log("Decoded: ", jwt.decode(token));

// but only authorised persons with the secretkey can verify the contents
console.log("Authorised Verification status: ", jwt.verify(token, secretKey));

// and unauthorised person trying to verify.
console.log("Intruder Verification status: ", jwt.verify(token, "HahWhatever"));
// throws error: Invalid signature