# Market Analysis app - coded by [Drew Stock] (https://github.com/DrewStock)
==================================================
Market Analysis app is an application that enables users to select images that represent products they would be interested in purchasing. The user data is stored for analysis, with an end goal of determining which products should be manufactured and marketed.
==================================================
## Version history
* Version 1.0
  * Utilized object oriented programming to create objects of the product images. The image objects have a property that stores the number of times they have been selected by the user. This property is accessed to display the voting results for all of the image objects.
* Version 1.1
  * CSS
    * Created style.css for font and color styles
    * Created layout.css for layout
    * Created main.css to use @import to link style.css and layout.css
  * ChartJS
    * Add chart to document that displays user vote totals
  * JavaScript
    * Adds element for user to see count of their clicks and increments counter
    * Added reset function and event listener:
      * When user clicks reset button, the chart is hidden and the counter is reset to zero
