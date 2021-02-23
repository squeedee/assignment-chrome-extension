# HIGHLIGHT & GO
## NMED 3720 - Assignment 1 
### University of Lethbridge, Spring 2021

This extension was created because as a student, slogging through various websites and articles, I'd often lose my place when reading and trying to take notes at the same time. I wanted to highlight text as a way to:

* Make note of important information
* Keep my place if I need to step away or write something down.
* Change how unhighlighted text looks when selected without a highlight color applied.

While working on this assignment, I accidently discovered that for the highlighter to work I would have to use a very interesting bit of code `document.designMode = 'on'`. Doing a bit of digging I discovered that `document.designMode` only has two options. `'on'`and `'off'`. This line of code allows you to directly edit a page, as though it were a word document. While it allows me to highlight the text, you are also able to directly edit the text on the page, which in turn allows for note taking directly within the page.

All changes to any altered page are currently temporary, only remaining until you refresh the page. 

## HOW TO USE

1. First pick a color for the highlight
2. Click and drag across the text you want to highlight

Hightlights will NOT WORK unless you pick the color first. 

**1. Editing Text & Leaving Comments
1. Click on the text and start typing
2. Make sure to highlight what you wrote, so you can tell what is yours and what is the original source.

# SOURCES

ICON [ICONFINDER](https://www.iconfinder.com/icons/4763231/broad_highlighter_marker_pen_stationery_icon)

TEXT SELECTION COLOR [Text Selection Color and Background in CSS Tutorial](https://tutorialdeep.com/knowhow/text-selection-color-css/)

HIGHLIGHTER [Stackoverflow](https://stackoverflow.com/questions/18946573/save-selection-text-and-show-it-later-in-html-and-javascript)

HIGHLIGHTER CODE [JSFIDDLE](https://jsfiddle.net/r9fo6nut/15/)
