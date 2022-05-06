---
title: "Exercise 2"
layout: default
parent: Intro to Python
parent_path: /python/crash-course/
---
## Problem 1

Data structures help organize information to be easy and efficient to access. Good software design is built around efficient data structures. Using Python's native data structures (*list, tuple, dict*), we can create nested data structures to organize more complex datasets.

Let's say we collect the monthly kWh consumption of five residential households. We can store the consumption data in a dictionary. By accessing elements of that dictionary, answer the following questions:

1. What was the total kWh, of all 5 households, in June?
2. What was the total kWh in December?
3. What is Barbara's annual kWh consumption?
4. Which participant had the highest annual kWh consumption?


```
# monthly kWh consumption

barbara_kwh = [144,	132,	159,	137,	167,	165,	168,	146,	166,	191,	150,	197]
patrick_kwh = [137,	178,	146,	185,	199,	122,	132,	156,	176,	167]
claire_kwh = [147,	120,	161,	154,	183,	185,	167,	162,	166,	156]
josh_kwh = [199,	152,	128,	138,	139,	194,	171,	184,	160,	200]
ana_kwh = [157,	135,	131,	122,	160,	163,	195,	146,	186,	149]


# create dictionary of everyone's consumption

d = {"Barbara": barbara_kwh,
	 "Patrick": patrick_kwh,
	 "Claire": claire_kwh,
	 "Josh": josh_kwh,
	 "Ana": ana_kwh
	}

#####
# YOUR CODE HERE
#####


```
