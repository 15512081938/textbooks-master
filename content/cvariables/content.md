# 变量

## 变量

> id: introductiontovariables
> section: introductiontovariables

::: column.grow

经过我们上一堂课的介绍，大家都应该知道了C++的一些基本介绍，其中它可以做很多有趣的事情。

而从本章开始，我们就要正式进入C++的学习之旅啦~

不知道同学们知不知道，“贪吃蛇” 这款小游戏。没玩过也没关系，老师会通过游戏来介绍变量。

::: column(width=400)
    x-img(src="images/tstart.gif" width=400 height=400)
:::


假设我们玩一个游戏，我们需要有一个自己的昵称，还需要有一个最后的得分，才能记录下谁得了多少分。

此时，我们知道，每次玩游戏的时候，每个人的**名字**和他的**分数**有可能是不一样的。这种变化的数据就可以看做**变量**。

::: column(width=500)

    x-img(src="images/tname.jpg" width=500 height=500)

::: column(width=500)

    x-img(src="images/tsun.jpg" width=500 height=500)
    
:::

变量，可以是贪吃蛇的长度，可以是最后的得分，或者是玩家的名字，等等。

那这些变量数据需要保存到哪里呢？答案就是保存在计算机的存储空间里。大家可以把它想成一个楼房，每一户都会有门牌号，每一户的家里都会住着人。把人比作数据（变量值），把每户的门牌号比作数据的标识（变量名）。

**提示** ：变量，用一句话来说，就好比一个 “ 容器 ” ，而变量的数据，就需要盛放在 “ 容器 ” 中。

::: column(width=400)
    x-img(src="images/peng.jpg" width=400 height=300)
:::

---

## 数据类型

> id: introdutedatatype
> section: introdutedatatype

同学们想过吗，数据占据了计算机的存储空间，但是这些数据具体是怎么存储的？每个数据占据的空间大小都一样吗？

其实在计算机中，数据最终都要转换成两个符号存储的，_{code}0_ 和 _{code}1_ （也就是我们说的二进制）。同学们需要了解一下，数据转换之前，字符类型是由ASCII码存储的，数值类型是通过二进制的原码，反码和补码存储的。它们存储的类型是不一样的。

不同类型的数据，占据的空间可能不一样，计算机为了识别和存储这些数据，于是就出现了数据类型的概念。为它们做个标记，便于计算机存储。

::: column(width=500)

    x-img(src="images/ejz.jpg" width=500 height=300)

::: column(width=500)

    x-img(src="images/ascii.jpg" width=500 height=400)
    
:::


在我们玩 “ 贪吃蛇 ” 的时候，需要操控蛇去吃食物，来提高得分。而我们得到的分数：1、2、3...100，这些数值，让我们很容易想到数学中的整数，其实在计算机中，可以看做是数据类型中的整型；

还有，玩 “ 贪吃蛇 ” 之前，需要我们输入一个昵称，而昵称是由一串字符串组成的。这就可以看做是数据类型中的字符串型；

其实在C++中，数据类型有很多种，我们在这里了解一些基本的数据类型：

- 整型：int（ 比如 ：1 ）
  
- 浮点型：double（ 比如 ： 1.10 ）
  
- 单个字符类型：char（ 比如 ： c ）

- 字符串类型：string（ 比如 ： camluni ）
  
- 布尔类型：bool（ 它的值只有两个：真/假 ）

在本章节，我们主要具体学习下整型，浮点型。

##### 整型

在生活中，人的个数，楼层的层数，都是整数的例子。

在C++中，由于计算机的存储数的长度、大小都不一样，所以整型有很多种类。而整型的默认类型是 _{code}int_ ，它在计算机的存储空间中占了4B。还有一个需要大家知道，就是 _{code}long long_ 类型，它在计算机的存储空间中占了8B。

##### 浮点型

在生活中，我们在网购，买东西的时候，需要花钱，有时候可能是9.9，那这就是小数。

在C++中，浮点型也叫小数。而浮点型的默认类型是 _{code}double_ ，它在计算机的存储空间中占了8B。它还有一个类型是float，它在计算机的存储空间中占了4B。但是它没有double精确，我们基本使用的就是 double。

