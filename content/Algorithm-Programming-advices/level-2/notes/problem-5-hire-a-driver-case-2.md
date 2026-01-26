
Problem:
Write a program to ask the user to enter his/her:
Age
Driver license
Has Recommendation!
Then Print "Hired" if his\her age is grater than 21 and s/he has a driver license, otherwise Print "Rejected"
Or Hire him her without conditions!

(similar to [[problem-4-hire-a-driver-case-1]])

---
1.  ask the user to enter his/her Recommendation
2. ask the user to enter his/her age
3. ask the user to enter his/her driver license
4. recommendation = ( recommendation : true  ) 
5. main-requirements = ( age > 21 and driver license : true) 
6. if recommendation or main-requirements = true
7. print "Hired" otherwise
8. print "rejected"

---

Why, in Abu Hadhoud’s answer [[problem-5-e-hire-a-driver-case-2]] , did he check the recommendation first instead of placing it directly inside the logical expression  (age AND driving license) OR recommendation?

To shorten the execution path.

Instead of making the computer evaluate the entire condition (age AND driving license) OR recommendation, he checks the recommendation first.  
If it exists, the program finishes earlier without performing additional arithmetic or logical computations.  
In my case, I used two blocks, which means two computational operations on the processor.

As for my modified approach, it provides an even greater optimization of computational resources.  
In this approach, the computer reads only the recommendation first.  
If it exists, the program immediately ends with a print instruction.  
If it does not exist, the computer then proceeds to read the remaining data.

In short, I optimized the process by eliminating an entire data-reading step.

   ---
   
   
# my old answer 
![[problem-5-my-old-answer.png]]


#  Abu-Hadhoud’s-answer
![[problem-5-abo-hadoud's-answer.png]]

# My modified answer
![[problem-5-modified-answer.png]]

---
   