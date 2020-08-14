# 变量

## 介绍变量

> id: introductiontovariables
> section: introductiontovariables


经过我们上一堂课的讲解，小伙伴们都应该知道了，C++的一些历史信息，能做好多好多有趣的事情。

而从本章开始，我们就要开始正式进入C++的学习之旅啦。小朋友们准备好了吗？

将这堂课之前，老师想问你们一下？有没有人玩过一款游戏，叫做 “贪吃蛇大作战” , 就是下面的这一款游戏。

::: column(width=600)
    x-img(src="images/tstart.jpg" width=600 height=400)
:::

其中这个游戏里面，就涉及到很多变量的知识：比如说它需要你一开始输入一个你的昵称，来记录玩家是谁，那么这个昵称就是一个变量；

你每次吃到一个食物，分数就会加一，排名就会靠前，那么这个分数就是一个变量; 

::: column(width=500)

    x-img(src="images/tname.jpg" width=500 height=300)

::: column(width=500)

    x-img(src="images/tsun.jpg" width=500 height=300)
    
:::

变量可以代表很多东西，那贪吃蛇来说，可以代表贪吃蛇的长度大小，得分，名字，等等。

**温馨提示** ：变量，用一句话来说，就好比一个 “ 容器 ” ，而变量的数据，就需要盛放在 “ 容器 ” 中。

::: column(width=400)
    x-img(src="images/peng.jpg" width=400 height=400)
:::

---

## 介绍数据类型

> id: introdutedatatype
> section: introdutedatatype
  
我们上面介绍了变量，接下来该介绍数据类型了。

在 “ 贪吃蛇大作战 ” 中，当游戏开始的时候，我们需要蛇去吃食物，来提高我们的分数，而这个分数是个整数，就是数据类型中的整型；

我们首次登陆游戏的时候，都会让我们输入昵称，而昵称是一串文字或者其他的字符，这就可以看做是数据类型中的字符串型（后面的章节会详细介绍）；

接下来，我们先大概了解一下C++的基本数据类型，如下所示：

- int：整型（ 1 ）
  
- double：浮点类型（ 1.0 ）
  
- char：单个字符类型（ c ）

- string：字符串类型（ camluni ）
  
- bool：布尔类型（ 正确/错误 ）

我们可以看到，变量是有很多 **数据类型** 的：可以存数字、小数、单个字母、存一句话，有的还可以判断是不是正确的，同学们可以点击三角按钮，观察不同的数据类型：

    <div class="content-center" style="display: flex;width: 770px">
        <!-- int -->
        <div style="flex: 1;">
            svg#int-grid.content-center(width=350 height=350)
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                image(id="ball-1" class="ball" xlink:href="images/ball-1.png" x="43" y="123" height="35px" width="35px")
                image(id="ball-2" class="ball" xlink:href="images/ball-1.png" x="73" y="123" height="35px" width="35px")
                image(id="ball-3" class="ball" xlink:href="images/ball-1.png" x="103" y="123" height="35px" width="35px")
                image(id="ball-4" class="ball" xlink:href="images/ball-1.png" x="125" y="102" height="35px" width="35px")
                image(id="ball-5" class="ball" xlink:href="images/ball-1.png" x="58" y="97" height="35px" width="35px")
                image(id="ball-6" class="ball" xlink:href="images/ball-1.png" x="88" y="97" height="35px" width="35px")
                image(id="ball-7" class="ball" xlink:href="images/ball-1.png" x="28" y="97" height="35px" width="35px")
                image(id="ball-8" class="ball" xlink:href="images/ball-1.png" x="43" y="71" height="35px" width="35px")
                image(id="ball-9" class="ball" xlink:href="images/ball-1.png" x="74" y="71" height="35px" width="35px")
                image(id="ball-10" class="ball" xlink:href="images/ball-1.png" x="110" y="76" height="35px" width="35px")
            <p id="p-int">x<sub>1</sub>&nbsp;=&nbsp;<span id="span-int"><strong>0</strong></span></p>  
            x-slider#slider-int(steps=10)
            <p>int</p>
        </div>
        <div style="flex: 1; position: relative;">            
            svg.content-center(width=350 height=350)
                <defs><clipPath id="clippath"><rect id="rect-float" x="0" y="156" width="100%" height="100%"></rect></clipPath></defs>
                image(id="peaceWater" xlink:href="images/water.png" x="0" y="0" height="100%" width="100%" style="clip-path:url(#clippath);")
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
            <p>x<sub>2</sub>&nbsp;=&nbsp;<span><strong id="span-float">0.00</strong></span></p>
            x-slider#slider-float(steps=1000)
            <p>float</p>
        </div>
        <div style="flex:1;">
            svg#string-grid.content-center(width=350 height=350)
                <defs><clipPath id="clipstring"><rect id="rect" x="0" y="0" width="30%" height="100%"></rect></clipPath></defs>
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                image(id="logo" class="logo" xlink:href="images/LOGO.png" x="32%" y="0" height="100%" width="100%" style="clip-path:url(#clipstring);")
            <p>x<sub>3</sub>&nbsp;=&nbsp;<span><strong id="span-string">""</strong></span></p>
            x-slider#slider-string(steps=7)
            <p>string</p>
        </div>
        <div style="flex:1;">
            svg#boolean-grid.content-center(width=350 height=350)
                image(id="bucket" xlink:href="images/back-img-3.png" x="0" y="0" height="100%" width="100%")
                image(id="true-lamp" class="hide-lamp" xlink:href="images/true_lamp.png" x="45" y="10" width=100 height=200 alert="True")
                image(id="false-lamp" xlink:href="images/false_lamp.png" x="45" y="10" width=100 height=200 alert="True")
            <p>x<sub>4</sub>&nbsp;=&nbsp;<span><strong id="span-boolean">False</strong></span></p>
            <div class="testswitch">
                <input class="testswitch-checkbox" id="onoffswitch" type="checkbox">
                <label class="testswitch-label" for="onoffswitch">
                    <span class="testswitch-inner" data-on="开" data-off="关"></span>
                    <span class="testswitch-switch"></span>
                </label>
            </div>
            <p>boolean</p>
        </div>
    </div>

