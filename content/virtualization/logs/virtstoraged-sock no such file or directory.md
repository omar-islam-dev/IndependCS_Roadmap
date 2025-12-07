

طيب هو الموضوع بدا لما انا جربت اشغل virt manger واستخدمت qemu و kvm لما اخترت nixos iso عشان ابدا
![[qemu-kvm-preview.png]]
لما دوست forward 
ظهرلي الخطأ الاتي 
![[error virtsoraged-sock.png]]

المفروض انه بيقول 


Error setting installer parameters.
Validating install media '/home/omar/Downloads/ISO's/nixos-
minimal-25.05.811874.daf6dc47aa4b-x86_64-linux.iso' failed: Failed to
connect
socket to '/var/run/libvirt/virtstoraged-sock': No such file or directory

طيب المفروض لو هقسم ال error عشان افهمه 
"Error setting installer parameters."
دا معناه ان اكيد في ملف config (لسه مش عارف اسمه لحد دلوقتي) لازم يبقي فيها parameters وفي حالتي الاعداد بتاعت ال parameters دي اما مظبوطه غلط يا اما الملف بتاعها مش موجود اصلا 
 "Validating install media '/home/omar/Downloads/ISO's/nixos-
minimal-25.05.811874.daf6dc47aa4b-x86_64-linux.iso' failed: Failed to
connect"
معناها ان التحقق من ال iso حصل فيه خطأ .......هل دا بسبب ال iso نفسها ؟
معتقدش لانها نفس ال iso اللي اشتغلت عادي لما جربت gnome boxes 

"socket to '/var/run/libvirt/virtstoraged-sock': No such file or directory"
اظن اني دي اللي بتحقق صحه شكوكي ان الملف بتاع ال parameters مش موجود اصلا 
خصوصا انه مكتوب virtstoraged ومن معرفتي ان virtstoraged  هو deamon  من ضمن ال daemons اللي libvirt بيشغلها, مسؤول عن اداره التخزين في ال vm 

فا اظن ان virtstoraged-sock اما هو مجلد او هو ملف ال config نفسه ........

طيب بس هي /var دي اصلا بتاعت ايه ؟

بعد ما بحثت لقيت الاتي
/var is a standard subdirectory of the root directory in Linux and other Unix-like operating systems that contains files to which the system writes data during the course of its operation.

طيب معرفه دا برضو دا مفادش بحاجه ......

هجرب كدا ابحث عن ال error دا "socket to '/var/run/libvirt/virtstoraged-sock': No such file or directory"

طيب هو بعد بحث (مش طويل لقيت) علي ask Ubuntu حل للمشكله ودا [الرابط](https://askubuntu.com/questions/1225216/failed-to-connect-socket-to-var-run-libvirt-libvirt-sock) عامه 

لقيت اول اقتراح للحل كا غريب شويه بيقول فيه "Have you installed kvm? To install libvirt and kvm try running below"

؟؟؟؟؟؟؟؟
طب ازاي ؟
ازاي اثبت kvm اذا كان هو اصلا module موجود في لينكس كيرنل .....كأنك طلبت من حد يثبت تعريفات كروت انتل علي السيستم وهي اصلا موجوده مسبقا في Linux kernel !!!
فا الصراحه مع ان الاجابه كان عليها 28 اب فوت قررت اني اعلمها skip واخليها اخر حاجه اجربها


تاني اجابه كانت كالاتي 
Try these steps:

```
sudo setfacl -m user:$USER:rw /var/run/libvirt/libvirt-sock
```

Exit the session and again logged in then,

```
sudo systemctl enable libvirtd
sudo systemctl start libvirtd
```

فا عجبتني لانها سهله وصغيره 😅

بس قولت ابحث افهم ال command دا بيعمل ايه الاول 
`sudo setfacl -m user:$USER:rw /var/run/libvirt/libvirt-sock`

لقيت علي موقع geekforgeeks ودا [الرابط](https://www.geeksforgeeks.org/linux-unix/linux-setfacl-command-with-example/)

الاتي 
"The setfacl command allows assigning detailed read, write, and execute permissions to specific users or groups on files and directories, offering more control than standard Unix permissions."
يعني setfacl (مش عارف هي اختصار لايه الصراحه)

بس دا معناه انها بتلعب في حته ال permissions وان الفايل دا  libvirt-sock يبقي له صلاحيه كتابه وقراءه (مكوبت rw)
طب ليه بقي ؟
ليه دا مطلوب اصلا ؟ ليه لازم صلاحيه كتابه وقراءه ؟
ولو دا مطلوب ليه مش شغال by default في وقت التثبيت ؟؟!
واشمعني لفايل libvirt-sock دا بيعمل ايه اصلا ؟
طيب بعد بحث في موقع libvirt في سكشن ال daemons لقيت الاتي ...دا [الرابط](https://libvirt.org/daemons.html) برضو 

/var/run/libvirt/libvirt-sock - the primary socket for accessing libvirt APIs, with full read-write privileges. A connection to this socket gives the client privileges that are equivalent to having a root shell. This is the socket that most management applications connect to by default.

دا معناه ان libvirt-sock دا هو المسؤول عن باقي ال daemons انها تشتغل ومن ضمنها virtstoraged 
والصراحه الامر دا 
`sudo setfacl -m user:$USER:rw /var/run/libvirt/libvirt-sock`
بقي منطقي !
انا كدا بقول للنظام 
"انا اعطيك صلاحياتي كا super user بانك تشغل setfacl اللي بدوره هيديك يا فايل libvirt-sock الصلاحيات بتاعت القراءه والكاتبه (الحته الجايه دي هتنبأ فيها باللي هيحصل) عشان تكتب في ال /var في اللي طبعا محتاج صلاحيات sudo في جزئيه ال /var/run/libvirt  عشان تعمل ال file اللي اسمه virtstoraged........ملاحظه الكلام اللي فات دا اقتراح او تنبؤ مني اظن انه غلط"
عامه بعد ما فهمت الامر دا بيعمل ايه هجربه في ال terminal وهرجع بخلاصه التجربه ......

احم .......فشل ذريع 
```shell
sudo setfacl -m user:$USER:rw /var/run/libvirt/libvirt-sock
setfacl: /var/run/libvirt/libvirt-sock: No such file or directory
```

بس ازاي حاجه مهمه زي libvirt-sock  مش موجوده عندي !!!؟؟؟؟


طيب شكلي هرجع للحل الاول 
..........طيب لما كتبت 
```shell
yay -S --needed qemu qemu-kvm libvirt-clients libvirt-daemon-system virtinst bridge-utils
```
الحزم اللي موجوده مش نفس الاسم الاسم في المستودعات بتاعت ارش ولما دورت علي اللي بيوازيها ......لقيتها كلها موجوده عندي ......فا هجرب بقي 

``
```shell
sudo systemctl enable libvirtd
sudo systemctl start libvirtd
```


..............huh ?
الامرين 
```shell
sudo systemctl enable libvirtd
sudo systemctl start libvirtd
```

ظبطوا الدنيا ؟؟؟؟؟؟

DON'T TELL ME I SPENT 2 HOURS SEARCHING FOR DEEP SOLUTION AND I ENDED UP WITH ENABLING  THE FUCKING DAEMON !!!!!!!!