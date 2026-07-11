In this problem i'm gonna solve [[problem-1-print-your-name]] from the second level of the roadmap again, but this time using C++ instead of flowcharts.

## Problem

 Write a program to print your name on screen.

---
## what to consider

- in this level (level-4), we need to use functions, procedures, structures and loops if possible, to make the code cleaner and more modular.

---

## how i will build this program.
- this program doesn't take an input from the user, i have to print a fixed name, so i have to:
	- write a procedure that prints "your name is".
	- write the main function and call the procedure and send the name to it.

---

## final code

```cpp
#include <iostream>

using namespace std;


void print_my_name(string name)
{
	cout << "my name is " << name << endl; 
}


int main()
{
	print_my_name("omar");
	
    return 0;

}

```

---

## mistakes and what i learned 

### first one
the first time i tried to write the code, i ended up writing something like this:


```cpp
#include <iostream>

using namespace std;


void print_my_name()
{
    string name;    

	cout << "my name is " << name; 
}


int main()
{
	print_my_name(omar);
	
    return 0;

}
```


i faced this log:

```
g++ problem-1.cpp -o problem-1
problem-1.cpp: In function ‘int main()’:
problem-1.cpp:16:23: error: ‘omar’ was not declared in this scope
   16 |         print_my_name(omar);
      |                       ^~~~
```

after searching and asking the AI, i discovered i really forgot about the Syntax in C++ 😅

 i can summarize the mistakes in this bullet points:
 
 - the procedure `print_my_name` has no parameters to receive from the `main` function, so i have to move the `string name;` part, and put it between () in the `print_my_name` function like so, `print_my_name(string name)` 
 
 -  i send the name `omar` to the procedure in completely wrong way the compiler dealt with it as a `variable` not a string, that's why the `not delared in this scope` error appeared, however if fixed this part without fixing the first one it will show a new error like `too many argument`, because again, the function doesn't have a parameter to receive a value or a string from the main function.

after fixing these two issues, no other errors appeared.
