طيب بقولك انا كان في مشكله مش فاهمها في qemu/kvm عندي .......هي عباره عن اني لما ببقي شغال علي nixos وبعمل shutdown now بلاقي الشاشه دي بتظهر![[Pasted image 20251130163204.png]] ومهما حاول اعمل shutdown من الزار في virt manger او force off /reset مفيش اي نتيجه غير اني لما برجع افتح ال vm بلاقي الشاشه دي تاني 

طيب دا سببه ايه ؟
انا في الاول حاولت افكر مع نفسي واقرأ ال error هنا بيقولي no bootable device دا اكيد معناه ان ال iso مش موجوده وان دي مشكله في ال storage نفسه .....قولت خلاص هفتح ال storage section في ال virt manger لقيت ال XML بتاع التخزين كالاتي 

```XML
<disk type="file" device="disk">
  <driver name="qemu" type="qcow2" discard="unmap"/>
  <source file="/var/lib/libvirt/images/nixos-25.05.qcow2"/>
  <target dev="vda" bus="virtio"/>
  <address type="pci" domain="0x0000" bus="0x04" slot="0x00" function="0x0"/>
</disk>

```

ال `  <source file="/var/lib/libvirt/images/nixos-25.05.qcow2"/>`
دا معناه ان ال qcow2 شغال تمام وكل حاجه متظبطه طب ليه بقي لما بعمل shutdown مش بلاقي ال iso شغال زي ما انا عاوز ومش بعرف اوصله ابدا والشاشه اللي فوق بتفضل دايما ظاهره في وشي ؟