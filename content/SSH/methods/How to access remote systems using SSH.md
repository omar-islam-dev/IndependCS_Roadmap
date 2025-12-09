- The OpenSSH suite contains tools such as [[SSHD]], [[SCP]], [[SFTP]], and others that encrypt all traffic between your local host and a remote server.
- The [[SSHD]] daemon, which runs on the remote server, accepts connections from clients on a TCP port. SSH uses port 22 by default, but you can change this to a different port. To initiate an SSH connection to a remote system, you need the Internet Protocol (IP) address or hostname of the remote server and a valid username. You can connect using a password or a private and **public key pair**. *Because passwords and usernames can be brute-forced, it's recommended to use SSH keys*.

# initializing SSH service
- on my machine that runs **NixOS** i didn't need to install SSH as the source said 
- i enabled the service via [[configuration.nix]] using:
  
```shell
  services.openssh = {
    enable = true;
  };    
```
  
  >[!note]
  > - after enabling the ssh service i didn't need to enable the service every time i start my session, the service works automatically 
  
and it worked with me after rebuild the system

[source](https://www.redhat.com/en/blog/access-remote-systems-ssh)
thanks to  [Evans Amoany](https://www.redhat.com/en/authors/evans-amoany) who wrote the article.

---
# How To Log Into SSH with Keys
- shh keys are more secure than usernames and passwords as mentioned before 
  > *passwords and usernames can be brute-forced, it's recommended to use SSH keys*.

## How to generate a ssh key ?
- this will be applied in the local machine, in my case it's my android phone

```shell
ssh-keygen -t ed25519
```

that command generate a shh key using ed25519 algorithm, the source mentioned using **rsa** but i won't use because ed25519 is more fast and reliable, i also used [this](https://www.reddit.com/r/sysadmin/comments/4gktbr/ssh_ed25519_keys_vs_rsa_benefits_and_drawbacks/) to know more why ed25519 is better in my case

## How To Transfer Your Public Key to the Server

If you currently have password-based access to a server, you can copy your public key to it by issuing this command:

```shell
ssh-copy-id server@ip
```

This will start an SSH session. After you enter your password, it will copy your public key to the server’s authorized keys file, which will allow you to log in without the password next time.

---

