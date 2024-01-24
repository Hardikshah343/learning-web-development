const zod = require("zod");

/* If this is an array of strings with atleast 1 input, retrun true, else false*/
function validateInput(arr) {
    const schema = zod.array(zod.string());
    const response = schema.safeParse(arr);
    if(response.success) {
        console.log(arr, 'is a valid array of strings');
    }
    else {
        console.log(arr, 'is invalid array of strings');
    }
}

validateInput(["hello"]);
validateInput(['hi', 'wow']);
validateInput(['ello', 1, 2, 'wowo']);
validateInput();
validateInput({"key":12});

/*
{
    email: string ==> abc@gmail.com
    password: atleast 8 characters
    country: "IN", "US"
}
*/
function validateObject(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
        country: zod.literal("IN").or(zod.literal("US")) // will go into nesting
    });
    const response = schema.safeParse(obj);
    if(response.success) {
        console.log(obj, 'is a valid array of strings');
    }
    else {
        console.log(obj, 'is invalid array of strings');
    }
}
validateObject({"email":"hello@gmail.com", "password": "12345678", "country":"IN"});