---
title: 'How to setup Docker on Ubuntu WSL'
description: 'Setup Docker on Ubuntu on Windows Subsystem for Linux'
pubDate: 'Sep 03 2024'
---

## Before we begin

This guide only applies if we will not be using Docker Desktop on Windows (which I really do not recommend because of the I/O latency).

## Requirements

Make sure you have all the stuff needed for this setup:

* A computer that supports virtualization
* Windows 11
* WSL **2**

## Here are the steps

1. Clean up existing docker installation (if there is any)

```bash
sudo apt remove docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc
```

2. Download and run the official docker installer script (be sure to verify the file you download before running them).

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

3. Verify if docker is installed

```bash
docker --version
docker compose --version
```

4. Create the docker group and add current user to it 

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

5. Update your ubuntu defaults to use iptables

```bash
sudo update-alternatives --config iptables
```

6. Restart WSL. Open a Powershell and run the following command:

```powershell
wsl --shutdown
wsl 
```

## Final steps

Now that we got docker installed, try running the following command:

```bash
docker run hello-world
```

We should see a text that says the installation is working correctly.
