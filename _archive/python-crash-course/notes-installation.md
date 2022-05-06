---
layout: default
title:  "Python Installation"
parent: Intro to Python
parent_path: /python/crash-course/
---
To get started, you will need to install to install Anaconda 3.7 on your computer. Note the most recent release of Anaconda 3.7 (2020.02) has some bugs on Windows machines. I recommend installing version 2019.10 from the [Anaconda archives](https://repo.anaconda.com/archive/). If your PC has a 64 bit processor, the installer is named `Anaconda3-2019.10-Windows-x86_64.exe`.

Verify your installation by searching for the **Anaconda Prompt** in the Start Menu. The Anaconda prompt is the Windows command prompt, loaded with the Anaconda environment. Launch the Anaconda prompt, and enter the following command.

```
python
>>> 3 + 3
```

You should see the result, as calculated by the Python interpreter, in the Anaconda Prompt window.


## Python Interpreter

Programming languages, like natural languages, each have their own syntax. Computer hardware also has its own language, written in binary. To communicate with our computer, we rely on the Python interpreter to translate the Python instructions into machine code instructions.

To see the location of the Python interpreter, which is simply a `python.exe` file, type the following command into your Anaconda Prompt.

```
where python
```

You should see a path which ends in `python.exe`. Let's use the Python interpreter to print "Hello World", and perform some simple computations. Type the following commands into the Anaconda Prompt.

```
python
>>> print("Hello World")
>>> 2 + 2
>>> 100 * 100
```

## Development Environments

We can now execute Python commands in the Anaconda Prompt. Excellent! You may be thinking, "what is a more convenient way to write Python code?" Perhaps typing code line by line into the command prompt is not really what you had in mind when you set out to learn Python.

Setting up your development environment will make it easier to write code, and will ultimately make you a happier programmer. Development environments vary from coder to coder according to preference. You will have to experiment and find what works best for you. Lean into your quirks!

Many coders use Integrated Development Environments (IDEs) to write code. The IDE packages a code editor with a Python interpreter so that you can write and execute code in the same place. As it turns out, the Spyder IDE comes installed with the Anaconda software package.

Search for the Spyder application in the Start Menu. Launch the Spyder application. Your application should resemble the picture below.

![Spyder Application](https://github.com/bdjohnson529/Intro-To-Python/blob/master/src/images/spyder.png "Spyder Application")

Code that you type into the **editor window** is executed by the intepreter, and the output is displayed in the **console window**. The most direct way to communicate with your computer program is to *print* an output to the console window. Give it a go - if you paste the following code into your **editor window** and run the file (F5), what do you see in the **console window**?

```
print("Hello World")
print(2+2)
print(100 * 100)
```