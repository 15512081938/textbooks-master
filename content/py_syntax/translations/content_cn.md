# Python 基础语法

> stage: Foundations
> description: LEARN PYTHON: SYNTAX

> section: interactive-lesson
> id: interactive-lesson

##  互动课程

---
> section: welcome
> id: welcome

###  Python语法概述

Python是一种编程语言。像其他语言一样，它给了我们交流思想的途径。在编程语言的情况下，这些想法是人们用来与计算机通信的“命令”！

我们通过使用编程语言将命令写入文本文件，将命令传送到计算机。这些文件称为**程序**。运行一个程序意味着告诉计算机读取文本文件，将其转换为它能理解的操作集，并执行这些操作。

##### 要点说明

在显示的脚本中将“Camluni”改成你的名字。运行代码看看它能做什么！准备好之后，继续下一个练习，开始学习编写自己的Python程序！

```
div#ide
    pre.initcode
        include codes/welcome1.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```


[Continue](btn:next)

---
> section: comments
> id: comments1

### 注释

我们要做的第一件事不是写代码，而是学习如何告诉计算机忽略程序的一部分。
写在程序中但不由计算机运行的文本称为注释。Python将#后的任何内容解释为注释。

```
div#ide
    pre.initcode
        include codes/comments1.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```
程序中增加注释有以下几点用途:

* 提供信息说明这么写代码的理由

```python
# This variable will be used to count the number of times anyone tweets the 
word persnickety
persnickety_count = 0
```
* 帮助阅读代码的人快速理解

```python
# This code will calculate the likelihood that it will rain tomorrow
complicated_rain_calculation_for_tomorrow()
```
* 调试程序经常使用的一个方法，将部分代码变成注释后，观察少了这一部分代码，程序运行的变化：

```python
# useful_value = old_sloppy_code()
useful_value = new_clean_code()
```
##### 要点说明
[x] 1.
文档是编程过程的一个重要步骤。尝试写一个注释来描述你想写的第一个程序！


Stuck? Get a hint

[Continue](btn:next)

---

> id: print46

### Print输出 
现在我们要做的是教会我们的电脑交流。一台计算机可以回答我们关于“怎么做”、“为什么”或“做什么”的许多问题。在Python中，print（）函数用于让计算机在屏幕上打印输出信息。需要输出的信息应该用引号括起来：

```
div#ide
    pre.initcode
        include codes/print1.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```

```python
# from Mary Shelley's Frankenstein
print("There is something at work in my soul, which I do not understand.")
```
在上面的这个例子中, 程序使用print（）函数引用了书本中的一句话，作为print（）函数的显示出的结果称为输出。此示例程序的输出将是：

```python
There is something at work in my soul, which I do not understand.
```
##### 要点说明

1.
让计算机在屏幕上输出经典问候语 “Hello world!”

##### 概念回顾



[Continue](btn:next)

---

> id: strings1

### 字符串

计算机程序员将文本块称为字符串。在上一个练习中，我们输出了字符串“Hello world！”. 在Python中，字符串由双引号（“Hello world”）或单引号 ('Hello world')括起来。使用哪种并不重要，只要始终前后保持一致。


##### 要点说明
- [x] 1.使用print() 输出你的名字

- [x] Stuck? Get a hint
- [x] 2.如果你的输出语句中使用的是双引号，请使用单引号去替换；如果使用的单引号请使用双引号去替换试试。

请在切换引号类型后再次运行代码。输出有什么不同吗？



[Continue](btn:next)

---

> id: variables1

### 变量

编程语言提供了一种存储数据以供重用的方法。如果有我们想要呈现的问候语、需要重用的日期或需要记住的用户ID，我们可以创建一个变量用来来存储数据。在Python中，我们使用等号（=）来赋值变量。

```python
message_string = "Hello there"
# Prints "Hello there"
print(message_string)
```

在上面的代码示例中, 变量message_string用来存储 “Hello there”. 变量名中不能有空格或符号，但下划线（_）除外。它们不能以数字开头，但可以在第一个字母之后有数字（例如，酷的变量_5）。

