Here, I collect common Docker commands and helpful notes as I continue to learn.

## Container shell access

When bash is not available in the container, you can use `sh`...

`docker exec -it <container_name> sh`

When bash is available in the container...

`docker exec -it <container_name> bash`

Type 'exit' to exit out of the container shell.

## Inspect a container 

`docker container inspect <container-name>`

## Inspect the docker default bridge network 

`docker network inspect bridge`

## Tail log files

`docker logs --tail 10 --follow <container-name>`


