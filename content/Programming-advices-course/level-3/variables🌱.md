>[!note]
When defining variables, you should be aware of the difference between Definition and Assignment.
A Definition allocates a memory location with the name you specified, whether it is x or a descriptive name. A variable cannot be defined more than once with the same name within the same scope, because having two memory addresses bound to the same name in the same scope is not allowed.
However, a variable can be reassigned (Assignment), which is simply the process of changing the value stored at the already allocated memory address.
A variable cannot be reassigned if it is defined as constant

## Example 
```c++
#include <iostream>
using namespace std;

int main()
{
    int age = 12; // the variable is defined here, and this is allowed only once
    cout << age << endl; // prints 12

    age = 30; // here I am only reassigning the variable's value
    cout << age << endl; // prints the new value (30), not 12, because the            variable's content changed

    return 0;
}
```

### output 
```output
12
30
```
