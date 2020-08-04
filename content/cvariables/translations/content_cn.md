# 变量

## 课程

> section: lesson
> id: lesson

---

### 介绍变量

> id:introductiontovariables

The _{code}"Hello World!"_ program simply writes to the screen. It does not read anything, calculate anything, or allow for user input. That’s no fun!

Real programs tend to produce results based on some input that the user of the program gives, rather than just outputting the same thing every time.

To read something from the keyboard, we first need somewhere in the computer’s memory to store data. That is where variables come in.

A **variable** is simply a name that represents a particular piece of your computer’s memory that has been set aside for you to store, retrieve, and use data.

In this lesson, we will learn about some of the basic data types:

- int: integer numbers
  
- double: floating-point numbers
  
- char: individual characters

- string: a sequence of characters
  
- bool: true/false values

Every variable has a **type**, which represents the kind of information you can store inside of it. It tells your compiler how much memory to set aside for the variable, and it defines what you can do with the variable.


##### 使用说明

Click Next to continue.

::: column(width=1000)
    x-img(src="images/datatypes.gif" width=1000 height=880)
:::

_{button.next-step} Continue_ 

---

### Step 1: Declare a Variable

> id:declareavariable


```c++
"Every variable in C++ must be declared before it can be used!"
```

Suppose we are building a game and we want to keep track of a player’s score that goes from 0 to 10. We need a variable!

Before we can use a variable, we must declare, or create, it. To declare a variable, we need to provide two things:

- A type for the variable.

- A name for the variable.

So to declare an integer variable called score, we need to write:

```c++
int score;
```

- The _{code}int_ is the type of the variable.

- The _{code}score_ is the name of the variable.

- The _{code};_ is how we end a statement.

In C++, variable names consist only of upper/lower case letters, digits, and/or underscores.

**Note**: C++ is known as a strongly typed language. If you try to give an integer value a decimal number, you are going to get unexpected results, warnings, or errors.

##### 使用说明

