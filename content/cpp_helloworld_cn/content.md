# Hello，world

## 认识C++

> id: introductiontocpp
> section: introductiontocpp

1979年，[Bjarne Stroustrup](bio:bjarne)博士到了贝尔实验室，开始从事将C语言改良为带类的C（C with classes）的工作。

::: column(width=700)
    x-img(src="images/bjarne.gif" width=700 height=500)
:::

1983年，该语言正式命名为C++。现在，C++已经是世界上使用最广泛的编程语言之一。
使用C++语言编写的软件无处不在，从海洋的底部到火星的表面，都有使用C++语言编写的程序。

C++这个词在中国程序员圈子通常被读做“[[C加加|C减减]]”，而西方的程序员通常读做“C plus plus”。

C++是C语言的继承，它既可以进行C语言的过程化程序设计，又可以进行以抽象数据类型为特点的基于对象的程序设计，还可以进行以继承和多态为特点的面向对象的程序设计。

听起来很抽象？让我们忽略这些，点击【Continue】，看看C++语言能做什么？

_{button.next-step} Continue_ 


---
### C++语言能做什么？
> id: introductiontocpp1

::: column.grow

如果程序员是战场上的士兵，用编程语言作为武器参加战争，那么C++会是什么武器呢？

C++是一款功能齐全的武器，很像瑞士军刀，而且是其中的巨人军刀。

这把刀什么都有，能够应付各种情况，高性能且灵活。

但是过多的工具，也意味着操作更为复杂。

::: column(width=210)
    x-img(src="images/knife.jpg" width=210 height=210)
{.caption} 瑞士巨人军刀
:::

_{button.next-step} Continue_ 


---

> id: introductiontocpp2 

如今，使用C++语言编写的软件，应用在我们生活的每个角落。




::: column(width=210)
    x-img(src="images/operation.jpg" width=210 height=90)
{.caption} **操作系统**如Windows，MacOS，Andriod的编写都有用到C++。

::: column(width=210)
    x-img(src="images/office.jpg" width=210 height=90)
{.caption} 常用的**办公软件**和桌面应用是由C++语言编写的。

::: column(width=210)
    x-img(src="images/browser.jpg" width=210 height=90)
{.caption} 主流**浏览器**的内核和界面也是C++编写的。

::: column(width=210)
    x-img(src="images/moshougame.jpg" width=210 height=130)
{.caption} 80%的 __网络游戏__ 引擎都由C++语言开发。


::: column(width=210)
    x-img(src="images/vr.jpg" width=210 height=130)
{.caption} c++再**虚拟现实**这一技术中同样扮演着重要的角色。


::: column(width=210)
    x-img(src="images/ai.jpg" width=210 height=130)
{.caption} 大名鼎鼎的AlphaGo，**人工智能**背后的算法也用到C++。

:::



除此之外，软件工程师常用的集成开发环境，编译器；主流的数据库软件，多媒体技术中用到的媒体播放器，Photoshop等软件中，都能看到C++的身影。

虽然C++语言可以从事的方向非常广泛，但是仅仅掌握C++语法是远远不够的，进入这些领域还需要进一步深入学习相关领域的专业知识。

千里之行，始于足下！



---
## 第一个C++程序

> id: first
> section: first

::: column.grow

现在，让我们开始尝试运行第一个C++程序吧！

先来认识下编写代码的工具。屏幕下方黑色窗口就是我们要用到的代码编辑器，左侧用来书写代码，右侧用来显示运行结果。

::: column(width=350)

    x-img(src="images/helloworld2.jpg" width=300 height=140)

:::