在本章节，我们主要学习整型，浮点型。

##### 整型

在C++中，整型是有很多种类的，因为计算机要存储的数的大小是不一样的。而整型默认的类型是 _{code}int_ ，它的范围是-2147483648 —— 2147483647，而这个范围的值足够我们使用啦。

##### 浮点型

在C++中，浮点型也叫小数。而浮点型默认的类型是 _{code}double_ ，它还有一个类型是float，但是它没有double精确，我们基本使用的就是 double 。

##### 使用说明

观看下图，老师为你们做了一个小总结：

::: column(width=1000)
    x-img(src="images/datatypes.gif" width=1000 height=800)
:::


---

## 声明并初始化一个变量

> id: declareaandinitializeavariable
> section: declareaandinitializeavariable

上面也介绍了变量和数据类型了，下面我们要开始使用他们啦。

就像上面我们提到的“贪吃蛇大作战”，它刚开始的时候，有个初始长度，长度是45。那么我们怎么去保存贪吃蛇的长度值呢？贪吃蛇的长度需要用什么数据类型去保存呢？

此时就需要一个变量去保存它，并且是整数类型！

::: column(width=600)
    x-img(src="images/init.jpg" width=600 height=450)
:::


### 声明变量：

我们要使用变量，就需要先声明它。要声明变量，我们需要注意两个知识点：

- 变量的数据类型（整型）。

- 变量的名称（长度）。

贪吃蛇的长度是一点一点增加的：45、46、47... 属于整型 _{code}int_ 。我们把贪吃蛇的长度看做分数，命名为 _{code}score_ 。那么我们可以这么声明：

```c++
// Declare a variable
int score;
```

其中上面有两部分组成：

- _{code}int_ 是变量的数据类型。

- _{code}score_ 是变量的名称。
  
那我们了解了变量的声明之后，那么我们必须知道变量的命名规则了。

##### **命名规则**：

- 在C++中，变量名只能由这三部分组成：大小写字母（A、a...），数字（0、1、2...）、下划线（ _ ）。
  
- 变量名，**不能使用数字**做名字的**首位**。   

- 变量名，不能存在特殊符号。  

- 变量名，区分字母的大小写的。   

- 变量名，不能使用C++的关键词做变量名。    

- 变量名，输出不用加双引号 _{code}""_ 。 在我们输出的时候，直接写 _{code}score_ 就可以，不需要 _{code}“score”_ 这样写。

  
##### 随机测验：

_{code}\_score_ 是变量名吗？[[是的|不是]]

_{code}0score_ 是变量名吗？[[不是|是的]]

_{code}score.#$%*!?_ 能做变量名吗？[[不能|能]]

_{code}SCORE_ 和  _{code}score_ 表示同一个变量名吗？[[不是|是的]]

_{code}int_ 能做变量名吗？[[不能|能]]
 

### 初始化变量

我们声明了一个分数变量后，就可以给它初始化（赋值）了！

此时，我们给 _{code}score_ 变量一个初始值，值为45。

```c++
//Initialize a variable
score = 45;
```

其中上面有三部分组成：

_{code}score_ 是变量的名称。

