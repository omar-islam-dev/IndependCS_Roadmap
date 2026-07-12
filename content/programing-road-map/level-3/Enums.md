that's not a tutorial but i faced some points in enums that i didn't understand, like this code for example

```cpp
#include <iostrea>

using namespace std;

enum favourite_color {red, green, blue};

int main()
{
	favourite_color my_color;
	
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


i asked the AI about that, and he told me the main reason for that is the backward compatibility with C Programming language, and how traditional  compilers actually works in C/C++.



![[compiler-mindmap.excalidraw.svg]]

