---
title: 'How to run an NGINX Reverse Proxy server using Docker compose'
description: 'How to run an nginx container running as a reverse proxy server with basic configuration on docker using a docker compose file'
pubDate: 'Sep 04 2024'
---

## Before we begin

Make sure you have docker installed on your system. If you are on windows, I have a short guide on how to install it in [WSL](https://blog.germaniii.com/blog/how-to-setup-docker-on-ubuntu-22-04-wsl)

## Create a directory to store your files

If you haven't already, create a directory rto store your nginx configuration files and docker compose.

```bash
cd ~
mkdir nginx-server
cd nginx-server
```

## Setup the docker compose file

First, we have to setup a docker compose file. Let's start by creating one.

```bash
touch docker-compose.yml
```

##### **`docker-compose.yml`**
```dockerfile
version: "3.8"
services:
  nginx:
    image: nginx:latest
    container_name: nginx_container
    ports:
      - 80:80
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

> Note: be careful in setting ports, and make sure ports mapped to containers are not used by other programs on your host machine.

### Setup the nginx file

As we can see on the docker compose file, we mapped `./nginx.conf` to `/etc/nginx/nginx.conf`. So we would need to create an nginx.conf file in the same directory as our docker compose file.

```bash
touch nginx.conf
```

##### **`nginx.conf`**
```nginx
events {
  ... # set nginx event parameters
}
http {
        server {
                listen 80;
                server_name <target-server-domain>;
                location / {
                    proxy_pass http://<target-server-ip>:<target-server-port>;
                    ... # Additional nginx server configs
                }
        }

        ... # Add more servers here
}
```

> Note: For more information on additional configuration, you may refer to the official nginx documentation [here](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy).

## Final steps

Once we got the above all setup, we can now start our docker container that runs our reverse proxy.

```bash
docker compose up --build
```

Make sure the web application pointed by the reverse proxy is running, and try accessing the target server domain, and it should show your `target-server`

And that's it, you have just run your first nginx reverse proxy on a docker container.

