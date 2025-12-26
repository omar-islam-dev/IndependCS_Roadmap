
People often want to compare [[SFTP🌿]] vs. FTPS. FTPS is basically the old [ftp](https://www.ssh.com/academy/ssh/ftp) protocol run over SSL (Secure Sockets Layer) or TLS (Transport Layer Security).

Benefits of SFTP over FTPS include:

- SFTP runs over SSH in the standard SSH port. Thus, no additional ports need to be opened on the server and no additional authentication needs to be maintained. This simplifies configuration and reduces the likelihood of configuration errors.

- FTPS needs complicated firewall configuration and may not work over NAT. Ports 989 and 990 need to be open. Furthermore, FTPS supports both active and passive modes (see [FTP](https://www.ssh.com/academy/ssh/ftp)), which further complicates firewall configurations and is prone to problems.

- FTPS requires an [X.509 certificate](https://www.ssh.com/academy/pki) for the server, typically from a public certificate authority. SSH works without any centralized infrastructure. SFTP can utilize whatever host key distribution or certification method is in use for SSH, without needing additional work and ongoing maintenance.
  
- FTPS is basically FTP, which means it has ASCII mode, which can corrupt files if the mode is not properly set. Some implementations default to ASCII mode.

- FTPS cannot be used as a file system. (This does not improve security, as it can still read the same files.)

- FTPS requires an extra server software package to be installed and patched, whereas SFTP usually comes with SSH with the system.
  
  [source](https://www.ssh.com/academy/ssh/sftp-ssh-file-transfer-protocol)