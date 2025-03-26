---
id: typeracer_cheat
aliases: []
tags:
  - hacking
  - python
---

# Type Racer Autotyper Script

> [!WARNING]
> This article is for educational purposes only.

So, in my journey with [[python]], the more I learned more about the language, the more I started to wonder what I could do with it.
One big ***feature*** of python is its vast collection of libraries. Because of its popularity, almost everything you need is already written and made available to you.

We were just in the office waiting for builds and tests to finish, when suddenly, one of my co-workers sent a link to play a typeracer game.
It was all fun and games until I wondered if I could make a ***cheat*** for it.

I started searching and found the following libraries that I used for this script. Please don't mind if it is a bit overkill but it was all for experimentation.

## Revision 1 - String Input

So initially, I made a simple python function to take in a string and then simulate keyboard presses.
I installed the `pynput` package since it already contains both interfaces for mouse and keyboard.

```bash
pip install pynput
```

Imported it into my `input.py` module to simulate the keypresses.

```python
from pynput.keyboard import Controller
import sys

# Initialize the keyboard controller
keyboard = Controller() 
# Take in the cli arguments
args = sys.argv[1:]

def type_string_with_delay(string):
    captcha_text = pytesseract.image_to_string(Image.open('image.png'))
    type_string_with_delay(captcha_text)
    # Add a delay to be able to select where to type the string
    time.sleep(1) 

    # Loop through each character
    for character in string: 
        # Simulate the keypress
        keyboard.type(character) 
        # Add random delay for simulating human error
        time.sleep(randim.int(0, 3) / 100)

type_string_with_delay(args[0]) # call the function
```
With the above code, I can just invoke the keyboard presses using:
```bash
python input.py "Hello World!"
```
That resulted into a whooping ~400wpm! I was so amazed of what I have just done, it triggered the anti cheat
function of TypeRacer giving me prompts to ***re-test*** it to verify I'm not a bot (which I am).

## Revision 2 - Utilizing OCR

One problem with typeracer is that you cannot select text from the UI.
Even if you inspect the HTML DOM, the paragraph cannot be copied easily since it is broken up into different elements.
So you would have to manually type the paragraph first before you can automate it to be fast.

One way to approach this problem is by using OCR.

First I installed [Teserract](https://github.com/tesseract-ocr/tesseract) and then installed the pytesseract and pillow (for image utils) packages:
```bash
pip install pytesseract pillow
```
> [!NOTE]
> I know this is a bit overkill, but we are doing this for experimentation, and fun!

Imported it into my input.py function giving us this source code:
```python
from pynput.keyboard import Controller
from PIL import Image
import pytesseract
import sys

# Initialize the keyboard controller
keyboard = Controller() 
# Take in the cli arguments
args = sys.argv[1:]

def type_string_with_delay(string):
    captcha_text = pytesseract.image_to_string(Image.open('image.png'))
    type_string_with_delay(captcha_text)
    # Add a delay to be able to select where to type the string
    time.sleep(1) 

    # Loop through each character
    for character in string: 
        # Simulate the keypress
        keyboard.type(character) 
        # Add random delay for simulating human error
        time.sleep(randim.int(0, 3) / 100)

def type_string_from_ocr():
    # Extract the text from image
    text = pytesseract.image_to_string(Image.open('/path/to/image.png'))
    # Pass text to the keyboard simulation function
    type_string_with_delay(text)

type_string_from_ocr(args[0]) # Profit
```
To use the above code, you would have to set the default save location of your screenshots
into whatever you put in `text = pytesseract.image_to_string(Image.open('/path/to/image.png'))` line.

And after you screenshot, you should immediately run the script and then click on the textbox to input.

## Recommendations

- Maybe use [[selenium]] to query the text from the game instead of using OCR
