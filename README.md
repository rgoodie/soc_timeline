What
----
Just an internal Drupal 7 module to help content creators make a time line. Initial inspiration for this project came from an attempt to bottle up the wonderful work of jQuery.timelinr (https://github.com/juanbrujo/jQuery-Timelinr)
project. I ended up rewriting the core JavaScript file to fit my particular situation but the expected HTML format and slightly modified CSS file live on. 

Why 
---
In Drupal, there are modules that do everything. Though, sometimes content creators just need to put widgets into the Body content area and not depend on a block. Yes, JavaScript/CSS magic can be embedded but this becomes hard to maintain. Therefore, I wanted to package up something (using existing tools) that could be deployed in Drupal 7 as a Input Filter. 

How
---
Install the module. Activate the Input Filter. Drop in HTML in the prescribed format (as denoted in the parent project's README page: https://github.com/juanbrujo/jQuery-Timelinr). Enter `[timeline:{#divID}]` in the body. 


Assumptions, gotchas, and requirements
-----------
You'll need Drupal 7.x. jQueryUI is called from google's cdn. 

For your circumstance, you may be better off using jQuery-Timelinr in its original form. 




Warranty
--------
Absolutely none. 



