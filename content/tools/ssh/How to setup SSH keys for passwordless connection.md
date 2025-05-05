---
id: How to setup SSH keys for passwordless connection
aliases:
  - ssh connection
  - ssh keys
  - forwarding ports
tags:
  - tools
  - bash
  - ssh
  - ssh keys
  - ssh auth
---

This is a two part article/guide, one for the Client, and one for the Server. These are necessary to be able to perform connection passwordless.

## 1. Server Side

Now let us setup the server side ssh.

### Enable SSH

Of course, in order to be able to connect to your remote machine, you would have to enable ssh on it.

```bash
sudo systemctl enable --now sshd
```

### Firewall

If you try to ssh into the remote machine, sometimes it does not work the first time.
Please check double the firewall ports if they are open.

### Disable Password Authentication (optional)

Once you are done setting up the server side, you can optionally disable password login. 
To do that just open the `/etc/sshd_config` file, and set the line below:

```
PasswordAuthentication no
```

Then restart your ssh service

```bash
sudo systemctl restart sshd
```

## 2. Client Side

In order to use passwordless connection, we will be using ssh keys. In addition to password login, we can the key-exchange function built-in to openssh.

### Generate SSH keypair

First we will have to generate a keypair with the following command:

```bash
ssh-keygen -t rsa -b 4096 -C "$USER@$HOSTNAME"
```

- `ssh-keygen` is a built in function of openssh that would generate a keypair. 
- `-t` specifies the key encryption type. It can also be `ed25519`, `dsa`, etc.
- `-b` specifies the number of bits in the key. Higher is more secure but 2048 is already considered sufficient.
- `-C` just provides a comment for the key so it would be easier to know what this key is for. You can set it to whatever you like

When you run the above command, it will be creating new files inside your `~/.ssh/` directory:
- `id_rsa` - This should never be shared to anyone.
- `id_rsa.pub` - This is what will be passed/copied into remote machines.

### Setting up Host Connection on the Client

In order for you to easily track your ssh configurations, you can create a ssh config file in your home directory.

To start, create a new file in the directory:

```bash
touch ~/.ssh/config
```

Example contents of this config:

```
Host digitaloceanbox
Hostname 111.111.111.111
User root
PubKeyAuthentication yes
IdentityFile /home/user/.ssh/digitalocean-rsa
ForwardX11 yes


Host github github.com
Hostname github.com
User git
PubKeyAuthentication yes
IdentityFile /home/user/.ssh/github-rsa
ForwardX11 no
```

### Copy the ssh keys into the remote server

This is the recommended way of copying your ssh-keys into the remote server:

The `id_rsa.pub` below is the file generated from the above commands. If you used another encryption type, it might be written in another name so please double check.

```bash
ssh-copy-id -i /home/<user>/.ssh/id_rsa.pub <user>@<remote-ip>
```

> [!TIP]
> After doing all steps above, you can copy your ~/.ssh directory contents to another machine and it would still work.
> But this is not a good practice since your keys should be unique to each machine.

### Verification

Last step is to verify if your ssh keys are working by ssh-ing into the remote machine and making sure it does not prompt for a password anymore.

## Troubleshooting
To get logs on why your setup isn't working consider running the following commands:

```bash
sudo tail -f /var/log/auth.log
```

or check your ssh logs live with:

```bash
ssh -vv <remote-ip>
```

