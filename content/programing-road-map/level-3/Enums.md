that's not a tutorial but i faced some points in enums that i didn't understand, like this code for example

```cpp
#include <iostream>

using namespace std;

enum favourite_color {red, green, blue};

int main()
{
	 favourite_my_color;
	
	my_color = favourite_color::red;
}
```


why in this part:

```cpp
	favourite_color my_color;
	
	my_color = favourite_color::red;
```


do i need to write `favourite_color` twice, i did initialize a variable called `my_color` and has the `favourtie_color` type already, so why do i need to write `favourite_color::red;` ?

i could just simply write `my_color = red;`.


i asked the AI about that, and he told me the main reason for that is about backward compatibility with C Programming language, and how traditional  compilers actually works in C/C++.

### Here's a breakdown of why this happens:

#### The C legacy
 in C/C++ enums are '"unscoped", the enums like (`red`, `green`, `blue`) are leaked into the global scope.


if you defined another enum that also contains `red`, a Name Clashing will occur, because the word `red` is already taken.



### how the compiler analyzes the code (AST vs. context)

you might think: "but the compiler already knows `my_color` is of type `favourite_color`, so it should guess my intent".

well, NO it doesn't in C/C++  because traditional compilers are strict and analyze expression in a linear way, if the parser and semantic analyzer it won't compile unlike swift which features a context-aware type checker.



![[compiler-mindmap.excalidraw.svg]]

