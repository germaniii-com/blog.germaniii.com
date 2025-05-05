---
id: How to forward ports via SSH
aliases:
  - ssh forwarding
  - forwarding ports
tags:
  - tools
  - bash
  - ssh
---

## Why should we foward ports via SSH? 

As I was securing my VPS in the cloud, I was supposed to not expose any port publicly except for port 80 and 443.
This was a big problem because that would mean I wouldn't be able to ssh or access any other service from my VPS directly.

In order for us to access them, we can use SSH Forwarding instead. We will be able to access the remote services without exposing ports publicly, and those ports will only be accessible via an authorized user (ssh).


## SSH Forwarding Script

```bash
# ssh -L localhost:8081:127.0.0.1:81 -N -f -p 22 <user>@<ip>
ssh -L "<localIP>:<localPORT>:<remoteIP>:<remotePORT>" -N -f -p 22 $1
```

Let's break it down:
- `-L` is the argument to start an SSH Forwarding connection.
- `-N` prevents the execution of any command, you are purely just connecting to forward ports.
- `-f` brings the ssh command to background upon running (regardless of any interactive flows).
- `-p` specifies the exposed SSH port (the ssh port of the remote machine, in most cases it's 22).
- `$1` is the either IP address of the remote machine or you could indicate the <user>@<remote-ip> to connect.

For the format of the `-L` argument:

```bash
#<localIP>:<localPORT>:<remoteIP>:<remotePORT>
127.0.0.1:5173:127.0.0.1:3000
```

In our example, we use:
- `127.0.0.1` as our *localIP*, so we will be able to access our remote service in localhost.
  - This can also be set to another IP in case you want other machines to be able to access it in the same network.
- `5173` as our *localPORT*, so we will be able to access our remote service in localhost:5173.

- `127.0.0.1:3000` as our *remoteIP*:*remotePORT*, which is the domain and port of the service.
  - This can also be set as any other domain that is accessible to the remote computer (useful for IP restricted stuff)
  - For example:  `172.18.122.4:3000` will forward a port a service from another computer/host to your client computer

```

## SSH Backward

If you are already done messing with your remote services. You can now close the access to them by just killing the ssh process.

You can do so by first finding running ssh processes with :

```bash
ps aux | grep ssh
```

You should see a line that contains the command above:
```bash
ssh -L "localhost:8081:127.0.0.1:81" -N -f -p 22 <ip>
```
Get the PID, and kill it with:

```
kill -9 <PID>
```

After that, your services are now secure and not available for anyone unless connected to ssh again.
