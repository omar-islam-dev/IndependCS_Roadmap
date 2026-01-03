# Git History

> Note: This section will be a discussion about Git and its history in my own style and narrative… I’ll add my part later when I have a stable internet connection so I can research it properly 🤡🤡

---
# Git Architecture 
![[git-architecture.png]]

# git configuration 

[[git-configuration🌱]]

## Configurations-levels 

 `$ git config --global` # User (global) -> ~/.gitconfig   `$ git config --system` # System -> /etc/gitconfig  
`$ git config `        # Project -> (project) -> /.git/conifg  


## identity-configuration

``` shell
$ git config --global user.name "Omar Islam"

$ git config --global user.email "omar.islam.dev@gmail.com"
```

 
## text editor 
```shell
git config --global core.editor "nano"
# (don't kill me)
```


## checking ur settings 

```shell 
git config --system --list
git config --global --list
git config --list
```


---

# working on git locally

## Initializing a Repository 

```shell 
git init
# make sure you are at the right top level directory
```

## Tracking changes 

```shell 
git add  
```