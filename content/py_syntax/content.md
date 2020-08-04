# Syntax

> stage: Foundations
> description: LEARN PYTHON: SYNTAX

> section: interactive-lesson
> id: interactive-lesson

##  Interactive lesson

---
> section: welcome
> id: welcome

###  Welcome

`yy_pp`

_{.code}yy\_pp_

{.code}yy_pp M

Python is a programming language. Like other languages, it gives us a way to communicate ideas. In the case of a programming language, these ideas are “commands” that people use to communicate with a computer!

We convey our commands to the computer by writing them in a text file using a programming language. These files are called **programs**. Running a program means telling a computer to read the text file, translate it to the set of operations that it understands, and perform those actions.

##### Instructions

Change `Camluni` to your name in the script to the right. Run the code to see what it does! As soon as you’re ready, move on to the next exercise to begin learning to write your own Python programs!

```
div#ide
    pre.initcode
        include codes/welcome1.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```

Concept Review

Want to quickly review some of the concepts you’ve been learning? Take a look at this material's [cheatsheet!](https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-syntax/cheatsheet)

Community Forums

Here are some helpful links to the top questions asked by coders about this exercise:

1. Why do I need to enter my name on a different line?

2. How can I use an integer in a print function?


[Continue](btn:next)

---
> section: comments
> id: comments1

### Comments

Ironically, the first thing we’re going to do is show how to tell a computer to ignore a part of a program. Text written in a program but not run by the computer is called a comment. Python interprets anything after a # as a comment.

```
div#ide
    pre.initcode
        include codes/comments1.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```
Comments can:

* Provide context for why something is written the way it is:

```python
# This variable will be used to count the number of times anyone tweets the 
word persnickety
persnickety_count = 0
```
* Help other people reading the code understand it faster:

```python
# This code will calculate the likelihood that it will rain tomorrow
complicated_rain_calculation_for_tomorrow()
```
* Ignore a line of code and see how a program will run without it:

```python
# useful_value = old_sloppy_code()
useful_value = new_clean_code()
```
##### Instructions
[x] 1.
Documentation is an important step in programming. Write a comment describing the first program you want to write!


Stuck? Get a hint
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Here are some helpful links to the top questions asked by coders about this exercise:

In the context of this exercise that introduces comments, where should comments be added to the code? Can I just add comments to every line of code to be safe?
Why is there no output in the terminal?
How to make multiline comments, and autocompletion of quotes
Still have questions? View this exercise's thread in the Codecademy Forums.

[Continue](btn:next)

---

> id: print46

### Print
Now what we’re going to do is teach our computer to communicate. The gift of speech is valuable: a computer can answer many questions we have about “how” or “why” or “what” it is doing. In Python, the print() function is used to tell a computer to talk. The message to be printed should be surrounded by quotes:

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
In the above example, we direct our program to print() an excerpt from a notable book. The printed words that appear as a result of the print() function are referred to as output. The output of this example program would be:

```python
There is something at work in my soul, which I do not understand.
```
##### Instructions

1.
Print the distinguished greeting “Hello world!”

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Here are some helpful links to the top questions asked by coders about this exercise:

Are quotes always necessary inside of a print() ?
How can I use quotes inside of a string?
How can I skip or jump to a new line while printing?
Still have questions? View this exercise's thread in the Codecademy Forums.


[Continue](btn:next)

---

> id: strings1

### Strings

Computer programmers refer to blocks of text as strings. In our last exercise, we created the string “Hello world!”. In Python a string is either surrounded by double quotes ("Hello world") or single quotes ('Hello world'). It doesn’t matter which kind you use, just be consistent.

- [x] Instructions
- [x] 1.
  Print your name using the print() command.


- [x] Stuck? Get a hint
- [x] 2.
  If your print statement uses double-quotes ", change them to single-quotes '. If it uses single-quotes ', change them to double-quotes ".

Try running your code again after switching the type of quote-marks. Is anything different about the output?

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy

[Continue](btn:next)

---

> id: variables1

### Variables

Programming languages offer a method of storing data for reuse. If there is a greeting we want to present, a date we need to reuse, or a user ID we need to remember we can create a variable which can store a value. In Python, we assign variables by using the equals sign (=).

```python
message_string = "Hello there"
# Prints "Hello there"
print(message_string)
```

