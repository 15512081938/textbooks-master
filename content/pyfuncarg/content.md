# Function Arguments

## Interactive Lesson

> section: interactivelesson

### Parameters and Arguments

> id: parametersandarguments

Python’s functions offer us a very expressive syntax. We’re going to look into some of the finer details of how functions in Python work and some techniques we can use to be more intuitive while writing and calling functions.

First, let’s consider some definitions:

- A parameter is a variable in the definition of a function.
- An argument is the value being passed into a function call.
- A function definition begins with **def** and contains the entire following indented block.
- And function calls are the places a function is invoked, with parentheses, after its definition

Let’s see this in a block of code:

```python
# The "def" keyword is the start of a function definition
def function_name(parameter1, parameter2):
  # The placeholder variables used inside a function definition are called parameters
  print(parameter1)
  return parameter2
# The outdent signals the end of the function definition

# "Arguments" are the values passed into a function call
argument1 = "argument 1"
argument2 = "argument 2"

# A function call uses the functions name with a pair of parentheses
# and can return a value
return_val = function_name(argument1, argument2)
```

In the above code we defined the function **function_name** that takes two parameters, **parameter1** and **parameter2**. We then create two variables with the values **"argument 1"** and **"argument 2"** and proceed to call **function_name** with the two arguments.

Some of this terminology can be used inconsistently between schools, people, and businesses. Some people don’t differentiate between “parameter” and “argument” when speaking. It’s useful here because we’re going to be looking at a lot of behavior that looks very similar in a function definition and a function call, but will be subtly different. But the distinction is sometimes unnecessary, so don’t get too hung up if something is called a “parameter” that should be an “argument” or vice versa.


##### Instructions

::: column.grow

1. In script.py call the function **play_record** with the argument **next_album**.

    What’s the name of the parameter that **play_record** takes?

    Stuck? Get a hint
    
    Hint
    
    The name of the parameter is **album**. The name of the argument is **next_album**.

::: column(width=320)

    div#ide
        pre.initcode
            include codes/parameters_and_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### None: It's Nothing!

> id: noneitsnothing

How do you define a variable that you can’t assign a value to yet? You use **None**.

**None** is a special value in Python. It is unique (there can’t be two different **Nones**) and immutable (you can’t update **None** or assign new attributes to it).

```python
none_var = None
if none_var:
  print("Hello!")
else:
  print("Goodbye")

# Prints "Goodbye"
```

**None** is falsy, meaning that it evaluates to **False** in an **if** statement, which is why the above code prints “Goodbye”. **None** is also unique, which means that you can test if something is **None** using the **is** keyword.

```python
# first we define session_id as None
session_id = None

if session_id is None:
  print("session ID is None!")
  # this prints out "session ID is None!"

# we can assign something to session_id
if active_session:
  session_id = active_session.id

# but if there's no active_session, we don't send sensitive data
if session_id is not None:
  send_sensitive_data(session_id)
```

Above we initialize our **session_id** to **None**, then set our **session_i**d if there is an active session. Since **session_id** could either be **None** we check if **session_id** is **None** before sending our sensitive data.

##### Instructions

::: column.grow

1. Grab a new review using **get_next_review()**. Save the results into a variable called **review**.

2. Check if there is a **review** by comparing it against **None**. If **review** contains a value that isn’t **None**, submit it by calling the function **submit_review()** with **review** as an argument.


    Stuck? Get a hint
    
    Hint

    Check if the **review** exists by using an **if** statement:

    ```python
    if review is not None:
      submit_review(review)
    ```

::: column(width=320)

    div#ide
        pre.initcode
            include codes/none_its_nothing.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Default Return

> id: defaultreturn

What does a function return when it doesn’t return anything? This sounds like a riddle, but there is a correct answer. A Python function that does not have any explicit **return** statement will return **None** after completing. This means that all functions in Python return something, whether it’s explicit or not. For example:

```python
def no_return():
  print("You've hit the point of no return")
  # notice no return statement

here_it_is = no_return()

print(here_it_is)
# Prints out "None"
```

Above we defined a function called **no_return()** and saved the result to a variable **here_it_is**. When we **print()** the value of **here_it_is** we get **None**, referring to Python’s None. It’s possible to make this syntax even more explicit — a **return** statement without any value returns **None** also.

