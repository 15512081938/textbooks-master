# 文件

> stage: Files
> description: LEARN PYTHON: FILES

## 互动课

> section: interactivelesson

---

> id: readingafile

### 读取文件

计算机使用文件系统来存储和检索数据。每个文件都是相关信息的单独容器。如果您曾经保存过文档，下载了歌曲，甚至发送过电子邮件，那么您已经在某台计算机上创建了文件。甚至您正在学习环境中编辑的Python程序**script.py**也是一个文件。

那么，我们如何使用Python与文件交互？我们将学习如何使用代码读取和写入不同类型的文件。假设我们有一个名为**real_cool_document.txt****的文件，其中包含以下内容：

**real_cool_document.txt**

```python
Wowsers!
```

我们可以像这样读取该文件：reading_a_file.py

```python
with open('real_cool_document.txt') as cool_doc:
  cool_contents = cool_doc.read()
print(cool_contents)
```

这将打开一个名为的文件对象  _{code}cool_doc_ 。并创建一个新的缩进块，您可以在其中读取打开的文件的内容。然后，我们读取文件的内容  _{code}cool_doc_ 。 使用  _{code}cool_doc.read()_ 。 并将结果字符串保存到变量中  _{code}cool_contents_ 。 然后我们打印  _{code}cool_contents_ ，输出语句  _{code}Wowsers_ !

::: column.grow

#####  **使用说明**

