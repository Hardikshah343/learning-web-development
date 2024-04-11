# Actionable docker

Using docker to run packages locally. Docker lets you do a lot of things.

Actionable docker to start packages locally.

## Installing Docker

## What are we using docker for ?
Dockers lets you do a lot of things
* It lets you `containerise` your application
* It lets you run other people's `code + packages` in your machine.
* It lets you run common software packages inside a container (eg. Mongo, Postgres, etc)

## Where can we get packages from ?
Just like you can push your `code` to Github/Gitlab
You can push `images` to `docker registries`

Note:
1. Container is a independent entity that runs with its own file system and networking ports.
2. Images are like iso files that contains all the code.
3. Images in action or in running in system is what container is. 
4. You can get images from various  places, but mostly the official docker hub.

## Common commands
* docker run
`docker run mongo`
* Adding a port mapping
`docker run -p 27015:27017 mongo`
So any request coming to 27015 will be transfer to docker port 27017
And any request coming to 27017 wont have anything because on machine (not docker) there is nothing running on port 27017
* Detached mode: That terminal wont be busy running, it will detach and container will run in background
`docker run -d -p27017:27017`
* Check for all containers running in background
`docker ps`
* Delete or stop a container
`docker kill <container id>`

TO execute a command in terminal of container
`docker exec -it <docker-id> /bin/bash`
You will gain access to terminal of the docker.