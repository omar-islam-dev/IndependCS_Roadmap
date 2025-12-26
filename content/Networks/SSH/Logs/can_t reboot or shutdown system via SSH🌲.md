# problem

when typed `shutdown now` in my local machine to shutdown my laptop i couldn't because of "interactive authentication" porblem.

this the error i got
> Failed to schedule shutdown: Access denied as the requested operation requires interactive authentication. However, interactive authentication has not been enabled by the calling program.


---

# what i did
i searched about it on reddit and found the solution on [r/linux4noobs](https://www.reddit.com/r/linux4noobs/comments/5vbmq8/getting_errors_whenever_i_try_to_reboot_or/)

- the comment:
	- A system shutdown needs **root**/`sudo` or other special permissions (usually handled by polkit and/or systemd) for obvious reasons.
	
	(Example: In its default configuration, systemd allows for a root-less shutdown if the user is local (so no ssh) and there's currently no other user logged in.)
	
	 `Interactive authentication required.`
	
	Systemd is complaining because it tries to get authentication but can't because you're logged in via ssh.  
	`sudo reboot` should do the trick.