```python
def fifty_percent_off(item):
  # Check if item.cost exists
  if hasattr(item, 'cost'):
    return item.cost / 2

  # If not, return None 
  return

sale_price = fifty_percent_off(product)

if sale_price is None:
  print("This product is not for sale!")
```

Here we have implemented a function that returns the cost of a product with “50% Off” (or “half price”). We check if the **item** passed to our function has a **cost** attribute. If it exists, we return half the cost. If not, we simply **return**, which returns **None**.

When we plug a product into this function, we can expect two possibilities: the first is that the **item** has a cost and this function returns half of that. The other is that **item** does not have a listed cost and so the function returns **None**. We can put error handling in the rest of our code, if we get **None** back from this function that means whatever we’re looking at isn’t for sale!

##### Instructions

::: column.grow

1. Lots of everyday Python functions return **None**. What’s the return value of a call to **print()**? Since **print()** is a function it must return something.

    Create a variable called **prints_return** and set it equal to a print statement. Make sure to give the print statement parentheses and give it an argument (like “hi!”).

    Stuck? Get a hint
    
    Hint

    It’s a weird request, but create a variable equal to a **print()** statement.

    ```python
    return_value = print("Hi there!")
    ```

2. Now print out **prints_return**.

3. Inside script.py is a list called **sort_this_list**. Create a new variable called **list_sort_return** and set it equal to **sort_this_list.sort()**.

    Stuck? Get a hint
    
    Hint

    Write the following code to create the **list_sort_return** variable:

    ```python
    list_sort_return = sort_this_list.sort()
    ```

4. What do you expect **list_sort_return** to contain?

    Print out **list_sort_return**.

    Stuck? Get a hint
    
    Hint

    It might be surprising, but **.sort()** sorts a list in place. Python has a different function, **sorted()** that takes a list as an argument and returns the sorted list.

    What’s in common with these two functions that return **None**? They both have side-effects besides returning a value.

::: column(width=320)

    div#ide
        pre.initcode
            include codes/default_return.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---
### Default Arguments

> id: defaultarguments

Function arguments are required in Python. So a standard function definition that defines two parameters requires two arguments passed into the function.

```python
# Function definition with two required parameters
def create_user(username, is_admin):
  create_email(username)
  set_permissions(is_admin)

# Function call with all two required arguments
user1 = create_user('johnny_thunder', True)

# Raises a "TypeError: Missing 1 required positional argument"
user2 = create_user('djohansen')
```

Above we defined our function, **create_user**, with two parameters. We first called it with two arguments, but then tried calling it with only one argument and got an error. What if we had sensible defaults for this argument?

Not all function arguments in Python need to be required. If we give a default argument to a Python function that argument won’t be required when we call the function.

```python
# Function defined with one required and one optional parameter
def create_user(username, is_admin=False):
  create_email(username)
  set_permissions(is_admin)

# Calling with two arguments uses the default value for is_admin
user2 = create_user('djohansen')
```

Above we defined **create_user** with a default argument for **is_admin**, so we can call that function with only the one argument **'djohansen'**. It assumes the default value for **is_admin**: **False**. We can make both of our parameters have a default value (therefore making them all optional).

```python
# We can make all three parameters optional
def create_user(username=None, is_admin=False):
  if username is None:
    username = "Guest"
  else:
    create_email(username)
  set_permissions(is_admin)

# So we can call with just one value
user3 = create_user('ssylvain')
# Or no value at all, which would create a Guest user
user4 = create_user()
```

Above we define the function with all optional parameters, if we call it with one argument that gets interpreted as **username**. We can call it without any arguments at all, which would only use the default values.

##### Instructions

::: column.grow

1. In script.py there is a function called **make_folders()**. We want to add a default argument to the **nest** parameter in **make_folders()**.

    Set it so that if we call **make_folders()** without an argument for **nest** the function assumes it gets a value of **False**.

::: column(width=320)

    div#ide
        pre.initcode
            include codes/default_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Using Keyword and Positional Arguments

> id: usingkeywordandpositionalarguments

Not all of your arguments need to have default values. But Python will only accept functions defined with their parameters in a specific order. The required parameters need to occur before any parameters with a default argument.

```python
# Raises a TypeError
def create_user(is_admin=False, username, password):
  create_email(username, password)
  set_permissions(is_admin)
```

In the above code, we attempt to define a default argument for **is_admin** without defining default arguments for the later parameters: **username** and **password**.

