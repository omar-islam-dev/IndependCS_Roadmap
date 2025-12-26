# how to connect with [[SFTP🌿]]

- after getting access to your remoter system via SSH [[How to access remote systems using SSH🌿]]

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

