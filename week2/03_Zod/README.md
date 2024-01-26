# Zod

> https://zod.dev

### Why ZOD?
1. **TypeScript-First Approach**: Zod is designed with TypeScript in mind, providing strong type-checking and autocompletion for your schemas.

2. **Concise and Expressive Syntax**: Zod's syntax is concise and expressive, making it easy to define complex data structures with minimal code.

3. **Validation and Parsing**: Zod not only validates data but also automatically parses it into the expected TypeScript types.

4. **Rich Set of Features**: Zod includes a variety of features, such as custom validation, optional and nullable types, union and intersection types, making it a powerful tool for data validation in your applications.

Overall, Zod simplifies the process of declaring and validating data structures, reducing the likelihood of runtime errors and improving the overall robustness of your code.

* **Installation `npm install zod`**

Now for zod we first have to define the expected structure as input.
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

**Object schemas**
`z.object(z.array(z.string()));` --> `{["string1", "string2"]}`

**Union and Intersection Types:**
Zod supports union and intersection types for more flexibility.


**Custom Validation**
Zod allows you to define custom validation logic using the `refine` method.

**Parsing and Validation**
To validate and parse data, use the `parse` method. If the data is invalid, it throws an error with details about the validation failure.