If we want to give **is_admin** a default argument, we need to list it last in our function definition:

```python
# Works perfectly
def create_user(username, password, is_admin=False):
  create_email(username, password)
  set_permissions(is_admin)
```

##### Instructions

::: column.grow

1. In script.py the function **get_id** tries to define a parameter with a default argument before a required parameter.

    Update the function signature of **get_id** so that **website** comes second and **html_id** comes first.


::: column(width=320)

    div#ide
        pre.initcode
            include codes/using_keyword_and_positional_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Keyword Arguments

> id: keywordarguments

When we call a function in Python, we need to list the arguments to that function to match the order of the parameters in the function definition. We don’t necessarily need to do this if we pass keyword arguments.

We use keyword arguments by passing arguments to a function with a special syntax that uses the names of the parameters. This is useful if the function has many optional default arguments or if the order of a function’s parameters is hard to tell. Here’s an example of a function with a lot of optional arguments.

```python
# Define a function with a bunch of default arguments
def log_message(logging_style="shout", message="", font="Times", date=None):
  if logging_style == 'shout':
    # capitalize the message
    message = message.upper()
  print(message, date)

# Now call the function with keyword arguments
log_message(message="Hello from the past", date="November 20, 1693")
```

Above we defined **log_message()**, which can take from 0 to 4 arguments. Since it’s not clear which order the four arguments might be defined in, we can use the parameter names to call the function. Notice that in our function call we use this syntax: **message="Hello from the past"**. The key word **message** here needs to be the name of the parameter we are trying to pass the argument to.s

##### Instructions

::: column.grow

1. In script.py we’ve defined a **draw_shape()** function that will draw a shape to the terminal! Call **draw_shape()** with **"m"** as the **character** and **line_breaks** set to **False**.

::: column(width=320)

    div#ide
        pre.initcode
            include codes/keyword_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Don't Use Mutable Default Arguments

> id: dontusemutabledefaultarguments

When writing a function with default arguments, it can be tempting to include an empty list as a default argument to that function. Let’s say you have a function called **populate_list** that has two required arguments, but it’s easy to see that we might want to give it some default arguments in case we don’t have either **list_to_populate** or **length** every time. So we’d give it these defaults:

```python
def populate_list(list_to_populate=[], length=1):
  for num in range(length):
    list_to_populate.append(num)
  return list_to_populate
```

It’s reasonable to believe that **list_to_populate** will be given an empty list every time it’s called. This isn’t the case! **list_to_populate** will be given a new list once, in its definition, and all subsequent function calls will modify the same list. This will happen:

```python
returned_list = populate_list(length=4)
print(returned_list)
# Prints [0, 1, 2, 3] -- this is expected

returned_list = populate_list(length=6)
print(returned_list)
# Prints [0, 1, 2, 3, 0, 1, 2, 3, 4, 5] -- this is a surprise!
```

When we call **populate_list** a second time we’d expect the list **[0, 1, 2, 3, 4, 5]**. But the same list is used both times the function is called, causing some side-effects from the first function call to creep into the second. This is because a list is a mutable object.

A mutable object refers to various data structures in Python that are intended to be mutated, or changed. A list has append and remove operations that change the nature of a list. Sets and dictionaries are two other mutable objects in Python.

It might be helpful to note some of the objects in Python that are not mutable (and therefore OK to use as default arguments). **int**, **float**, and other numbers can’t be mutated (arithmetic operations will return a new number). **tuple**s are a kind of immutable list. Strings are also immutable — operations that update a string will all return a completely new string.

##### Instructions

::: column.grow

1. In script.py we’ve written a helper function that adds a new menu item to an order in a point-of-sale system. As you can see, we can start a new order by calling **update_order** without an argument for **current_order**. Unfortunately, there’s a bug in our code causing some previous order contents to show up on other people’s bills!

    First, try to guess what the output of this code will be. Then, run **script.py**.

    We’ll fix this function in the next exercise, if you want more of an explanation of what’s happening here, check out the hint!
    
    Stuck? Get a hint
    
    Hint

    Two sodas and a burger! And all the customer wanted was a soda. You’ll notice, if you print out **order1** it’s the same exact list as **order2**. Any updates to one will update the other (and will affect future calls of **update_order**).

::: column(width=320)

    div#ide
        pre.initcode
            include codes/dont_use_mutable_default_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Using None as a Sentinel

> id: usingnoneasasentinel

