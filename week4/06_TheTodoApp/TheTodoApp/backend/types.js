const zod = require("zod");

/* Validation for all the input */

/* Todo */
const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo: todoSchema,
    updateTodo: updateTodo
}