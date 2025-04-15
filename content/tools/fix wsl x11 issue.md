---
id: fix wsl x11 issue
aliases: []
tags:
  - wsl
  - x11
  - clipboard
title: Fix wsl X11 issue
---

## Requirements

Install these packages in your respective distro:

* xclip

## Here are the steps

1. Clean up existing x11 file.

```bash
rmdir /tmp/.X11-unix && ln -s /mnt/wslg/.X11-unix /tmp/.X11-unix
```

2. Create a systemd service

```bash
[Unit]
Description=symlink /tmp/.X11-unix
After=systemd-tmpfiles-setup.service

[Service]
Type=oneshot
ExecStart=rmdir /tmp/.X11-unix
ExecStart=ln -s /mnt/wslg/.X11-unix /tmp/

[Install]
WantedBy=sysinit.target
```

3. Enable the service on startup

```bash
systemctl enable --now wslg
```

Now when you copy a text from the terminal, you should be able to paste it anywhere in the windows host