So if we can’t use a list as a default argument for a function, what can we use? If we want an empty list, we can use **None** as a special value to indicate we did not receive anything. After we check whether an argument was provided we can instantiate a new list if it wasn’t.

```python
def add_author(authors_books, current_books=None):
  if current_books is None:
    current_books = []

  current_books.extend(authors_books)
  return current_books
```

In the above function, we accept **current_books** a value expected to be a list. But we don’t require it. If someone calls **add_author()** without giving an argument for **current_books**, we supply an empty list. This way multiple calls to **add_author** won’t include data from previous calls to **add_author**.

##### Instructions

::: column.grow

1. Update the function so that calls to **update_order** don’t have side-effects — no order should affect other orders.

    Stuck? Get a hint
    
    Hint

    Change the default argument to **current_order** to **None**, and then instantiate a new list inside of **update_order()**:

    ```python
    def update_order(new_item, current_order=None):
      if current_order is None:
        current_order = []
    ```

::: column(width=320)

    div#ide
        pre.initcode
            include codes/using_none_as_a_sentinel.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Unpacking Multiple Returns

> id: unpackingmultiplereturns

A Python function can return multiple things. This is especially useful in cases where bundling data into a different structure (a dictionary or a list, for instance) would be excessive. In Python we can return multiple pieces of data by separating each variable with a comma:

```python
def multiple_returns(cool_num1, cool_num2):
  sum_nums = cool_num1 + cool_num2
  div_nums = cool_num1 / cool_num2
  return sum_nums, div_nums
```

Above we created a function that returns two results, **sum_nums** and **div_nums**. What happens when we call the function?

```python
sum_and_div = multiple_returns(20, 10)

print(sum_and_div)
# Prints "(30, 2)"

print(sum_and_div[0])
# Prints "30"
```

So we get those two values back in what’s called a tuple, an immutable list-like object indicated by parentheses. We can index into the tuple the same way as a list and so **sum_and_div[0]** will give us our **sum_nums** value and **sum_and_div[1]** will produce our **div_nums** value.

What if we wanted to save these two results in separate variables? Well we can by unpacking the function return. We can list our new variables, comma-separated, that correspond to the number of values returned:

```python
sum, div = sum_and_div(18, 9)

print(sum)
# Prints "27"

print(div)
# Prints "2"
```

Above we were able to unpack the two values returned into separate variables.

##### Instructions

::: column.grow

1. In script.py you’ll find the definition of the function **scream_and_whisper()**. Call the function with a string of your choice and store the results in **the_scream** and **the_whisper**.


::: column(width=320)

    div#ide
        pre.initcode
            include codes/unpacking_multiple_returns.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Positional Argument Unpacking

> id: positionalargumentunpacking

We don’t always know how many arguments a function is going to receive, and sometimes we want to handle any possibility that comes at us. Python gives us two methods of unpacking arguments provided to functions. The first method is called positional argument unpacking, because it unpacks arguments given by position. Here’s what that looks like:

```python
def shout_strings(*args):
  for argument in args:
    print(argument.upper())

shout_strings("hi", "what do we have here", "cool, thanks!")
# Prints out:
# "HI"
# "WHAT DO WE HAVE HERE"
# "COOL, THANKS!"
```

In **shout_strings()** we use a single asterisk (**\***) to indicate we’ll accept any number of positional arguments passed to the function. Our parameter **args** is a tuple of all of the arguments passed. In this case **args** has three values inside, but it can have many more (or fewer).

Note that **args** is just a parameter name, and we aren’t limited to that name (although it is rather standard practice). We can also have other positional parameters before our **\*args** parameter. We can’t, as we’ll see, :

```python
def truncate_sentences(length, *sentences):
  for sentence in sentences:
    print(sentence[:length])

truncate_sentences(8, "What's going on here", "Looks like we've been cut off")
# Prints out:
# "What's g"
# "Looks li"
```

Above we defined a function **truncate_sentences** that takes a **length** parameter and also any number of **sentences**. The function prints out the first **length** many characters of each **sentence** in **sentences**.

##### Instructions

::: column.grow

1. The Python library **os.path** has a function called **join()**. **join()** takes an arbitrary number of paths as arguments.

    Use the **join()** function to join all three of the path segments, and print out the results!

