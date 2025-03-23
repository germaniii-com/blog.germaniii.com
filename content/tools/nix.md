---
id: nix
aliases: []
tags:
  - tools
  - nix
---

# nix

Nix is a declarative-based distro where in contrary to the standard imperative approach, the whole OS is configured by a file instead of invoking commands first.

There are two ways to use nix:
- nixOS
- nix package manager

I prefer to use the nix package manager for now since I do not have the time to invest in learning the OS. Besides, you can install the nix-package manager on any linux distro to try it out.

## Nix Package Manager

As a software developer, you are inevitably going to be faced with the problem of managing development environments.
X project uses X set of packages, Y project uses Y set of packages, and Z project uses X and Y set of packages.

This becomes a headache and another overhead to the things you are going to think about when developing applications. Thankfully, the nix package manager is here!

One thing I really love about the nix package manager is its declarative nature.
No need to check each `package.json`, `requirements.txt`, or `composer.json` files for each project.
You can just list them out in a `shell.nix` or `flake.nix` file and you're good to go.

### [devenv.sh](https://devenv.sh)
Imagine this structure for your projects:
```
/projects
│── main.py
│── project-1/
│   │── shell.nix
│── project-2/
│   │── shell.nix
│── project-3/
│   │── shell.nix
│── project-4/
│   │── shell.nix
│   │── ...
│── ...
```
Imagine you are frequently switching between projects 1 to 4, and everytime you switch, you would have to activate the shell.nix for each project. That would be a hassle wouldn't it?
That's where devenv.sh comes in, I used this for a while to test out the power of nix and it was really cool. Here are some pros and cons:

PROS
- Automatic shell activation
- Per project dependencies
- No base shell conflict

CONS
- Too many files involved in configuration (`devenv.nix`, `devenv.lock`, `.envrc`, `.devenv`, etc.)
- Too many dependencies (`direnv`, `devenv`, `nix`, etc.)

In my opinion, the cons aren't too bad, but the second con made me stop using it since I would have to maintain `direnv` and `devenv` separately.

#### Installation
Here is how to install devenv.sh

Install nix
```bash
sh <(curl -L https://nixos.org/nix/install) --daemon

# or in arch

sudo pacman -S nix
```

Install devenv
```bash
nix-env --install --attr devenv -f https://github.com/NixOS/nixpkgs/tarball/nixpkgs-unstable

# or in arch

sudo pacman -S devenv
```

Install direnv
```bash
curl -sfL https://direnv.net/install.sh | bash

# or in arch

sudo pacman -S direnv
```

Put this in your bashrc, and source it
```bash
eval "$(devenv direnvrc)"
use devenv
```
#### Usage
In order to create a devenv, you run the command:
```
devenv init
```

It's best to do this in a project root folder. The above command will create multiple files:
- devenv.nix
- devenv.yaml
- .envrc
- .gitignore

After you have initialized the devenv, you can then edit the `devenv.nix` file to add packages to the env.
```nix
{ pkgs, ... }: 

{ 
  env.GREET = "hello"; 

  packages = [ pkgs.jq ]; # Add your packages here.
  # You can browse nix packages for packages you want to add.

  enterShell = ''
    echo $GREET
    jq --version
  ''; 
}
```

To start the shell, just invoke the command:
```bash
devenv shell
```
> [!NOTE]
> If you installed direnv with the steps above, you would notice that there will be logs that would show activating the env upon changing the `devenv.nix` file.

To check the current devenv details, you can run:
```bash
devenv info
```

If you have direnv installed, you might notice that the shell prints out a lot of logs when activating an environement
You can suppress it by adding this to your `~/.config/direnv/direnv.toml` fil:
```
hide_env_diff = true
```

#### Extra info

Updating devenv
```bash
nix-env --upgrade --attr devenv -f https://github.com/NixOS/nixpkgs/tarball/nixpkgs-unstable
```

Updating devenv inputs
```bash
devenv update
```

Cleaning up devenv (garbage collection)
```bash
devenv gc
```
