---
id: arch
aliases: []
tags:
  - tools
  - arch
  - bash
---

# Arch
This is the second last Linux distribution that I have hopped into and made me stay. The AUR is just so vast that everything I need is there.
Currently, I am using EndeavorOS so that I wouldn't have to go through the tedious (too lazy to make a script) arch install. But if you still want to install to learn, read ahead!

## Before you start

### Useful links

The [Arch Wiki](https://wiki.archlinux.org/title/Main_page) is the most important and comprehensive(?) documentation that you could use to install arch.
The [Arch Package Repository](https://archlinux.org/packages/), and the [Arch User Repository](https://aur.archlinux.org/) is also where you can browse possible packages that you can install without needing to [manually build] them 

### Things You Need To Have

- A flashdrive
- A keyboard
- Any bare computer with an HDD
- The willpower to continue on the arch installation XD

## Setting up

### Create a bootlable Arch image

You can use tools like ***rufus*** or ***balena*** etcher to make this easy, but if you already have a linux installation, you can also use ***dd***

Using ***dd***
```bash
  dd bs=4M if=path/to/archlinux-version-x86_64.iso of=/dev/disk/by-id/usb-My_flash_drive conv=fsync oflag=direct status=progress
```

After the above is done, boot into the arch image (assuming you already know how to do that)

### Set the console keyboard layout and font (optional)
If you are using a non-US keyboard, you would like to go through this step.

List and Set Keymaps
```bash
# To set the keyboard layout, pass its name to loadkeys(1). For example, to set a German keyboard layout:
localectl list-keymaps
loadkeys de-latin1
```

List and Set Consolse font
```bash
ls /usr/share/kbd/consolefonts/
setfont ter-132b
```

### Verify boot mode (Optional)

You only need this if you are using old machines, or weird machines that YOU did not setup. But most of the time, modern computers are already using x64, so you can omit this step
```bash 
cat /sys/firmware/efi/fw_platform_size
```

### Connect to the internet (optionally mandatory)

If you are in a hurry, just skip this step and fetch the latest packages later.
If you have ethernet cable and can connect to your network directly, you can also skip this step.

You can connect to the internet via Wi-Fi by following the steps below:

Open iwctl in interactive mode:
```bash
iwctl
```

When in interactive mode, list the devices/interfaces
```bash
[iwd]$ device list

  # You should see something like this:
  #
  #                            Devices
  # -------------------------------------------------------------
  #   Name          Address          Powered    Adapter    Mode
  # -------------------------------------------------------------
  #   wlan0         ...              on         ...        ...
```

Search for Wi-Fi networks
```bash
[iwd]$ station YOURDEVICE scan
```

Connect to your Wi-Fi. If you have a password on your Wi-Fi, you will be prompted for it.
```bash
[iwd]$ station YOURDEVICE connect YOURSSID
```

### Update the system clock
If you have internet you can run `timedatectl` to synchronize your clock to the internet.
Optionally, you can enable `systemd-timesyncd` later on to automatically sync it.

### Disk Partitioning
This is my favorite part of the installation, once this step is done, any changes you make will be permanent and there is no going back.

#### List out the disks connected to your computer.
```bash
fdisk -l

# or

lsblk
```
> [!NOTE]
> The output of the above commands usually contain text like `/dev/sda`, `/dev/nvme0` or `/dev/mmcblk0`.
> Depending on your hardware, it will correspond to what is printed:
> - `sd*` for Hard disks or Solid State disks
> - `nvme*` for NVME disks
> - `mmcblk*` for eMMC disk

> [!TIP]
> If you find it hard to determine which is which, I suggest you remove all the disks in your system and only leave in the disk you want to install arch into. 
> Anyway, you can set it up later to boot with all disks automatically mounted.

#### Start the partitioning process (in my case it is `/dev/sda`)
```bash
fdisk /dev/sda
```
#### Partition Layouts
Generally, there are two ways to partition your disk, [GPT] for [UEFI] and [MBR] for [BIOS].
The one you choose is based on what boot type you used in your BIOS. Most of the time in modern computers use [UEFI], so just check it in your BIOS first before proceeding. 

##### GPT

| Mount Point | Partition Type | Suggested Size           | 
| ----------- | -------------- | ------------------------ | 
|  `/boot`    | efi            | 1 GB                     |
|  `/swap`    | linux-swap     | Half of System Memory    |
|  `/`        | linux          | Remainder of device      |

##### BIOS

| Mount Point | Partition Type | Suggested Size           | 
| ----------- | -------------- | -------------- | 
|  `/swap`    | linux-swap     | Half of System Memory    |
|  `/`        | linux          | Remainder of device      |


### Formatting Partitions
There are multiple ways you can format your partitions, also multiple types of filesystems like [btrfs], [zfs], etc.
For this guide, we will be using the ol' ext4 filesystem.

When you finish partitioning, you can run `lsblk` or `fdisk -l` again to see the partitions on your disk.

Format the root partition
```bash
mkfs.ext4 /dev/sda1 # depending on output of lsblk / fdisk -l
```

Format the swap partition
```bash
mkswap /dev/sda2 # depending on output of lsblk / fdisk -l
```

Format the efi partition (if applicable)
```bash
mkfs.fat -F 32 /dev/sda3 # depending on output of lsblk / fdisk -l
```

### Mounting
In order for us to interact with the filesystem, we need to mount it first.

> [!NOTE]
> During my first time, I was confused as to why I had to mount the disk itself. 
> It turns out that the live system was sort of an "already installed (to the flashdrive)" version of arch on its own.
> So in order to make changes to your target disk, you would have to mount it to the live system.

Mount the root partition first
```bash
mount /dev/sda1 /mnt
```

Mount the efi partition (if applicable)
```bash
mount --mkdir /dev/sda3 /mnt/boot

# or

mkdir /mnt/boot
mount /dev/sda3 /mnt/boot
```

Set the swap partition as swap
```bash
swapon /dev/swap_partition
```

### Installing the Essentials
You have finally finished partitioning and formatting your target disk, now it's time to move to your new home with [pacstrap]

> [!TIP]
> `linux` can be any kernel you want, if you want to add additional kernels, add them here.

```bash
pacstrap -K /mnt base linux linux-firmware
```
Of course, the command above is just really what you need to create a pure vanilla linux install.

> [!NOTE]
> If you think you need more packages, consult the [Arch Wiki](https://wiki.archlinux.org/title/Installation_guide#Install_essential_packages) for more information.

As a user, you would want to install also these packages:
- CPU Microcode (depending on your system)
  - amd-ucode
  - intel-ucode
- Bootloader
  - grub
    - efibootmgr
- Filesystems support
  - fsck (mandatory)
  - bcachefs-tools
  - btrfs-progs
  - dosfs-tools #vfat
  - exfatprogs 
  - f2fs-tools
  - e2fsprogs
  - ntfs-3g
- [RAID](https://wiki.archlinux.org/title/RAID#Installation) support
- [LVM](https://wiki.archlinux.org/title/LVM#Installation) support
- Networking Support
  - NetworkManager
    - nmtui
    - nmcli
  - iwd
    - iwctl
- Text Editor
  - vim
  - neovim
  - nano
- Arch tools
  - reflector

## Initial System Configuration
After ***pacstrapping*** everything you need to the target disk, it's time to do the initial setup.

### Generating the FStab (File system table)

> [!NOTE]
> Took me awhile to understand what fstab is, and I learned it the hard way.

Basically, the computer boots into the BIOS, tries to boot into the disk that you assigned with the highest priority, and runs the initiramfs boot process.
In order for the BIOS to know what and where to boot from, the `fstab` file is defines which partition is which.

Remember earlier, it was mentioned that we can set the disks we want to automatically mount during boot. This is the part that explains how.

First, connect your drives one-by-one:

> [!NOTE]
> If your disks are new, you need to partition and format them before you can mount them.
> You can use the `linux` filesystem type and `mkfs.ext4` formatting.

```bash
# assuming I have 2 extra disks
mkdir /mnt/sdb1
mkdir /mnt/sdc1

lsblk
#or
fdisk -l

mount /dev/sdb1 /mnt/sdb1
mount /dev/sdc1 /mnt/sdc1
```

After doing above, we can finally generate an fstab automatically with the following command:
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```
The above commands automatically detects mount points in the given directory and appends it into our target disk's /etc/fstab, so when we boot, it knows the drives and disks that also need to be mounted on boot.

### It's Chroot-ing Time 
Now it's time to "login" into our install. The first time I learned about this, I was really surprised that linux can do that.
Basically, what ***chroot*** is, is that it enables the user to access another linux filesystem/install and make changes to it without booting from it.
This is very useful later on when you ***brick*** your install.

In our case, the system is already bootable, at this point, and without rebooting the system, we can initially setup essential stuff before we reboot. 

#### Set the Time
To show the current timezone selected
```bash
timedatectl status
```

To get a list of available timezones we can set
```bash
timedatectl list-timezones
```

To set the timezone
```bash
timedatectl set-timezoune Zone/SubZone
```

If you tried the above commands, you won't be able to since it does not work in chroot. So do this one instead:
```bash
ln -sf /usr/share/zoneinfo/Zone/SubZone /etc/localtime
```
#### Set the Locale
Generate the locale
```bash
locale-gen
```

Set to your desired locale, for my case en_US.UTF-8
```bash
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

#### Set the Hostname of your computer
```bash
echo "hostname" > /etc/hostname
```

### Initramfs (optional)
This is optional since pacstrapping and installing the linux kernal already does this in its script.
The ramfs is just a small but important part of the boot process which is run before mounting the disks.
It contains essential tools to boot Arch.

```bash
mkinitcpio -P
```

### Set the root password
```bash
passwd
```

### Install a bootloader (mandatory)
This part is important since after mounting everything, you will need something that would load up Arch. In our case we use GRUB.

```bash
pacman -S grub efibootmgr # if not included in pacstrap
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

## Cleanup and Reboot
So we're basically done, just exit out of chroot, unmount `/mnt` and reboot.

```bash
chroot$ exit
$ umount -R /mnt
$ reboot
```

## Additional Steps
So you have just finished your Arch installation. If you once you reboot, it should bring you to a shell with a login prompt.

Here are some things you can do right after:
- You can login as root and password to whatever you set it to during the Initial System Configuration.
- Once you are in the shell, don't forget to update your mirrors with `reflector`, and update your system with `pacman -Syu`.
- You can also create a new user.
- In the future, it would be better to create an install script that you can clone from github so you wouldn't have to go through this again.

## Happy Hacking!
