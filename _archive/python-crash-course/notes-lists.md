---
layout: default
title:  "Python Lists"
parent: Intro to Python
parent_path: /python/crash-course/
---

Storing individual values in variables is great, but how do we store entire datasets in a program's memory? Surely there has to be a better way than storing each value of the dataset in a separate variable. What if we want to access the thousandth element of the dataset? To store collections of information, programs use data structures.

Lists are the most basic type of data structure. **List manipulation is one of Python's strong suits.** Lists can be collections of integers, floats, or strings. It turns out, lists can be used to store any object. The syntax remains the same when constructing a list of floats, `[1.0, 2.0, 3.0]`, a list of integers, `[1, 2, 3]`, or a list of strings `['a', 'b', 'c']`.


```
shoppingList = ['apples', 'bananas', 'oranges']
```

Basic arithmetic operators can be used to manipulate lists. If you want to add two lists together, use the `+` operator. To repeat a list twice, use the `*` operator. Try it! What happens when you multiply `shoppingList` by 2?

A list is essentially a one-dimensional array. Let's say you collect your monthly energy bills over the past month. To store your monthly energy consumption over the past 12 months, we could use a list.

```
monthly_kwh = [144,	132,	159,	137,	167,	165,	168,	146,	166,	191,	150,	197]
```

Lists are more efficient in memory than the sum of of their components. An int consumes 28 bytes in memory. Verify this in your Python console by running `sys.getsizeof(1)`. Five integers consume `28*5 = 140` bytes in memory.

**However, a list of 5 integers consumes less than 140 bytes.** See for yourself! In the Python console, create a list of five integers, `myList = [1,1,1,1,1]`. Find the size of this list, using `sys.getsizeof(myList)`.

How is this possible? As it turns out, each variable, or *object*, has some overhead information which is stored along with the value. There are also instructions which tell the Python interpreter how to interact with the object. The structural information is stored separately from the value.

![Variable Allocation](images/variable.png "Varible Allocation")

Within the list, Python stores **only one** set of the object's structural information. If a list contains 5 integers, the list only contains one set of structural information for the *integer* object. Each integer in the list can reference the common set of structural information in the list object. This explains why lists are more memory efficient.

![List Allocation](images/list_allocation.png "List Allocation")

Don't take my word for it! Find the size of a list with one integer, two integers, and three integers, and compare them to the size of individual integer object (28 bytes, as we found above). How much does the size increment with each additional integer?


```
import sys

myList = [1]
print(sys.getsizeof(myList))

myList.append(1)
print(sys.getsizeof(myList))
```

## Tuples

Tuples are Python's immutable version of lists. Like lists, tuples can be constructed from floats, integers, strings, or other objects.Tuples share a lot of syntax with lists, and are constructed using parenthesis. To construct a tuple of integers : `(1,2,3,4,5)`.


Whereas lists can be modified, tuples cannot. The functions `append()` and `remove()` do not work with tuples. Once a tuple is created, its value cannot be changed.