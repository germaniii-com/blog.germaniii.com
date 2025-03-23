---
id: neovim
aliases: []
tags:
  - tools
  - neovim
---

# neovim

Neovim is a modern version of vim. In my first job as a Firmware Engineer, I was exposed to linux tools and that's technically where my professional linux journey began.
When I moved to the second company I worked for, Bluewind, I given all the time to hone my skills and so I dived deeper into linux. 
At that time, WSL2 was increasing in popularity, naturally, I jumped right into it.

## Plugins
Here are the plugins that I use as of March 2025:

> [!NOTE]
> All plugins can be found on my nvim kickstart config [here](https://github.com/germaniii/kickstart.nvim)

### Colorschemes
I use gruvbox mainly when developing and I just added additional ones if I get tired of seeing all gruvbox 

- eddyekofo94/gruvbox-flat.nvim
- andreasvc/vim-256noir
- slugbyte/lackluster.nvim


### Folke Plugins
Ever since folke set the default base of `Lazy` into `snack.nvim`, I have since migrated some of the plugins to be compatible with it.
Removed `nvim-cmp` to make way for `blink.cmp`, removed `telescope` to make way for `fzf-lua`, and added `noice.nvim` to make the cmdline prettier.

- folke/snacks.nvim
- saghen/blink.cmp
- folke/todo-comments.nvim
- folke/noice.nvim
- folke/which-key.nvim

### Eyecandy
These are just fancy plugins to make neovim not look boring.

- sphamba/smear-cursor.nvim
- MeanderingProgrammer/render-markdown.nvim
- lewis6991/gitsigns.nvim

### Filesystems
This was a life changer, after moving to nvim, I was still stuck using the netrw file explorer and it sucked for me.

Oil.nvim was great because I can edit the filesystem like in a vim-like buffer.
Projevt.nvi m

- stevearc/oil.nvim
- ahmedkhalf/project.nvim

### Formatting
These are used for linting and formatting

- stevearc/conform.nvim
- neovim/nvim-lspconfig
- mfussenegger/nvim-lint

### Utilties
Here are some utility plugins that also makes tasks easier

vim-visual-multi makes it easy to replace text in a buffer (search and replace)
grug-far makes it easy to replace text in a directory (search and replace)

- tpope/vim-sleuth
- mg979/vim-visual-multi 
- numToStr/Comment.nvim
- nvim-treesitter/nvim-treesitter
- nvim-treesitter/nvim-treesitter-context
- MagicDuck/grug-far.nvim
- NStefan002/visual-surround.nvim

### Obsidian
I use this to write my notes (this).

- obsidian-nvim/obsidian.nvim

### Work Stuff
I installed these plugins just to ***conform*** to my work development environment
Not a fan since I could have just used Mason for everything

- prettier/vim-prettier 
- dmmulroy/tsc.nvim