_{input#readingafile(type="checkbox" disabled="disabled")}_  **1.** 使用  _{code}with_ 打开文件 **welcome.txt**。将文件对象另存为  _{code}text_file_ 。

_{button.btn.btn-yellow}卡住？ 得到提示_

```python
Use this syntax to open a file:
with open('filename.txt') as file_object:
# indented block here
```

_{input#readingafile(type="checkbox" disabled="disabled")}_   **2.** 阅读的内容   _{code}text_file_ 。 并将结果保存到中   _{code}text_data_ 。 

在文件对象上使用以下语法将文件内容读入变量：

```python
file_string = file_object.read()
```

_{input#readingafile(type="checkbox" disabled="disabled")}_   **3.** 打印出   _{code}text_data_ .

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingafile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingafile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: iteratingthroughlines


### 通过线迭代
读取文件时，我们可能希望像  _{code}.read()_ 返回一样将整个文档抓成一个字符串。但是，如果我们想将每一行存储在一个变量中怎么办？我们可以使用该  _{code}.readlines()_ 函数逐行读取文本文件，而不用整个内容。假设我们有一个文件：

**keats_sonnet.txt**

```python
To one who has been long in city pent,
’Tis very sweet to look into the fair
And open face of heaven,—to breathe a prayer
Full in the smile of the blue firmament.
```

**iterating_through_lines.py**

```python
with open('keats_sonnet.txt') as keats_sonnet:
  for line in keats_sonnet.readlines():
    print(line)
```
上面的脚本创建一个名为的临时文件对象  _{code}keats_sonnet_ 指向文件**keats_sonnet.txt**。然后，它遍历文档的每一行并打印出整个文件。

::: column.grow

#####  **使用说明**

_{input#iteratingthroughlines(type="checkbox" disabled="disabled")}_  **1.** 使用一条  _{code}with_ 语句创建一个指向文件**how_many_lines.txt**的文件对象。将该文件对象存储在变量中  _{code}lines_doc_ 。

请记住使用   _{code}with_ 语法打开文件：

```python
with open('filename.txt') as file_object:
  # indented block here
```

_{input#iteratingthroughlines(type="checkbox" disabled="disabled")}_   **2.**迭代通过每个中的线的  _{code}lines_doc.readlines()_ 使用  _{code}for_ 循环。
在for循环中，打印出**how_many_lines.txt**的每一行。
您可以使用以下语法来打印文件的每一行：

```python
for line in file_object.readlines():
  print(line)
```

::: column(width=680)


    div#ide
        pre.initcode
            include codes/iteratingthroughlines.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=iteratingthroughlines",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: readingaline

### 读线

有时，您不想遍历整个文件。为此，有一个不同的文件的方法，  _{code}.readline()_ ，这只会一次读取一行。如果以此方式逐行读取整个文档，则后续对的调用  _{code}.readline()_ 不会引发错误，但会开始返回空字符串（  _{code}""_ ）。假设我们有这个文件：
**millay_sonnet.txt**

```python
I shall forget you presently, my dear,
So make the most of this, your little day,
Your little month, your little half a year,
Ere I forget, or die, or move away,
```

**reading_a_line.py**

```python
with open('millay_sonnet.txt') as sonnet_doc:
  first_line = sonnet_doc.readline()
  second_line = sonnet_doc.readline()
  print(second_line)
```
该脚本还创建一个文件对象  _{code}sonnet_doc_ ，该文件对象指向文件**millay_sonnet.txt**。然后，使用读取第一行  _{code}sonnet_doc.readline()_ 并将其保存到变量中  _{code}first_line_ 。 然后，将第二行（  _{code}So make the most of this, your little day,_ ）保存到变量中  _{code}second_line_ ，然后将其打印出来。

::: column.grow

#####  **使用说明**

使用一条  _{code}with_ 语句，创建一个指向文件**just_the_first.txt**的文件对象。将该文件对象存储在变量中  _{code}first_line_doc_ 。

请记住使用  _{code}with_ 语法打开文件：

```python
with open('filename.txt') as file_object:
  # indented block here
```

_{input#readingaline(type="checkbox" disabled="disabled")}_   **2.**将**just_the_first.txt**的第一行保存到变量中  _{code}first_line_ 。
使用文件对象方法  _{code}.readline()_ 将一行存储到变量中  _{code}line_ 。

_{input#readingaline(type="checkbox" disabled="disabled")}_   **3.**打印出变量  _{code}first_line_ 。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingaline.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingaline",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: writingaline

### 写文件

读取文件是件好事，但是如果我们要创建自己的文件怎么办？使用Python，我们可以做到这一点。事实证明，我们  _{code}open()_ 用来打开文件以读取的函数需要另一个参数来打开要写入的文件。

**writing_a_line.py**

```python
with open('generated_file.txt', 'w') as gen_file:
  gen_file.write("What an incredible file!")
```

在这里，我们将参数传递  _{code}'w'_ 给  _{code}open()_ ，以指示以写模式打开文件。缺省参数是  _{code}'r'_ and，并且像往常一样  _{code}'r'_ 以  _{code}open()_ 读取模式打开文件。

此代码在**script.py**所在的文件夹中创建一个新文件，并为其提供文本  _{code}What an incredible file!_ 。 重要的是要注意，如果已经有一个名为**generated_file.txt**的文件，它将完全覆盖该文件，从而擦除之前的内容。

::: column.grow

#####  **使用说明**

_{input#writingaline(type="checkbox" disabled="disabled")}_  **1.** 使用带有的函数为文件**bad_bands.txt**创建文件对象。 _{code}open()_ 和  _{code}w_ 论据。将此对象分配给临时变量  _{code}bad_bands_doc_ 。

记住要使用该  _{code}with_ 语句打开文件，并传递  _{code}'w'_ 参数以写入模式打开它：

```python
with open('file_to_write.txt', 'w') as file_object:
  # indent
```

_{input#writingaline(type="checkbox" disabled="disabled")}_   **2.** 使用  _{code}bad_bands_doc.write()_ 方法将您不喜欢的音乐团体的名称添加到文档中  _{code}bad_bands_ 。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/writingaline.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=writingaline",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: appendingtoafile

### 附加到文件

因此，也许完全删除和覆盖现有文件会让您感到困扰。有没有办法只向文件添加一行而不完全删除它？当然有！不用使用  _{code}'w'_ write-mode 参数打开文件，而是使用  _{code}'a'_  append-mode 打开文件。如果我们生成的文件包含以下内容：

**generated_file.txt**

```python
This was a popular file...
```

然后，我们可以使用以下代码向该文件添加另一行：

**appending_to_a_file.py**

```python
with open('generated_file.txt', 'a') as gen_file:
  gen_file.write("... and it still is")
```

在上面的代码中，我们在临时变量中打开一个文件对象  _{code}gen_file_ 。 该变量指向文件**generated_file.txt**，并且由于它是在追加模式下打开的，因此将该行  _{code}... and it still is_ 作为新行添加到文件中。如果要在运行脚本后打开文件，它将如下所示：

**generated_file.txt**

```python
This was a popular file...
... and it still is
```
请注意，以append模式打开文件（  _{code}'a'_ 作为的参数）  _{code}open()_ ，这意味着使用文件对象的  _{code}.write()_ 方法会将传递到文件末尾的所有内容**追加**到新行中。如果我们再次运行**script.py**，则生成的文件的内容将如下所示：

**generated_file.txt**

```python
This was a popular file...
... and it still is
... and it still is
```

注意，我们已经  _{code}"... and it still is"_ 第二次附加到文件了！这是因为在**script.py**中，我们以附加模式打开了**generated_file.txt**。
::: column.grow

#####  **使用说明**

_{input#appendingtoafile(type="checkbox" disabled="disabled")}_  **1.**我们有一个文件**cool_dogs.txt**，其中充满了我们知道的所有酷狗。不知何故，在编制此列表时，我们忘记了一只非常酷的狗。让我们通过将他添加到**cool_dogs.txt**中来解决该问题。

在附加模式下打开我们的文件**cool_dogs.txt**并将其分配给文件对象**cool_dogs_file**。


_{input#appendingtoafile(type="checkbox" disabled="disabled")}_   **2.**在您的with块中，将“ Air Buddy”添加到**cool_dogs.txt**。空中伙伴（Air Buddy）是打篮球的金毛猎犬，这不仅仅使他有资格获得这份名单。

用于  _{code}cool_dogs_file.write()_ 在**cool_dogs.txt**的末尾添加一个字符串

::: column(width=680)


    div#ide
        pre.initcode
            include codes/appendingtoafile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=appendingtoafile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: whatiswithwith

### “with”是什么？
  _{code}with_ 到目前为止，我们一直在用此块打开这些文件，但是似乎只能在缩进块中使用文件变量似乎有点奇怪。这是为什么？该   _{code}with_ 关键字所调用一种叫做上下文管理器为我们调用的文件  _{code}open()_ 上。上下文管理器负责在调用时打开文件  _{code}open()_ ，然后在退出缩进块后关闭文件。

为什么关闭文件如此复杂？嗯，我们代码的大多数其他方面都处理Python本身控制的事情。您创建的所有变量：整数，列表，字典-这些都是Python对象，Python知道如何在使用它们时对其进行清理。由于您的文件存在于 Python脚本之外，因此我们需要在完成处理后告诉Python，以便它可以关闭与该文件的连接。不必要地打开文件连接可能会影响性能或影响计算机上可能正试图访问该文件的其他程序。

该   _{code}with_ 语法替换了您需要  _{code}.close()_ 手动调用文件对象的访问文件的旧方法。只要我们记得之后要关闭文件连接，我们仍然可以打开文件并使用旧语法附加到文件中。

```python
fun_cities_file = open('fun_cities.txt', 'a')

# We can now append a line to "fun_cities".
fun_cities_file.write("Montréal")

# But we need to remember to close the file
fun_cities_file.close()
```
在上面的脚本中，我们在文件**fun_cities.txt**中添加了“Montréal”作为新行。但是，由于我们使用的是旧式语法，因此我们必须记住之后要关闭文件。由于这必然更加冗长（至少需要多一行代码）而又没有表现力，  _{code}with_ 因此首选使用。

::: column.grow

#####  **使用说明**

_{input#whatiswithwith(type="checkbox" disabled="disabled")}_  **1.**在**what_is_with_with.py**中，有一个文件对象未正确关闭。让我们通过更改语法来修复它！

删除此行：

```python
close_this_file = open('fun_file.txt')
```
并将其更改为使用  _{code}with_ 我们先前练习中的语法。

记住要缩进身体的其余部分，这样我们就不会受伤  _{code}IndentError_ 。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/whatiswithwith.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=whatiswithwith",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: whatisacsvfile


### 什么是CSV文件？
文本文件不是Python可以读取的唯一内容，但它们是我们不需要任何其他解析库的唯一内容。CSV文件是文本文件的示例，该文本文件为其数据强加了结构。CSV代表逗号分隔值，而CSV文件通常是将电子表格软件（例如Microsoft Excel或Google表格）中的数据导出为可移植格式的方式。如下所示的电子表格

| 名称           | 用户名      | 电子邮件                                                   |
| -------------- | ------------- | ------------------------------------------------------- |
| Roger Smith    | rsmith        | [wigginsryan@yahoo.com](mailto:wigginsryan@yahoo.com)   |
| Michelle Beck  | mlbeck        | [hcosta@hotmail.com](mailto:hcosta@hotmail.com)         |
| Ashley Barker  | a_bark_x      | [a_bark_x@turner.com](mailto:a_bark_x@turner.com)       |
| Lynn Gonzales  | goodmanjames  | [lynniegonz@hotmail.com](mailto:lynniegonz@hotmail.com) |
| Jennifer Chase | chasej        | [jchase@ramirez.com](mailto:jchase@ramirez.com)         |
| Charles Hoover | choover       | [choover89@yahoo.com](mailto:choover89@yahoo.com)       |
| Adrian Evans   | adevans       | [adevans98@yahoo.com](mailto:adevans98@yahoo.com)       |
| Susan Walter   | susan82       | [swilliams@yahoo.com](mailto:swilliams@yahoo.com)       |
| Stephanie King | stephanieking | [sking@morris-tyler.com](mailto:sking@morris-tyler.com) |
| Erika Miller   | jessica32     | [ejmiller79@yahoo.com](mailto:ejmiller79@yahoo.com)     |
|                |               |                                                         |

在CSV文件中，相同的确切数据将被呈现为：

**users.csv**

```python
Name,Username,Email
Roger Smith,rsmith,wigginsryan@yahoo.com
Michelle Beck,mlbeck,hcosta@hotmail.com
Ashley Barker,a_bark_x,a_bark_x@turner.com
Lynn Gonzales,goodmanjames,lynniegonz@hotmail.com
Jennifer Chase,chasej,jchase@ramirez.com
Charles Hoover,choover,choover89@yahoo.com
Adrian Evans,adevans,adevans98@yahoo.com
Susan Walter,susan82,swilliams@yahoo.com
Stephanie King,stephanieking,sking@morris-tyler.com
Erika Miller,jessica32,ejmiller79@yahoo.com
```

请注意，CSV文件的第一行实际上并不代表任何数据，只是文件其余部分中存在的数据标签。文件的其余行与电子表格软件中的行相同，只是它们没有被分隔为不同的单元格，而是被分隔开了……好吧，我想可以说它们之间用逗号分隔了。

::: column.grow

#####  **使用说明**

_{input#whatisacsvfile(type="checkbox" disabled="disabled")}_  **1.** CSV文件只是纯文本文件！
  _{code}logger.csv_ 使用我们的标准  _{code}with_ 语法打开，将文件对象保存在临时变量中  _{code}log_csv_file_ 。

_{input#whatisacsvfile(type="checkbox" disabled="disabled")}_   **2.** 调用文件以打印出的内容。  _{code}logger.csv_ 和  _{code}.read()_ 请注意，它被解析为字符串。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/whatisacsvfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=whatisacsvfile",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: readingacsvfile

### 读取CSV文件

回顾上一次练习的CSV文件：

**users.csv**

```python
Name,Username,Email
Roger Smith,rsmith,wigginsryan@yahoo.com
Michelle Beck,mlbeck,hcosta@hotmail.com
Ashley Barker,a_bark_x,a_bark_x@turner.com
Lynn Gonzales,goodmanjames,lynniegonz@hotmail.com
```

即使我们可以毫无问题地将这些行读取为文本，也可以通过多种方式以更适合编程目的的格式访问数据。在Python中，我们可以使用  _{code}csv_ 库的  _{code}DictReader_ 对象将该数据转换为字典。这是我们在上表中创建所有用户的电子邮件地址列表的方式：

```python
import csv

list_of_email_addresses = []
with open('users.csv', newline='') as users_csv:
  user_reader = csv.DictReader(users_csv)
  for row in user_reader:
    list_of_email_addresses.append(row['Email'])
```
在上面的代码中，我们首先导入我们的  _{code}csv_ 库，这为我们提供了解析CSV文件的工具。然后  _{code}list_of_email_addresses_ ，我们创建一个空列表，稍后将使用CSV中的电子邮件地址填充该列表。然后，我们使用临时变量打开**users.csv**文件  _{code}users_csv_ 。

我们将额外的关键字参数  _{code}newline=''_ 传递给文件打开  _{code}open()_ 函数，以便我们不会意外地将其中一个数据字段的换行符误认为是CSV中的新行(有关详细信息，请参见[Python文档](https://docs.python.org/3/library/csv.html#id3))。

打开新的CSV文件后，我们使用 csv.DictReader使用者CSV它将CSV文件的行转换为可用于访问方法的Python词典。默认情况下，字典的键是CSV文件第一行中的条目。由于CSV的第一行将CSV中的第三个字段称为“  _{code}Email_ ”，因此我们可以将其用作DictReader每一行中的键。

当我们遍历  _{code}user_reader_ 对象的行时，我们以字典的方式访问CSV中的所有行（第一行除外，该行用于标记字典的键）。通过访问  _{code}"Email"_ 每行的键，我们可以获取该行中的电子邮件地址并将其附加到我们的  _{code}list_of_email_addresses_ 。

::: column.grow

#####  **使用说明**

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_  **1.** 导入  _{code}csv_ 模块。

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_   **2.**在临时变量  _{code}cool_csv_file_ 中打开文件**cool_csv.csv** 。

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_   **3.**使用  _{code}csv.DictReader_ 将的内容读取  _{code}cool_csv_file_ 到名为的新变量中  _{code}cool_csv_dict_ 。

  _{code}DictReader_ 使用以下语法创建它的构造函数：

```python
file_dict = csv.DictReader(file_object)
```

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_  **4.**  **cool_csv.csv** 包含有关CSV中每个人的一个很酷的事实。

对于每行  _{code}cool_csv_dict_ 打印出该行的  _{code}"Cool Fact"_ 。

您可以使用  _{code}for...in_ 语法在  _{code}DictReader_ 对象之间循环。这些对象中的每一个都是字典，文件的第一行指示键。

```python
for row in csv_file_dict:
  print(row['Key'])
```

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingacsvfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingacsvfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: readingdifferenttypesofcsvfiles

### 读取不同类型的CSV文件

我需要与您保持水平，在过去的两个练习中我一直在向您撒谎。好吧，有点。我们一直在将CSV文件视为逗号分隔值文件。CSV确实代表着这一点，但是如今，分隔值的其他方法也确实是有效的CSV文件。

人们过去常常将“制表符分隔的值”文件称为TSV文件，但是随着其他分隔符的普及，每个人都意识到  _{code}.[a-z]sv_ 为使用的每个值分隔符创建新的文件格式是不可持续的。

因此，我们将具有不同值列表的所有文件称为CSV文件，然后使用不同的定界符（例如逗号或制表符）来指示不同值在哪里开始和停止。

假设我们有一个通讯录。由于地址通常在其中使用逗号，因此我们需要对信息使用其他定界符。由于我们的数据中都没有分号（  _{code};_ ），因此我们可以使用分号。

**addresses.csv**

```python
Name;Address;Telephone
Donna Smith;126 Orr Corner Suite 857\nEast Michael, LA 54411;
906-918-6560
Aaron Osborn;6965 Miller Station Suite 485\nNorth Michelle, KS 64364;
815.039.3661x42816
Jennifer Barnett;8749 Alicia Vista Apt. 288\nLake Victoriaberg, TN 51094;
397-796-4842x451
Joshua Bryan;20116 Stephanie Stravenue\nWhitneytown, IA 87358;
(380)074-6173
Andrea Jones;558 Melissa Keys Apt. 588\nNorth Teresahaven, WA 63411;
+57(8)7795396386
Victor Williams;725 Gloria Views Suite 628\nEast Scott, IN 38095;
768.708.3411x954
```
注意  _{code}\n_ 字符，这是换行的转义序列。数据中的  _{code}\n_ 字符可能会换行，这就是为什么我们将  _{code}newline=''_ 关键字参数传递给  _{code}open()_ 函数的原因。

另请注意，其中许多地址中都有逗号！没关系，我们仍然可以阅读它。例如，如果我们想打印出此CSV文件中的所有地址，则可以执行以下操作：

```python
import csv

with open('addresses.csv', newline='') as addresses_csv:
  address_reader = csv.DictReader(addresses_csv, delimiter=';')
  for row in address_reader:
    print(row['Address'])
```

注意，当我们调用时， _{code}csv.DictReader_ 我们传入  _{code}delimiter_ 参数，该参数是用来在CSV中描绘单独字段的字符串。然后，我们遍历CSV并打印出每个地址。

::: column.grow

#####  **使用说明**

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_  **1.** 导入  _{code}csv_ 模块。

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_   **2.** 在变量  _{code}books_csv_ 中打开文件**books.csv** 。

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_   **3.**创建一个  _{code}DictReader_ 使用该  _{code}@_ 符号作为分隔符读取的实例  _{code}books_csv_ 。 将结果保存到名为的变量中  _{code}books_reader_ 。

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_  **4.**创建一个名为的列表  _{code}isbn_list_ ，进行迭代  _{code}books_reader_ 以获取CSV文件中每本书的ISBN号。将  _{code}['ISBN']_ 密钥用于传递给它的字典对象。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingdifferenttypesofcsvfiles.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingdifferenttypesofcsvfiles",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[继续](btn:next)

---
> id: writingacsvfile

### 编写CSV文件

自然，如果我们有能力读取不同的CSV文件，我们可能希望能够以编程方式创建CSV文件，以保存可以加载到电子表格软件中的输出和数据。假设我们有一大堆数据要保存到CSV文件中。我们可以执行以下操作：

```python
big_list = [
    {'name': 'Fredrick Stein', 'userid': 6712359021, 'is_admin': False},
    {'name': 'Wiltmore Denis', 'userid': 2525942, 'is_admin': False}, 
    {'name': 'Greely Plonk', 'userid': 15890235, 'is_admin': False},
    {'name': 'Dendris Stulo', 'userid': 572189563, 'is_admin': True}
] 

import csv

with open('output.csv', 'w') as output_csv:
  fields = ['name', 'userid', 'is_admin']
  output_writer = csv.DictWriter(output_csv, fieldnames=fields)

  output_writer.writeheader()
  for item in big_list:
    output_writer.writerow(item)
```
在上面的代码中，我们有一组字典，每个字典具有相同的键，是CSV的主要候选对象。我们导入  _{code}csv_ 库，然后通过将  _{code}'w'_ 参数传递给函数以写入模式打开新的CSV文件  _{code}open()_ 。

然后，我们将要使用的字段定义为称为的变量  _{code}fields_ 。 然后，我们实例化CSV编写器对象并传递两个参数。第一个是  _{code}output_csv_ ，文件处理程序对象。第二个是  _{code}fields_ 我们传递给关键字parameter 的字段列表  _{code}fieldnames_ 。

现在，我们已经实例化了CSV文件编写器，我们可以开始向文件本身添加行了！首先，我们需要标题，因此我们调用  _{code}.writeheader()_  writer对象。这会将传递到的所有字段写  _{code}fieldnames_ 为文件中的第一行。然后，我们遍历  _{code}big_list_ 数据。每个  _{code}item_ 输入  _{code}big_list_ 是一个字典，每个输入字段  _{code}fields_ 作为键。我们  _{code}output_writer.writerow()_ 用  _{code}item_ 字典来调用，字典将每一行写入CSV文件。

::: column.grow

#####  **使用说明**

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **1.**我们在工作区  _{code}access_log_ 中有一个列表，它是我们要写到CSV文件的词典的列表。

让我们从导入  _{code}csv_ 模块开始。

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_   **2.**在临时变量  _{code}logger_csv_ 中打开文件**logger.csv**。
不要忘记以写入模式打开文件。

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_   **3.**创建一个  _{code}csv.DictWriter_ 名为的实例  _{code}log_writer_ 。 作为第一个参数传递  _{code}logger_csv_ ，然后  _{code}fields_ 作为关键字参数传递给keyword  _{code}fieldnames_ 。

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **4.**使用方法写入标题。  _{code}log_writer_ .   _{code}.writeheader()_

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **5.**遍历  _{code}access_log_ 列表，然后使用将每个元素添加到CSV  _{code}log_writer.writerow()_ 。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/writingacsvfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=writingacsvfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: readingajsonfile

### 读取JSON文件

CSV不是Python具有内置库的唯一文件格式。我们还可以使用Python的文件工具来读取和写入JSON。JSON是JavaScript Object Notation的缩写，是一种受编程语言JavaScript启发的文件格式。像CSV这样的名称有点用词不当-一些JSON无效的JavaScript（很多JavaScript无效的JSON）。

JSON的格式与Python字典语法非常相似，因此从Python开发人员的角度来看，JSON文件可能易于读取。尽管如此，Python附带了一个json软件包，该软件包将帮助我们将JSON文件解析为实际的Python字典。假设我们有一个如下所示的JSON文件：

**purchase_14781239.json**

```json
'{
  "user": "ellen_greg",
  "action": "purchase",
  "item_id": 14781239,
}'
```

我们可以使用以下代码将其作为Python字典阅读：

**json_reader.py**

```python
import json

with open('purchase_14781239.json') as purchase_json:
  purchase_data = json.load(purchase_json)

print(purchase_data['user'])
# Prints 'ellen_greg'
```

首先，我们导入  _{code}json_ 包。我们使用trusty  _{code}open()_ 命令打开了文件。由于我们以读取模式打开它，因此我们只需要传递文件名即可。我们将文件保存在临时变量中  _{code}purchase_json_ 。

我们继续  _{code}purchase_json_ 使用进行解析  _{code}json.load()_ ，从文件中创建一个Python字典。将结果保存为  _{code}purchase_data_ 意味着我们可以与之交互。通过键入  _{code}purchase_data_ 对象，可以打印出JSON文件的值之一。

::: column.grow

#####  **使用说明**

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_  **1.** 让我们阅读一个JSON文件！首先导入  _{code}json_ 模块。

使用以下命令导入JSON库：

```python
import json
```

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_   **2.** 打开文件**message.json**，将文件对象保存到变量中  _{code}message_json_ 。

以读取模式打开文件，而无需将任何其他参数传递给  _{code}open()_ 。

记住打开文件的语法：

```python
with open('file.json') as file_json:
  pass
```

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_   **3.** 

将JSON文件对象作为参数传递给  _{code}json.load()_ ，并将生成的Python字典另存为  _{code}message_ 。


_{input#readingajsonfile(type="checkbox" disabled="disabled")}_  **4.** 打印输出  _{code}message['text']_ 。

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingajsonfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingajsonfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: writingajsonfile


### 编写JSON文件

当然，我们也可以使用该  _{code}json_ 库将Python对象转换为JSON。在使用Python库提供网页服务的实例中，这也特别有用。假设我们有一个Python字典要保存为JSON文件：

```python
turn_to_json = {
  'eventId': 674189,
  'dateTime': '2015-02-12T09:23:17.511Z',
  'chocolate': 'Semi-sweet Dark',
  'isTomatoAFruit': True
}
```

通过执行以下操作，我们将能够使用该信息创建JSON文件：

```python
import json

with open('output.json', 'w') as json_file:
  json.dump(turn_to_json, json_file)
```

我们导入 _{code}json_ 模块，在变量下打开一个写模式文件 _{code}json_file_ ，然后使用该 _{code}json.dump()_ 方法写入文件。  _{code}json.dump()_ 有两个参数：首先是数据对象，然后是您要保存的文件对象。

::: column.grow

#####  **使用说明**

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_  **1.** 在您的工作区中，我们放置了名为的字典 _{code}data_payload_ 。 我们要将其保存到名为**data.json**的文件中。

让我们从导入 _{code}json_ 库开始。

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_   **2.**在变量中打开一个新的文件对象  _{code}data_json_ 。 文件名应为  _{code}'data.json'_ 并且文件应以写模式打开。

记住要使用以下语法以写模式打开文件：

```python
with open('file.json', 'w') as file_json:
  pass
```

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_   **3.**使用 _{code}json.dump()_ 与 _{code}data_payload_ 和 _{code}data_json_ 调用，将我们的数据转换为JSON，然后将其保存到文件**data.json**中。

使用 _{code}json.dump()_ 与文件对象作为第二个参数写入生成的JSON到文件中：

```python
payload = {'message': 'OK'}
with open('file.json', 'w') as file_json:
  json.dump(payload, file_json)
```

::: column(width=680)


    div#ide
        pre.initcode
            include codes/writingajsonfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=writingajsonfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[继续](btn:next)

---
> id: review

### 评论

现在，您对文件了如指掌！您能够：

::: column.grow
- 使用 _{code}open()_ 和打开文件对象 _{code}with_ 。
- 使用Python的 _{code}.read()_ 方法读取文件的全部内容。
- 使用 _{code}.readline()_()_ 和逐行读取文件() _{code}.readlines()_ 。
- 通过以写模式打开它们来创建新文件。
- 通过以附加模式打开文件，以非破坏性方式附加到文件。
- 将以上所有内容应用于不同类型的数据传输文件，包括CSV和JSON！

::: column(width=640)


    div#ide
        pre.initcode
            include codes/review.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=review",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

您拥有以编程方式读取，写入和更新文件所需的所有技能，这是Python领域中非常有用的技能！

---

## 多项选择测验

> section: multiplechoicequiz

---

> id: multiplechoicequiz

有哪些不同的模式（作为参数传递给open（）函数）用于在Python中打开文件？

json.load

csv.DictReader

csv.DictWriter

[继续](btn:next)

---

有哪些不同的模式（作为参数传递给open（）函数）用于在Python中打开文件？

读模式（“ r”，默认模式），写模式（“ w”）和追加模式（“ a”）。

读取模式（“ r”，默认模式），删除模式（“ d”）和更新模式（“ u”）。

读模式（“ r”，默认模式），写模式（“ w”）和更新模式（“ u”）。

[继续](btn:next)

---

with命令在Python中有什么作用？

导入新模块供代码编写者使用。

以读取模式打开文件。

创建一个上下文管理器，在退出相邻的缩进块后执行清除。

[继续](btn:next)

---

以下哪项在Python中打开文件？

```python
with open('file1.txt') as file_obj:
  pass
```

```python
with open(file.txt) as file_obj:
  pass
```

```python
with file_obj = open('file.txt'):
  pass
```

[继续](btn:next)

---

文件对象（称为file_object）上的以下哪种方法读取文件的内容并将其作为字符串返回？

```python
file_contents = file_object.read()
```

```python
file_contents = file_object.get()
```

```python
file_contents = file_object.readlines()
```

```python
file_contents = file_object.readline()
```

[继续](btn:next)

---

哪种方法从名为file_object的文件对象变量中读取一行？

file_object.read()

file_object.readlines()

file_object.readline()

[继续](btn:next)

---

您将使用什么函数将Python数据呈现为JSON文件？

json.write()

json.dump()

json.writelines()

---

## 自由形式的项目

> section: freeformproject

---

> id: freeformproject

### 小试牛刀

 _{code}The Fender_ ，臭名昭著的计算机黑客和人民的恶棍，已经破坏了包括您自己在内的几个绝密密码。您的任务（如果您选择接受）是三重的。您必须获得对 _{code}The Fender_ 的系统的访问权，您必须更新其 _{code}"passwords.txt"_ 文件以加密秘密数据。您需要做的最后一件事是添加的签名 _{code}Slash Null_ ，这是另一位黑客， _{code}The Fender_ 如果他们将恶意行为视为 _{code}Slash Null_ 威胁，可以很方便地制止其恶行。

利用您对Python文件的了解来检索，操纵，遮掩和创建数据，以寻求正义。在探索Python文件编程强度的过程中，可以使用CSV文件和其他文本文件。

如果您在此项目中遇到麻烦，请查看帮助菜单中的**项目演练视频**。

::: column.grow

##### **任务**

选中任务以将其标记为完成

##### 读取密码

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **1.** 你在吗？我们已经打开了 _{code}The Fender_ 与秘密计算机的通信链接。我们需要您编写一个程序，以读取存储在名为的文件中的受损用户名和密码 _{code}"passwords.csv"_ 。

首先导入CSV模块，因为我们将需要它来解析数据。

您可以使用以下语法导入CSV模块：

```python
import csv
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_   **2.**我们需要创建一个密码被泄露的用户列表，创建一个新列表并将其保存到变量中 _{code}compromised_users_ 。

为 _{code}new_list_ 使用以下语法调用的变量创建新列表：

```python
new_list = []
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_   **3.**接下来，我们需要您打开文件本身。将其存储在名为的文件对象中 _{code}password_file_ 。

使用 _{code}with...as_ 语法打开文件，请记住该文件以缩进块开头：

```python
with open('filename.txt') as file_object:
  # pass
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **4.**将 _{code}password_file_ 对象持有人传递给我们的CSV阅读器进行解析。将已解析的 _{code}csv.DictReader_ 对象另存为 _{code}password_csv_ 。

```python
parsed_csv = csv.DictReader(file_object)
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **5.**现在，我们要遍历CSV中的每一行。

创建一个for循环并将CSV的每一行保存到临时变量中 _{code}password_row_ 。
  Now we’ll want to iterate through each of the lines in the CSV.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **6.**在 _{code}for_ 循环中，打印出 _{code}password_row['Username']_ 。 这是密码被泄露的人的用户名。
运行您的代码，您是否看到用户名列表？ 

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **7.** 删除该 _{code}print_ 语句。我们要将每个用户名添加到的列表中  _{code}compromised_users_  。 使用列表的 _{code}.append()_ 方法将用户名添加到， _{code}compromised_users_ 而不是打印它们。

列表的 _{code}.append()_ 方法将其添加到列表中。

```python
my_list.append(my_dict['Key'])
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **8.**退出你的了 _{code}with_ 块  _{code}"passwords.csv"_ 。 我们拥有该文件中所需的所有数据。

开始一个新 _{code}with_ 块，打开一个名为的文件 _{code}compromised_users.txt_ 。 以写模式打开此文件，将文件对象另存为 _{code}compromised_user_file_ 。

您可以通过将 _{code}"w"_ 参数作为传递给以写入模式打开文件 _{code}open()_。

```python
with open('new_file.txt', 'w') as new_file:
  # write to file here
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **9.** 在该 _{code}with_ 语句打开的新的上下文管理块内，启动一个新 _{code}for_ 循环。
遍历每个 _{code}compromised_users_ 。

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **10.**写入每个的用户名 _{code}compromised_user_ 中 _{code}compromised_users_ ，以 _{code}compromised_user_file_ 。

使用文件对象的 _{code}.write()_ 方法： 

```python
write_me = "write me to file"
with open('file.txt', 'w') as file_obj:
  file_obj.write(write_me)
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **11.**退出该 _{code}with_ 街区。到目前为止，您的表现很棒！我们已经掌握了需要作为保障的数据  _{code}The Fender_ 。

##### 通知老板

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **12.**您的老板需要知道您已成功检索了这些受损的数据。我们需要通过互联网向他发送编码消息。让我们使用JSON来做到这一点。

首先，我们需要导入 _{code}json_ 模块。

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **13.**在名为的写入模式下打开一个新的JSON文件 _{code}boss_message.json_ 。 将文件对象保存到变量 _{code}boss_message_ 。

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **14.**在您的 _{code}with_ 语句中创建一个Python词典对象，以中继上司消息。叫这个 _{code}boss_message_dict_ 。

给它一个  _{code}"recipient"_ 带值的钥匙  _{code}"The Boss"_ 。

还给它一个 _{code}"message"_ 带有值的密钥  _{code}"Mission Success"_ 。

使用花括号  _{code}{_ 和定义Python字典  _{code}}_ ：

```python
new_dict = {
  'key1': 'val1',
  'key2': 'val2'
}
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **15.** 写出来 _{code}boss_message_dict_ 给 _{code}boss_message_ 使用 _{code}json.dump()_ 。
 _{code}json.dump()_  接受两个参数：一个Python数据对象（如字典或数组）和一个文件对象，用于将生成的JSON写入其中。
传递两个参数，  _{code}json.dump()_ 例如：

```python
json.dump(dict_obj, file_obj)
```

##### 加密密码

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **16.**现在我们已经安全地恢复了受到感染的用户，我们将要  _{code}"passwords.csv"_ 完全删除该文件。

创建一个新 _{code}with_ 块并 _{code}"new_passwords.csv"_ 以写模式打开。将文件对象保存到名为的变量中 _{code}new_passwords_obj_ 。

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **17.** 人民公敌， _{code}Slash Null_ ，是我们想要谁 _{code}The Fender_ 想到是这种攻击的背后。他有一个签名，每当他入侵某人时，便将此签名添加到他触摸的文件之一中。这是签名：

```python
 _  _     ___   __  ____             
/ )( \   / __) /  \(_  _)            
) \/ (  ( (_ \(  O ) )(              
\____/   \___/ \__/ (__)             
 _  _   __    ___  __ _  ____  ____  
/ )( \ / _\  / __)(  / )(  __)(    \ 
) __ (/    \( (__  )  (  ) _)  ) D ( 
\_)(_/\_/\_/ \___)(__\_)(____)(____/ 
        ____  __     __   ____  _  _ 
 ___   / ___)(  )   / _\ / ___)/ )( \
(___)  \___ \/ (_/\/    \\___ \) __ (
       (____/\____/\_/\_/(____/\_)(_/
 __ _  _  _  __    __                
(  ( \/ )( \(  )  (  )               
/    /) \/ (/ (_/\/ (_/\             
\_)__)\____/\____/\____/
```
将其另存为多行字符串到变量中 _{code}slash_null_sig_ 。

请记住，您可以使用三个引号开头多行字符串：

```python
multiline_str = """
  ___  __    __   __   
 / __)/  \  /  \ (  )  
( (__(  O )(  O )/ (_/\
 \___)\__/  \__/ \____/
"""
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **18.** 写信 _{code}slash_null_sig_ 给 _{code}new_passwords_obj_ 。 现在我们有了替换文件 _{code}passwords.csv_ ！

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **19.**多么令人难以置信的成功！如果您 _{code}The Fender_ 将来想练习黑客，我们将把新密码文件移到旧密码文件上。

::: column(width=640)


    div#ide
        pre.initcode
            include codes/freeformproject.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=freeformproject",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

谢谢您的服务，程序员。