### **Troubleshooting Log: Libvirt Socket Connection Failure**

Date: November 30, 2025

Context: Initial attempt to create a NixOS VM using virt-manager (QEMU/KVM).

#### 1. The Issue

When attempting to launch the VM installation, the process failed immediately with the following error:

```
Error setting installer parameters.
Validating install media '...' failed:
Failed to connect socket to '/var/run/libvirt/virtstoraged-sock': No such file or directory
```

#### 2. Initial Analysis & Hypothesis

- **Observation:** The error explicitly stated "No such file or directory" pointing to a socket file in `/var/run/libvirt/`.
    
- **Hypothesis:** I initially suspected a permission issue preventing my user from accessing the socket.
    
- **Research:** Found a suggestion to use `setfacl` (Access Control Lists) to grant read/write permissions to the socket.
    

#### 3. Failed Attempt (The Rabbit Hole)

I attempted to run the following command to fix permissions:

Bash

```
sudo setfacl -m user:$USER:rw /var/run/libvirt/libvirt-sock
```

**Result:**

```
setfacl: /var/run/libvirt/libvirt-sock: No such file or directory
```

**Realization:** The command failed because it was trying to modify permissions for a "phantom" file. The socket file did not exist at all.

#### 4. Root Cause Analysis (RCA)

The key understanding came from analyzing the path `/var/run`.

- **Fact:** `/var/run` (or `/run`) contains **ephemeral runtime data**. These files are created only when a service is active and are wiped on reboot.
    
- **Conclusion:** The socket files (`libvirt-sock`, `virtstoraged-sock`) act as connection points. If the daemon (`libvirtd`) is not running, it cannot create these sockets. Therefore, the files do not exist.
    

#### 5. The Solution

The issue was simply that the Libvirt daemon was not active.

![[feels-dumb.png]]

**Fix:**

Bash

```
sudo systemctl enable --now libvirtd
```

- `enable`: Ensures it starts on boot.
    
- `--now`: Starts it immediately in the current session.
    

#### 6. Key Takeaway

- **Always check the service status first.** Before diving into complex permission fixes (`setfacl`) or configuration debugging, ensure the daemon is actually running.
    
- **Runtime Directories:** Files in `/var/run` are volatile. If a file is missing there, it usually means the process responsible for creating it is dead or stopped.
    
