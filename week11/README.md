# NEXT JS

NextJS is a framework that was introduced because of some `minor inconvinences` in React.

Inconvinences like
* Problem 1: In a React Project, you have to maintain a seperate Backend project for your API Routes
* Problem 2: React does not provide out of the box routing (you have to use react-router-dom)
* Problem 3: React is not SEO Optimised [not exactly true today because of React Server components]
* Waterfalling problem

### Advantages of Next.js
1. Server side rendering - Gets rid of SEO problems
2. API routes - Single codebase with frontend and backend
3. File based routing (no need for react-router-dom)
4. Bundle size optimisations, static site generation
5. Maintained by the vercel team

### Disadvantages of Next.js
1. Can not be distributed via a CDN, always needs a server running that does `server side rendering` and hence is expensive
2. Very opiniated, very hard to move out of it. (React -> Next is easy but Next -> React becomes difficult)

## Simple next app
1. Initialize the app
`$ npx create-next-app@latest`

2. Routing
NextJs has file based routing. This means the way we create files, describes what renders on a route.

3. Server vs Client component
* Server components are rendered on the server.
* Client components are pushed to the client to be rendered.

Note: By default everything is a server component

If we want to mark a component as a client component, add at the top
`"use client"`

When should you create `client component`?
* Whenever you are using something that sever doesn't understand (useEffect, useState, onClick, ...)

**Note: Try to minimize the client as much as possible** Because it takes away SEO part away.