In the above example, we store the message “Hello there” in a variable called message_string. Variables can’t have spaces or symbols in their names other than an underscore (_). They can’t begin with numbers but they can have numbers after the first letter (e.g., cool_variable_5 is OK).

It’s no coincidence we call these creatures “variables”. If the context of a program changes, we can update a variable but perform the same logical process on it.

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

Above, we create the variable message_string, assign a welcome message, and print the greeting. After we greet the user, we want to wish them goodbye. We then update message_string to a departure message and print that out.

- [x] Instructions
- [x] 1.
  Update the variable meal to reflect each meal of the day before we print it.

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:errors1
### Errors

Humans are prone to making mistakes. Humans are also typically in charge of creating computer programs. To compensate, programming languages attempt to understand and explain mistakes made in their programs.

Python refers to these mistakes as errors and will point to the location where an error occurred with a ^ character. When programs throw errors that we didn’t expect to encounter we call those errors bugs. Programmers call the process of updating the program so that it no longer produces unexpected errors debugging.

Two common errors that we encounter while writing Python are SyntaxError and NameError.

* SyntaxError means there is something wrong with the way your program is written — punctuation that does not belong, a command where it is not expected, or a missing parenthesis can all trigger a SyntaxError.

* A NameError occurs when the Python interpreter sees a word it does not recognize. Code that contains something that looks like a variable but was never defined will throw a NameError.

- [x] Instructions
- [x] 1.
  You might encounter a SyntaxError if you open a string with double quotes and end it with a single quote. Update the string so that it starts and ends with the same punctuation.

You might encounter a NameError if you try to print a single word string but fail to put any quotes around it. Python expects the word of your string to be defined elsewhere but can’t find where it’s defined. Add quotes to either side of the string to squash this bug.

Update the malformed strings in the workspace to all be strings.

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:numbers

### Numbers

Computers can understand much more than just strings of text. Python has a few numeric data types. It has multiple ways of storing numbers. Which one you use depends on your intended purpose for the number you are saving.

An integer, or int, is a whole number. It has no decimal point and contains all counting numbers (1, 2, 3, …) as well as their negative counterparts and the number 0. If you were counting the number of people in a room, the number of jellybeans in a jar, or the number of keys on a keyboard you would likely use an integer.

A floating-point number, or a float, is a decimal number. It can be used to represent fractional quantities as well as precise measurements. If you were measuring the length of your bedroom wall, calculating the average test score of a seventh-grade class, or storing a baseball player’s batting average for the 1998 season you would likely use a float.

Numbers can be assigned to variables or used literally in a program:

```python
an_int = 2
a_float = 2.1

print(an_int + 3)
# prints 5
```

Above we defined an integer and a float as the variables an_int and a_float. We printed out the sum of the variable an_int with the number 3. We call the number 3 here a literal, meaning it’s actually the number 3 and not a variable with the number 3 assigned to it.

Floating-point numbers can behave in some unexpected ways due to how computers store them. For more information on floating-point numbers and Python, review Python’s documentation on floating-point limitations.

- [x] Instructions
- [x]1.
  A recent movie-going experience has you excited to publish a review. You rush out of the cinema and hastily begin programming to create your movie-review website: The Big Screen’s Greatest Scenes Decided By A Machine.

Create the following variables and assign integer numbers to them: release_year and runtime.


Stuck? Get a hint
2.
Now, create the variable rating_out_of_10 and assign it a float number between one and ten.


Stuck? Get a hint
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:calculations

### Calculations

Computers absolutely excel at performing calculations. The “compute” in their name comes from their historical association with providing answers to mathematical questions. Python performs addition, subtraction, multiplication, and division with +, -, *, and /.

```python 
# Prints "500"
print(573 - 74 + 1)

# Prints "50"
print(25 * 2)

# Prints "2.0"
print(10 / 5)
```

Notice that when we perform division, the result has a decimal place. This is because Python converts all ints to floats before performing division. In older versions of Python (2.7 and earlier) this conversion did not happen, and integer division would always round down to the nearest integer.

Division can throw its own special error: ZeroDivisionError. Python will raise this error when attempting to divide by 0.

Mathematical operations in Python follow the standard mathematical order of operations.

