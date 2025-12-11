Context: I successfully established an SSH connection between my Android phone (via Termux) and my laptop,[[How to access remote systems using SSH🌿]]
Problem: The connection only works inside the local network. I need to access my laptop remotely when I am outside.

## Investigation: IP Addressing Types
To solve this, I researched how remote connections work and learned about IP types:

- Private IP: Assigned by the router for local network use only. Secure and not visible on the internet.
- Public IP: Assigned by the ISP for outside communication. It has two types:
    - Dynamic IP: Changes over time (Common for home connections).
    - Static IP: Permanent and unchanging (Used by servers).

[Source: GeeksforGeeks](https://www.geeksforgeeks.org/computer-networks/difference-between-private-and-public-ip-addresses/)

The Obstacle: My ISP (in Egypt) assigns a Dynamic Public IP (likely behind CGNAT). I suspect this is due to IPv4 exhaustion and to upsell Static IPs as a business service. To connect remotely, I need a static entry point.

## Solution: Tailscale (Mesh VPN)
I found that Tailscale is the best free solution to establish a secure connection without buying a static IP.

### Implementation Steps
1. Installation I installed the package from the AUR (Arch User Repository).

2. Enabling the Service:
   ```shell
   sudo systemctl enable --now tailscaled.service
   ```
 
 3. Authentication:
 ```shell
 tailscale login
 ```
 I used the generated URL to log in with my email and added my laptop to the virtual network.
 
 4. Client Setup: Installed the Tailscale app on my phone, logged in with the same email, and authorized the device.

Result: Connection established. I can now SSH into my laptop from anywhere using the Tailscale IP.

> [!question] Observation: IP Address Discrepancy? I checked my public IP using the following command: `host myip.opendns.com resolver1.opendns.com | grep "myip.opendns.com has" | awk '{print $4}'`

 The Mystery: The output (my actual ISP Public IP) is different from the IP address Tailscale provided me.
 
 My Hypothesis: Tailscale creates a Virtual Overlay Network. The IP it gives me (usually starting with `100.x.y.z`) is only valid inside this virtual network (Mesh), and it does not replace my actual ISP Public IP.
 
 Future Work: I need to understand the underlying architecture of Tailscale to confirm this. [Tailscale Documentation: How it works](https://tailscale.com/blog/how-tailscale-works)