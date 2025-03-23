---
id: bash
aliases: []
tags:
  - tools
  - bash
---

# bash

## Directory Structure
In order to setup and customize your bash shell, you must have the following:

> [!NOTE]
> You can put everything in bash_profile if you want but I separated it into different files and sourcing each one respectively.

- **.bash_profile**
  - Used to initiate environment variables and source the .bashrc file
- **.bashrc**
  - Used to customize the prompt and have initialize shell functions like `ll`, etc.
- **.bash_aliases**
  - Used to declare bash functions and aliases that makes my bash shell easier to use. (Although splitting up functions and aliases to their own files is being considered since functions are getting longer and cluttering ***bash_aliases***)


## Keybinds
Here are some keybinds I picked up in bash that makes my life easier:

- TAB
  - Trigger bash completion to avoid having to type everything.
- ^w
  - Delete a word previously (like ^BACKSPACE).
- ^LEFT or ^RIGHT
  - Traverse long command lines horizontally, faster.
- ^r
  - Browse the bash_history

## Applications
Here are the applications that really helps me in traversing the bash shell:

- fzf
- ranger
- grep
- ack
- ack
- nvim

## Useful Concepts
Here are some useful concepts in the bash shell that is really useful

### Everything is a file
Well, not just in the bash shell but Linux in general. I haven't really fully grasped the concept of this until I got to learn terminal utilities like [[neovim]]. 

The ***I understand it now*** moment was really big for me since after that moment, everything just fell in to place.
It started with bash functions, then systemd services, leading to creating my own configurations for the applications that I use in the desktop.

### Symbolic Links
I learned this concept in my first job. In my first job, we had to make use of multiple instances of [KVM].
My senior taught me that, instead of copying the file (OS image), you can use **Symbolic Links** to save on space instead.
Each instance of [KVM] needed to be in a different directory since it generates multiple files as it is intialized.

A simple command like below, really helped with it:
```bash
ln -s /path/to/source /path/to/destination
```

Think of it as pointers in the C/C++ programming language.
Instead of allocating space for each copy of a variable (in this case file), you can instead just point it to an existing variable and use that instead.