-[x] Instructions
-[x]1.Print out the result of this equation: 25 * 68 + 13 / 28


Stuck? Get a hint
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:changingNO

### Changing Numbers

Variables that are assigned numeric values can be treated the same as the numbers themselves. Two variables can be added together, divided by 2, and multiplied by a third variable without Python distinguishing between the variables and literals (like the number 2 in this example). Performing arithmetic on variables does not change the variable — you can only update a variable using the = sign.

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

We create two variables and assign numeric values to them. Then we perform a calculation on them. This doesn’t update the variables! When we update the coffee_price variable and perform the calculations again, they use the updated values for the variable!

-[x] Instructions
-[x]1.
You’ve decided to get into quilting! To calculate the number of squares you’ll need for your first quilt let’s create two variables: quilt_width and quilt_length. Let’s make this first quilt 8 squares wide and 12 squares long.

-[x]2.
Print out the number of squares you’ll need to create the quilt!

-[x]3.
It turns out that quilt required a little more material than you have on hand! Let’s only make the quilt 8 squares long. How many squares will you need for this quilt instead?

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:exponents

### Exponents

Python can also perform exponentiation. In written math, you might see an exponent as a superscript number, but typing superscript numbers isn’t always easy on modern keyboards. Since this operation is so related to multiplication, we use the notation **.

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

Here, we compute some simple exponents. We calculate 2 to the 10th power, 8 to the 2nd power, 9 to the 3rd power, and 4 to the 0.5th power.

-[x]Instructions
-[x]1.
You really like how the square quilts from last exercise came out, and decide that all quilts that you make will be square from now on.

Using the exponent operator, print out how many squares you’ll need for a 6x6 quilt, a 7x7 quilt, and an 8x8 quilt.

-[x]2.
Your 6x6 quilts have taken off so well, 6 people have each requested 6 quilts. Print out how many tiles you would need to make 6 quilts apiece for 6 people.


Stuck? Get a hint
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums

- Here are some helpful links to the top questions asked by coders about this exercise:
  How many squares for 6 people who want 6 quilts of 6x6 squares?
  Do spaces in python expressions do anything?
  In this exercise, the exponent operator is used for positive exponents. Does exponentiation work with negative exponents as well?
  Still have questions? View this exercise's thread in the Codecademy Forums.

[Continue](btn:next)

---

> id:modulo

### Modulo

Python offers a companion to the division operator called the modulo operator. The modulo operator is indicated by % and gives the remainder of a division calculation. If the number is divisible, then the result of the modulo operator will be 0.

```python
# Prints 4 because 29 / 5 is 5 with a remainder of 4
print(29 % 5)

# Prints 2 because 32 / 3 is 10 with a remainder of 2
print(32 % 3)

# Modulo by 2 returns 0 for even numbers and 1 for odd numbers
# Prints 0
print(44 % 2)
```

Here, we use the modulo operator to find the remainder of division operations. We see that 29 % 5 equals 4, 32 % 3 equals 2, and 44 % 2 equals 0.

The modulo operator is useful in programming when we want to perform an action every nth-time the code is run. Can the result of a modulo operation be larger than the divisor? Why or why not?

[x]Instructions
[x]1.
You’re trying to divide a group into four teams. All of you count off, and you get number 27.

Find out your team by computing 27 modulo 4. Save the value to my_team.

[x]2.
Print out my_team. What number team are you on?

[x]3.
Food for thought: what number team are the two people next to you (26 and 28) on? What are the numbers for all 4 teams?

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:concatenation

### Concatenation

The + operator doesn’t just add two numbers, it can also “add” two strings! The process of combining two strings is called string concatenation. Performing string concatenation creates a brand new string comprised of the first string’s contents followed by the second string’s contents (without any added space in-between).

```python
greeting_text = "Hey there!"
question_text = "How are you doing?"
full_text = greeting_text + question_text

# Prints "Hey there!How are you doing?"
print(full_text)
```

In this sample of code, we create two variables that hold strings and then concatenate them. But we notice that the result was missing a space between the two, let’s add the space in-between using the same concatenation operator!

```python
full_text = greeting_text + " " + question_text

# Prints "Hey there! How are you doing?"
print(full_text)
```

Now the code prints the message we expected.

