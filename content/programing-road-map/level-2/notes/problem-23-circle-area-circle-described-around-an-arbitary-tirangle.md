# Problem
Write a program to calculate circle area circle described around an arbitrary triangle, then print it on the screen.

![[Pasted image 20260117150227.png]]

---

# Solution

1. ask the user to enter a, b and c 
2. pi = 3.14
3. p = (a+b+c)/2
4. result = (a* b * c) / ( 4 * $\sqrt{p.(p-a).(p-b).(p-c)}$ )
5. area = pi . result . result
6. print area
   
   
