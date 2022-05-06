---
layout: default
title:  "Python Objects"
parent: Intro to Python
parent_path: /python/crash-course/
---

The most basic function of a computer program is to store variables in memory, and access those same variables later on in the program. Your Python session uses your computer's Random Access Memory. RAM is very efficient with read and write times, which makes it the ideal candidate for storing program data.

Computer memory stores binary information (though quantum computing may soon change this!). One unit of binary information is a bit. A bit can take on two values, 1 and 0. A two-bit number has 4 possible values (`2*2`). An eight-bit number has 256 possible values `2^8`.

ASCII was developed as a 7 bit standard to represent a standard set of characters. There are [128 total ASCII characters](http://www.asciitable.com/) `(2^7)`. Bits are measured in groups of eight (one byte is eight bits), which means that one **byte** can represent the entire ASCII character set.

That means we can save a five-character string in five bytes of memory. If we store the value `BACON` in the variable `food`, the program first allocates 5 bytes to store the characters in the string `BACON`. Maybe the computer allocates the thousandth byte to B, the next byte to A, and so on.

![Bacon](https://github.com/bdjohnson529/Intro-To-Python/blob/master/src/images/bacon.png "Bacon")

The program needs to associate the variable `food` with the 1000th byte in memory. Otherwise, bytes 1000 - 1004 will be occupied, but the computer will not know where to look! In the `food` variable itself, Python stores the location of the bytes in memory. The variable `food` is just a reference to the 1000th byte! When you ask the program to retrieve the value of the variable `food`, the program looks up the address where the value is stored, and then reads the bytes at that address.

## Types and Casting

Python variables can assume different types. The three most basic types of variables are:

* ints
* floats
* strings

Integers are whole numbers with no decimal. Floats are real numbers and can contain decimals. Strings are collections of characters.

Python has a function `type()` which will return the type of a variable. The `type()` function is especially useful when debugging. Different types of variables have different properties, and once you know the type of a variable you can call its built in functions. Try typing the following commands into your Python session.

```
type(1)
type(1.0)
type('a')
```

If you want to change the type of a variable, you can **cast** it as a different type. For example, if we want to cast a *float* as an *int*, we can execute the following commands:

```
a = int(4.5)
print(type(a))
```

We can also cast a *string* as an *int*, provided that the string contains only numbers. Try the following:

```
a = '123'
b = int(a)

print(type(a))
print(type(b))
```

As you might expect, we cannot cast letters to an *int*. Try it, and see what you get!

## String Operations

One of the core features of any programming language is the ability to perform computations. Python of course is capable of performing numeric calculations, including addition, subtraction, multiplication and division. Python also is capable of performing several operations on strings.

Python strings can be concatenated using the `+` operator. Strings can also be constructed using the `*` operator. This will be especially useful when constructing large strings!

```
fullName = 'Ben' + ' ' + 'Johnson'
repeated = fullName * 20

print(fullName)
print(repeated)
```

We can also select a smaller part of a string, which is called **slicing**. To select the first character of a string, use `x[0]`. **Yes, Python starts counting at zero.** To select the last letter of the string, use `x[-1]`. This notation is a key part of the Python language, and will keep surfacing as a way to slice variables and objects. What do you get when you execute the following code? 

```
food = 'chicken'
x = food[-2]

print(x)
```

To select a middle set of characters, you can use a colon to separate the *starting index* and the *stopping index*. If I type `food[2:8]`, I will get five characters in the middle of the string.

**Why is this useful?** Lots of data engineering revolves around *data cleaning*. Let's say you recieve a list of customer addresses, containing street, city and state. You want to count how many customers are in each state. Great news! Thanks to the string slicing you learned in your Python course, now you can select the last two characters of each string.

```
111 EASY STREET, NASHVILLE TN
222 BROKEN DREAMS BLVD, LOS ANGELES, CA
333 SHAKEDOWN ST, OAKLAND, CA
```
## Storing Variables



Let's do an experiment. How many bytes is a single character, versus an integer, versus a float?

```
import sys

sys.getsizeof('a')
sys.getsizeof(1)
sys.getsizeof(1.0)
```

Each variable type takes up a different amount of space in memory. The amount of space a variable consumes depends on the programming language, for example in C++, floats and ints take up only 4 bytes each. Python's variables take up slightly more space. For more information on how Python stores strings, check out [this fantastic article by Artem Golubin.](https://rushter.com/blog/python-strings-and-memory/)

While the Python interpreter is executing a Python program, it stores the values of variables in your Random Access Memory (RAM). You might have 8GB, or 16GB of RAM. Go ahead and check! In the File Explorer, right click the name of your computer and click **Properties**. The System window should open. Look for **Installed Memory (RAM)**.


## Python Interpreter

When you execute a Python command, the command is passed to the Python interpreter. The interpreter converts your Python command into another lanugage, such as C, which compiles to assembler code. Finally, your CPU reads and executes the assembler code. For more detail on the Python interpreter, the introductory pages of [these lecture notes from UCI](https://www.ics.uci.edu/~brgallar/week9_3.html) are brilliant.