If you want to concatenate a string with a number you will need to make the number a string first, using the str() function. If you’re trying to print() a numeric variable you can use commas to pass it as a different argument rather than converting it to a string.

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

Using str() we can convert variables that are not strings to strings and then concatenate them. But we don’t need to convert a number to a string for it to be an argument to a print statement.

[x]Instructions
[x]1.
Concatenate the strings and save the message they form in the variable message.

Now uncomment the print statement and run your code to see the result in the terminal!

Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:plusequals

### Plus Equals

Python offers a shorthand for updating variables. When you have a number saved in a variable and want to add to the current value of the variable, you can use the += (plus-equals) operator.

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

Above, we keep a running count of the number of miles a person has gone hiking over time. Instead of recalculating from the start, we keep a grand total and update it when we’ve gone hiking further.

The plus-equals operator also can be used for string concatenation, like so:

```python
hike_caption = "What an amazing time to walk through nature!"

# Almost forgot the hashtags!
hike_caption += " #nofilter"
hike_caption += " #blessed"
```

We create the social media caption for the photograph of nature we took on our hike, but then update the caption to include important social media tags we almost forgot.

[x]Instructions
[x]1.
We’re doing a little bit of online shopping and find a pair of new sneakers. Right before we check out, we spot a nice sweater and some fun books we also want to purchase!

Use the += operator to update the total_price to include the prices of nice_sweater and fun_books.

The prices (also included in the workspace) are:

new_sneakers = 50.00
nice_sweater = 39.00
fun_books = 20.00
Concept Review
Want to quickly review some of the concepts you’ve been learning? Take a look at this material's cheatsheet!
Community Forums
Get help and ask questions in the Codecademy Forums.

[Continue](btn:next)

---

> id:multilinestrings

### Multi-line Strings
We should have learned this poem in Chinese class: "Dēng guàn què lóu" (Dēng guàn què lóu). This poem is a poem written by the poet Wang Zhihuan in the Tang Dynasty.

The first two sentences of this poem are about natural scenery, but when you start, you can shrink thousands of miles and make thousands of miles away. The second two sentences are freehand and unexpected, melting the philosophy, scenery, and situation seamlessly.

The poet's soul shocked by nature realizes the simple and profound philosophy, which can urge people to abandon the simple insights that stand still, climb high and look forward, and constantly open up new and better realms.

Poetry critics in the Qing Dynasty believed that: "Wang's poem is short with two crosses, the front cross has the effect of being exhausted, and the back cross has the potential to be thousands of miles in size." This poem is the volume of the five-character poem in the Tang Dynasty. The quatrains have been named for the ages, and the Guanquelou is also famous in China for this poem.

Although this poem has only two crosses, it uses a huge rafter to depict the majestic and magnificent scenes of the rivers and mountains of the North. It is magnificent and profound, and has been inspiring the Chinese nation for thousands of years.

Especially the last two sentences are often quoted to express the attitude of active exploration and infinite progress in life. To this day, this poem still appears on major political and diplomatic occasions in China from time to time.

Usually we have a poem in the form of a whole, but this poem has spaces, line breaks, and uneven positions. How can we show this whole in code? It is not suitable to use string concatenation because it is too long. Is there any other way? The answer is of course there is, first look at the following example, click on each single sentence, it will move to our big box.

    include svg/multi-line-strings.html

