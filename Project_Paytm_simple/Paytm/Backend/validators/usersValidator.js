const zod = require("zod");


const userZodSchema = zod.object({
    username: zod.string({
            required_error: "username is required",
        })
        .min(3, { message: "Zod: Must be 3 or more letters "})
        .max(30, { message: "Zod: Must be less than 31 letters"})
        .trim(),
    password: zod.string({
            required_error: "password is required",
        })
        .min(6, { message: "Zod: Must be 3 or more letters "}),
    firstName: zod.string()
        .max(50, { message: "Zod: Must be less than 51 letters"})
        .trim(),
    lastName: zod.string()
        .max(50, { message: "Zod: Must be less than 51 letters"})
        .trim(),
});

const userUpdateZodSchema = zod.object({
    password: zod.string()        
        .min(6)
        .trim()
        .optional(),
    firstname: zod.string()        
        .max(50)
        .trim()
        .optional(),
    lastname: zod.string()        
        .max(50)
        .trim()
        .optional(),
})

const userSigninZodSchema = zod.object({
    username: zod.string().min(3).max(30).trim(),
    password: zod.string().min(6).trim(),
});

module.exports = {
    userZodSchema,
    userUpdateZodSchema,
    userSigninZodSchema,
}