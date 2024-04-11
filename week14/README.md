# Monorepos

Any big open source project or any project we create should not have all things in one big folder, i.e. front end and backend.
Basically if the front and back does not share any code then its completely ok to have front and back folders (maybe client and server).

But most of the time front end and back end needs to share code with each other. 

One way to do this is using NPM modules.
We write a javascript library/code that we want anyone can use. And for ts we want types of the same js file. So we create a library or code and publish it to `https://www.npmjs.com/` so that anyone can simply do npm install and add the common code to both server and client. -> NPM Package management

Check out `week-8-repo`.

This is a good way but with monorepos is a better way, we can manage packages locally.



