# 变量

## 课程

> section: lesson
> id: lesson

---

### 介绍变量

> id:introductiontovariables

相信小伙伴们都见过这句话吧：_{code}"Hello World!"_ ，它的中文是“你好，世界”。它呢，只是一句展示的话，没有让我们输入，也没有做什么计算。这样似乎感觉没什么意思，有没有？我也想展示我想输入的内容，也想计算1+1等于多少？

而在我们的计算机世界中，你也不想一直看到“Hello World”吧，计算机，它是会自己做一些计算的。或者说，我们想要什么结果，通过输入某些数据就可以计算得到。

计算机是如何存储数据的呢，我们的一张美美的照片，一篇优美的文章word，甚至我们会玩的“我的世界”，都是在占用我们的存储空间的，就是我们会谈到的“硬盘”。

我们在打字的时候，计算机要读取我们输入的数据，存到哪里呢，就是存到我们说到的存储空间里，它会找到一块位置，就像我们的家园，占用了一块土地，这就是我们的家，于是就要引出我们这次的主题了——“**变量**”。

**变量**，我们听着似乎很陌生，又感觉理解了它，从我们的理解，感觉到它是会变的，没错，它确实是会变的，但是它有自己的名字，就像我们的家，有固定的地址一样，这个是不会变的。

有自己的名字（地址），就意味着我有了自己的土地，可以种菜，可以玩耍，这就要看我们想干什么了。

在接下来的课程中，我们先学习一些C++的基本数据类型，如下所示：

- int：整数
  
- double：浮点数
  
- char：单个字符

- string：字符序列
  
- bool：正确/错误值

我们可以看到，我们的变量呢，有很多**类型**：有的可以存数字，有的可以存字母，有的可以存一句话，有的还可以判断是不是正确的。它主要告诉我们，我们需要多大的土地，并且这片土地你可以用来干嘛。

##### 使用说明

观看下图，老师为你们做了一个小总结：

::: column(width=1000)
    x-img(src="images/datatypes.gif" width=1000 height=880)
:::

看完就可以点击下一步啦~

_{button.next-step} Continue_ 

---

### 步骤 1: 声明一个变量

> id:declareavariable


```c++
"Every variable in C++ must be declared before it can be used!"
```

假设我们正在开发一款游戏，并且希望时刻能够知道玩家得了多少分，得分从0到10。那么此时就需要一个变量去保存它！

我们要使用变量，那肯定就要先声明或创建它，不然没法使用的。 要声明变量，我们需要做两件事：

- 变量的种类。

- 变量的名称。

通常来说，我们说分数是整数的吧，比如说1分，2分，3分，10分，100分。那么此时此刻，我们也需要给分数声明一个这样的整数变量，我们可以这样写（如下框所示）：

```c++
int score;
```

- _{code}int_ 是变量的类型。

- _{code}score_ 是变量的名称。

- _{code};_ 是我们结束语句的方式。
- 
要注意，在C++中，变量名只能是：字母，数字、下划线。

**注意**：C++被称为强类型语言。如果您一定要给整数类型赋值一个只有一串数字，您可能会得到一个警告，或者错误的提示。

##### 使用说明

_{input#declareavariable(type="checkbox" disabled="disabled")}_ 1.在variable.cpp文件中，声明一个名字为year的int变量。

_{input#declareavariable(type="checkbox" disabled="disabled")}_ 2.当你输入完成上面的要求后，在终端（黑窗口），输入下面的命令，然后按一下 _{code}enter_ 键:

编译:

```c++
g++ variable.cpp
```

执行:

```c++
./a.out
```


当你执行完成时，那么恭喜你，你的程序就没有错误了。

    include codes/declareavariable.cpp

    div#ide
        pre.initcode
            include codes/declareavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

> id:initializeavariable

### 步骤 2: 初始化变量

我们既然声明了一个变量，那么我们就可以给它赋一个值了！

假设我们声明了一个名为 _{code}score_ ，类型为 _{code}int_ 的变量，并将它的值设置为0，我们可以这样简单的写：

```c++
score = 0;
```

_{code}score_ 是变量的名称。

_{code}=_ 表示分配，或者说是给变量赋值。

_{code}0_ 是要存储在变量中的值，也就是变量的值。

**注意**：在C++中，一个等号 = 并不表示 “等于” 。 它的意思是“分配”或者说“赋值”。 在上面的代码中，我们为score变量分配了“0”值。

##### 使用说明

_{input#initializeavariable(type="checkbox" disabled="disabled")}_ 1.在 **variable.cpp** 文件中，您声明了一个名为 _{code}year_ 的 _{code}int_ 变量。

现在我们需要将它的值变成2020。

_{input#initializeavariable(type="checkbox" disabled="disabled")}_  2.当你输入完成上面的要求后，在终端（黑窗口），输入下面的命令，然后按一下 _{code}enter_ 键:

编译:

```c++
g++ variable.cpp
```

执行:

```c++
./a.out
```

    div#ide
        pre.initcode
            include codes/initializeavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---


### 结合步骤1和步骤2

> id:combiningstep1andstep2

我们可以在单个初始化语句中，声明一个变量，并为这个变量赋值。

假设我们有这两行：

```c++
// Declare a variable
int score;

// Initialize a variable
score = 0;
```

实际上，我们可以将这两行合并为一行代码，如下所示：

```c++
int score = 0;
```

这个意思就是说，我们要声明一个名为 _{code}score_ 的整数变量，并且将它的值设置为0。

::: column(width=600)
    x-img(src="images/combiningstep1andstep2.png" width=600 height=340)
:::

**注意**：我们只需要声明一次变量就可以啦！ 强烈建议先初始化变量，然后我们再去使用它。

##### 使用说明

_{input#combiningstep1andstep2(type="checkbox" disabled="disabled")}_  1.在你的程序中，请声明一个变量，并且初始化它，要求名为 _{code}year_ ，类型是 _{code}int_ ，并将它的值，初始化为2020。

现在我们需要将它的值变成2020。

_{input#combiningstep1andstep2(type="checkbox" disabled="disabled")}_  2.当你输入完成上面的要求后，在终端（黑窗口），输入下面的命令，然后按一下 _{code}enter_ 键:

编译:

```c++
g++ variable.cpp
```

执行:

```c++
./a.out
```

    div#ide
        pre.initcode
            include codes/combiningstep1andstep2.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

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
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")
