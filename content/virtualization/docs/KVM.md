---
banner: https://upload.wikimedia.org/wikipedia/commons/7/70/Kvmbanner-logo2_1.png
banner-x: 50
banner-y: 32
content-start: 311
---
# what is kvm?
- kvm is a virtualization module,made by **Qumranet** and developed by linux kernel community,written in *C* 

# How it works?
- kvm isn't hypervisor working alongside Linux,It lives inside linux kernel as a module
- uses the file `/dev/kvm` to connect with other virtualization platforms  like QEMU
	- ![[QEMU-KVM-talking.png|1500]]

# Benefits of using KVM ?
- speed
	- KVM doesn't simulate hardware or software, the simulated OS talks directly to the hardware

[source](https://blogs.learningdevops.com/how-kvm-qemu-actually-works-a-real-deep-dive-550063a001e2)

