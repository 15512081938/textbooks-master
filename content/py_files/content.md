# Files

> stage: Files
> description: LEARN PYTHON: FILES


## interactive lesson

> section: interactivelesson

---

> id: readingafile

### Reading a File

Computers use file systems to store and retrieve data. Each file is an individual container of related information. If you’ve ever saved a document, downloaded a song, or even sent an email you’ve created a file on some computer somewhere. Even **script.py**, the Python program you’re editing in the learning environment, is a file.

So, how do we interact with files using Python? We’re going to learn how to read and write different kinds of files using code. Let’s say we had a file called **real_cool_document.txt** with these contents:

**real_cool_document.txt**

```python
Wowsers!
```
We could read that file like this:
reading_a_file.py

```python
with open('real_cool_document.txt') as cool_doc:
  cool_contents = cool_doc.read()
print(cool_contents)
```

This opens a file object called _{code}cool_doc_. and creates a new indented block where you can read the contents of the opened file. We then read the contents of the file _{code}cool_doc_. using _{code}cool_doc.read()_. and save the resulting string into the variable _{code} cool_contents_. Then we print _{code}cool_contents_, which outputs the statement _{code}Wowsers_!

::: column.grow

#####  **Instructions**

_{input#readingafile(type="checkbox" disabled="disabled")}_  **1.** Use _{code}with_ to open the file **welcome.txt**. Save the file object as _{code}text_file_.

_{button.btn.btn-yellow}Stuck? Get a hint_

```python
Use this syntax to open a file:
with open('filename.txt') as file_object:
# indented block here
```

_{input#readingafile(type="checkbox" disabled="disabled")}_   **2.** Read the contents of _{code}text_file_. and save the results in _{code}text_data_.

Use this syntax on a file object to read the contents of the file into a variable:

```python
file_string = file_object.read()
```

_{input#readingafile(type="checkbox" disabled="disabled")}_   **3.** Print out _{code}text_data_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingafile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingafile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[Continue](btn:next)

---
> id: iteratingthroughlines

### Iterating Through Lines

When we read a file, we might want to grab the whole document in a single string, like _{code}.read()_ would return. But what if we wanted to store each line in a variable? We can use the _{code}.readlines()_ function to read a text file line by line instead of having the whole thing. Suppose we have a file:

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

The above script creates a temporary file object called _{code}keats_sonnet_ that points to the file **keats_sonnet.txt**. It then iterates over each line in the document and prints the entire file out.

::: column.grow

#####  **Instructions**

_{input#iteratingthroughlines(type="checkbox" disabled="disabled")}_  **1.** Using a _{code}with_ statement, create a file object pointing to the file **how_many_lines.txt**. Store that file object in the variable _{code}lines_doc_.

Remember to open a file using _{code}with_ syntax:

```python
with open('filename.txt') as file_object:
  # indented block here
```

_{input#iteratingthroughlines(type="checkbox" disabled="disabled")}_   **2.** Iterate through each of the lines in _{code}lines_doc.readlines()_ using a _{code}for_ loop.

Inside the for loop print out each line of **how_many_lines.txt**.

You can use the following syntax to print out each line of a file:

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

[Continue](btn:next)

---
> id: readingaline

### Reading a Line


Sometimes you don’t want to iterate through a whole file. For that, there’s a different file method, _{code}.readline()_, which will only read a single line at a time. If the entire document is read line by line in this way subsequent calls to _{code}.readline()_ will not throw an error but will start returning an empty string (_{code}""_). Suppose we had this file:

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

This script also creates a file object called _{code}sonnet_doc_ that points to the file **millay_sonnet.txt**. It then reads in the first line using _{code}sonnet_doc.readline()_ and saves that to the variable _{code}first_line_. It then saves the second line (_{code}So make the most of this, your little day,_) into the variable _{code}second_line_ and then prints it out.

::: column.grow

#####  **Instructions**

_{input#readingaline(type="checkbox" disabled="disabled")}_  **1.**Using a _{code}with_ statement, create a file object pointing to the file **just_the_first.txt**. Store that file object in the variable _{code}first_line_doc_.

Remember to open a file using _{code}with_ syntax:

```python
with open('filename.txt') as file_object:
  # indented block here
```

_{input#readingaline(type="checkbox" disabled="disabled")}_   **2.**Save the first line of **just_the_first.txt** into the variable _{code}first_line_.

Use the file object method _{code}.readline()_ to store a line into the variable _{code}line_.

_{input#readingaline(type="checkbox" disabled="disabled")}_   **3.**Print out the variable _{code}first_line_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingaline.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingaline",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[Continue](btn:next)

---
> id: writingaline

### Writing a File

Reading a file is all well and good, but what if we want to create a file of our own? With Python we can do just that. It turns out that our _{code}open()_ function that we’re using to open a file to read needs another argument to open a file to write to.

**writing_a_line.py**

```python
with open('generated_file.txt', 'w') as gen_file:
  gen_file.write("What an incredible file!")
```

Here we pass the argument _{code}'w'_ to _{code}open()_ in order to indicate to open the file in write-mode. The default argument is _{code}'r'_ and passing _{code}'r'_ to _{code}open()_ opens the file in read-mode as we’ve been doing.

This code creates a new file in the same folder as *script.py* and gives it the text _{code}What an incredible file!_. It’s important to note that if there is already a file called *generated_file.txt* it will completely overwrite that file, erasing whatever its contents were before.

::: column.grow

#####  **Instructions**

_{input#writingaline(type="checkbox" disabled="disabled")}_  **1.** Create a file object for the file **bad_bands.txt** using the _{code}open()_ function with the _{code}w_ argument. Assign this object to the temporary variable _{code}bad_bands_doc_.

Remember to use the _{code}with_ statement to open a file and pass the _{code}'w'_ argument to open it in write mode:

```python
with open('file_to_write.txt', 'w') as file_object:
  # indent
```

_{input#writingaline(type="checkbox" disabled="disabled")}_   **2.** Use the _{code}bad_bands_doc.write()_ method to add the name of a musical group you dislike to the document _{code}bad_bands_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/writingaline.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=writingaline",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[Continue](btn:next)

---
> id: appendingtoafile

### Appending to a File

So maybe completely deleting and overwriting existing files is something that bothers you. Isn’t there a way to just add a line to a file without completely deleting it? Of course there is! Instead of opening the file using the argument _{code}'w'_ for write-mode, we open it with _{code}'a'_ for append-mode. If we have a generated file with the following contents:

**generated_file.txt**

```python
This was a popular file...
```

Then we can add another line to that file with the following code:

**appending_to_a_file.py**

```python
with open('generated_file.txt', 'a') as gen_file:
  gen_file.write("... and it still is")
```

In the code above we open a file object in the temporary variable _{code}gen_file_. This variable points to the file **generated_file.txt** and, since it’s open in append-mode, adds the line _{code}... and it still is_ as a new line to the file. If you were to open the file after running the script it would look like this:

**generated_file.txt**

```python
This was a popular file...
... and it still is
```

Notice that opening the file in append-mode, with _{code}'a'_ as an argument to _{code}open()_, means that using the file object’s _{code}.write()_ method *appends* whatever is passed to the end of the file in a new line. If we were to run **script.py** again, this would be what **generated_file.txt** looks like:

**generated_file.txt**

```python
This was a popular file...
... and it still is
... and it still is
```

Notice that we’ve appended _{code}"... and it still is"_ to the file a second time! This is because in **script.py** we opened **generated_file.txt** in append-mode.

::: column.grow

#####  **Instructions**

_{input#appendingtoafile(type="checkbox" disabled="disabled")}_  **1.**We’ve got a file, **cool_dogs.txt**, filled with all the cool dogs we know. Somehow while compiling this list we forgot about one very cool dog. Let’s fix that problem by adding him to our **cool_dogs.txt**.

Open up our file **cool_dogs.txt** in append-mode and assign it to the file object _{code}cool_dogs_file_.

_{input#appendingtoafile(type="checkbox" disabled="disabled")}_   **2.**Inside your _{code}with_ block, add “Air Buddy” to **cool_dogs.txt**. Air Buddy is a Golden Retriever that plays basketball, which more than qualifies him for this list.

Use _{code}cool_dogs_file.write()_ to add a string to the end of **cool_dogs.txt**

::: column(width=680)


    div#ide
        pre.initcode
            include codes/appendingtoafile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=appendingtoafile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[Continue](btn:next)

---
> id: whatiswithwith

### What's With "with"?
We’ve been opening these files with this _{code}with_ block so far, but it seems a little weird that we can only use our file variable in the indented block. Why is that? The _{code}with_ keyword invokes something called a *context manager* for the file that we’re calling _{code}open()_ on. This context manager takes care of opening the file when we call _{code}open()_ and then closing the file after we leave the indented block.

Why is closing the file so complicated? Well, most other aspects of our code deal with things that Python itself controls. All the variables you create: integers, lists, dictionaries — these are all Python objects, and Python knows how to clean them up when it’s done with them. Since your files exist *outside* your Python script, we need to tell Python when we’re done with them so that it can close the connection to that file. Leaving a file connection open unnecessarily can affect performance or impact other programs on your computer that might be trying to access that file.

The _{code}with_ syntax replaces older ways to access files where you need to call _{code}.close()_ on the file object manually. We can still open up a file and append to it with the old syntax, as long as we remember to close the file connection afterwards.

```python
fun_cities_file = open('fun_cities.txt', 'a')

# We can now append a line to "fun_cities".
fun_cities_file.write("Montréal")

# But we need to remember to close the file
fun_cities_file.close()
```

In the above script we added “Montréal” as a new line in our file **fun_cities.txt**. However, since we used the older-style syntax, we had to remember to close the file afterwards. Since this is necessarily more verbose (requires at least one more line of code) without being any more expressive, using _{code}with_ is preferred.

::: column.grow

#####  **Instructions**

_{input#whatiswithwith(type="checkbox" disabled="disabled")}_  **1.**In **what_is_with_with.py** there’s a file object that doesn’t get closed correctly. Let’s fix it by changing the syntax!


Remove this line:

```python
close_this_file = open('fun_file.txt')
```

And change it to use the _{code}with_ syntax from our previous exercises.

Remember to indent the rest of the body so that we don’t get an _{code}IndentError_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/whatiswithwith.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=whatiswithwith",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[Continue](btn:next)

---
> id: whatisacsvfile


### What Is a CSV File?
Text files aren’t the only thing that Python can read, but they’re the only thing that we don’t need any additional parsing library to understand. CSV files are an example of a text file that impose a structure to their data. CSV stands for **Comma-Separated Values*** and CSV files are usually the way that data from spreadsheet software (like Microsoft Excel or Google Sheets) is exported into a portable format. A spreadsheet that looks like the following

| Name           | Username      | Email                                                   |
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

In a CSV file that same exact data would be rendered like this:

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

Notice that the first row of the CSV file doesn’t actually represent any data, just the labels of the data that’s present in the rest of the file. The rest of the rows of the file are the same as the rows in the spreadsheet software, just instead of being separated into different cells they’re separated by… well I suppose it’s fair to say they’re separated by commas.

::: column.grow

#####  **Instructions**

_{input#whatisacsvfile(type="checkbox" disabled="disabled")}_  **1.** CSV files are just plain text files!

Open _{code}logger.csv_ using our standard _{code}with_ syntax, saving the file object in the temporary variable _{code}log_csv_file_.



_{input#whatisacsvfile(type="checkbox" disabled="disabled")}_   **2.** Print out the contents of _{code}logger.csv_ by calling _{code}.read()_ on the file. Notice that it is parsed as a string.
  
::: column(width=680)


    div#ide
        pre.initcode
            include codes/whatisacsvfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=whatisacsvfile",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[Continue](btn:next)

---
> id: readingacsvfile

### Reading a CSV File

Recall our CSV file from our last exercise:

**users.csv**

```python
Name,Username,Email
Roger Smith,rsmith,wigginsryan@yahoo.com
Michelle Beck,mlbeck,hcosta@hotmail.com
Ashley Barker,a_bark_x,a_bark_x@turner.com
Lynn Gonzales,goodmanjames,lynniegonz@hotmail.com
```

Even though we can read these lines as text without a problem, there are ways to access the data in a format better suited for programming purposes. In Python we can convert that data into a dictionary using the _{code}csv_ library’s _{code}DictReader_ object. Here’s how we’d create a list of the email addresses of all of the users in the above table:

```python
import csv

list_of_email_addresses = []
with open('users.csv', newline='') as users_csv:
  user_reader = csv.DictReader(users_csv)
  for row in user_reader:
    list_of_email_addresses.append(row['Email'])
```

In the above code we first import our _{code}csv_ library, which gives us the tools to parse our CSV file. We then create the empty list _{code}list_of_email_addresses_ which we’ll later populate with the email addresses from our CSV. Then we open the **users.csv** file with the temporary variable _{code}users_csv_.

We pass the additional keyword argument _{code}newline=''_ to the file opening _{code}open()_ function so that we don’t accidentally mistake a line break in one of our data fields as a new row in our CSV (read more about this in [the Python documentation](https://docs.python.org/3/library/csv.html#id3)).

After opening our new CSV file we use _{code}csv.DictReader(users_csv)_ which converts the lines of our CSV file to Python dictionaries which we can use access methods for. The keys of the dictionary are, by default, the entries in the first line of our CSV file. Since our CSV’s first line calls the third field in our CSV _{code}"Email"_ , we can use that as the key in each row of our DictReader.

When we iterate through the rows of our _{code}user_reader_ object, we access all of the rows in our CSV as dictionaries (except for the first row, which we used to label the keys of our dictionary). By accessing the _{code}'Email'_ key of each of these rows we can grab the email address in that row and append it to our _{code}list_of_email_addresses_.

::: column.grow

#####  **Instructions**

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_  **1.** Import the _{code}csv_ module.

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_   **2.** Open up the file **cool_csv.csv** in the temporary variable _{code}cool_csv_file_.

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_   **3.** Using _{code}csv.DictReader_ read the contents of _{code}cool_csv_file_ into a new variable called _{code}cool_csv_dict_.

Create a _{code}DictReader_ using it’s constructor with the following syntax:

```python
file_dict = csv.DictReader(file_object)
```

_{input#readingacsvfile(type="checkbox" disabled="disabled")}_  **4.**  **cool_csv.csv** includes a cool fact about every person in the CSV.

For each row in _{code}cool_csv_dict_ print out that row’s _{code}"Cool Fact"_.

You can use _{code}for...in_ syntax to loop through a _{code}DictReader_ object. Each of these objects will be a dictionary, with the first row of the file indicating the keys.

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

[Continue](btn:next)

---
> id: readingdifferenttypesofcsvfiles

### Reading Different Types of CSV Files


I need to level with you, I’ve been lying to you for the past two exercises. Well, kind of. We’ve been acting like CSV files are Comma-Separated Values files. It’s true that CSV stands for that, but it’s also true that other ways of separating values are valid CSV files these days.

People used to call Tab-Separated Values files TSV files, but as other separators grew in popularity everyone realized that creating a new _{code}.[a-z]sv_ file format for every value-separating character used is not sustainable.

So we call all files with a list of different values a CSV file and then use different *delimiters* (like a comma or tab) to indicate where the different values start and stop.

Let’s say we had an address book. Since addresses usually use commas in them, we’ll need to use a different delimiter for our information. Since none of our data has semicolons (_{code};_) in them, we can use those.

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

Notice the _{code}\n_ character, this is the escape sequence for a new line. The possibility of a new line escaped by a _{code}\n_ character in our data is why we pass the _{code}newline=''_ keyword argument to the _{code}open()_ function.

Also notice that many of these addresses have commas in them! This is okay, we’ll still be able to read it. If we wanted to, say, print out all the addresses in this CSV file we could do the following:

```python
import csv

with open('addresses.csv', newline='') as addresses_csv:
  address_reader = csv.DictReader(addresses_csv, delimiter=';')
  for row in address_reader:
    print(row['Address'])
```

Notice that when we call _{code}csv.DictReader_ we pass in the _{code}delimiter_ parameter, which is the string that’s used to delineate separate fields in the CSV. We then iterate through the CSV and print out each of the addresses.

::: column.grow

#####  **Instructions**

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_  **1.** Import the _{code}csv_ module.

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_   **2.** Open up the file **books.csv** in the variable _{code}books_csv_.

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_   **3.** Create a _{code}DictReader_ instance that uses the _{code}@_ symbol as a delimiter to read _{code}books_csv_. Save the result in a variable called _{code}books_reader_.

_{input#readingdifferenttypesofcsvfiles(type="checkbox" disabled="disabled")}_  **4.**  Create a list called _{code}isbn_list_, iterate through _{code}books_reader_ to get the ISBN number of every book in the CSV file. Use the _{code}['ISBN']_ key for the dictionary objects passed to it.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingdifferenttypesofcsvfiles.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingdifferenttypesofcsvfiles",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

[Continue](btn:next)

---
> id: writingacsvfile

### Writing a CSV File

Naturally if we have the ability to read different CSV files we might want to be able to programmatically create CSV files that save output and data that someone could load into their spreadsheet software. Let’s say we have a big list of data that we want to save into a CSV file. We could do the following:

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

In our code above we had a set of dictionaries with the same keys for each, a prime candidate for a CSV. We import the _{code}csv_ library, and then open a new CSV file in write-mode by passing the _{code}'w'_ argument to the _{code}open()_ function.

We then define the fields we’re going to be using into a variable called _{code}fields_. We then instantiate our CSV writer object and pass two arguments. The first is _{code}output_csv_, the file handler object. The second is our list of fields _{code}fields_ which we pass to the keyword parameter _{code}fieldnames_.

Now that we’ve instantiated our CSV file writer, we can start adding lines to the file itself! First we want the headers, so we call _{code}.writeheader()_ on the writer object. This writes all the fields passed to _{code}fieldnames_ as the first row in our file. Then we iterate through our _{code}big_list_ of data. Each _{code}item_ in _{code}big_list_ is a dictionary with each field in _{code}fields_ as the keys. We call _{code}output_writer.writerow()_ with the _{code}item_ dictionaries which writes each line to the CSV file.

::: column.grow

#####  **Instructions**

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **1.**We have a list in the workspace _{code}access_log_ which is a list of dictionaries we want to write out to a CSV file.

Let’s start by importing the _{code}csv_ module.

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_   **2.**Open up the file **logger.csv** in the temporary variable _{code}logger_csv_. Don’t forget to open the file in write-mode.

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_   **3.**Create a _{code}csv.DictWriter_ instance called _{code}log_writer_. Pass _{code}logger_csv_ as the first argument and then _{code}fields_ as a keyword argument to the keyword _{code}fieldnames_.

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **4.** Write the header to _{code}log_writer_ using the _{code}.writeheader()_ method.

_{input#writingacsvfile(type="checkbox" disabled="disabled")}_  **5.** Iterate through the _{code}access_log_ list and add each element to the CSV using _{code}log_writer.writerow()_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/writingacsvfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=writingacsvfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[Continue](btn:next)

---
> id: readingajsonfile

### Reading a JSON File

CSV isn’t the only file format that Python has a built-in library for. We can also use Python’s file tools to read and write JSON. JSON, an abbreviation of JavaScript Object Notation, is a file format inspired by the programming language JavaScript. The name, like CSV is a bit of a misnomer — some JSON is not valid JavaScript (and plenty of JavaScript is not valid JSON).

JSON’s format is endearingly similar to Python dictionary syntax, and so JSON files might be easy to read from a Python developer standpoint. Nonetheless, Python comes with a _{code}json_ package that will help us parse JSON files into actual Python dictionaries. Suppose we have a JSON file like the following:

**purchase_14781239.json**

```json
'{
  "user": "ellen_greg",
  "action": "purchase",
  "item_id": 14781239,
}'
```

We would be able to read that in as a Python dictionary with the following code:

**json_reader.py**

```python
import json

with open('purchase_14781239.json') as purchase_json:
  purchase_data = json.load(purchase_json)

print(purchase_data['user'])
# Prints 'ellen_greg'
```

First we import the _{code}json_ package. We opened the file using our trusty _{code}open()_ command. Since we’re opening it in read-mode we just need to pass the file name. We save the file in the temporary variable _{code}purchase_json_.

We continue by parsing _{code}purchase_json_ using _{code}json.load()_, creating a Python dictionary out of the file. Saving the results into _{code}purchase_data_ means we can interact with it. We print out one of the values of the JSON file by keying into the _{code}purchase_data_ object.

::: column.grow

#####  **Instructions**

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_  **1.** Let’s read a JSON file! Start by importing the _{code}json_ module.

Import the JSON library with the following command:

```python
import json
```

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_   **2.** Open up the file**message.json**, saving the file object to the variable _{code}message_json_.

Open the file in read-mode, without passing any additional arguments to _{code}open()_.

Remember the syntax for opening a file:

```python
with open('file.json') as file_json:
  pass
```

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_   **3.** Pass the JSON file object as an argument to _{code}json.load()_ and save the resulting Python dictionary as _{code}message_.

_{input#readingajsonfile(type="checkbox" disabled="disabled")}_  **4.**  Print out _{code}message['text']_.

::: column(width=680)


    div#ide
        pre.initcode
            include codes/readingajsonfile.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=readingajsonfile",scrolling="no",style="width: 100%; height: 500px; border: none;")


:::

[Continue](btn:next)

---
> id: writingajsonfile


### Writing a JSON File


Naturally we can use the _{code}json_ library to translate Python objects to JSON as well. This is especially useful in instances where you’re using a Python library to serve web pages, you would also be able to serve JSON. Let’s say we had a Python dictionary we wanted to save as a JSON file:

```python
turn_to_json = {
  'eventId': 674189,
  'dateTime': '2015-02-12T09:23:17.511Z',
  'chocolate': 'Semi-sweet Dark',
  'isTomatoAFruit': True
}
```

We’d be able to create a JSON file with that information by doing the following:

```python
import json

with open('output.json', 'w') as json_file:
  json.dump(turn_to_json, json_file)
```

We import the _{code}json_ module, open up a write-mode file under the variable _{code}json_file_, and then use the _{code}json.dump()_ method to write to the file. _{code}json.dump()_ takes two arguments: first the data object, then the file object you want to save.

::: column.grow

#####  **Instructions**

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_  **1.** In your workspace we’ve put dictionary called _{code}data_payload_. We want to save this to a file called **data.json**.

Let’s start by importing the _{code}json_ library.

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_   **2.** Open a new file object in the variable _{code}data_json_. The filename should be _{code}'data.json'_ and the file should be opened in write-mode.

Remember to open a file in write-mode with the following syntax:

```python
with open('file.json', 'w') as file_json:
  pass
```

_{input#writingajsonfile(type="checkbox" disabled="disabled")}_   **3.** Call _{code}json.dump()_ with _{code}data_payload_ and _{code}data_json_ to convert our data to JSON and then save it to the file **data.json**.

Using _{code}json.dump()_ with the file object as a second argument writes the resulting JSON to the file:

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

[Continue](btn:next)

---
> id: review

### Review

Now you know all about files! You were able to:

::: column.grow

- Open up file objects using _{code}open()_ and _{code}with_.
- Read a file’s full contents using Python’s _{code}.read()_ method.
- Read a file line-by-line using _{code}.readline()_ and _{code}.readlines()_.
- Create new files by opening them in write-mode.
- Append to a file non-destructively by opening a file in append-mode.
- Apply all of the above to different types of data-carrying files including CSV and JSON!

::: column(width=640)


    div#ide
        pre.initcode
            include codes/review.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=review",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

You have all the skills necessary to read, write, and update files programmatically, a very useful skill in the Python universe!

---

## Multiple Choice Quiz

> section: multiplechoicequiz

---

> id:multiplechoicequiz

What Python data type would you use to read in a CSV file as a dictionary?

json.load

csv.DictReader

csv.DictWriter

[Continue](btn:next)

---

What different modes, passed as arguments to the open() function, are there for opening a file in Python?

Read-mode (‘r’, the default mode), Write-mode (‘w’), and Append-mode (‘a’).

Read-mode (‘r’, the default mode), Delete-mode (‘d’), and Update-mode (‘u’).

Read-mode (‘r’, the default mode), Write-mode (‘w’), and Update-mode (‘u’).

[Continue](btn:next)

---

What does the with command do in Python?

Imports a new module for use by the writer of the code.

Opens a file in read-mode.

Creates a context-manager, which performs cleanup after exiting the adjacent indented block.

[Continue](btn:next)

---

Which of the following opens a file in Python?

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

[Continue](btn:next)

---

Which of the following methods on a file object (called file_object) reads the contents of a file and returns it as a string?

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

[Continue](btn:next)

---

What method reads a single line from a file object variable called file_object?


file_object.read()

file_object.readlines()

file_object.readline()

[Continue](btn:next)

---

What function would you use to render Python data to a JSON file?

json.write()

json.dump()

json.writelines()



---

## Freeform Project

> section: freeformproject

---

> id: freeformproject

### Hacking The Fender
_{code}The Fender_ , a notorious computer hacker and general villain of the people, has compromised several top-secret passwords including your own. Your mission, should you choose to accept it, is threefold. You must acquire access to _{code}The Fender_ ‘s systems, you must update his _{code}"passwords.txt"_ file to scramble the secret data. The last thing you need to do is add the signature of _{code}Slash Null_ , a different hacker whose nefarious deeds could be very conveniently halted by _{code}The Fender_ if they viewed _{code}Slash Null_ as a threat.

Use your knowledge of working with Python files to retrieve, manipulate, obscure, and create data in your quest for justice. Work with CSV files and other text files in this exploration of the strength of Python file programming.

If you get stuck during this project, check out the **project walkthrough video** which can be found in the help menu.

::: column.grow

##### **Tasks**

Mark the tasks as complete by checking them off


##### Reading In The Passwords

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **1.** Are you there? We’ve opened up a communications link to _{code}The Fender_ ‘s secret computer. We need you to write a program that will read in the compromised usernames and passwords that are stored in a file called _{code}"passwords.csv"_.

First import the CSV module, since we’ll be needing it to parse the data.



You can import the CSV module using the following syntax:

```python
import csv
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_   **2.** We need to create a list of users whose passwords have been compromised, create a new list and save it to the variable _{code}compromised_users_.

Creating a new list for a variable called _{code}new_list_ with the following syntax:

```python
new_list = []
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_   **3.** Next we’ll need you to open up the file itself. Store it in a file object called _{code}password_file_.

Use _{code}with...as_ syntax to open a file, remember it begins an indented block:

```python
with open('filename.txt') as file_object:
  # pass
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **4.**  Pass the _{code}password_file_ object holder to our CSV reader for parsing. Save the parsed _{code}csv.DictReader_ object as _{code}password_csv_.

Use _{code}csv.DictReader_ to parse the file like so:

```python
parsed_csv = csv.DictReader(file_object)
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **5.**  Now we’ll want to iterate through each of the lines in the CSV.

Create a for loop and save each row of the CSV into the temporary variable _{code}password_row_.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **6.** Inside your _{code}for_ loop, print out _{code}password_row['Username']_. This is the username of the person whose password was compromised.

Run your code, do you see a list of usernames?

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **7.** Remove the _{code}print_ statement. We want to add each username to the list of _{code}compromised_users_. Use the list’s _{code}.append()_ method to add the username to _{code}compromised_users_ instead of printing them.

A list’s _{code}.append()_ method adds it to the list.

```python
my_list.append(my_dict['Key'])
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **8.** Exit out of your _{code}with_ block for _{code}"passwords.csv"_. We have all the data we need from that file.

Start a new _{code}with_ block, opening a file called _{code}compromised_users.txt_. Open this file in write-mode, saving the file object as _{code}compromised_user_file_.

You can open a file in write-mode by passing _{code}"w"_ as an argument to _{code}open()_.

```python
with open('new_file.txt', 'w') as new_file:
  # write to file here
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **9.** Inside the new context-managed block opened by the _{code}with_ statement start a new _{code}for_ loop.

Iterate over each of your _{code}compromised_users_.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **10.** Write the username of each _{code}compromised_user_ in _{code}compromised_users_ to _{code}compromised_user_file_.

Use the file object’s _{code}.write()_ method:

```python
write_me = "write me to file"
with open('file.txt', 'w') as file_obj:
  file_obj.write(write_me)
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **11.** Exit out of that _{code}with_ block. You’re doing great so far! We’ve got the data we need to employ as insurance against _{code}The Fender_.

##### Notifying the Boss

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **12.** Your boss needs to know that you were successful in retrieving that compromised data. We’ll need to send him an encoded message over the internet. Let’s use JSON to do that.

First we’ll need to import the _{code}json_ module.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **13.** Open a new JSON file in write-mode called _{code}boss_message.json_. Save the file object to the variable _{code}boss_message_.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **14.** Create a Python dictionary object within your _{code}with_ statement that relays a boss message. Call this _{code}boss_message_dict_.

Give it a _{code}"recipient"_ key with a value _{code}"The Boss"_.

Also give it a _{code}"message"_ key with the value _{code}"Mission Success"_.

Define a Python dictionary using the curly braces _{code}{_ and _{code}}_:

```python
new_dict = {
  'key1': 'val1',
  'key2': 'val2'
}
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **15.** Write out _{code}boss_message_dict_ to _{code}boss_message_ using _{code}json.dump()_.

_{code}json.dump()_ takes two arguments: a Python data object (like a dictionary or an array) an a file object to write the resulting JSON to.

Pass the two parameters to _{code}json.dump()_ like so:

```python
json.dump(dict_obj, file_obj)
```

##### Scrambling the Password

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **16.** Now that we’ve safely recovered the compromised users we’ll want to remove the _{code}"passwords.csv"_ file completely.

Create a new _{code}with_ block and open _{code}"new_passwords.csv"_ in write-mode. Save the file object to a variable called _{code}new_passwords_obj_.

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **17.** Enemy of the people, _{code}Slash Null_, is who we want _{code}The Fender_ to think was behind this attack. He has a signature, whenever he hacks someone he adds this signature to one of the files he touches. Here is the signature:

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

Save that as a multiline string to the variable _{code}slash_null_sig_.

Remember you can start a multiline string with three quotes:

```python
multiline_str = """
  ___  __    __   __   
 / __)/  \  /  \ (  )  
( (__(  O )(  O )/ (_/\
 \___)\__/  \__/ \____/
"""
```

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **18.** Write _{code}slash_null_sig_ to _{code}new_passwords_obj_. Now we have the file to replace _{code}passwords.csv_ with!

_{input#freeformproject(type="checkbox" disabled="disabled")}_  **19.** What an incredible success! We’ll take care of moving the new passwords file over the old one in case you want to practice hacking _{code}The Fender_ in the future.

::: column(width=640)


    div#ide
        pre.initcode
            include codes/freeformproject.py
        iframe(src="http://114.116.82.25:7000/#/exercise?id=freeformproject",scrolling="no",style="width: 100%; height: 500px; border: none;")

:::

Thank you for your service, programmer.