我们称之为“变量”并非巧合。如果程序发生变化，我们可以更新变量，但对其执行相同的逻辑过程。

```python
# Greeting
message_string = "Hello there"
print(message_string)
```

```python
# Farewell
message_string = "Hasta la vista"
print(message_string)
```
以上代码，我们创建变量message_字符串，赋值一条欢迎消息，并输出问候语。在我们问候用户之后，我们想向他们道别。然后我们将message_string更新为道别信息并输出。

##### 要点说明
- [x] 1.请输出早中晚变化的膳食餐单



[Continue](btn:next)

---

> id:errors1
### 报错信息

是人就避免不了犯错，更不用说编程中需要去面对的代码错误了。但幸运的是，编程语言会理解并且解释程序中所犯的错误。

Python将这些错误称为errors，并用一个^字符指出错误发生的位置。当程序抛出我们没有预料到的错误时，我们称这些错误为bug。程序员把修正这些意外错误的过程称之为调试程序。

我们在编写Python时遇到的两个常见错误是语法错误SyntaxError和名称错误namererror。

* 语法错误SyntaxError意味着程序的编写方式有问题-标点符号不属于、不需要的命令或缺少括号都可能触发语法错误。

* 当Python解释器看到一个它无法识别的单词时，就会发生名称错误。包含看起来像变量但从未定义的代码将引发NameError。

##### 要点说明
- [x] 1.如果用双引号打开字符串并以单引号结尾，则可能会遇到语法错误。更新字符串，使其以相同的标点开始和结束。

如果尝试输出一个单词字符串但未能在其周围加引号，则可能会遇到名称错误。
Python以为字符串中的单词有其他的定义，但又找不到它的定义位置，引发报错。
在字符串的两边添加引号以消除此错误。

将代码编辑区中格式错误的字符串全部更新正确。


[Continue](btn:next)

---

> id:numbers

### 数字类型

计算机可以理解的不仅仅是文本字符。Python有一些数字类型。它有多种存储数字的方式。你用哪一个取决于你想存储使用的数据。

整数或int是一个整数。它没有小数点，包含所有的计数数字（1，2，3，…）以及它们的负数和数字0。如果你在计算一个房间里的人数，罐子里的果冻豆的数量，或者键盘上的按键数，你可能会使用一个整数。

浮点数或浮点数是十进制数。它既可以用来表示分数量，也可以用来精确测量。如果你在测量你卧室墙壁的长度，计算一个七年级班级的平均测试分数，或者存储一个棒球运动员1998赛季的平均击球率，你可能会使用一个浮动。

数字可以被赋值给变量，也可以直接在程序中使用：

```python
an_int = 2
a_float = 2.1

print(an_int + 3)
# prints 5
```
上面我们定义了一个整型的变量an_int赋值为2 和一个浮点型变量a_float为2.1 。然后输出了变量an_int和数字3的和。
这里的数字3实际上就是数字3，而不是赋值数字3的变量。

由于计算机存储浮点数的方式不同，浮点数可能会以一些意想不到的方式表现出来。有关浮点数和Python的更多信息，请查看Python关于浮点限制的文档。

##### 要点说明
- [x]1.最近看的一次电影经历让你兴奋地想发表一篇评论。你冲出电影院，匆匆忙忙地开始编程，创建你的电影评论网站

创建以下变量并为它们分配整数：release-year（发布年份）和runtime（时长）。

Stuck? Get a hint
2.现在，创建一个变量rating_out_10，并为其指定一个介于1和10之间的浮点数。


Stuck? Get a hint


[Continue](btn:next)

---

> id:calculations

### 运算

计算机非常的擅长计算。他们名字中的“计算”来自于他们提供数学问题答案的历史关联。Python使用+、-、*和/执行加法、减法、乘法和除法。