##### 使用说明

我们现在知道了，C++的 **数据类型** 有很多种：数字、小数、单个字母、一句话，甚至可以判断是不是正确的，老师特地给同学们，做了一个动画，同学们可以玩一玩，点击每个三角按钮，观察它们的变化：

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
            <p>double</p>
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
            <p>bool</p>
        </div>
    </div>


---

## 声明并初始化变量

> id: declareaandinitializeavariable
> section: declareaandinitializeavariable

上面也介绍了变量和数据类型了，下面我们要开始使用他们啦。

就像上面我们提到的 “贪吃蛇” ，它刚开始的时候，有个初始分数：0。那么我们怎么去保存贪吃蛇的分数值呢？贪吃蛇的分数需要用什么数据类型去保存呢？

此时就需要一个变量去保存它，并且是整数类型！

::: column(width=600)
    x-img(src="images/init.jpg" width=500 height=500)
:::

[Continue](btn:next)

---


### 声明变量

> id: declareavariable

我们要创造变量，需要两个知识点：

- 变量的数据类型（比如：_{code}int_ ）。

- 变量的名称（比如：_{code}score_ ）。

我们把贪吃蛇的分数，命名为 _{code}score_ 。那么我们可以这么声明：

```c++
// 声明一个变量
int score;
```

这个变量名一定要叫 score 吗？当然可以声明别的名字，但是必须符合以下 **命名规则：**

- 在C++中，变量名只能用这三种类型：大小写字母（A、a...），数字（0、1、2...）、下划线（ _ ）。
  
- 不能使用**数字**做变量名的**首位**。   

- 变量名区分字母**大小写**。   

- 不能使用C++的**关键字**做变量名。（比如：int，return，double）

- 输出不用加双引号 _{code}""_ 。 在我们输出的时候，直接写 _{code}score_ 就可以，不需要 _{code}“score”_ 这样写。（了解）

  
##### 随机测验：

_{code}\_score_ 是变量名吗？[[是的|不是]]

_{code}0score_ 是变量名吗？[[不是|是的]]

_{code}score.#$%*!?_ 能做变量名吗？[[不能|能]]

_{code}SCORE_ 和  _{code}score_ 表示同一个变量名吗？[[不是|是的]]

_{code}int_ 能做变量名吗？[[不能|能]]
 

那么我们怎么声明多个变量呢（数据类型相同），此时可以这样写：

```c++
// 声明多个变量
int score, age;
```

通过英文输入法的逗号，可以将多个变量名写下来，就声明成功了。


[Continue](btn:next)

---

### 为变量设置初始值

> id: initializeavariable

我们声明了一个变量后，就可以给它设置一个初始值了！

我们给变量 _{code}score_ 一个初始值：0。

```c++
//给变量一个初始值
score = 0;
```

其中上面有三部分组成：

_{code}score_ 是变量的名称。

_{code}0_ 是给变量的值。

_{code}=_ 是给变量 _{code}赋值_ 的符号。（提示： _{code}=_ 在这里不是“等于”的意思，而是将右边的值，“赋值”给了变量，小朋友们要注意哦~）


[Continue](btn:next)

---

### 声明并初始化变量

> id: declareainitializeavariable

我们了解了声明变量，以及为变量设置初始值，它们需要组合在一起使用：

```c++
// 声明一个变量
int score;

// 给变量设置初始值
score = 0;
```

其实也可以一句话把它们衔接起来，就是初始化变量：

```c++
// 初始化变量
int score = 0;
```

这句话就是说，声明一个名为 _{code}score_ 的整型变量，并将它的初始值设置为 _{code}0_ 。

##### 使用说明

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 1.在编辑器中，我们需要声明一个，名字为 _{code}score_ ，数据类型为 _{code}int_ 的变量

```c++
// 声明一个变量
int score;
```

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 2.我们为分数设置一个初始值，值为0。

```c++
// 给变量设置初始值
score = 0;
```