_{code}=_ 是给变量，赋值的符号。（温馨提示：_{code}=_ 在这里不是“等于”的意思，而是将右边的值，“赋值”给了变量，小朋友们要注意哦~）

_{code}45_ 是给变量的值。


### 声明并初始化变量

在我们分别了解到声明变量以及初始化变量之后，它们在一起用就是这样的：

```c++
// Declare a variable
int score;

// Initialize a variable
score = 45;
```

其实我们是可以一句话把他们衔接起来的，如下所示：

```c++
// Declare and Initialize a variable
int score = 45;
```

这句话就是说，声明一个 _{code}score_ 的整数型变量，并且将它的初始值设置为 _{code}45_ 。

##### 使用说明

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 1.在编辑器中，我们需要声明一个，名字为score，数据类型为int的变量

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 2.我们为分数设置一个初始值，值为45。

**温馨提示**：可以使用我们学过的一句话，也可以使用两句话，去声明和赋值变量。

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 3.写完后，点击编辑器的run，如果在运行结果窗口，没有提示错误的话，说明我们就声明并初始化成功啦。

    div#ide
        pre.initcode
            include codes/declareaandinitializeavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 算术运算符

> id: arithmeticoperators
> section: arithmeticoperators

刚才我们学习了变量和数据类型。接下来我们使用这些知识，学习一下算术运算符这一小节吧。

想必大家在数学课上，就学会了加减乘除了。其实计算机的算术运算符，基本就是大家在数学课上，所学到的加减乘除的符号。

::: column(width=600)
    x-img(src="images/math.jpg" width=600 height=400)
:::

以下呢，是C++，一些常见的算术运算符：

- _{code}+_ 加
  
- _{code}-_ 减
  
- _{code}*_ 乘
  
- _{code}/_ 除
  
- _{code}%_ 模（取余）
  
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

**温馨提示** ：同学们能感觉到出 4 * (4 - 2) ，和  4 * 4 - 2  他们的区别吗？  有时候，我们可以添加括号 _{code}()_ 来优先计算括号里面的程序。

##### 使用说明

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 1.在贪吃蛇中，初始分数为45，名为 _{code}score_ ，现在这条蛇吃了5个食物了（每次吃一个食物，分数就会加1）。它的分数现在变成多少啦？

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.但是我们怎么知道那个值是什么呢？我们在第一章学过了输出 _{code}cout_ ,可以使用cout输出我们的分数，同学们不要忘了哦~

```c++
cout << score << "\n";
```

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.写完后，点击编辑器的run，如果在运行结果窗口出现了结果50，说明我们成功的使用了算术运算符。

    div#ide
        pre.initcode
            include codes/arithmeticoperators.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 链式

> id: chaining
> section: chaining

我们在玩 “贪吃蛇大作战” 的游戏中。每次吃一个食物，就会增长一截，吃的越多，变得越长。这个就可以简单理解成链式。

假如说我们现在得了50分的分数了，上一节也展示出：50的分数值了，但是如果没有提示，我们不知道着个50分代表着什么，所以我们需要，一个完整的提示。

我需要在我的分数前面，加上一段 _{code}您好，您的分数为：_ ；在我的分数后面，加上一个 _{code}分_ 的单位。

```c++
您好，您的分数为：50 分
```

我们可能会通过一个一个的 _{code}cout_ 来展示：

```c++
int score = 50;

cout << "您好，您的分数为：";
cout << score;
cout << " 分\n";
```

它的输出结果是:

```c++
您好，您的分数为：50 分
```

我们可不可以对它做一个优化，只需要一行代码，就可以显示出来呢？ 答案是肯定可以的。

我们可以使用多个 _{code}<<_ 运算符，把他们连接在一起，就像下面这样：

```c++
int score = 50;

cout << "您好，您的分数为：" << score << " 分\n";
```

此时就连成了一串，就称为链式。

##### 使用说明

_{input#chaining(type="checkbox" disabled="disabled")}_ 1.我们已经声明了一个变量，名为 _{code}score_ ，数据类型为 _{code}int_ ，初始值为50。

现在使用链式输出下面的内容：

```c++
您的分数是: [score] 分
```

**注意**： _{code}[score]_ 表示的是变量的具体分数。

_{input#chaining(type="checkbox" disabled="disabled")}_ 2.写完后，点击编辑器的run，查看结果。

    div#ide
        pre.initcode
            include codes/chaining.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")



---

## 用户输入

> id: userinput
> section: userinput

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



---

## 挑战一下：温度（第1部分）

> id: challengetemperature1
> section: challengetemperature1

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



---

## 挑战一下：温度（第2部分）

> id: challengetemperature2
> section: challengetemperature2

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



---

## 总结

> id: review
> section: review


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
