# sqrt 

## Example

```c++

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	double x =50;
	cout << sqrt(x) << endl; // gives 8
	
	return 0;
}

```

>[!note]
> انا خليت ال x يبقي double عشان لما اخد له الجذر الناتج يبقي رقم عشري وليس رقم صحيح, لو كنت خليت  x تبقي integer كنت هلاقي ناتج ال sqrt رقم صحيح اللي هو غلط رياضيا  



---

# round

## example
```c++
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	cout << round(2.4) << endl; // gives 2
	cout << round(2.5) << endl; //gives 3
	cout << round(2.7) << endl; //gives 3
	
	cout << round(sqrt(50)) << endl; //gives 7
	return 0;
}

```

>[!note]
>هنا في السطر `cout << round(sqrt(50)) << endl;` انا كتبت داله جوا داله 
>ودا عادي في البرمجه ومستخدم بدون مشاكل وممكن اعمل داله جو داله جو داله عادي جدا لان الداله مخرجها ما هو الا رقم اصلا 


---

# power

## example:
```c++
#include <iostream>
#include <cmath>

using namespace std;

int main()
{

       int x = 2;
       int y = 3;

       cout << pow(x, y) << endl;
       cout << pow(3, 2) << endl;

   return 0;
}
```

```c++

//Write a program to calculate rectangle area through diagonal and side area of rectangle, and print it on the screen.
//The user should enter:diagonal value and side area value

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
        cout << "This program will calculate rectangle area through diagonal and side area of rectangle." << endl << endl;

        int diagonal, side;

        cout << "Enter Diagonal Value:" << endl;
                cin >> diagonal;

        cout << "Enter Side Area Value:" << endl;
                cin >> side;

        cout << "Area = " << side * sqrt(pow(diagonal, 2) - pow(side, 2)) << endl;

  return 0;
}
```


>[!تفكير بصوت عالي]
> في الكود النتيجه طلعت رقم بكسر 
لاني كتبت علي طول 
`cout << "Area = " << side * sqrt(pow(diagonal, 2) - pow(side, 2)) << endl;`
لو انا كنت عملت متغير اسمه 
area وكنت خليته integer
وكتبت 
int Area = side * sqrt(pow(diagonal, 2) - pow(side, 2));
cout  << "Area = " << Area << endl;
كدا لو كتبت عندي تشغيل البرنامج القيم القديمه 
اللي هي 
12 للقطر 
و 6 للضلع الناتج كان هيبقي 
 62
صح ؟
طب في الحاله دي لو استنتاجي صح 
مش المفروض من المنطقي ان كنت اخلي المتغير يكون double or flow 
و افضل علي الكود القديم ولو احتجت اقربه استخدم round او ceil او floor 
بدل ما كنت اغلط واعمل ال area integer واكون فرضت ناتج intger عليا صح ؟؟

>[!الخلاصه]
> **خلي نوع البيانات يعبر عن القيمة الحقيقية، وبعدين تحكم في طريقة عرضها.**


>[!note]
> اياك تنسي ان ال pow لازم يكتب معاه الاساس والاس سوا 

---

# ceiling and floor

بتستخدم في تقريب الارقام 
هي اكثر قدره علي التخصيص مقارنه ب round 

>[!note]
>Ceiling -> سقف
>floor -> ارضيه

## example:

```c++
#include <iostream>
#include <cmath>

using namespace std;

int main()

{

        cout << ceil(2.9) << endl;
        cout << floor(2.9) << endl;

        cout << ceil(-2.9) << endl;
        cout << floor(-2.9) << endl;

        return 0;
}
```


---

# absolute value:

## example:

```c++
#include <iostream>
#include <cmath>

using namespace std;


int main()
{

        int x = -3.2313;
        double y = -2.5312;

                cout << abs(-10) << endl;
                cout << abs(x) << endl;
                cout << abs(y) << endl;

        return 0;
}
```



---

# home work 
![[Pasted image 20260309045816.png]]