2. Write your own function, called **myjoin()** which takes an arbitrary number of strings and appends them all together, similar to **os.path.join()**.

    
    Stuck? Get a hint
    
    Hint

    **os.path.join()** does more than concatenate strings, it adds file separators between those strings, but what’s important here is using the **\*** key to unpack a function argument.

    ```python
    def myjoin(*args):
      joined_string = args[0]
      for arg in args[1:]:
        # what goes here?
      return joined_string
    ```

::: column(width=320)

    div#ide
        pre.initcode
            include codes/positional_argument_unpacking.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Keyword Argument Unpacking

> id: keywordargumentunpacking

Python doesn’t stop at allowing us to accept unlimited positional parameters, it gives us the power to define functions with unlimited keyword parameters too. The syntax is very similar, but uses two asterisks (**\*\***) instead of one. Instead of **args**, we call this **kwargs** — as a shorthand for keyword arguments.

```python
def arbitrary_keyword_args(**kwargs):
  print(type(kwargs))
  print(kwargs)
  # See if there's an "anything_goes" keyword arg
  # and print it
  print(kwargs.get('anything_goes'))

arbitrary_keyword_args(this_arg="wowzers", anything_goes=101)

```





As you can see, **\*\*kwargs** gives us a dictionary with all the keyword arguments that were passed to **arbitrary_keyword_args**. We can access these arguments using standard dictionary methods.

Since we’re not sure whether a keyword argument will exist, it’s probably best to use the dictionary’s **.get()** method to safely retrieve the keyword argument. Do you remember what **.get()** returns if the key is not in the dictionary? It’s **None**!

##### Instructions

::: column.grow

1. The string **.format()** method can utilize keyword argument syntax if you give placeholder names in curly braces in a string. For example:

    ```python
    "{place} is {adjective} this time of year.".format(place="New York", adjective="quite cold, actually")
    ```

    Format the string in **script.py** within the **print()** statement. Give arguments for the placeholders given.

2. **create\_products()** takes a dictionary object and iterates over it, we can change it so that it uses keyword arguments instead. Update this function signature so **products_dict** contains all the keyword arguments passed to **create_products()**.

    Stuck? Get a hint
    
    Hint

    We just need to give **products_dict** a preceeding **\*\*** for it to still be a dictionary but be populated by keyword arguments.

    ```python
    def cool_function(**kwarg_dictionary):
        pass
    ```

3. Update the call to **create_products()** to pass in each of those dictionary items as a keyword argument instead.

    Stuck? Get a hint
    
    Hint

    Changing the arguments to be keyword parameters means taking away the curly braces, passing the keys without quotes, and using **=** instead of **:**:

    ```python
    create_products(Football=12, BassGuitar=90)
    ```

::: column(width=320)

    div#ide
        pre.initcode
            include codes/keyword_argument_unpacking.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Using Both Keyword and Positional Unpacking

> id: usingbothkeywordandpositionalunpacking

This keyword argument unpacking syntax can be used even if the function takes other parameters. However, the parameters must be listed in this order:

- All named positional parameters
- An unpacked positional parameter (**\*args**)
- All named keyword parameters
- An unpacked keyword parameter (**\*\*kwargs**)

Here’s a function with all possible types of parameter:

```python
def main(filename, *args, user_list=None, **kwargs):
  if user_list is None:
    user_list = []

  if '-a' in args:
    user_list = all_users()

  if kwargs.get('active'):
    user_list = [user for user_list if user.active]

  with open(filename) as user_file:
    user_file.write(user_list)
```

Looking at the signature of **main()** we define four different kinds of parameters. The first, **filename** is a normal required positional parameter. The second, **\*args**, is all positional arguments given to a function after that organized as a tuple in the parameter args. The third, **user_list**, is a keyword parameter with a default value. Lastly, **\*\*kwargs** is all other keyword arguments assembled as a dictionary in the parameter **kwargs**.

A possible call to the function could look like this:

```python
main("files/users/userslist.txt", 
     "-d", 
     "-a", 
     save_all_records=True, 
     user_list=current_users)
```

In the body of **main()** these arguments would look like this:

