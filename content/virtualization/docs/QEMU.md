# what is QEMU ?
- QEMU is a virtualization platform that uses dynamic **binary translation**,to emulate computers processors,made by fabrice bellard.
# how it works ?
- QEMU emulates computer processors using binary translation which is slower than using [[KVM]],but it's very useful in scenarios like when you want to emulate an **aarch64** system that use *ARM*, QEMU emulates system requirements like networking and storage and cpu instructions using **binary translation** 

>[!note]
>so what is the differences between QEMU and libvirt ?
>- QEMU emulate hardware like network card
>- libvirt manage the emulated network card, using virtual bridge,DHCP, and firewall rules

# How KVM and QEMU work together although the differences in their way of work?

By integration between each other..... in some functions QEMU keeps emulating them like GPU, storage, and network cards. But KVM is the accelerator that makes QEMU not emulate the processor, because KVM lets the Host processor do the work, not an emulated processor.

Why the processor only and not the rest of the machine?
Because things like the graphics card..... storage.... network cards are stateful pieces.

 Graphics Card: It holds the screen and knows that this pixel is red. If you let the VM modify it directly and the Host also modifies it at the same time.. the screen will Glitch and the device will hang.

Hard Disk: The Host holds the hard drive and writes a file. If the VM enters and writes in the same place directly without supervision.. the data will Corrupt.

