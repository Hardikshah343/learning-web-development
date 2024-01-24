# Zod

**Typescript-first schema validation with static type inference**
> https://zod.dev

* Installation `npm install zod`

Now in zod we first have to define the expected structure as input.
```javascript
const zod = require("zod");

const schema = zod.array(zod.number()); // array of numbers
```
Then just pass the input to the schema to get the validation result.
```javascript
app.post("\route", (req, res, next) => {
    const data = req.body.data;
    const validationResult = schema.safeParse(data);
    res.send({ validationResult });
});
```

* if input is `{ data: [1,2,3] }` we get output as `"validationResult": {"success": true, "data": [1, 2, 3] }`
* if input is `{ data : 1 }` we get output as `{ "validationResult": { "success": false, "error": { "issues": [ { "code": "invalid_type", "expected": "array", "received": "number", "path": [], "message": "Expected array, received number" } ], "name": "ZodError" } } }`
* even undefined is handled

> Refer for more  https://zod.dev?id=basic-usage

**Zod premitives**
* z.string();
* z.number();
* z.bigint();
* z.boolean();
* z.date();
* z.symbol();

**Zod empty types**
* z.undefined();
* z.null();
* z.void(); // accepts undefined

**Catch-all types, allows any values**
* z.any();
* z.unknown();

**Never types allows no values**
* z.never();

**Coercion for primitives**
```javascript
cosnt schema = z.coerce.string();
schema.parse("tuna"); => "tuna"
schema.parse(12); => "12"
schema.parse(true); => 'true'
```

