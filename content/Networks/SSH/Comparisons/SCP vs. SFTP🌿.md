# What's the difference between [[SCP🌿]]and [[SFTP🌿]]?

- found the answer in superuser.com, written by [jarvin](https://superuser.com/users/5003/jarvin) quoted from [Wikipedia](http://en.wikipedia.org/wiki/SSH_file_transfer_protocol):

> Compared to the earlier SCP protocol, which allows only file transfers, the SFTP protocol allows for a range of operations on remote files – it is more like a remote file system protocol. An SFTP client's extra capabilities compared to an SCP client include resuming interrupted transfers, directory listings, and remote file removal. [1] For these reasons it is relatively simple to implement a GUI SFTP client compared with a GUI SCP client.

and

> Although both SCP and SFTP utilize the same SSH encryption during file transfer with the same general level of overhead, SCP is usually much faster than SFTP at transferring files, especially on high latency networks. This happens because SCP implements a more efficient transfer algorithm, one which does not require waiting for packet confirmations. This leads to faster speed but comes at the expense of not being able to interrupt a transfer, so unlike SFTP, SCP transfer cannot be canceled without terminating the session."

also on Wikipedia [SCP](https://en.wikipedia.org/wiki/Secure_copy_protocol)

>According to [OpenSSH](https://en.wikipedia.org/wiki/OpenSSH "OpenSSH") developers in April 2019, SCP is outdated, inflexible and not readily fixed; they recommend the use of more modern protocols like [SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol "SSH File Transfer Protocol") and [rsync](https://en.wikipedia.org/wiki/Rsync "Rsync") for file transfer.As of OpenSSH version 9.0, `scp` client therefore uses SFTP for file transfers by default instead of the legacy SCP/RCP protocol.
## conclusion
in my case i won't use `scp` due to outdated problems although SCP is faster than SFTP especially on high latency networks,but in my case the speed that scp offers doesn't come over the functionality and supporting operations like SFTP