```python 
# Prints "500"
print(573 - 74 + 1)

# Prints "50"
print(25 * 2)

# Prints "2.0"
print(10 / 5)
```
需要注意，当我们执行除法时，结果有一个小数位。这是因为Python在执行除法之前将所有int转换为float。在Python的旧版本（2.7及更早版本）中，这种转换没有发生，整数除法总是向下舍入到最接近的整数。

除法可以抛出它自己的特殊错误：ZeroDivisionError。Python在试图除以0时将引发此错误。

Python中的数学运算遵循标准的数学运算顺序。

-[x] 要点说明
-[x]1.输出25 * 68 + 13 / 28运算的结果

Stuck? Get a hint

[Continue](btn:next)

---

> id:changingNO

### Changing Numbers

分配了数值的变量可以和数字本身一样处理。两个变量可以相加，除以2，再乘以第三个变量，而不需要Python区分变量和文字（如本例中的数字2）。对变量执行算术不会更改变量-只能使用=符号更新变量。

```python
coffee_price = 1.50
number_of_coffees = 4

# Prints "6.0"
print(coffee_price * number_of_coffees)
# Prints "1.5"
print(coffee_price)
# Prints "4"
print(number_of_coffees)

# Updating the price 
coffee_price = 2.00

# Prints "8.0"
print(coffee_price * number_of_coffees)
# Prints "2.0"
print(coffee_price)
# Prints "4"
print(number_of_coffees)
```

我们创建两个变量并给它们赋值。然后我们对它们进行计算。这不会更新变量！当我们更新coffee_price变量并再次执行计算时，它们将使用更新后的变量值！

-[x] 要点说明
-[x]1.你决定做绗缝了！要计算第一个被子所需的正方形数，让我们创建两个变量：被子宽度和被子长度。让我们做第一条被子8平方宽12平方长。

-[x]2.打印出创建被子所需的方块数！

-[x]3.原来被子需要的材料比你手头上的要多一点！我们只把被子做8平方长。这床被子你需要多少个方格？



[Continue](btn:next)

---

> id:exponents

### Exponents 指数运算

Python还可以执行求幂运算。在书面数学中，您可能会将指数视为上标数字，但在现代键盘上键入上标数字并非易事。因为这个运算和乘法是如此相关，所以我们使用符号**。

```python
# 2 to the 10th power, or 1024
print(2 ** 10)

# 8 squared, or 64
print(8 ** 2)

# 9 * 9 * 9, 9 cubed, or 729
print(9 ** 3)

# We can even perform fractional exponents
# 4 to the half power, or 2
print(4 ** 0.5)
```

上面，我们计算一些简单的指数。我们计算2的10次方，8次方的2次方，9次方的3次方，4次方的0.5次方。

-[x]使用说明
-[x]1.你真的很喜欢上一次练习的方形被子是怎么出来的，并决定从现在起你做的所有被子都是方形的。

使用指数运算符，打印出6x6被子、7x7被子和8x8被子所需的正方形数。

-[x]2.你的6x6被子很畅销，有6个人每人要了6床被子。打印出你需要多少块瓷砖来为6个人做6件被子。


Stuck? Get a hint


[Continue](btn:next)

---

> id:modulo

### 除法运算

Python为除法运算符modulo操作符提供了一个助手。模运算符用%表示，并给出除法计算的余数。如果这个数是可除的，那么模运算符的结果就是0。

```python
# Prints 4 because 29 / 5 is 5 with a remainder of 4
print(29 % 5)

# Prints 2 because 32 / 3 is 10 with a remainder of 2
print(32 % 3)

# Modulo by 2 returns 0 for even numbers and 1 for odd numbers
# Prints 0
print(44 % 2)
```

这里，我们使用模运算符来求除法运算的余数。我们看到29%5等于4，32%3等于2，44%2等于0。

当我们想在每n次代码运行时执行一个操作时，模运算符在编程中很有用。模运算的结果能大于除数吗？为什么或者为什么不呢？

[x]使用说明
[x]1.你想把一个小组分成四个小组。你们都数数，得到27号。通过计算27模4找出你的团队。为我的团队保存价值。

