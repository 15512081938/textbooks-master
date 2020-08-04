# Hello，world

## 认识C++

> id: introductiontocpp

::: column.grow

1979年，[Bjarne Stroustrup](bio:bjarne)博士到了贝尔实验室，开始从事将C语言改良为带类的C（C with classes）的工作。

1983年，该语言正式命名为C++。现在，C++已经是世界上使用最广泛的编程语言之一。使用C++语言编写的软件无处不在，从海洋的底部到火星的表面，都有使用C++语言编写的程序。

C++是C语言的继承，它既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。

C++这个词在中国程序员圈子通常被读做“C加加”，而西方的程序员通常读做“C plus plus”。

::: column(width=320)

    x-img(src="images/cppfounder.png" width=320 height=272)

{.caption} Bjarne Stroustrup


::: column.grow

### 为什么学习C++？（要不要）

- 语言简洁灵活
- 程序执行效率高
- 跨平台性，几乎所有的操作系统都支持C++

### C++语言能做什么？

- 游戏开发
80%的网络游戏引擎都由C++语言开发，如王者荣耀、星际争霸、魔兽争霸、CS、帝国时代、跑跑卡丁车、传奇、魔兽世界等等，多到数不胜数。

- 操作系统
我们常用的操作系统，如Windows，MacOS，Andriod等都有用到C++语言。

- 办公软件
相信你一定用过微软的Office吧，如Word、Excel和PPT，没错，这些软件主要就是由C++语言编写的。 

- 人工智能
大家都听过Google的AlphaGo吧，其背后也是用C++和神经网络编写的。在人工智能这个领域，C++和Python已经成为主流工具.

- 浏览器和搜索引擎
如果你喜欢使用浏览器搜索资料，当前主流浏览器的内核依然是C++编写的，甚至大多数浏览器的界面也是C++编写的。

- 虚拟现实
虚拟现实(VR)是一种可以创建和体验虚拟世界的计算机仿真系统，是利用计算机生成的一种实时动态的三维立体逼真图像，结合VR眼镜，可以在观影、游戏、旅游活动、教学等方面给人一种完美的沉浸体验。C++在这一技术中同样扮演着重要的角色。

除此之外，软件工程师常用的集成开发环境，编译器；主流的数据库软件，多媒体技术中用到的媒体播放器，Photoshop等软件中，都能看到C++的身影。
虽然C++语言可以从事的方向非常广泛，但是仅仅掌握C++语法是远远不够的，上述的应用领域C++语言是基础，进入这些领域还需要进一步深入学习相关领域的专业知识。
千里之行，始于足下！

:::

_{button.next-step} Continue_ 

---
## Hello World!

> id: helloworld

在这节课中，我们将学习编写C++的第一个程序，

Take a look at the **hello.cpp** file in the code editor that is placed in the middle of the screen. It’s a C++ program!

In our code editor, the file name is displayed at the top:

C++ programs are stored in files which usually have the file extension **.cpp**, which simply stands for “C Plus Plus”.

The code inside our C++ file is a classic first step all new programmers take — they greet the world through the terminal!

The *terminal* is the black panel on the right. It should be blank right now. The code in the text editor will print text out onto the terminal. More specifically, it will print the phrase `Hello World!`.

_{button.next-step} Continue_ 

---
> id:exericise1

Before we explain what all that mumbo jumbo is, let’s run the program to see what happens.


Press **Run** to see this program in action.



_{input#exercise1(type="checkbox" disabled="disabled")}_ What message appeared in the terminal?


    div#ide
        pre.initcode
        include codes/helloworld.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

      


---
## Output

> id: output

High five! We just got your first program to run.

C++, like most programming languages, runs line by line, from top to bottom. Here is the structure of a C++ program:


    x-img(src="images/program-structure.png" width=600 height=400)

_{button.next-step} Continue_ 

---
> id:cout

### cout

In between the curly braces is what we are going to focus on for now.

```c++
cout<<"Hello World!\n";
```

- `cout` is the “**c**haracter **out**put stream”. It is pronounced “see-out”.
- `<<` is an operator that comes right after it.
- `"Hello World!\n"` is what’s being outputted here. You need double quotes around text. The `\n` is a special character that indicates a new line.
- `;` is a punctuation that tells the computer that you are at the end of a statement. It is similar to a period in a sentence.

_{button.next-step} Continue_ 


---
> id:exericise2

_{input#exercise2(type="checkbox" disabled="disabled")}_ Let’s write the whole `cout` statement from scratch.


Inside the curly braces, type the following and press Run:

```c++
cout << "Codecademy\n";
```

What do you think this program will output?

    div#ide
        pre.initcode
            include codes/output.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


**Hint**

Don’t forget the semicolon ; at the end!

The \n (backward slash and the letter n) is a special character that indicates a new line.

Your program should look like:

```c++
#include &ltiostream>
using namespace std;
int main() {

    cout << "Codecademy\n";

}
```

The terminal should look like this after you click Run:

```c++
Codecademy
```
There is only one ‘a’ in Codecademy.

---
## Pattern

> id: pattern

We learned how to output a line of text with the following code:

```c++
std::cout << "🚙💨\n";
```

It will output:

```c++
🚙💨
```

We can also output multiple lines by adding more `std::cout` statements:

```c++
std::cout << "Hello\n";
std::cout << "Goodbye\n";
```

This will output:

```c++
Hello
Goodbye
```

Now let’s use what we learned so far to complete a coding challenge!

**Instructions**

_{input#exercise3(type="checkbox" disabled="disabled")}_ **1.** Instead of displaying those two lines in the output, edit the code so that we output the following pattern in the terminal:

```c++
       1
     2 3
   4 5 6
7 8 9 10
```

Exactly how it is.

Remember you can use the hint if you need help.

    div#ide
        pre.initcode
            include codes/output.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


**Hint**
This checkpoint requires some trial and error.

Things to remember:

We can use multiple std::cout statements to output multiple lines.
Code runs line by line (from top to bottom).
Note the spacing between the numbers.

**Answer:**

```c++
#include &ltiostream>

int main() {

  std::cout << "       1\n";
  std::cout << "     2 3\n";
  std::cout << "   4 5 6\n";
  std::cout << "7 8 9 10\n";

}
```


---
## Review

> id: review

Woohoo! You have written a few C++ programs. 🙌

In this lesson, you have learned:

- C++ is a general-purpose coding language.
- C++ runs line by line, from top to bottom.
- `std::cout` is how you output to the terminal:

```c++
std::cout << "Good luck!\n";
```

**Instructions**

_{input#exercise4(type="checkbox" disabled="disabled")}_ Before we move on, let’s write a letter to your future self.

In **letter.cpp**, let’s add the following:

- Goal(s) for yourself.
- Name and date.

Press **Run** to mail the letter! 📬

P.S. This letter will be returned when you complete the course.

    div#ide
        pre.initcode
            include codes/letter.cpp
        iframe(src="http://114.116.82.25:7000/#/ide?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

**Hint**
Programming may seem tough and intimidating, but like everything, all you need is a little patience and resilience.

Here, you are writing a letter to your future programming self.

There is no right answer!

Example:

```c++
#include &ltiostream>

int main() {

  std::cout << "Dear Self,\n";
  std::cout << "Build a VR game.\n";
  std::cout << "1/1/2020, New York\n";

}
```