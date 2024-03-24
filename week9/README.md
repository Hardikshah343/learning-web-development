# SQL Databases
Structured Query Language

**Strict Schema**, Very hard to change schemas, involve migrations.

Various DB's: Postgres, MySQL.

## Connecting to postgres
* Username, password, URL
`postgres://[username]:[password]@[host]/[database_name]`

Now we can use local server (localhost), but will look into it after Docker
As of now lets use **Elephant SQL** (20 mb data, 5 connections)

## Basic types of queries

1. Insert
2. Update
3. Delete
4. Get

## Todo App
1. Create an empty Node.js Project (basically cloned)
2. Install **pg** (similar to mongoose for MongoDB, pg for Postgres SQL)
```terminal
npm install pg
npm install @types/pg
```
3. Check out `utils.ts` for connections 
4. **Create** tables: `create-tables.ts`

**Users**
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
* SERIAL: automatically generated ID for each entry. (will increment or decrement automatically)
* PRIMARY KEY: The key to identify each row uniquely.
* VARCHAR(255): A datatype for string, of length 255 characters.
* UNIQUE: All entries should have unique values
* NOT NULL: Must have a value.

**Todos**
```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
)
```
* TEXT: Another data type to store strings
* INTEGER: Data type to store integer values
* REFERENCES: Kind of link to users table, i.e. user with id x has these todos. (Foreign Key)
* DEFAULT: A default value to be set, if not provided
* BOOLEAN: A data type to store true or false.


5. **Inserts** into tables: Check `insert-data.ts`
```sql
INSERT INTO todos (title, description, user_id, done)
    VALUES ('Buy groceries', 'Milk, bread and eggs', 1, FALSE);
INSERT INTO users (username, email, password)
    VALUES ('john_doe', 'john_doe@example.com', 'hashed_password');
```

6. **Gets** : check `get-data.ts`
```sql
SELECT * FROM todos WHERE user_id = some_id;
``` 

7. **Update**: check `update-data.ts`
```sql
UPDATE todos SET done = true WHERE id = some_id;
```

8. **Delete**: check `delete-data.ts`
```sql
DELETE FROM todos WHERE id = some_id;
```

9. DROP
```sql
DROP TABLE if EXISTS todos;
```

## Advanced stuff

### How to relate (join) tables?

1. Foreign Keys: References we used while create table.

2. JOINs
* **FULL JOIN**: Should be present in either tables
* **INNER JOIN**: Should be present in both tables (default)
* **LEFT JOIN**: Should have entries from LEFT table
* **RIGHT JOIN**: Should have entries from RIGHT table


## Indexes
Make query on a certain column faster. 


# Problems with SQL
1. You have to write raw SQL queries. (a lot)
2. Migrations are hard (suppose schema needs to be changed after in production, so need to run a lot of scripts and run on production DB)
3. You don't get the best types i.e. when we collect data in a variable, it does not have types.

# Solution: ORM 
(Object Relation Model)
There are a lot of ORMs available like Prisma, Sequelize, TypeORM, Mongoose, Objection js, waterline, knex js, etc.
Most popular are Prisma and Sequelize.

We are going to learn **PRISMA** library.
It provides:
1. Data model
2. Automated migrations
    DB Changes often, you add more columns, add new tables, you have to do **MIGRATIONS** to keep syncing the DB State.
    Pre ORM: Manually update the prod DB and dev DB.
    There was no log of the changes made to the DB
3. Type safety
4. Auto-completion

Prisma is open-source next-generation ORM and consists of 
* **Prisma Client**: Auto generated and type safe query builder for Node.js and Typescript
* **Prisma Migrate**: Migration Tool to easily evolve your database schema from prototyping to production
* **Prisma Studio**: GUI to view and edit data in your database

For Prisma, needs access to whole Database so free elephant SQL wont work.
So either buy or create locally.

## Lets build project from scratch using Prisma

### Setting up
1. Install postgres locally.
2. Clone the repository. (PRISMA_DEMO)
or Create from scratch
3. Make a directory, Goto Prisma docs and quick start.
```terminal
mkdir PRISMA_FROM_SCRATCH
cd PRISMA_FROM_SCRATCH
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npx prisma init --datasource-provider postgresql
```
4. Goto `.env` and update url to local host with username and password.

### Schema
Prisma gives a `schema.prisma` file upfront, where we have to give all the schema we want in out DB. So ORM Prisma will take care of converting it into queries based on service provider we chose `postgresql` while setting up. Even if we change the provider the schema.prisma file will be referred by API and taken care of converting into queries.
i.e. Create models in `schema.prisma` file.

Example
```prisma
model User {
    id          Int     @id @default(autoincrement())
    email       String  @unique
    name        String?
    posts       Post[]
}

model Post {
    id          Int     @id @default(autoincrement())
    title       String
    content     String?
    published   Boolean @default(false)
    author      User    @relation(fields: [authorId], references: [id])
    authorId    Int
}
```
* @id and @default are same as PRIMARY KEY NOT NULL and SERIAL we saw in postgresql.
* @unique is basically UNIQUE and most probably NOT NULL as well is assigned.
* Important is the `author` in Post and `posts` in User, these are not columns in their table but just for relation management. So author in Post is just to tell prisma that the field authorId is going to be foreign key referring to id in User table. And hence in User we have to give a array (which may or may not be linked) of entries in POST table.

### Migration to create your database tables with `Prisma Migrate`

At this point we have a Prisma Schema (model) but no database yet, so we create DB User and Post by running below command
```terminal
$ npx prisma migrate dev --name init
```
In future When we add new tables, update columns, and do other modifications in `schema.prisma` file, we just run the above command with a different --name in order to create log. (i.e. --name tables_added)

This creates a `migration.sql`.


### Using
1. Create `./src` folder for all the code
2. Update `tsconfig.json` for `rootDir` to **'./src'** and `outDir` to **'./dist'**
3. Create all the query files as required. Check out `src` directory from PRISMA_DEMO
4. To visualize the DB,
`$ npx prisma studio`

So we saw all the 3 things that prisma provides.
Now just have fun and practice.

* Try Neon Tech for postgresql online.
* Also can try SuperBase
* Learn Transactions using prisma 