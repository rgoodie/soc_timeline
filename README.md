What
----
Just an internal Drupal 7 module to help content creators make a time line. 

Standing on big shoulders
------------------------
Initial inspiration for this project came from an attempt to bottle up the wonderful work of jQuery.timelinr (https://github.com/juanbrujo/jQuery-Timelinr)
project. I ended up rewriting the core JavaScript file to fit my particular situation but the expected HTML format and slightly modified CSS file live on. 

Why 
---
In Drupal, there are modules that do everything. But sometimes content creators just need to put widgets into the Body content area. Sometimes JavaScript/CSS magic can be embedded but this becomes hard to maintain. Therefore, I wanted to package up something (using existing tools) that could be deployed in Drupal 7 as a Input Filter. 

How
---
Install the module. Activate the Input Filter. Drop in HTML in the prescribed format (as denoted in the parent project's README page: https://github.com/juanbrujo/jQuery-Timelinr). Enter `[timeline:{#divID}]` in the body. 

What if I just want to embed the original library?
---
Go ahead. The original project is a great idea. But for my specific situation, I wanted to bundle this up into a D7 module and found I had to retool the core JavaScript logic.  

Assumptions, gotchas, and requirements
-----------
You'll need Drupal 7.x. jQueryUI is called from google's cdn. 




Warranty
--------
Absolutely none. 



