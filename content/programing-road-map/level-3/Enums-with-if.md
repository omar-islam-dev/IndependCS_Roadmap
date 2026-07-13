Last time in [[Enums]],  i also faced some problems and errors, because i didn't know how to make my program take input from the user.

for example, i tried to write a program to ask the user to enter his favorite color, as follows:

```cpp
#include <iostream>

using namespace std;


enum en_favorite_color {red = 1, blue = 2, green =3};

int main()
{
	// here i initialized variables like the last time in `Enums` note 
	
	
	en_favourite_color color;
	
	int color = en_favourite_color:: // ----> didn't know how to continue writing this code 
}
```


i didn't know how to continue writing this code,it's weird because to make `cin` work and get the input from the user  i have to initialize a variable first, at that point it seemed that the only option is to assign a value such as `int color = en_favourite_color::red, blue or green` which made me wonder if the developer needs to choose the value himself, what's the point of `cin` in the first place?


After searching, i realized that i was supposed to cast the data, and to be honest i didn't get it at first because of the Syntax, in this code:

```cpp
#include <iostream>
   
using namespace std;
   

 enum enCountryChoice { Jordan=1, Tunisa=2, Algeria=3, Oman=4, Egypt=5, Iraq=6, Other=7 };
   

 int main()
{   
 cout << "****************************\n";
 cout << "Please Enter the number of your country?\n";
 cout << "(1) Jordan\n";
 cout << "(2) Tunisa\n";
 cout << "(3) Algeria\n";
 cout << "(4) Oman\n";
 cout << "(5) Egypt\n";
 cout << "(6) Iraq\n"; 
 cout << "(7) Other\n";
 cout << "****************************\n\n";   
 cout << "Your Choice? ";
   
 int c;
 enCountryChoice Coutnry;
 cin >> c; 
 Coutnry = (enCountryChoice) c;   

 if (Coutnry == enCountryChoice::Jordan)   
 {
 cout << "Your country is Jordan\n";   
 }   
 else if (Coutnry == enCountryChoice::Tunisa)
   
 {
   
 cout << "Your country is Tunisa\n";
   
 }
   
 else if (Coutnry == enCountryChoice::Algeria)  
 {   
 cout << "Your country is Algeria\n";   
 }
   
 else if (Coutnry == enCountryChoice::Oman)
   
 {    
 cout << "Your country is Oman\n";
   
 }
   
 else if (Coutnry == enCountryChoice::Egypt)   
 {
 cout << "Your country is Egypt\n";    
 }    
 else if (Coutnry == enCountryChoice::Iraq)    
 {    
 cout << "Your country is Iraq\n";    
 }    
 else    
 {    
 cout << "Your country is Other\n";   
 };

 return 0;
}
```


at first, i couldn't understand why this part is written like this:

```cpp
 int c;
 enCountryChoice Coutnry;
 cin >> c; 
 Coutnry = (enCountryChoice) c;   
```


so i asked The AI to break it down for me, this is how I understood it:

the first line `int c;` 
was for creating an integer variable to store numbers.,


the second line `enCountryChoice Coutnry;` 
was for initializing the variable `Country` with `enCountryChoice` Data type

so the first and second lines was for initializing variables,


the third line `cin >> c;` 
was for receiving values from the user 


the fourth line `Coutnry = (enCountryChoice) c;` 
from my understanding this line of code, execute conceptually in this order:

- for the right side:
	- get the value of `c`
	- cast it to (enCountryChoice) data type.

- for the left side:
	- assign the value of the right side to the variable `Country`


