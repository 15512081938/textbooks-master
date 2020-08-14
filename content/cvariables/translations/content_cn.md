# 变量

## 课程

> section: lesson
> id: lesson

---

### 介绍变量

> id: introductiontovariables


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

> id: declareavariable

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

_{input#declareavariable(type="checkbox" disabled="disabled")}_ 2.当你输入完成上面的要求后，在编辑器，输入下面的命令，然后按一下 _{code}enter_ 键:

编译:

```c++
g++ variable.cpp
```

执行:

```c++
./a.out
```

当你执行完成时，那么恭喜你，你的程序就没有错误了。

    div#ide
        pre.initcode
            include codes/declareavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 步骤 2: 初始化变量

> id: initializeavariable

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

_{input#initializeavariable(type="checkbox" disabled="disabled")}_  2.当你输入完成上面的要求后，在编辑器，输入下面的命令，然后按一下 _{code}enter_ 键:

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

> id: combiningstep1andstep2

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

_{input#combiningstep1andstep2(type="checkbox" disabled="disabled")}_  2.当你输入完成上面的要求后，在编辑器，输入下面的命令，然后按一下 _{code}enter_ 键:

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

### 算术运算符

> id: arithmeticoperators

在上几节，我们了解到，计算机如果需要存储一个变量，需要一开始的时候就要声明，对吧？

那么，它既然有了变量了，总不能攒着它，一直占内存吧，肯定会有什么用？

而我们应该知道，计算机在计算数据的方面是比人脑要快好多好多倍的。那么，我们现在就让计算机和我们的变量开始一起计算吧！

以下呢，是一些常见的算术运算符：

- _{code}+_ 加
  
- _{code}-_ 减
  
- _{code}*_ 乘
  
- _{code}/_ 除
  
- _{code}%_ 模（除并得到余数）
  
如下代码:

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

**注意**：我们可以通过添加括号来先操作某一个程序。 例如，在 _{code}score = 5 *（4 + 3）_ 中，可以使用括号将 _{code}score_ 得到 _{code}5 * 7_ 而不是 _{code} 5 * 4 + 3_ 而得到了 _{code}23_ 。

##### 使用说明

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 1.在 **math.cpp**中，我们已经为你声明了一个变量，名为 _{code}score_ ，并做了初始化。

让我们给1234乘以99，来改变一下它的值。

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.但是我们怎么知道那个值是什么呢？

你只需要，在下面添加以下代码，即可输出值：

```c++
std::cout << score << "\n";
```

请注意，当我们要输出这个变量时，我们不需要在变量名的两边写双引号。

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 3.使用编辑器，编译并执行程序。

    div#ide
        pre.initcode
            include codes/arithmeticoperators.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 链式

> id: chaining

现在，我们已经输出了一个变量，并且还使用 _{code}cout_ 输出了多个值。让我们再仔细看看 _{code}cout_ 。

如果我们有以下代码：

```c++
int age = 28;

std::cout << "Hello, I am ";
std::cout << age;
std::cout << " years old\n";
```

它的输出结果是:

```c++
Hello, I am 28 years old
```

请注意，我们为什么要在 _{code}“Hello, I am”_ 这一串字符的两边使用双引号，但在 _{code}age_ 两边却不用呢。

当我们需要文字，或者字符串的时候，这个时候就需要用到引号了。

当我们使用变量名，来输出某个值时，我们就不需要使用引号。

因此，那我们是不是可以在一行内，通过 _{code}cout_ 语句，编写出来呢？

是的，您可以使用多个 _{code}<<_ 运算符来把需要输出的内容，连接在一起。

对于上面所说的，你可以这样实现：

```c++
int age = 28;

std::cout << "Hello, I am " << age << " years old\n";
```

这个，就称为链式。

使用说明

_{input#chaining(type="checkbox" disabled="disabled")}_ 1.在**game.cpp**文件里，我们已经声明了一个变量，名为 _{code}score_ ，数据类型为 _{code}int_ ，并且为它做了初始化。

现在使用链式输出下面的内容：

```c++
Player score: [score]
```

本来 _{code}[score]_ 应该是，变量 _{code}score_ 的值。

感觉没什么错了，就添加一个新行！

检查两遍，就可以通过了

_{input#chaining(type="checkbox" disabled="disabled")}_ 2.使用编辑器，编译并执行程序。

    div#ide
        pre.initcode
            include codes/combiningstep1andstep2.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 用户输入

> id: userinput

就像我们在介绍中提到的变量，它们的值是通过我们在键盘上敲一些字符，才得到的，这个就是我们提到的用户输入。

我们在键盘上输入了一些字符后，通过按下 _{code}enter_ 键，我们的程序就能收到，它就能做其他的操作了。

我们在前面也看到过了，C++是通过 _{code}cout_ 来输出我们想要的数据，而通过 _{code}cin_ 是我们输入的数据，或者说我们想让变量成为我们设定的值。

```c++
std::cout << "Enter your password: ";
std::cin >> password;
```

 _{code}cin_ 这个单词，代表的就是标准的输入流，也就是说，我们想要输入的数据能让计算机读懂，需要通过它来表示出来（它的读音，就是 see-in 这样读）。通常来说，我们如果有 _{code}cin_ ，就需要后面跟着一个 _{code}>>_ 符号，它的作用呢，就是为了起到了，为了给输入的数据，指定一个位置

想知道它的工作原理吗？想知道的话，我们就要使用一下这个程序。

##### 使用说明
_{input#userinput(type="checkbox" disabled="disabled")}_ 1.将下面的代码在我们的编辑器中写入:

```c++
std::cin >> tip;
```

这样，用户在键盘上输入的一些数据，就通过 _{code}enter_ 让程序读到它。并且呢，我们现在有 _{code}tip_ 变量，数据类型为 _{code}int_ ,程序会将我们输入的数据，赋值给 _{code}tip_ 。

_{input#userinput(type="checkbox" disabled="disabled")}_ 2.让我们通过链表，来将下面的数据，输出来。

```c++
You paid [tip] dollars.
```

_{code}[tip]_ 应该是 变量 _{code}tip_ 的值。

确保将新的一行，添加到了输出端。

_{input#userinput(type="checkbox" disabled="disabled")}_ 3.我们使用编辑器，编译、并执行我们的程序。

然后，我们的编辑器应该是这个样子：

```c++
$ g++ tip.cpp
$ ./a.out
Enter a tip amount: 
```

在我们的编辑器上，输入一个数字，然后按 _{code}enter_ 结束。

    div#ide
        pre.initcode
            include codes/userinput.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 挑战一下：温度（第1部分）

> id: challengetemperature1

现在，相信同学们已经了解了变量，以及 _{code}cin_ 输入流。有这些基础，我们就可以编写一个程序啦！

曾经，有位疯狂的科学家，叫开尔文（Kelvin），有一次，他在山腰的气象实验室里，熟练地预测了天气。

最近，开尔文（Kelvin）开始在他的网站上，发布了天气预报，但是存在一个问题：他的所有天气预报，都以华氏（F）温度为单位，进行描述。

我们通常说温度，都是用的摄氏（C），很少有人能把华氏转换成摄氏。那么，我们通过计算机就可以实现这个过程。

让我们将温度从华氏（F）转换为摄氏（C），是有个公式的。公式如下：

C=(F−32)/1.8

##### 使用说明

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  1.首先，我们使用谷歌或者百度，看一下现在，北京的温度，是多少华氏温度的。

声明一个名称为 _{code}tempf_ 数据类型为 _{code}double_ 的变量，并让它做为温度的代表，对它做一个初始化。

声明另一个，名称为 _{code}tempc_ 数据类型为 _{code}double_ 的变量，

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  2.将华氏温度，转换成摄氏温度。

并且要讲摄氏温度的值，存到 _{code}tempc_ 里。

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  3.展示这个结果。

输出以下内容:

```c++
The temp is [tempc] degrees Celsius.
```

不要忘记，在这句话最后面，加一个换行符 _{code}\n_ ，这个是让我们的数据，单独占据一行。

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  4.使用编辑器，编译并执行我们的程序。

    div#ide
        pre.initcode
            include codes/challengetemperature1.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 挑战一下：温度（第2部分）

> id: challengetemperature2

让我们回到我们刚刚写过的 **temperature.cpp** 。我们不要像下面这样，直接赋值给 _{code}tempf_ 一个温度值。

```c++
tempf = 83;
```

让我们使用 _{code}cin_ 来输入一个当前温度值!

##### 使用说明

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 1.使用 _{code}std::cout_ 作为一个提示，告诉用户 “输入一个华氏温度”。

And get their input using _{code}std::cin_ and store it in _{code}tempf_.
然后使用 _{code}std::cin_ 来获取他们输入的值，并将这个值存储在 _{code}tempf_ 中。

检查两遍，可以通过了。

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 2.使用编辑器，编译并执行程序。

    div#ide
        pre.initcode
            include codes/challengetemperature2.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

_{button.next-step} Continue_ 

---

### 总结

> id: review

恭喜你，你已经完成了本课的学习。为你鼓鼓掌。🙌

我们来做一下课前的回顾吧：

- 一个变量，在计算机中，是占用一块特定内存的。而且占用了内存之后，就可以做一些其他的操作，比如存储值，使用这个数据等等。

- C ++基本数据类型包括：
  
_{code}int_ : 整型

_{code}double_ : 浮点数（我们俗称的小数）

_{code}char_ : 单个字符

_{code}string_ : 多个字符组成的串

_{code}bool_ : 逻辑型（正确/错误）

- 一个等号 _{code}=_ 表示赋值，而不是数学意义上的相等。

- _{code}cin_ 是可以从用户的输入来获取数据。

##### 使用说明

_{input#review(type="checkbox" disabled="disabled")}_ 1.附加题：我们身体是不是健康的呢？我们都不确定，有的人说很健康，有的人却不健康，我们如果要科学的定义我们的身体健康程度，有一个词，大家应该了解一下，那这个词就是 “身体质量指数（BMI）” 。这个词呢，可以用来检测我们人体的脂肪的。

这个词呢，是有一个公式的，如下所示：


    x-img(src="images/bmi.png" width=450 height=270)


它将通过人的体重（我们一般说人的体重是多少公斤，也就是多少kg，而这里就是使用了kg，作为单位），除以我们的 _{code}身高的平方_ 来计算（身高是用 m 来做计算的）。

完成 **bmi.cpp** 程序。

(你也可以直接运行该代码，我们为你提供了源代码)

    div#ide
        pre.initcode
            include codes/review.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")