- **filename == "files/users/userslist.txt"**
- **args == ('-d', '-a)**
- **user_list == current_users**
- **kwargs == {'save_all_records': True}**

We can use all four of these kinds of parameters to create functions that handle a lot of possible arguments being passed to them.

##### Instructions

::: column.grow

1. In script.py you’ll find the function **remove()** has three parameters: the required positional **filename**, the arbitrary positional **args**, and the arbitrary keyword **kwargs**.

    Before returning the text, we want to remove all arguments passed as positional arguments from the text. Using **text.replace()** change every **arg** in **args** into an empty string **""**.

    Stuck? Get a hint
    
    Hint

    Iterate through **args** with a for loop and use **replace()** to remove text:

    ```python
    for arg in args:
      text.replace(arg, '')
    ```

2. Now iterate over every **kwarg** and **replacement** in **kwargs.items()** (recall this is how to iterate over key-value pairs in a dictionary).

    Replace every instance of **kwarg** with **replacement** in **text**.

    Stuck? Get a hint
    
    Hint

    Like before, but also unpacking **.items()**:

    ```python
    for kwarg, replacement in kwargs.items():
      text.replace(kwarg, replacement)
    ```

3. Now remove the bottom comment and see the text of Robin Hood; Being A Complete History Of All The Notable And Merry Exploits Performed By Him And His Men, On Many Occasions. by William Darton transformed!

::: column(width=320)

    div#ide
        pre.initcode
            include codes/using_both_keyword_and_positional_unpacking.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Passing Containers as Arguments

> id: passingcontainersasarguments

Not only can we accept arbitrarily many parameters to a function in our definition, but Python also supports a syntax that makes deconstructing any data that you have on hand to feed into a function that accepts these kinds of unpacked arguments. The syntax is very similar, but is used when a function is called, not when it’s defined.

```python
def takes_many_args(*args):
  print(','.join(args))

long_list_of_args = [145, "Mexico City", 10.9, "85C"]

# We can use the asterisk "*" to deconstruct the container.
# This makes it so that instead of a list, a series of four different
# positional arguments are passed to the function
takes_many_args(*long_list_of_args)
# Prints "145,Mexico City,10.9,85C"
```

We can use the **\*** when calling the function that takes a series of positional parameters to unwrap a list or a tuple. This makes it easy to provide a sequence of arguments to a function even if that function doesn’t take a list as an argument. Similarly we can use **\*\*** to destructure a dictionary.

```python
def pour_from_sink(temperature="Warm", flow="Medium")
  set_temperature(temperature)
  set_flow(flow)
  open_sink()

# Our function takes two keyword arguments
# If we make a dictionary with their parameter names...
sink_open_kwargs = {
  'temperature': 'Hot',
  'flow': "Slight",
}

# We can destructure them an pass to the function
pour_from_sink(**sink_open_kwargs)
# Equivalent to the following:
# pour_from_sink(temperature="Hot", flow="Slight")
```

So we can also use dictionaries and pass them into functions as keyword arguments with that syntax. Notice that our **pour_from_sink()** function doesn’t even accept arbitrary **\*\*kwargs**. We can use this destructuring syntax even when the function has a specific number of keyword or positional arguments it accepts. We just need to be careful that the object we’re destructuring matches the length (and names, if a dictionary) of the signature of the function we’re passing it into.

##### Instructions

::: column.grow

1. We’ve got a latecomer to the new **create_products** syntax who wants to still pass in a dictionary. Unpack **new_product_dict** while passing it to **create_products()** as an argument.

::: column(width=320)

    div#ide
        pre.initcode
            include codes/passing_containers_as_arguments.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

_{button.next-step} Continue_ 

---

### Review

> id: review

We covered a lot of ground in this lesson! We learned all about how functions can accept different arguments and different styles by which we can pass those arguments in. We covered:

- The default return of a function: **None**
- How to create default arguments to a function
- How to make sure our default arguments work the way we expect when dealing with lists.
- How to pass keyword arguments to a function
- How to unpack multiple returns from a function
- How to unpack multiple positional arguments to a function
- How to unpack multiple keyword arguments to a function
- How to pass a list as a series of arguments to a function
- How to pass a dictionary as a series of keyword arguments to a function
This is a lot, and you should be impressed with yourself! You now should be able to read many different styles of function writing in Python and come up with ways to call those functions with style and clarity.

Hopefully this has helped you as a writer of Python functions and enabled you to overcome any problems with input and output of a Python function you might run into. Congrats!

---

## Mutiple Choice Quiz

> section: mutiple_choice_quiz

### What’s wrong with this function definition?

```python
def add_signature_message(signature_message, list_of_paragraphs=[]):
  list_of_paragraphs.append(signature_message)
  return list_of_paragraphs
```

+ list_of_paragraphs is given a default argument of [], which can lead to errors if it’s called multiple times.
+ list_of_paragraphs is returned, but we’re mutating an existing object so we should return None.
+ .append() is the wrong list method. The code should call list_of_paragraphs.extend().

_{button.next-step} Continue_ 

---

### What value is saved into the variable returned_value in this block of code?

```python
def show_me_the_money(cash_amount):
  tripled_earnings = cash_amount * 3
  print("We made ${}!".format(tripled_earnings))
  
returned_value = show_me_the_money(300)
```

+ print()
+ $900
+ 900
+ None

_{button.next-step} Continue_ 

---

### What is the output of the following program?

```python
def return_translated_point(x, y, change_x, change_y):
  return x + change_x, y + change_y

a, b = return_translated_point(1, 2, 5, 8)
print(b)
```

+ It prints out 10.
+ It prints out 7.
+ It prints out (6, 10).

_{button.next-step} Continue_ 

---

### How would you pass my_list into the following function?

```python
def item_summer(*args):
  current_sum = 0
  for arg in args:
    current_sum += arg
  return current_sum

my_list = [5, 19, 23, 88]
```

+ item_summer(**my_list)
+ item_summer(my_list)
+ item_summer(*my_list)

_{button.next-step} Continue_ 

---

### What would the result of the following code be?

```python
def unite_args(*args):
  new_string = ""
  for arg in args:
    new_string += arg
  return new_string
    
print(unite_args("I'm ", "here ", "for ", "this "))
```

+ It will print "I'm here for this"
+ It will print "this for here I'm "
+ It will raise a TypeError because the function is called with the wrong number of arguments.

_{button.next-step} Continue_ 

---

### Give our play_video() function a speed parameter that has a default argument of 1.0.

```python
def play_video(url, frame_rate, ____):
  video_playback_speed = frame_rate * speed
  frame = get_next_frame(url, video_playback_speed)
  show_next_frame(frame)
```

+ speed: 1.0
+ speed=1.0
+ speed (default 1.0)
+ speed==1.0
+ speed@ 1.0

_{button.next-step} Continue_ 

---

### What is an acceptable way to call the function?

```python
def find_string(**kwargs):
  for keyword, arg in kwargs.items():
    print(arg.find(keyword))
    
find_string(____)
```

+ "waldo"
+ kwargs={"waldo": "here's waldo"}
+ waldo="long sentence with waldo in it"

_{button.next-step} Continue_ 

---

## Freedom Project

> section: freedomproject

### The Nile

> id: thenile

**The Nile** fullfilment agency brings everything you could possibly want straight to your door! Use your knowledge of Python functions and how to manipulate arguments to help automate practices for the biggest world-changing company.

##### Not Just A River In Egypt

::: column.grow

1. At The Nile our biggest concern is our consumers, and our biggest cost is delivering their goods to them. We want to develop a program that will help us minimize these costs so we can continue making everyone happy.

    First we’ll need to calculate these costs using a function that you’re going to write called calculate_shipping_cost().

    Give calculate_shipping_cost three parameters: from_coords, to_coords, and shipping_type.

    Stuck? Get a hint
    
    Hint

    Create a function using the def keyword and give it the three given parameters.


2. Both from_coords and to_coords are tuples, containing first the latitude and then the longitude. Since our get_distance() function looks for all four as separate arguments, we’ll need to separate these variables out.

    Inside calculate_shipping_cost unpack those tuples into from_lat, from_long, to_lat, and to_long.

    Stuck? Get a hint
    
    Hint

    Unpack the tuple arguments in the function using variable unpacking:

    ```python
    # if you have two tuples in variables
    first_coord  = (0, 1)
    second_coord = (2, 3)

    # you can unpack them with commas
    first_x, first_y   = first_coord
    second_x, second_y = second_coord
    ```
3. Now call get_distance(from_lat, from_long, to_lat, to_long) and save the result as distance.

    There’s other ways to separate those two coordinates when calling this function, how would you have done it?

    Stuck? Get a hint
    
    Hint

    One way is to use the * spread operator, which would unpack those coordinates in the function call.

    ```python
    distance = get_distance(*from_coords, *to_coords)
    ```

4. Next, get the shipping_rate by using the provided SHIPPING_PRICES dictionary and fetching the key passed in as shipping_type.

    Stuck? Get a hint
    
    Hint

    You can use the [] to retrieve the key from SHIPPING_PRICES:

    ```python
    SHIPPING_PRICES[shipping_type]
    ```

5. Calculate the price by multiplying the distance by the shipping_rate.

6. Finally, return the formatted price, created by calling the provided format_price() on the price itself.

    Stuck? Get a hint
    
    Hint

    Make sure to return the results of format_price()!

7. What about our shoppers who hastily purchase goods without indicating their shipping type? Let’s give our function a default argument for shipping_type. Since they’re in such a hurry let’s make the default argument 'Overnight'. They’ll be happier to get what they ordered earlier, and we’ll be happier because they paid more money for it. It’s a win-win!

8. Want to make sure you wrote the function correctly? Try calling test_function(calculate_shipping_cost) after your function definition.

##### Careers At The Nile

9. At The Nile, we have a joke. Without our fantastic drivers, who fulfill orders every day, we’d just be sitting with millions of toys, electronics, and clothing in warehouses to ourselves.

    Our team is important, and we want to make sure the hardest workers find their home in our careers. In order to do that, we need to figure out who the best person is for each job.

    Write a function called calculate_driver_cost() with distance as the first parmameter, and as many drivers as are available as positional arguments after that, as drivers.

    Stuck? Get a hint
    
    Hint

    Remember to define this function to take an arbitrary number of positional variables, the function definition will look like this:

    ```python
    def calculate_driver_cost(variable1, *list_of_variables):
      pass
    ```

10. In order to find the best person, we need to calculate how much it would cost for any of the drivers to fulfill this order.

    Create two new variables, cheapest_driver and cheapest_driver_price. Set them both to None.

11. Now let’s iterate over every driver in drivers. Use a for loop.

    Stuck? Get a hint
    
    Hint

    Remember a for loop over fun_list would look like:

    ```python
    for fun_item in fun_list:
      pass
    ```

12. First calculate the driver_time for each driver by multiplying driver.speed by distance.

13. Next calculate the price_for_driver by multiplying driver.salary by driver_time.

14. Now we want to check if the current driver is the cheapest driver we’ve looked at.

    First, we’ll check if cheapest_driver is None, this likely means this is the first driver we’ve looked at.

    In that case, set cheapest_driver equal to driver and then set cheapest_driver_price equal to price_for_driver.

15. In an elif statment, check if price_for_driver is less than cheapest_driver_price. This means that our current driver is cheaper than the driver stored in cheapest_driver.

    Update cheapest_driver to be equal to driver and update cheapest_driver_price to be equal to price_for_driver.

16. After outdenting out of our elif statement and the for loop, return cheapest_driver_price and cheapest_driver.

    Stuck? Get a hint
    
    Hint

    Return them both by separating with a comma.
    
    ```python
    def cool_function():
      return 10, "cool"
    ```

##### The Nile Exclusive

17. Great first day, friend! Let’s try and figure out all the money you’ve saved us today.

    Let’s define a function called calculate_money_made().

    This function will be passed a number of Trip IDs with corresponding trip information as arguments, so let’s just take any keyword arguments passed into it. Store them all as trips!

    Stuck? Get a hint
    
    Hint

    ```python
    Define calculate_money_made() with trips as an arbitrary keyword argument.

    def calculate_money_made(**trips):
      pass
    ```
18. Let’s start a counter at 0. Create a variable called total_money_made that will count up for us.

19. Iterate through every trip_id and trip in the trips dictionary.

    Stuck? Get a hint
    
    Hint

    Use .items() to iterate over pairs in a dictionary:

    ```python
    for trip_id, trip in trips.items():
      pass
    ```

20. Calculate the trip revenue into the variable trip_revenue by calculating trip.cost minus trip.driver.cost.

21. Add up that sweet revenue by incrementing total_money_made by trip_revenue.

    Stuck? Get a hint
    
    Hint

    You can use += to do this:

    ```python
    total_money_made += trip_revenue
    ```

22. Outside your for loop, return the total!

23. Congratulations! You’ve been a real life-saver around these parts. We broke up functions using arbitrary and default parameters! Remember you can test your function by calling test_function(calculate_money_made) afterwards!


::: column(width=320)

    div#ide
        pre.initcode
            include codes/the_nile.py
        iframe(src="http://114.116.82.25:7000/",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::










---

## Video

