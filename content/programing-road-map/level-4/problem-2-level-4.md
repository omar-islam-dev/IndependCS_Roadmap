In this problem i'm gonna solve [[problem-2-print-the-entered-name]] from the second level of the roadmap again, but this time using C++ instead of flowcharts.


## problem

Write a program to ask the user to enter his/her name and print it on screen.

---

### what to consider 
- in this level (level-4), we need to use functions, procedures, structures and loops if possible, to make the code cleaner and more modular.

---

## how will i build this program

- since this program asks **one** user to enter his name, and print it on the screen, and i need my code to be modular, so i will write:
	- a procedure to read the user input
	- a procedure to print the user input
	- the main function which will call the two procedures 


---

## final code

```cpp
#include <iostream>

using namespace std;

string read_user_name()
{
	string name; 

	cout << "Please enter your name\n";
		getline(cin, name);

return name;

}

void print_user_name(string name)
{
	cout << "Your name is: " << name << endl;
}


int main()
{
	print_user_name(read_user_name());

return 0;	

}
```

---


## mistakes and what i learned 

### first one:

This time i didn't have any errors (luckily) with this code:

```cpp
#include <iostream>

using namespace std;

void read_user_name(string &name)
{
	cout << "Please enter your name\n";
		getline(cin, name);
}

void print_user_name(string name)
{
	cout << name << endl;
}


int main()
{
    string name;
		
	read_user_name(name);
	print_user_name(name);

return 0;	

}
```


BUT, i found my code doesn't look like Dr. Abu-Hadhoud which was something like this:

```cpp
#include <iostream>
#include <string>

using namespace std;

string ReadName()
{
    string Name;
	
    cout << "Please enter your name? " << endl;
    getline(cin, Name);
    return Name;
}

void PrintName(string Name)
{
    cout << "\n Your Name is:" << Name << endl;
}

int main()
{
    PrintName(ReadName());
	
	return 0;
}

```


i wonder why in this code `readname` does exist as a function not a procedure, i always used procedures in the last level when reading or printing data, and used functions to return a value after doing mathematical calculation.

so, when i asked the AI he told me that:
- functions should only do one thing in my program and my `void` function (procedure),  was doing two things at the same time, which is:
	
	- editing the values of the variable that is received from the  procedure
	- reading user data
  
  unlike abo-hadhoud's code, which made the function be pure,

- also the main function, was clean without initializing new variables, which is better and more lighter for the memory