[x]2.通过计算27模4找出你的团队。为我的团队保存价值。

[x]3.值得思考的是：你旁边的两个人（26岁和28岁）在几号队？所有4支队伍的人数是多少？


[Continue](btn:next)

---

> id:concatenation

### Concatenation

+运算符不只是添加两个数字，它还可以“添加”两个字符串！组合两个字符串的过程称为字符串连接。执行字符串连接将创建一个全新的字符串，该字符串由第一个字符串的内容和第二个字符串的内容组成（中间没有任何额外的空格）。

```python
greeting_text = "Hey there!"
question_text = "How are you doing?"
full_text = greeting_text + question_text

# Prints "Hey there!How are you doing?"
print(full_text)
```
在这个代码示例中，我们创建了两个保存字符串的变量，然后将它们连接起来。但是我们注意到结果中缺少两个之间的空格，让我们使用相同的连接运算符来添加中间的空格！

```python
full_text = greeting_text + " " + question_text

# Prints "Hey there! How are you doing?"
print(full_text)
```

现在代码打印出我们期望的消息。

如果要将一个字符串与一个数字连接起来，则需要首先使用str（）函数使该数字成为字符串。如果试图print（）一个数值变量，可以使用逗号将其作为不同的参数传递，而不是将其转换为字符串。

```python
birthday_string = "I am "
age = 10
birthday_string_2 = " years old today!"

# Concatenating an integer with strings is possible if we turn the integer into a string first
full_birthday_string = birthday_string + str(age) + birthday_string_2

# Prints "I am 10 years old today!"
print(full_birthday_string)

# If we just want to print an integer 
# we can pass a variable as an argument to 
# print() regardless of whether 
# it is a string.

# This also prints "I am 10 years old today!"
print(birthday_string, age, birthday_string_2)
```

使用str（）我们可以将非字符串的变量转换为字符串，然后将它们连接起来。但我们不需要将数字转换为字符串，使其成为print语句的参数。

[x]使用说明
[x]1.连接字符串并将它们形成的消息保存在变量消息中。

现在，取消对print语句的注释并运行代码以在终端中查看结果！



[Continue](btn:next)

---

> id:plusequals

### Plus Equals

Python提供了更新变量的简写。当您在变量中保存了一个数字并希望将其添加到变量的当前值中时，可以使用+=（加等于）运算符。

```python
# First we have a variable with a number saved
number_of_miles_hiked = 12

# Then we need to update that variable
# Let's say we hike another two miles today
number_of_miles_hiked += 2

# The new value is the old value
# Plus the number after the plus-equals
print(number_of_miles_hiked)
# Prints 14
```

上面，我们对一个人一段时间内徒步旅行的英里数进行了连续计数。我们没有从头开始重新计算，而是保留一个总数，并在进一步远足时更新。

加号等于运算符也可用于字符串连接，如下所示：

```python
hike_caption = "What an amazing time to walk through nature!"

# Almost forgot the hashtags!
hike_caption += " #nofilter"
hike_caption += " #blessed"
```

我们为徒步旅行时拍摄的自然照片创建了社交媒体标题，但随后更新了标题，以包括我们几乎忘记的重要社交媒体标签。

[x]使用说明
[x]1.我们正在网上购物，找到一双新的运动鞋。就在我们结账之前，我们发现了一件漂亮的毛衣和一些我们也想买的有趣的书！

使用+=运算符更新总价，以包括漂亮毛衣和趣味书的价格

价格如下:

new_sneakers = 50.00
nice_sweater = 39.00
fun_books = 20.00


[Continue](btn:next)

---

> id:multilinestrings

### 多行字符串

我们应该在语文课上学过这首诗：《登鹳雀楼》（Dēng guàn què lóu），这首诗是唐代诗人王之涣创作的一首诗。

此诗前两句写的是自然景色，但开笔就有缩万里于咫尺，使咫尺有万里之势；后两句写意，写的出人意料，把哲理与景物、情势溶化得天衣无缝。