_{input#declareavariable(type="checkbox" disabled="disabled")}_ 1.Inside the variable.cpp file, declare an int variable named year.

_{input#declareavariable(type="checkbox" disabled="disabled")}_ 2.Type the following commands in the terminal and press _{code}enter_:

Compile:

```c++
g++ variable.cpp
```

Execute:

```c++
./a.out
```

This checkpoint will pass after you execute.

    div#ide
        pre.initcode
            include codes/declareavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

> id:initializeavariable

### Step 2: Initialize a Variable

After we declare a variable, we can give it a value!

Suppose that we have declared an _{code}int_ variable called _{code}score_ , to set it to 0, we can simply write:

```c++
score = 0;
```

The _{code}score_ is the name of the variable.

The _{code}=_ indicates assignment.

The _{code}0_ is the value you want to store inside the variable.

**Note**: In C++, a single equal sign = does not really mean “equal”. It means “assign”. In the code above, we are assigning the score variable a value of 0.

##### 使用说明

_{input#initializeavariable(type="checkbox" disabled="disabled")}_  1.Inside the **variable.cpp** file, you have declared an _{code}int_ variable named _{code}year_ .

Let’s give the variable a value of 2019.

_{input#initializeavariable(type="checkbox" disabled="disabled")}_  2.Type the following commands in the terminal and press _{code}enter_:

Compile:

```c++
g++ variable.cpp
```

Execute:

```c++
./a.out
```

    div#ide
        pre.initcode
            include codes/initializeavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---


### Combining Step 1 and Step 2

> id:combiningstep1andstep2

We can both declare and assign a value to a variable in a single initialization statement.

Suppose we have these two lines:

```c++
// Declare a variable
int score;

// Initialize a variable
score = 0;
```

We can actually combine these two lines into a single line of code:

```c++
int score = 0;
```

This means we are declaring an integer called _{code}score_ and setting it equal to 0.

::: column(width=600)
    x-img(src="images/combiningstep1andstep2.png" width=600 height=340)
:::

**Note**: We only need to declare a variable one time! And it is highly suggested to initialize a variable before using it later.

##### 使用说明

_{input#combiningstep1andstep2(type="checkbox" disabled="disabled")}_  1.In your program, declare and initialize an _{code}int_ variable named _{code}year_ and initialize its value as 2019.

Let’s give the variable a value of 2019.

_{input#combiningstep1andstep2(type="checkbox" disabled="disabled")}_  2.Type the following commands in the terminal and press _{code}enter_:

Compile:

```c++
g++ variable.cpp
```

Execute:

```c++
./a.out
```

    div#ide
        pre.initcode
            include codes/combiningstep1andstep2.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### Arithmetic Operators

> id:arithmeticoperators

Computers are incredible at doing calculations. Now that we have declared variables, let’s use them with arithmetic operators to calculate things!

Here are some arithmetic operators:

- _{code}+_ addition
  
- _{code}-_ subtraction
  
- _{code}*_ multiplication
  
- _{code}/_ division
  
- _{code}%_ modulo (divides and gives the remainder)
  
For example:

```c++
int score = 0;
// score is 0

score = 4 + 2;
// it is now 6

score = 4 - 2;
// it is now 2

score = 4 * 2;
// it is now 8

score = 4 / 2;
// and now 2

score = 5 % 2;
// and now 1
```

**Note**: The order of operations can be specified using parentheses. For example, the use of parentheses in _{code}score = 5 * (4 + 3)_ sets _{code}score_ equal to _{code}5 * 7_ rather than _{code}20 + 3_.

##### 使用说明

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 1.In **math.cpp,** we have already declared and initialized a variable called _{code}score_ for you.

Let’s change its value by giving it the value of 1234 multiplied by 99.

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.But how would we know what that value is?

You can output the value by simply adding this code underneath:

```c++
std::cout << score << "\n";
```

Notice how when we want to output a variable, we don’t add double quotes around its name.

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 3.Compile and execute your program using the terminal.

    div#ide
        pre.initcode
            include codes/arithmeticoperators.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### Chaining

> id:chaining

Now that we have outputted a variable and have also outputted things using multiple  _{code}couts_ . Let’s take a closer look at  _{code}cout_ again.

If we have the code below:

```c++
int age = 28;

std::cout << "Hello, I am ";
std::cout << age;
std::cout << " years old\n";
```

It will output:

```c++
Hello, I am 28 years old
```

Notice how we use quotes around the characters in  _{code}"Hello, I am "_  but not in  _{code}age_ .

We use quotes when we want a literal string.

We don’t use quotes when we refer to the value of something with a name (like a variable).

So now, is it possible to write the  _{code}cout_ statements within a single line?

Yep! You can use multiple  _{code}<<_ operators to chain the things you want to output.

For the same code above you can also do:

```c++
int age = 28;

std::cout << "Hello, I am " << age << " years old\n";
```

This is called chaining.

使用说明

_{input#chaining(type="checkbox" disabled="disabled")}_ 1.Inside **game.cpp**, we have declared and initialized an  _{code}int_ variable called  _{code}score_.

Now output the following using chaining:

```c++
Player score: [score]
```

where _{code}[score]_ should be the value of the variable _{code}score_ .

Make sure to add a new line after!

Checkpoint 2 Passed

_{input#chaining(type="checkbox" disabled="disabled")}_ 2.Compile and execute your program using the terminal.

    div#ide
        pre.initcode
            include codes/combiningstep1andstep2.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### User Input

> id:userinput

Like we mentioned in the introduction, another way to assign a value to a variable is through user input. A lot of times, we want the user of the program to enter information for the program.

We have _{code}cout_ for output, and there is something called _{code}cin_ that’s used for input!

```c++
std::cout << "Enter your password: ";
std::cin >> password;
```

The name _{code}cin_ refers to the standard input stream (pronounced “see-in”, for character input). The second operand of the _{code}>>_ operator (“get from”) specifies where that input goes.

To see how it works, we have to try it with a program.

##### 使用说明
_{input#userinput(type="checkbox" disabled="disabled")}_ 1.Add the following code:

```c++
std::cin >> tip;
```

So that the user of the program can enter something with their keyboard and what they enter gets saved in the _{code}int_ variable named _{code}tip_ .

_{input#userinput(type="checkbox" disabled="disabled")}_ 2.Let’s output the following using chaining:

```c++
You paid [tip] dollars.
```

where the _{code}[tip]_ should be the value of the variable _{code}tip_.

Make sure to add a new line to the end of the output.

_{input#userinput(type="checkbox" disabled="disabled")}_ 3.Compile and execute your program using the terminal.

Your terminal then should look something like:

```c++
$ g++ tip.cpp
$ ./a.out
Enter a tip amount: 
```

Type a number in the terminal and press _{}enter_ .

    div#ide
        pre.initcode
            include codes/userinput.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### Challenge: Temperature (Part 1)

> id:challengetemperature1

Now that we’ve learned about the basics of variables and _{code}cin_ , let’s write a program!

The mad scientist Kelvin has mastered predicting the weather in his mountain-side meteorology lab.

Recently, Kelvin began publishing his weather forecasts on his website, however, there’s a problem: All of his forecasts describe the temperature in Fahrenheit degrees.

Let’s convert a temperature from Fahrenheit (F) to Celsius (C).

The formula is the following:

C=(F−32)/1.8

##### 使用说明

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  1.First, google the current temperature of New York in Fahrenheit.

Declare a _{code}double_ variable named _{code}tempf_ and initialize it with the temperature.

Declare another _{code}double_ variable named _{code}tempc_ .

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  2.Calculate the temperature to Celsius.

Store it in  _{code}tempc_ .

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  3.Display the result.

Output exactly this:

```c++
The temp is [tempc] degrees Celsius.
```

Don’t forget to add a _{code}\n_ .

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  4.Compile and execute the program using the terminal.

Your terminal then should look something like:

    div#ide
        pre.initcode
            include codes/challengetemperature1.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### Challenge: Temperature (Part 2)

> id:challengetemperature2

Let’s go back to the temperature.cpp that we wrote. This time, instead of giving _{code}tempf_ a value of the current temperature in New York:

```c++
tempf = 83;
```

Let’s ask the user what the temperature is using _{code}cin_ !

##### 使用说明

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 1.Tell the user “Enter the temperature in Fahrenheit: “ using _{code}std::cout_ .

And get their input using _{code}std::cin_ and store it in _{code}tempf_.

Checkpoint 2 Passed

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 2.Compile and execute your program using the terminal.

    div#ide
        pre.initcode
            include codes/challengetemperature2.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### Review

> id:review

You made it to the end of the lesson! High five. 🙌

Here is a review of the lesson:

- A variable represents a particular piece of your computer’s memory that has been set aside for you to use to store, retrieve, and manipulate data.

- C++ basic data types include:
  
_{code}int_ : integers

_{code}double_ : floating-point numbers

_{code}char_ : individual characters

_{code}string_ : sequence of characters

_{code}bool_ : true/false

- Single equal sign _{code}=_ indicates assignment, not equality in the mathematical sense.

- _{code}cin_ is how to receive input from the user.

##### 使用说明

_{input#review(type="checkbox" disabled="disabled")}_ 1.Optional: The body mass index (BMI) is commonly used by health and nutrition professionals to estimate human body fat in populations.

It is computed by taking the individual’s weight in kilograms (kg) and dividing it by the square of their height in meters (`m^2`):

bmi= `weight/(height^2)`

Complete the **bmi.cpp** program.

(You can also just run the code as is to move on.)

    div#ide
        pre.initcode
            include codes/review.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")
