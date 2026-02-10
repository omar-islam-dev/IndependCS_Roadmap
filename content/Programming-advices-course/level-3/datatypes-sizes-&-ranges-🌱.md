# Data types

|  Type   |        Meaning        |              Range               | Size(Bytes) |
| :-----: | :-------------------: | :------------------------------: | :---------: |
|   int   |        Integer        |     -2147483648 +2147483648      |      4      |
|  float  |    Floating-Point     |  **1.17549e-38**<br>3.40282e+38  |      4      |
|  doble  | Double Floating-Point | **2.22507e-308**<br>1.79769e+308 |      8      |
|  char   |       Character       |           -127<br>127            |      1      |
| wchar_t |    Wide Character     |                                  |      2      |
| string  |        Boolean        |              0<br>1              |      1      |
|  bool   |         Empty         |                                  |      0      |
|  void   |        String         |                                  |     12      |

**1.17549e-38** and **2.22507e-308** :
- is the smallest **normalized** positive value that the computer can define floating point variable, instead of considering it  to be a zero 
  
  ---
## Type Modifiers

- We can modify some of the fundamental data types by using type **modifiers**. There are 4 type modifiers in C++. They are:

1. singed
2. unsigned
3. short 
4. long

 
 - We can modify the following data types with the above modifiers:
 1. int
 2. double
 3. char


## modifying integer 

|            Type            |        Sign        |                        Range                         |  Size  |
| :------------------------: | :----------------: | :--------------------------------------------------: | :----: |
|     short int<br>short     | signed<br>unsigned |        -32768,,,,,,,+32767<br>0,,,,,,,,,65536        | 2bytes |
|            int             | signed<br>unsigned |   -2147483648,,,,,+2147483648<br>0,,,,,,4294967295   | 4bytes |
|    **long int<br>long**    | signed<br>unsigned |   -2147483648,,,,,+2147483648<br>0,,,,,,4294967295   | 4bytes |
| long long int<br>long long | signed<br>unsigned | -(2^63),,,,,,(2^63)-1<br>0,,,,,,18446744074709551615 | 8bytes |

## modifying double

|    Type     |  Sign  |            Range             |   Size   |
| :---------: | :----: | :--------------------------: | :------: |
|   double    | signed | 2.22507e-308<br>1.79769e+308 |  4bytes  |
| long double | signed |     10e-307<br>10 e+308      | 12 bytes |

## modifying char


| Type |        Sign        |         Range         | Size(Bytes) |
| :--: | :----------------: | :-------------------: | :---------: |
| char | signed<br>unsigned | -127,,,127<br>0,,,255 |      1      |

---

```c++

//to modifie a variable there is a structure of how to define the variable
// [Sign] [Size] [Type] [Variable_Name] = [Value];

signed long int value_1;
```