诗人受大自然震撼的心灵，悟出的是朴素而深刻的哲理，能够催人抛弃固步自封的浅见陋识，登高放眼，不断拓出愈益美好的崭新境界。

清代诗评家认为：“王诗短短二十字，前十字大意已尽，后十字有尺幅千里之势。”这首诗是唐代五言诗的压卷之作，王之涣因这首五言绝句而名垂千古，鹳雀楼也因此诗而名扬中华。

此诗虽然只有二十字，却以千钧巨椽，绘下北国河山的磅礴气势和壮丽景象，气势磅礴、意境深远，千百年来一直激励着中华民族昂扬向上。

特别是后二句，常常被引用，借以表达积极探索和无限进取的人生态度。时至今日，此诗还不时出现在中国国家重大政治和外交场合。

通常我们一首诗呢，是以一个整体的形式出现的，但是这首诗呢，有空格，有换行，位置参差不齐，我们如何把这个整体用代码展示出来呢？用字符串拼接就不太合适了，因为它太长了，那还有没有其他的方法呢？答案是当然有啦，首先看一下下面的例子，点击每个单句，它就会移动到我们的大盒子里。

    include svg/multi-line-strings.html

Python中的字符串是非常灵活的，但如果我们想去创建多行的字符串，我们就会看到一个 _{.code}SyntaxError_ 的错误。Python提供了一个解决方案：多行字符串。我们要使用三个引号( _{.code}"""_  或 _{.code}'''_ )，而不要使用一个，我们告诉程序这个字符串还没有结束呢，直到出现了下一个三个引号。如果要定义的字符串包含很多引号，并且我们希望确保我们不会过早关闭它，那么使用这个方法很有用的哦。

```python
leaves_of_grass = """
Poets to come! orators, singers, musicians to come!
Not to-day is to justify me and answer what I am for,
But you, a new brood, native, athletic, continental, greater than
  before known,
Arouse! for you must justify me.
"""
```

在上面的示例中，我们将大师的诗词内容赋值给变量。 即使引号中包含了多个换行符，但是该代码是仍然有效的！

如果多行字符串未分配变量，或者没有在表达式中使用的话，就将它当做注释。

##### 使用说明
_{input#multilinestrings(type="checkbox" disabled="disabled")}_  1. 分配字符串
```python
  Stranger, if you passing meet me and desire to speak to me, why
  should you not speak to me?
And why should I not speak to you?
```
到变量 _{.code}to\_you_ .

[继续](btn:next)

---

> id:review

### 小结

在本课程中，我们完成了很多事情！ 我们指示我们的电脑打印输出的消息，保存了这些信息作为变量，了解到这取决于我们在程序的一部分，以更新的消息。我们做了一些数学计算，并探讨了一些数学表达式，这是Python提供给我们的。 我们了解了一些不应该犯的错误和其他很好的技能，它们会一直为我们服务，顺便我们也提高了我们的编程技巧。

加油！

##### 使用说明
_{input#review(type="checkbox" disabled="disabled")}_ 1. 创建变量:
- _{.code}my\_age_
- _{.code}half\_my\_age_
- _{.code}greeting_
- _{.code}name_
- _{.code}greeting\_with\_name_

你可以将你所学的的知识将他们连接起来哦！

---

---
##  Freeform Project

---
> id:createinfo
### 为可爱的爱情座椅创建购买信息和收据
我们决定追求小企业主的梦想，在舰队街开一家名为“可爱的爱情座椅”的家具店，为整洁的套房服务。利用我们新发现的Python编程知识，我们将构建一个系统，以帮助加快为客户创建收据的过程。

在这个项目中，我们将在变量中存储家具商店目录的名称和价格。然后，您将处理客户的总价和项目列表，并将它们打印到输出终端。

**Please note:** 项目不会针对您的代码运行测试。这段经历对你的解释更加开放，给你探索的自由。请记住，在代码中引用所有变量之前，必须声明它们。

如果您在这个项目中遇到困难，或者希望看到有经验的开发人员完成它，请单击**get Help** 查看**项目演练视频**。

{.code} Tasks                                                                               20/20Complete

通过勾选任务，将任务标记为已完成

**添加的目录中**

[]1.让我们加入我们的第一件商品，可爱的Loveseat，这是商店的名字. 创建一个变量 _{.code}lovely_loveseat_description_  并且赋值字符串:


```
div#ide
    pre.initcode
        include codes/info.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```

```python
可爱的爱情座椅。木质簇绒涤纶混纺。32英寸高x 40英寸宽x 30英寸深。红色或白色。
```

{button.btn.btn-green} Stuck? Get a hint

Hint

给字符串变量赋值:

```python
variable_name = "This is a string"
```


2.太好了，现在让我们为爱情座椅制定一个价格。创建一个可变的lovely_loveseat_price，并将其设置为254.00。

{button.btn.btn-green}Stuck? Get a hint

3.让我们用另一件特色家具来扩充我们的库存吧！创建一个名为style_sette_description的变量，并为其分配以下字符串：

Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black.

4.现在让我们为我们的时尚长椅定价。创建一个可变的时尚沙发价格，并将其赋值为180.50。

5.太棒了，我们只需要一个项目，然后我们就可以开始工作了。创建一个名为luxurious_lamp_description的新变量，并将其指定如下：
Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade.

6.我们来定这个项目的价格吧。创建一个名为luxurious_lamp_price的变量，并将其设置为52.15


7.为了做生意，我们还应该计算营业税。我们也把它存储在一个变量中。定义变量 sales_tax 并且设置为 0.088. That’s 8.8%.

8.我们的第一个客户正在购买！让我们通过定义一个名为customer_one_total的变量来记录他们的开支。因为他们还没有购买任何东西，现在让我们将这个变量设置为0。

9.我们还应该保留一份他们所购买物品的描述清单。创建一个名为customer_one_iteminization的变量，并将其设置为空字符串“”。我们会在他们买东西的时候加上描述。

Stuck? Get a hint

10.我们的客户决定购买我们可爱的双人座椅！将价格加在客户的总价上。

Stuck? Get a hint
11.让我们开始跟踪客户购买的商品。将可爱的Loveseat的描述添加到customer_one_items中。

Stuck? Get a hint

12.我们的客户也决定购买豪华灯！我们把价格加在顾客的总数上。

Stuck? Get a hint

13.让我们保持最新的项目，并在我们的项目描述豪华灯。

14.他们准备好退房了！让我们从计算营业税开始。创建变量 customer_one_tax并且将其设置为customer_one_total乘以sales_tax。

Stuck? Get a hint
15.将增值税加到客户的总成本中。
Stuck? Get a hint

16.我们开始打印输出他们的收据吧！首先打印出项目的标题。打印短语“Customer One Items:”。
Stuck? Get a hint

17.打印输出 customer_one_itemization.
Stuck? Get a hint

18.现在为他们的总成本增加一个标题：打印输出"Customer One Total:"

19.现在把他们的总数打印出来！我们的第一个客户现在有了他们购买的东西的收据。

20.祝贺你！创建了我们的目录，并为我们的第一个客户提供服务。我们使用字符串和数字的知识来创建和更新变量。我们能够为我们的客户打印出一份详细的清单和总费用。

为可爱的爱情座椅创建购买信息和收据                                                          20/20Complete

---
## Multiple Quiz

**下面选项中，能创建变量并赋值为10的Python正确语句是?**


def variable_name = 10


variable_name = 10


variable_name == 10


new variable_name = 10

**仔细阅读代码，请问 输出的total_cost值是多少？**

```python
total_cost = 5

total_cost += 10

print(total_cost)
```

Incorrect:
10

Incorrect:
5

(Selected)Correct:
15

**当运行以下代码，会发生什么?**

```python
message = What a cool message!
print(message)
```

Incorrect:
“What a cool message!” gets printed to the console.

Incorrect:
“message” is printed.

(Selected)Correct:

Python throws a SyntaxError because the string is not surrounded by quotes.

**下面哪一个是注释的起始符？**

Incorrect:
*

(Selected)Correct:
#

Incorrect:
%

**仔细阅读代码，最后输出的值是多少？**

```python
cool_number = 12 + 30
cool_number * 5
print(cool_number)
```

Incorrect:
210

(Selected)Correct:
42

Incorrect:
cool_number

**整型和浮点型数字的区别是什么?**

(Selected)Correct:
A float represents decimal quantities. An int represents whole numbers.

Incorrect:
A float contains text information. An int is any number.

Incorrect:
A float can only be used with whole numbers. An int can be any number with a decimal point.

**经过以下的运算 modulo_variable的值是多少 ?**
```python
modulo_variable = 14 % 4
```

(Selected)Correct:
2

Incorrect:
3.5

Incorrect:
56

**下面的哪个操作会导致语法错误?**

Incorrect:
answer = "Is this an error"

Incorrect:
answer = is_this_an_error

(Selected)Correct:
answer = "Is this an error'

**如何在Python中定义多行字符串 ？**

(Selected)Correct:
"""
Like
This
"""
Incorrect:
***
Like
This
***
Incorrect:
###
Like
This
###

**下面定义的变量当中哪一个是字符串类型?**

```python
cool_variable_1 = 23.18
cool_variable_2 = 9
cool_variable_3 = "Important Message!"
cool_variable_4 = 14 ** 3
```

Incorrect:
cool_variable_1

Incorrect:
cool_variable_4

(Selected)Correct:
cool_variable_3

**下面哪一个函数能在终端上输出文本?**

Incorrect:
type()

Incorrect:
write()

(Selected)Correct:
print()

Incorrect:
output()

**下面哪个能在Python中正确的定义一个变量并且赋值为10?**

Incorrect:
def variable_name = 10

Incorrect:
variable_name == 10

(Selected)Correct:
variable_name = 10

Incorrect:
new variable_name = 10

**如何将两个字符串拼接在一起**

Incorrect:
string1.combine(string2)

Incorrect:
string1.concatenate(string2)


(Selected)Correct:
string1 + string2

**下面的表达式中 exponented_variable值是多少？ **

```python
exponented_variable = 2 ** 4
```

Incorrect:
8

(Selected)Correct:
16


---
## User Input Article

### 如何将用户的输入内容赋值给变量

到目前为止，我们已经讨论了如何在Python文件中直接分配变量值。然而，我们通常希望程序的用户在程序中输入新的信息。

输出一个变量的值使用函数print(), 同时我们可以使用input()函数将信息赋值给变量. input()函数需要一个提示消息，它将在用户输入新信息之前打印出来。例如：

```python
likes_snakes = input("Do you like snakes? ")
```
在上面的例子中，会出现以下情况：

程序会输出 “Do you like snakes? “ 给用户，提示用户输入相应的回答.
用户可以输入 (e.g., “Yes! I have seven pythons as pets!”).
变量likes_snakes 将被赋值用户的回答内容 (in this case, “Yes! I have seven pythons as pets!”).
试着自己构造一个语句来收集用户的输入！

用CODE模块填空，完成向用户询问 “What is your favorite flightless bird?” 并且存储回答在变量 favorite_flightless_bird中

input（）函数不仅可以用于从用户收集各种不同的信息，而且一旦将这些信息存储为变量，就可以使用它来模拟交互：

```python
>>> favorite_fruit = input("What is your favorite fruit? ")
What is your favorite fruit? mango
>>> print("Oh cool! I like " + favorite_fruit + " too, but I think my favorite fruit is apple.")
Oh yeah! I like mango too, but I think my favorite fruit is apple.
```
这些都是input（）的基本实现，但是随着您对Python越来越熟悉，您会发现越来越多有趣的场景需要与您的用户交互。
