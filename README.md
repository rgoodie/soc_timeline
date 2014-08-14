What
----
Just an internal Drupal 7 module to help content creators make a time line. 

Why 
---
In Drupal, there are modules that do everything. But sometimes content creators just need to put widgets into the Body content area. Sometimes Javascript/CSS magic can be emdedded but this becomes hard to maintain. Therefore, I wanted to package up something (using existing tools) that could be deployed in Drupal 7 as a Input Filter. 

How
---
Install the module. Activate the Input Filter. Drop in HTML in the prescribed format (as denoted in the parent project's readme page*). Enter `[timeline:{#divID}]` in the body. 

Assumptions, gotchas, and requirements
-----------
- Drupal 7.x
- jQueryUI is called from google's cdn

Standing on big sholders
------------------------
Initial inspriation for this project came from an attempt to bottle up the wonderful work of jQuery.timelinr*
project. I ended up rewriting the core Javascript file to fit my particular situation but the expected HTML format and slightly modified CSS file live on. 


Warrenty
--------
Absolutely none. 



* jQuery-Timlnr - https://github.com/juanbrujo/jQuery-Timelinr