**提示**：可以使用我们学过的一句话，也可以使用两句话，去声明和赋值变量。

```c++
// 初始化变量
int score = 0;
```

_{input#declareaandinitializeavariable(type="checkbox" disabled="disabled")}_ 3.写完后，点击编辑器的run，如果在运行结果窗口，没有提示错误的话，说明我们就声明并初始化成功啦。

    div#ide
        pre.initcode
            include codes/declareaandinitializeavariable.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 算术运算符

> id: arithmeticoperators
> section: arithmeticoperators

我们在之前学习了变量和数据类型的知识。接下来学习一下算术运算符这一小节吧。

想必大家在数学课上，学会了加减乘除。其实计算机的算术运算符，就用到了我们学到的数学知识。

::: column(width=600)
    x-img(src="images/math.jpg" width=600 height=400)
:::

以下呢，是C++常见的算术运算符：

- _{code}+_ 加
  
```c++
int score = 0;
// 分数初始值为 0

score = 4 + 2;
// 结果等于 6
```

- _{code}-_ 减
  

```c++
int score = 0;
// 分数初始值为 0

score = 4 - 2;
// 结果等于 2
```

- _{code}*_ 乘

```c++
int score = 0;
// 分数初始值为 0

score = 4 * 2;
// 结果等于 8

```

- _{code}/_ 除 

```c++
int score = 0;
// 分数初始值为 0

score = 4 / 2;
// 结果等于 2
```

- _{code}%_ 模/取余（比如：4个苹果分给3个人，每个人1个苹果，还剩下一个苹果，这就是余数，也就是我们取的余数，也叫做模）

```c++
int score = 0;
// 分数初始值为 0

score = 4 % 3;
// 结果等于 1
```

**提示** ：同学们能感觉到 _{code}4 * (4 - 2)_ ，和  _{code}4 * 4 - 2_  的区别吗？ 我们可以添加括号 _{code}()_ 来优先计算括号里面的程序。

##### 使用说明

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 1.在贪吃蛇中，初始分数为0，名为 _{code}score_ 

```c++
int score = 0;
```

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.现在这条蛇吃了5个食物了（每次吃一个食物，分数就会加1）。它的分数现在变成多少啦？

```c++
score = 0 + 5;
```

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 3.我们需要在运行结果窗口输出分数值，我们可以使用 _{code}cout_ ,输出分数。

```c++
cout << score << "\n";
```

_{input#arithmeticoperators(type="checkbox" disabled="disabled")}_ 2.写完后，点击编辑器的run，如果在运行结果窗口出现了结果5，说明我们成功的使用了算术运算符。

    div#ide
        pre.initcode
            include codes/arithmeticoperators.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 综合输出

> id: chaining
> section: chaining

我们在玩 “贪吃蛇” 的游戏中，吃的食物越多，分数就越高。这个就可以简单的理解为——**综合输出**。

假如说我们现在玩贪吃蛇，得了5分，但是我需要有提示，比如加上一段 _{code}您好，您的分数为：_ ；在我的分数后面，再加上一个 _{code}分_ 的单位：

```c++
您好，您的分数为：5 分
```

我们可能会通过一个一个的 _{code}cout_ 来展示：

```c++
int score = 5;

cout << "您好，您的分数为：";
cout << score;
cout << " 分\n";
```

它的输出结果是:

```c++
您好，您的分数为：5 分
```

我们可不可以对它做一个优化，只需要一行代码，就可以显示出来呢？ 答案是肯定可以的。

我们可以使用多个 _{code}<<_ 运算符，把他们连接在一起，就像下面这样：

```c++
int score = 5;

cout << "您好，您的分数为：" << score << " 分\n";
```

此时就连成了一串，就称为综合输出。

可能有的同学会想到，为什么不能直接把 _{code}score_ 写到双引号里呢？就像 _{code}“score”_ 。这里要说一下，将变量直接写到双引号里，C++会将它原样输出，而不会将它当做变量，所以只能断开写。

##### 使用说明

_{input#chaining(type="checkbox" disabled="disabled")}_ 1.我们已经声明了一个变量，名为 _{code}score_ ，数据类型为 _{code}int_ ，初始值为5。

```c++
int score = 5;
```

_{input#chaining(type="checkbox" disabled="disabled")}_ 2.现在使用综合输出下面的内容：

```c++
您的分数是: [score] 分
```

**注意**： _{code}[score]_ 表示的是变量的具体分数。

```c++
cout << "您好，您的分数为：" << score << " 分\n";
```

_{input#chaining(type="checkbox" disabled="disabled")}_ 3.写完后，点击编辑器的run，查看结果。

    div#ide
        pre.initcode
            include codes/chaining.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")

---

## 用户输入

> id: userinput
> section: userinput

经过上面的学习，我们发现，变量的值都是直接定义好了，运行出来的。

接下来，我们来实现一下，在键盘上输入一些数据，将它展示出来。

同学们，我们玩游戏之前，是不是需要给自己起一个好听的名字，用来记录下我们的成绩啊？如下所示：

::: column(width=600)
    x-img(src="images/tname.jpg" width=500 height=500)
:::

而C++中，我们知道了，可以使用 _{code}cout_ 来**输出**数据；那**输入**数据怎么实现呢？通过 _{code}cin_ 可以实现，如下例：

```c++
cout << "请输入您的名字: ";
cin >> name;
```

此时，应该有人发现了 _{code}cin_ （读音：see-in ） 后面跟着一个 _{code}>>_ ，它就代表着，每次输入一个数据，就给它保存起来。输入完成后，你可以按一下 _{code}enter_ 这样就完成了我们的输入啦。 


##### 使用说明

_{input#userinput(type="checkbox" disabled="disabled")}_ 1.我们在设计一款贪吃蛇游戏，希望能知道玩家的年龄，此时需要声明一个年龄 _{code}age_ 变量，数据类型为 _{code}int_ 。 

```c++
int age;
```

_{input#userinput(type="checkbox" disabled="disabled")}_ 2.在运行结果窗口，最开始可以给一个提示："请输入你的年龄吧: "，并且可以让玩家输入年龄。

```c++
cout << "请输入你的年龄吧: ";
cin >> age;
```

_{input#userinput(type="checkbox" disabled="disabled")}_ 3.当玩家输入完成后，按下 _{code}enter_ 键，输出玩家的年龄。

```c++
12
```

_{input#userinput(type="checkbox" disabled="disabled")}_ 4.写完程序后，点击编辑器的run，输入一个数字，然后按 _{code}enter_ 结束，查看一下结果。

    div#ide
        pre.initcode
            include codes/userinput.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")



---

## 挑战一下：温度（第1部分）

> id: challengetemperature1
> section: challengetemperature1

曾经，有位疯狂的科学家，叫开尔文（ [Kelvin](bio:kelvin) ），有一次，他在山腰的气象实验室里，熟练地预测了天气。

最近，开尔文（Kelvin）开始在他的网站上，发布了天气预报，但是存在一个问题：他的所有天气预报，都以华氏（F）温度为单位，进行描述。

我们通常说温度，都是用的摄氏（C）。那么，我们通过计算机来实现它们的转换吧。

让我们将温度从华氏（F）转换为摄氏（C），是有个公式的。公式如下：

C=(F−32)/1.8

##### 使用说明

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  1.首先，我们调查一下家乡的温度，是多少华氏温度的，并记下来。（例如：77.9）

```c++
77.9
```

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  2.此时我们需要两个变量，华氏温度（ _{code}f_ ）和摄氏温度（ _{code}c_ ）。因为温度，有可能是小数，所以我们采用 _{code}double_ 类型。

```c++
double f; 
double c; 
```

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  3.将华氏温度（ _{code}f_ ），转换成摄氏温度（ _{code}c_ ），并且用摄氏温度保存变量的值。

```c++
c = (f - 32) / 1.8;
```

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  4.我们需要展示成下面这句话。

```c++
此时的温度是 [c] 摄氏度。
```

我们可以在这句话之后输入一个换行符 _{code}\n_ ，它可以让我们的数据，单独占据一行哦~

**提示：**
```c++
cout << "您好，您的分数为：" << score << " 分\n";
```

_{input#challengetemperature1(type="checkbox" disabled="disabled")}_  5.写完程序后，点击编辑器的run，查看结果。

    div#ide
        pre.initcode
            include codes/challengetemperature1.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")



---

## 挑战一下：温度（第2部分）

> id: challengetemperature2
> section: challengetemperature2

在上面的例子中，我们假设，查到了家乡的华氏温度，为77.9。我们就直接赋值给了华氏温度变量  _{code}f_ 。如下代码：

```c++
f = 77.9;
```

现在我们需要改进上面的程序，需要在运行结果窗口，来输入一个值 ，赋值给华氏温度变量  _{code}f_ ，同学们想一想，怎么实现呢？

**提示**： 我们可以适当的加一些提示语，如 “请输入一个华氏温度值：” 

##### 使用说明

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 1.我们在运行结果窗口，加一个提示语 “请输入一个华氏温度值：” ，并且需要输入这个华氏温度值。

```c++
cout << "请输入一个华氏温度值：";
cin >> f;
```

_{input#challengetemperature2(type="checkbox" disabled="disabled")}_ 2.写完程序后，点击编辑器的run，输入一个数字，然后按 _{code}enter_ 结束，查看一下结果。

    div#ide
        pre.initcode
            include codes/challengetemperature2.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 小结

> id: review
> section: review

恭喜你，你已经完成了 **变量** 的学习。为你鼓鼓掌。🙌

我们来做一下课前的回顾吧：

- 变量，就好比一个 “ 容器 ” ，而变量的值，就需要盛放在 “ 容器 ” 中。

- 变量的命名规则：

在C++中，变量名只能用这三种类型：[[大小写|大|小]]大小写字母（A、a...），数字（0、1、2...）、下划线（ _ ）。
  
[[不能|能]]使用**数字**做变量名的**首位**。   

变量名[[区分|不区分]]字母**大小写**。   

[[不能|能]]使用C++的**关键字**做变量名。（比如：int，return，double）

- 本章需要我们掌握的，C++基本数据类型：
  
整型 : _{code}int_ (大小为4B) ; _{code}long long_ (大小为8B)

浮点型 : _{code}double_（大小为8B） ; _{code}float_（大小为4B）

- 一个等号 _{code}=_ 表示赋值。将右边的值，赋值给左边的变量。它并不是数学意义上的相等。

- _{code}cin_ 可以让用户输入数据，并且要搭配  [[>>|<<]] 。


---

## 附加题：健康质量指数

> id: additionalquestions
> section: additionalquestions

我们身体是不是健康的呢？我们都不确定，有的人说很健康，有的人却不健康，我们如果要科学的定义我们的身体健康程度，有一个词，大家应该了解一下这个词 ——— “身体质量指数（BMI）” 。BMI是一个，规范我们人体脂肪的标准公式。

这个词呢，是有一个公式的，如下所示：

    x-img(src="images/bmi.png" width=450 height=270)

它将通过人的体重（我们一般说人的体重是多少公斤，也就是多少kg，而这里就是使用了kg，作为单位），除以我们的 _{code}身高的平方_ 来计算（身高是用 m 来做计算的）。


##### 使用说明

_{input#additionalquestions(type="checkbox" disabled="disabled")}_  1.首先，我们将自己的身高体重记录下来。（例如：身高：1.5米，体重52.5kg）

```c++
1.5
52.5
```

_{input#additionalquestions(type="checkbox" disabled="disabled")}_  2.此时我们需要三个变量，身高（ _{code}height_ ）、体重（ _{code}weight_ ）和BMI健康值（ _{code}bmi_ ）。因为它们有可能是小数，所以我们采用 _{code}double_ 类型。（当然，变量名也可以自己起）

```c++
double height,weight,bmi;
```

_{input#additionalquestions(type="checkbox" disabled="disabled")}_  3.我们需要输入我们的身高和体重，赋值给对应的变量。

```c++
cin >> height;
cin >> weight;
```

同学们可以想想，如何设置提示语呢？比如说“您的身高为：（单位为m）”，“您的体重为：（单位为kg）”

```c++
cout << "您的身高为：（单位为m）";
cin >> height;
cout << "您的体重为：（单位为kg）";
cin >> weight;
```

_{input#additionalquestions(type="checkbox" disabled="disabled")}_  4.现在需要通过上面的公式计算bmi，来判断你是不是健康值啦？

```c++
bmi = weight/height*height;
```

_{input#additionalquestions(type="checkbox" disabled="disabled")}_  5.写完程序后，点击编辑器的run，查看结果。


完成下面的程序(你也可以直接运行该代码，我们为你提供了源代码)。

    div#ide
        pre.initcode
            include codes/additionalquestions.cpp
        iframe(src="http://114.116.82.25:7000/#/exercise?language=cpp",scrolling="no",style="width: 100%; height: 500px; border: none;")


---

## 测试

> id: test
> section: test

**1.** _{code}cin_ 的作用是什么？

A.用于声明变量

B.用于编写注释

C.用于输出到运行结果窗口

D.用于从键盘中读取数据

答案：[[D|C|B|A]]

**2.** C++为什么要使用变量？

A.为了存储数据

B.为了记录代码

C.为了编译代码

D.为了在不同平台上使用

答案：[[A|C|B|D]]

**3.** division这个变量值为多少？

```c++
int division;
division = 24 / 8;
```

A.0

B.1

C.2

D.3

答案：[[D|C|B|A]]


**4.** flag的数据类型是什么？

```c++
bool flag = false;
```

A.string

B.int

C.bool

D.double

答案：[[C|D|B|A]]


**5.** 在下面的声明和初始化过程中，变量名是什么？

```c++
int year = 2020;
```

A.int

B.year

C.=

D.2020

答案：[[B|C|D|A]]


**6.** 以下哪一个不符合变量名的规则？

A._cat

B.Camluni_2017

C.int

D.a

答案：[[C|D|B|A]]

**7.** 运行下面代码，输入12，输出结果是什么？

```c++
#include &ltiostream>
using namespace std;

int main() {
    int age;

    cin >> age;

    cout << age << "岁\n";

}
```

A.12

B.12岁

C.12"岁"

D.12"岁\n"


答案：[[B|C|D|A]]

**8.** 运行下面代码，输出结果是什么？

```c++
#include &ltiostream>
using namespace std;

int main() {
    int score;

    score = 60 + 40;

    cout << "您好，您的分数为：";
    cout << score;
    cout << " 分\n";
    
}
```

A."您好，您的分数为："score" 分"

B."您好，您的分数为："100" 分"

C.您好，您的分数为：60 + 40 分

D.您好，您的分数为：100 分

答案：[[D|C|B|A]]


**9.** 运行结果是多少？

```c++
#include &ltiostream>
using namespace std;

int main() {

    double price;
    double num;
    double total;

    price = 1.20;
    num = 2;
    total = price * num;

    cout << total;

}
```

A.2.4

B.2.40

C.24

D.2

答案：[[A|C|D|B]]

**10.** 那个不是C++的基本数据类型？

A.int

B.double

C.char

D.return

答案：[[D|A|C|B]]


**11.** 以下哪一个符合变量名的规则？

A.apple!

B.2017Camluni

C.true

D._int

答案：[[D|C|B|A]]

**12.** _{code}SCORE_ 和 _{code}score_ 表示同一个变量名。 [[错误|正确]]

**13.** 一旦变量名声明并初始化了，就不可以修改变量值了。 [[错误|正确]]

**14.** 变量名可以同时声明并初始化。 [[正确|错误]]

**15.** 1和1.0属于同一种数据类型。 [[错误|正确]]

**16.** _{code} 1/2_ 结果是[[0]]。

**17.** _{code} 1/2.0_ 结果是[[0.5]]。

**18.** _{code} 10 % 3_ 结果是[[1]]。

**19.** _{code} ( 2 * 2 + 2 - 1) % 2_ 结果是[[1]]。