_{input#exercise1(type="checkbox" disabled="disabled")}_ 点击蓝色按钮【Run】，看看会出现什么结果？🧐

    div#ide
        pre.initcode
            include codes/helloworld.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")

程序的运行结果是[[Hello, world!|Hello,world!\n]]

_{button.next-step} Continue_ 


---
#### C++程序基本结构
> id: structure

在我们的代码编辑器中，文件名通常都在上方，如“main.cpp"。代码文件通常也叫做**源文件**，以"[[.cpp|.c]]"作为文件的扩展名。cpp就是“C Plus Plus”的意思。

就代码的编写方式而言，C++程序具有非常特定的结构，我们刚刚运行的第一个C++程序就包含这些特定的部分。

::: column(width=600)

    x-img(src="images/programstructure.png" width=600 height=400)
{.caption} C++程序的基本结构

:::

- **头文件** 

```c++
#include &ltiostream>  
```
将头文件“iostream”中的内容包含程序中，“iostream”是C++系统定义的一个头文件，其中设置了C++的输入输出环境。
有了这个头文件，我们就可以使用输入输出功能了。

- **命名空间** 

```c++
using namespace std;
```

为了避免命名冲突而引入的。“std”是“standard”的缩写，是C++自带的一个标准命名空间，由它定义了C++的库标识符。

- **主函数** 

```c++
int main()
{ 
    //... 
    return 0;
} 
```
main()函数是程序的主要部分，也是程序的入口，主函数的{ }内书写我们要实现的代码。需要注意的是，主函数只能有[[1个|2个|任意个]]！
像大多数编程语言一样，C++的代码从主函数开始，从上到下逐行执行。

return语句用于结束函数。 如果程序到达此语句，则向操作系统返回0值，指示代码已成功执行，这行代码是可选的。

- **注释**  

我们在编写程序时，为了让其他人更加轻松的理解代码，提高代码的可读性，需要对代码加入一些解释和说明。计算机在运行程序时，会对注释视而不见。

编写C++程序时，有两种注释方式：

1.单行注释：以//开头，一般标注在相应的代码上方，用来解释某一行或某一部分代码的含义。

```c++
#include<iostream>
using namespace std;

int main(){

    //print message
    cout<<"Hi, my name is Kamo!";

}
```

2.多行注释：以`/*`开头，`*/`结尾，一般标注在代码最开始，说明该程序的作用，作者，时间，版本等信息。

```c++
/*
描述：简单的输出功能
作者：卡小墨
日期：2020年8月16日
*/
#include &ltiostream>
using namespace std;

int main(){
    cout<<"Hi, my name is Kamo!";
    return 0;
}
```



---
## 输出语句

> id: output
> section: output

恭喜你，刚刚运行了第一个程序！👏

现在，让我们把重点放在cout输出语句上。

```c++
cout<<"Hello World!\n";
```

- **cout** ：是由一个c字符和out组合而成，读作“c-out"，表示输出功能。
- **<<** ：插入操作符，后面跟随要输出的内容。
- **"Hello World!"** ：要输出的内容。
- **\n** : 是一个换行符，即移动到下一行。
- **;**  : 分号，表示语句的结束，好比我们书写句子的句号。

_{button.next-step} Continue_ 


---
### 练习

> id: practice

_{input#exercise2(type="checkbox" disabled="disabled")}_ 在主函数{ }内编写输出语句，显示“I love C++ programing!"。


    div#ide
        pre.initcode
            include codes/output.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")


**提示**

在语句的结尾，不要忘了分号；

以下是程序的参考示例

```c++
#include &ltiostream>
using namespace std;
int main() {

    cout << "I love C++ programing!";
    return 0;

}
```

点击【run】，程序运行结果如下：

```c++
I love C++ programing!
```

_{button.next-step} Continue_ 

---
### 输出多行文本
> id: multiyline


我们已经学习了如何输出一行代码，如下面这行代码：

```c++
cout << "***\n";
```

运行结果: 输出一行共3个星号。

```c++
***
```

通过书写多条cout语句，我们可以显示多行文本，比如下面这段代码：

```c++
cout << "*\n";
cout << "**\n";
cout << "***\n";
```

运行结果：输出[[三行|一行|两行]]星号，排列成一个直角三角形的造型。

```c++
*
**
***
```

_{input#exercise3(type="checkbox" disabled="disabled")}_ 点击【Run】，查看运行结果。


    div#ide
        pre.initcode
            include codes/righttriangle.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")



现在，让我们来尝试完成接下来的挑战吧！😎

---
## 挑战1：三角形

> id: challenge_triangle
> section: challenge_triangle

**说明**

_{input#exercise4(type="checkbox" disabled="disabled")}_  编辑代码，输出如下所示的等腰三角形:

```c++
  *
 ***
*****
```

    div#ide
        pre.initcode
            include codes/triangle.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")

**提示**

我们可以使用多条cout语句来输出多行文本。

代码的执行顺序是从上到下逐行执行的。

编写前两行时注意空格的个数。


**参考示例**

```c++
#include &ltiostream>
using namespace std;

int main() {

  cout << "  *\n";
  cout << " ***\n";
  cout << "*****\n";
  
}
```

你还能想到其他的形状吗？尝试完成更多有趣的图形，如正方形，五角星等。

---
## 挑战2：姓名缩写

> id: challenge_name
> section: challenge_name

下面这段代码的运行结果是哪个英文字母？[[K|H|M]]

```c++
#include &ltiostream>
using namespace std;

int main() {

  cout << "K   K\n";
  cout << "K  K\n";
  cout << "K K\n";
  cout << "KK\n";
  cout << "K K\n";
  cout << "K  K\n";
  cout << "K   K\n";
  
}
```

_{button.next-step} Continue_ 

---
> id: challenge_name2

**挑战**：参考上面的K字母，尝试编辑代码，输出自己名字的首字母:

_{input#exercise5(type="checkbox" disabled="disabled")}_ **步骤1：** 卡小墨名字的首字母是KXM三个字母，因此设计程序输出效果如下：

```c++
K   K    X   X    M   M
K  K     X   X    MM MM
K K       X X     MM MM
KK         X      M M M
K K       X X     M   M
K  K     X   X    M   M
K   K    X   X    M   M

```
_{input#exercise5(type="checkbox" disabled="disabled")}_ **步骤2：** 设计你自己名字的首字母造型，如果不知道该如何设计，可以参考下面的图片：
注意空格的个数很重要！

    x-img(src="images/letters.png" width=400 height=1000)

_{input#exercise5(type="checkbox" disabled="disabled")}_ **步骤3：** 编写C++程序的主要结构：


```c++
#include &ltiostream>
using namespace std;

int main() {

  //编写输出语句
  
}
```
_{input#exercise5(type="checkbox" disabled="disabled")}_ **步骤4：** 编写输出语句，按照自己设计的首字母造型输出。
以下是卡小墨同学的代码，仅供参考哦！

```c++
#include &ltiostream>
using namespace std;

int main() {

  cout << "K   K    X   X    M   M\n";
  cout << "K  K     X   X    MM MM\n";
  cout << "K K       X X     MM MM\n";
  cout << "KK         X      M M M\n";
  cout << "K K       X X     M   M\n";
  cout << "K  K     X   X    M   M\n";
  cout << "K   K    X   X    M   M\n";
  
}
```
_{input#exercise5(type="checkbox" disabled="disabled")}_ **步骤5：** 点击【Run】，运行程序，查看程序结果。


    div#ide
        pre.initcode
            include codes/name.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")


---
## 小结
> id: review
> section: review

太棒了，你已经完成了第1课的学习！ 🙌

让我们看看都学习了哪些内容：

就代码的编写方式而言，C ++程序具有非常特定的结构。 在这里，我们有一个名为hello.cpp的程序。 这是非常经典的第一个程序！

```c++
#include <iostream>
using namespace std;
int main() {

    // This program outputs the message "Hello World!" to the monitor
    cout << "Hello World!\n";
    return 0;

}
```

执行这段程序，将显示“Hello, world！”这条信息。

C++是区分大小写的语言。 区分大小写意味着我们编写的代码必须匹配大小写。 例如，C++中用于输出的关键字是cout。 如果要键入Cout或COUT，则编译器将不会知道您打算使用关键字cout，会提示错误信息。

接下来，让我们逐行仔细看一下Hello World程序！


```c++
#include <iostream>
```

这行代码称为预处理器指令。 它指示编译器查找包含用于iostream库的代码文件。 该库包含允许输入和输出的代码，例如在运行结果窗口中显示数据或从键盘读取输入。

```c++
int main() {
  // Statements
}
```
每个C++程序都必须具有一个main()函数。这个main()函数包含我们程序的所有指令，也是我们程序执行的入口。

```c++
cout <<“ Hello World！\ n”;
```

该代码使用cout发送文本信息“ Hello World！”。 

```c++
return 0;
```
return语句用于结束函数。 如果程序到达此语句，则返回0值是向操作系统指示代码已成功执行，这行代码是可选的。

C++程序允许使用空格（制表符，空格，换行符）来帮助我们书写代码。 编译器完全忽略这些多余的符号，但也有一些例外，我们会在以后的课程再进行说明。 强烈建议您使用空格来缩进和分隔代码，以提高源代码文件的可读性。

```c++
// This program outputs the message "Hello World!" to the monitor
```
这是一条单行注释，帮助我们更好地理解代码的含义，编译器会忽略这行代码。


---
## 给未来的自己

> id: letter
> section: letter


在进行后续课程的学习之前，让我们先给未来的自己写一封信。
信的内容将存储在源文件 **letter.cpp**中，内容可包含以下两个方面：

- 学习心愿。
- 姓名和日期。


_{input#exercise6(type="checkbox" disabled="disabled")}_ 点击 【Run】 发送这封信 📬

    div#ide
        pre.initcode
            include codes/letter.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 600px; border: none;")


P.S. 在你完成这门课的学习后，你将收到这封信。


**提示**

编程的学习有时候可能不如你想象中简单，但是像所有其他事情一样，你所需要的是一点耐心和韧性。

这封信没有正确答案。

参考示例：

```c++
#include &ltiostream>

int main() {

  cout << "亲爱的自己,\n";
  cout << "创造一款VR游戏。\n";
  cout << "2020年8月11日，卡小墨\n";

}
```

---
## 测试
> id: test
> section: test

1.完善如下程序，使程序能够正确输出。
```c++
#include &ltiostream>

int main() {

  【1】 << "Hello, world!\n";

}
```
【1】内应填入的正确内容[[cout|cin|//]]。

2.以下程序的正确输出：

```c++
#include &ltiostream>

int main() {

  cout << "你好, 世界!\n";

}
```
输出结果：[[你好，世界！| Hello, world!|你好，|你好，世界！\n]]

3.以下哪条语句在C++中是单行注释？

A. // I am a comment

B. # No I'm a comment

C. "Pick me, I am a comment"

D. cout << "This is a comment";

答案：[[A|B|C|D]]

4. C++是一个基于C语言的通用编程语言。[[正确|错误]]

5. C++程序中，主函数main的个数可以是任意的。[[错误|正确]]