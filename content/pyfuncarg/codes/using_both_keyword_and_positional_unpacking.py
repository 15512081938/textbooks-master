def remove(filename, *args, **kwargs):
      with open(filename) as file_obj:
    text = file_obj.read()

  # Add code here to update text.
  

  return text

#print(remove("text.txt", "generous", "gallant", fond="amused by", Robin="Mr. Robin"))
