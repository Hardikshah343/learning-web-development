const express = require("express");
const zod = require("zod");
const app = express();

const arrOfNumSchema = zod.array(zod.number()); // [1,2,3], [1], etc
/* more examples */
/*
{
    email: string ==> abc@gmail.com
    password: atleast 8 characters
    country: "IN", "US"
}
*/
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")) // will go into nesting
});

app.use(express.json());

app.post("/health-checkup", (req, res, next) => {
    const kidneys = req.body.kidneys;
    const validationResult = arrOfNumSchema.safeParse(kidneys);
    if(!validationResult.success) {
        res.status(411).json({
            msg: "Input is invalid"
        });
        return;
    }
    res.send({
        validationResult,
        msg: "Valid data"
    });
});

app.listen(3000);