The above small example illustrates how important it is to speak clearly at one time. At this time, it involves our knowledge points, multi-line strings
Python strings are very flexible, but if we try to create a string that occupies multiple lines we find ourselves face-to-face with a _{.code}SyntaxError_ . Python offers a solution: multi-line strings. By using three quote-marks ( _{.code}"""_  or _{.code}'''_ ) instead of one, we tell the program that the string doesn’t end until the next triple-quote. This method is useful if the string being defined contains a lot of quotation marks and we want to be sure we don’t close it prematurely.

```python
leaves_of_grass = """
Poets to come! orators, singers, musicians to come!
Not to-day is to justify me and answer what I am for,
But you, a new brood, native, athletic, continental, greater than
  before known,
Arouse! for you must justify me.
"""
```
In the above example, we assign a famous poet’s words to a variable. Even though the quote contains multiple linebreaks, the code works!

If a multi-line string isn’t assigned a variable or used in an expression it is treated as a comment.


##### Instructions
_{input#multilinestrings(type="checkbox" disabled="disabled")}_  1.Assign the string 
```python
  Stranger, if you passing meet me and desire to speak to me, why
  should you not speak to me?
And why should I not speak to you?
```
to the variable _{.code}to\_you_ .

[Continue](btn:next)

---

> id:review

### Review

In this lesson, we accomplished a lot of things! We instructed our computers to print messages, we stored these messages as variables, and we learned to update those messages depending on the part of the program we were in. We performed mathematical calculations and explored some of the mathematical expressions that Python offers us. We learned about errors and other valuable skills that will continue to serve us as we develop our programming skills.

Good job!

##### Instructions
_{input#review(type="checkbox" disabled="disabled")}_ 1.Create variables:
- _{.code}my\_age_
- _{.code}half\_my\_age_
- _{.code}greeting_
- _{.code}name_
- _{.code}greeting\_with\_name_

Assign values to each using your knowledge of division and concatenation!

---

##  Freeform Project

---
> id:createinfo
### Create Purchasing Information and Receipts for Lovely Loveseats
We’ve decided to pursue the dream of small-business ownership and open up a furniture store called Lovely Loveseats for Neat Suites on Fleet Street. With our newfound knowledge of Python programming, we’re going to build a system to help speed up the process of creating receipts for your customers.

In this project, we will be storing the names and prices of a furniture store’s catalog in variables. You will then process the total price and item list of customers, printing them to the output terminal.

**Please note:** Projects do not run tests against your code. This experience is more open to your interpretation and gives you the freedom to explore. Remember that all variables must be declared before they are referenced in your code.

If you get stuck during this project or would like to see an experienced developer work through it, click **“Get Help“** to see a **project walkthrough video**.

{.code} Tasks                                                                               20/20Complete

Mark the tasks as complete by checking them off

**Adding In The Catalog**

[]1.
Let’s add in our first item, the Lovely Loveseat that is the store’s namesake. Create a variable called 
_{.code}lovely_loveseat_description_  and assign to it the following string:


```
div#ide
    pre.initcode
        include codes/info.py
    iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%;height: 500px; border: none;")
```

```python
Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches wide x 30 inches deep. Red or white.
```

{button.btn.btn-green} Stuck? Get a hint

Hint

Recall string assignment syntax:

```python
variable_name = "This is a string"
```


2.
Great, now let’s create a price for the loveseat. Create a variable lovely_loveseat_price and set it equal to 254.00.


{button.btn.btn-green}Stuck? Get a hint

3.
Let’s extend our inventory with another characteristic piece of furniture! Create a variable called stylish_settee_description and assign to it the following string:

Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black.
4.
Now let’s set the price for our Stylish Settee. Create a variable stylish_settee_price and assign it the value of 180.50.

5.
Fantastic, we just need one more item before we’re ready for business. Create a new variable called luxurious_lamp_description and assign it the following:

Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade.
6.
Let’s set the price for this item. Create a variable called luxurious_lamp_price and set it equal to 52.15.

7.
In order to be a business, we should also be calculating sales tax. Let’s store that in a variable as well.

Define the variable sales_tax and set it equal to .088. That’s 8.8%.

Our First Customer
8.
Our first customer is making their purchase! Let’s keep a running tally of their expenses by defining a variable called customer_one_total. Since they haven’t purchased anything yet, let’s set that variable equal to 0 for now.

9.
We should also keep a list of the descriptions of things they’re purchasing. Create a variable called customer_one_itemization and set that equal to the empty string "". We’ll tack on the descriptions to this as they make their purchases.


Stuck? Get a hint
10.
Our customer has decided they are going to purchase our Lovely Loveseat! Add the price to customer_one_total.


Stuck? Get a hint
11.
Let’s start keeping track of the items our customer purchased. Add the description of the Lovely Loveseat to customer_one_itemization.


Stuck? Get a hint
12.
Our customer has also decided to purchase the Luxurious Lamp! Let’s add the price to the customer’s total.


Stuck? Get a hint
13.
Let’s keep the itemization up-to-date and add the description of the Luxurious Lamp to our itemization.

14.
They’re ready to check out! Let’s begin by calculating sales tax. Create a variable called customer_one_tax and set it equal to customer_one_total times sales_tax.


Stuck? Get a hint
15.
Add the sales tax to the customer’s total cost.


Stuck? Get a hint
16.
Let’s start printing up their receipt! Begin by printing out the heading for their itemization. Print the phrase "Customer One Items:".


Stuck? Get a hint
17.
Print customer_one_itemization.


Stuck? Get a hint
18.
Now add a heading for their total cost: Print out "Customer One Total:"

19.
Now print out their total! Our first customer now has a receipt for the things they purchased.

20.
Congratulations! We created our catalog and served our first customer. We used our knowledge of strings and numbers to create and update variables. We were able to print out an itemized list and a total cost for our customer. Lovely!


Create Purchasing Information and Receipts for Lovely Loveseats
20/20Complete

---
## Multiple Quiz

**What is Python syntax for creating a variable and assigning the number 10 to it?**


def variable_name = 10


variable_name = 10


variable_name == 10


new variable_name = 10

**What is the value of total_cost that gets printed?**

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

**What happens when running the following code?**

```python
message = What a cool message!
print(message)
```

Incorrect:
“What a cool message!” gets printed to the console.

Incorrect:
“message” is printed.

(Selected)Correct:

**Python throws a SyntaxError because the string is not surrounded by quotes.**

What character begins a comment in Python?

Incorrect:
*

(Selected)Correct:
#

Incorrect:
%

**What is the output of the following code?**

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

**What is the difference between a float and an int?**

(Selected)Correct:
A float represents decimal quantities. An int represents whole numbers.

Incorrect:
A float contains text information. An int is any number.

Incorrect:
A float can only be used with whole numbers. An int can be any number with a decimal point.

**What is the value of modulo_variable in the following expression?**
```python
modulo_variable = 14 % 4
```

(Selected)Correct:
2

Incorrect:
3.5

Incorrect:
56

**Which of the following will produce a SyntaxError?**

Incorrect:
answer = "Is this an error"

Incorrect:
answer = is_this_an_error

(Selected)Correct:
answer = "Is this an error'

**How does one define a multi-line string in Python?**

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

**Which of the following defined variables is a string?**

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

**Which function outputs text to the terminal?**

Incorrect:
type()

Incorrect:
write()

(Selected)Correct:
print()

Incorrect:
output()

**What is Python syntax for creating a variable and assigning the number 10 to it?**

Incorrect:
def variable_name = 10

Incorrect:
variable_name == 10

(Selected)Correct:
variable_name = 10

Incorrect:
new variable_name = 10

**How do you combine two strings?**

Incorrect:
string1.combine(string2)

Incorrect:
string1.concatenate(string2)


(Selected)Correct:
string1 + string2

**What number is saved to exponented_variable in the following expression?**

```python
exponented_variable = 2 ** 4
```

Incorrect:
8

(Selected)Correct:
16


---
## User Input Article

### How to assign variables with user input.

So far, we’ve covered how to assign variables values directly in a Python file. However, we often want a user of a program to enter new information into the program.

How can we do this? As it turns out, another way to assign a value to a variable is through user input.

While we output a variable’s value using print(), we assign information to a variable using input(). The input() function requires a prompt message, which it will print out for the user before they enter the new information. For example:

```python
likes_snakes = input("Do you like snakes? ")
```
In the example above, the following would occur:

The program would print “Do you like snakes? “ for the user.
The user would enter an answer (e.g., “Yes! I have seven pythons as pets!”).
The variable likes_snakes would be assigned a value of the user’s answer (in this case, “Yes! I have seven pythons as pets!”).
Try constructing a statement to collect user input on your own!

Fill in the blanks in the code to complete a statement that asks a user “What is your favorite flightless bird?” and then stores their answer in the variable favorite_flightless_bird.


Not only can input() be used for collecting all sorts of different information from a user, but once you have that information stored as a variable you can use it to simulate interaction:

```python
>>> favorite_fruit = input("What is your favorite fruit? ")
What is your favorite fruit? mango
>>> print("Oh cool! I like " + favorite_fruit + " too, but I think my favorite fruit is apple.")
Oh yeah! I like mango too, but I think my favorite fruit is apple.
```
These are pretty basic implementations of input(), but as you get more familiar with Python you’ll find more and more interesting scenarios where you will want to interact with your users.

