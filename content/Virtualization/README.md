# Why am I documenting Virtualization?

 On November 30, 2025, I officially decided to switch my daily driver from CachyOS to NixOS. But let's be real, NixOS is a completely different beast, and installing it directly on bare metal is a recipe for wasted time and potential headaches. The smart move? Virtualize it first. This strategy allows me to experiment safely and, more importantly, abuse snapshots—which are going to be a lifesaver while learning the Nix ecosystem.

I didn't just dump random technical definitions for Libvirt, KVM, and QEMU into the `docs` folder. I wrote them to build a clear mental model. I need to be able to distinguish between infrastructure issues and configuration errors. For instance, if I lose internet connectivity, I need to know if it is a Libvirt bridge issue or just a bad line in my `configuration.nix`. Separation of concerns is key here.


# Will this project expand?

Definitely. My plan is to eventually dive deeper into low-level architecture and hardware emulation. However, for now, I am keeping the scope focused. I only want to understand the primitives necessary to facilitate a smooth migration to NixOS without getting lost in the weeds...
