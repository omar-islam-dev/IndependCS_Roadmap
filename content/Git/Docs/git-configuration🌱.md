## identity 

. If you search in the man pages in git about git config and git help in the config section

this is the output that will appear (out of 4000 lines… of course you didn’t read them all, you used grep and fzf)

       optionally config.worktree (see the "CONFIGURATION FILE" section of git-worktree(1)) in each repository are used to store
       the configuration for that repository, and $HOME/.gitconfig is used to store a per-user configuration as fallback values for
       the .git/config file. The file /etc/gitconfig can be used to store a system-wide default configuration.

And this simply means that

- ~/.gitconfig is the configuration file specific to the user only and does not apply to the whole system, and it applies literally to all repos unless you change the next file
- /.git/config here it says that inside the .git folder that will exist for any repo you create, there will be a config file that is pre‑written based on ~/.gitconfig automatically, and you can modify it if you want, and this change applies only to the current repo
- /etc/gitconfig is the config file that applies to the entire system, not just a normal user

>[!Question]
>So does this mean that I can make the etc config different from the user config and different from the config of a specific repo? Or as long as the etc config is set, I can’t modify the user config?
>For example, imagine the following: I created the git config from scratch in etc, not user and not for a current repo.
>And suddenly my brother decides to create a new user on my laptop on the same Linux distro. So the git config he will work with will be the default — if he doesn’t change anything — it will be my config that I wrote in etc, right? And this applies to any new user created?
>Now suppose my brother changes the git config in ~/.gitconfig — this config will be his only, without touching the rest of the users or the etc, and it will apply only to his user, right?
>Now imagine another case: my brother, on the same user, decides to create a new repo but with a config for an account different from his main one, and he modifies the .git folder of the repo — this change applies only to his user and only to that repo, right?

So how do I access each file and add the data (name and email) easily without opening a text editor?

This basically happens through the command `git config`, and the commands are as follows:

>  `$ git config --global` # User (global) -> ~/.gitconfig  
>  `$ git config --system` # System -> /etc/gitconfig  
> `$ git config `        # Project -> (project)-> /.git/config  

So after experimenting I did the following:

```shell 
 omar  ~   20:44  
 git init


 omar  ~   master   20:44  
 git config --list
user.name=omar
user.email=omar.islam.dev@gmail.com
user.signingkey=/home/omar/.ssh/id_ed25519.pub
gpg.format=ssh
commit.gpgsign=true
text.editor=nano
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true

## Here I wanted to know what the config of the current project is

 omar  ~   master   20:44  
 cd .git/

 omar  ~/.git   master   20:44  
 bat config
───────────────────────────────────────────────────────────────────|
     │ File: config                                                |
─────┼─────────────────────────────────────────────────────────────|
   1 │ [core]
   2 │     repositoryformatversion = 0
   3 │     filemode = true
   4 │     bare = false
   5 │     logallrefupdates = true                                
─────┴─────────────────────────────────────────────────────────────


## And this is the output of /.git/config 
```

The summary is that I did initialization for a git repo inside the /home folder because I wanted to compare between the output of the command `git config --list` since this shows me the project config but not the user config (this is something I discovered while writing the commands — I’m surprised by this part even though the man pages say:

> and $HOME/.gitconfig is used to store a per-user configuration as fallback values for the .git/config file

And this appeared when I wrote the following:

```
 omar  ~   master   20:48 
git config --list
user.name=omar
user.email=omar.islam.dev@gmail.com
user.signingkey=/home/omar/.ssh/id_ed25519.pub
gpg.format=ssh
commit.gpgsign=true
text.editor=nano
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true

## From my understanding this is what shows the project config

 omar  ~   master   20:48  
 git config --global --list
user.name=omar
user.email=omar.islam.dev@gmail.com
user.signingkey=/home/omar/.ssh/id_ed25519.pub
gpg.format=ssh
commit.gpgsign=true
text.editor=nano

## From my understanding… this shows the entire user config, not just the project config

```


The git config for the repo is larger than the global (user) config in the following:

core.repositoryformatversion=0 core.filemode=true core.bare=false core.logallrefupdates=true

So I’ve finished the observation regarding my confusion… let’s continue the summary.

And between the command:

`bat ~/.git/config`

the output of each one was different… why then, since the man pages explain that ~/.gitconfig applies by default and fully to any new project config created?

bat ~/.git/config

showed me:
```
─────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
│ File: config
─────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
1 │ [core]
2 │     repositoryformatversion = 0
3 │     filemode = true
4 │     bare = false
5 │     logallrefupdates = true

And
git config --list
showed me:

git config --list
user.name=omar
user.email=omar.islam.dev@gmail.com
user.signingkey=/home/omar/.ssh/id_ed25519.pub
gpg.format=ssh
commit.gpgsign=true
text.editor=nano
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
```

What is the reason for the disappearance of this part:

git config --list user.name=omar user.email=omar.islam.dev@gmail.com user.signingkey=/home/omar/.ssh/id_ed25519.pub gpg.format=ssh commit.gpgsign=true text.editor=nano

if the output of both commands is supposed to be the same?


----
