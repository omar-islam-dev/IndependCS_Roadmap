# what is SFTP
Secure File Transfer Protocol (SFTP) is a standard networking protocol for the secure transfer of files between connected systems. A network protocol is a set of established rules that act as a common language regardless of the specific hardware or software used by the devices on the network. SFTP adds authentication and encryption to file transfer, allowing organizations to share files securely and meet regulatory compliance requirements for sensitive file data.

[source](https://aws.amazon.com/what-is/sftp/)

SFTP has pretty much replaced legacy [FTP](https://www.ssh.com/ssh/ftp/) as a file transfer protocol, and is quickly replacing [FTP/S](https://www.ssh.com/academy/ssh/ftp/ftps). It provides all the functionality offered by these protocols, but more securely and more reliably, with easier configuration. There is basically no reason to use the legacy protocols any more.

[source](https://www.ssh.com/academy/ssh/sftp-ssh-file-transfer-protocol)


## SFTP vs. FTPS

People often want to compare SFTP vs. FTPS. FTPS is basically the old [ftp](https://www.ssh.com/academy/ssh/ftp) protocol run over SSL (Secure Sockets Layer) or TLS (Transport Layer Security).

Benefits of SFTP over FTPS include:

- SFTP runs over SSH in the standard SSH port. Thus, no additional ports need to be opened on the server and no additional authentication needs to be maintained. This simplifies configuration and reduces the likelihood of configuration errors.

- FTPS needs complicated firewall configuration and may not work over NAT. Ports 989 and 990 need to be open. Furthermore, FTPS supports both active and passive modes (see [FTP](https://www.ssh.com/academy/ssh/ftp)), which further complicates firewall configurations and is prone to problems.

- FTPS requires an [X.509 certificate](https://www.ssh.com/academy/pki) for the server, typically from a public certificate authority. SSH works without any centralized infrastructure. SFTP can utilize whatever host key distribution or certification method is in use for SSH, without needing additional work and ongoing maintenance.
  
- FTPS is basically FTP, which means it has ASCII mode, which can corrupt files if the mode is not properly set. Some implementations default to ASCII mode.

- FTPS cannot be used as a file system. (This does not improve security, as it can still read the same files.)

- FTPS requires an extra server software package to be installed and patched, whereas SFTP usually comes with SSH with the system.
  
  [source](https://www.ssh.com/academy/ssh/sftp-ssh-file-transfer-protocol)

--- 
# how to connect with SFTP

- after getting access to your remoter system via SSH [[How to access remote systems using SSH]]

- you can use this command to start your sftp program 

```shell
sftp server-name@your_server_ip_or_remote_hostname
```
 
 and the prompt will change to SFTP prompt.

## navigating with SFTP

We can navigate through the remote system’s file hierarchy using a number of commands that function similarly to their shell counterparts.

>[!note]
> the commands available within the SFTP interface are not a 1:1 match for typical shell syntax and are not as feature-rich. However, they do implement some of the more important optional flags, such as adding `-la` to `ls` to view more file metadata and permissions

## transferring files with SFTP

### transferring files from the remote system to the local

- If we want to download files from our remote host, we can do so using the `get` command:
  
```shell
get remote [file]
```

### transferring files from the local system to the remote

Transferring files to the remote system works the same way, but with a `put` command:

```shell
put [localFile]
```

### useful commands


- One familiar tool that is useful when downloading and uploading files is the `df` command, which works similarly to the command line version. Using this, you can check that you have enough space to complete the transfers you are interested in:

```shell
df -h
```

>[!note]
>Please note, that there is no local variation of this command, but we can get around that by issuing the `!` command.

- The `!` command drops us into a local shell, where we can run any command available on our local system. We can check disk usage by typing `!` and then 
```shell
df -h
```

 and to return to SFTP session use the command:
 
 ```shell
 exit
 ```
 
 
 except the command `df` command if you want to access to your local system you can direct commands towards the local file system by preceding them with an `l` for local.
 
 >[!example]
 >```shell
 >lpwd
 >```

this will show the current directory of your local system.


- transferring full directory using `get` and `put` by using:
```shell
put -r local_folder_name
get -r remote_folder_name
```
  

[source](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server#using-sftp-with-different-linux-distros)

thanks to **Justin Ellingwood** and **Anish Singh Walia**
for the simple and straight forward documentation.

---
