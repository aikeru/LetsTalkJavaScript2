# Let's Talk About JavaScript: Part 2
The sequel to my CoP talk "Let's Talk About JavaScript"

Slides for this presentation: 
http://slides.com/michaelsnead/lets-talk-about-javascript-5

### How to install gulp for your machine (one-time)
* Install node.js<br/>
https://nodejs.org/download/
* Install gulp globally by opening an admin prompt and running ```npm install -g gulp```
* If anything went wrong, make sure these are in your path:<br/>
```
C:\Program Files\nodejs
C:\Users\<UserName>\AppData\Roaming\npm
```
* Install the Task Runner Explorer extension for VS2013<br/>
https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708

### How to add gulp to your existing MVC project
* Add a ```package.json``` file like the one here to the root of your **web project**:<br/>
https://github.com/aikeru/LetsTalkJavaScript2/raw/master/ExistingMVCAfter/LetsTalkJS2/package.json
* Run ```npm install``` from within the same folder<br/>
You only need to do this when the package.json changes.
* Add a ```gulpfile.js``` file like the one here to the root of your **web project**<br/>
https://raw.githubusercontent.com/aikeru/LetsTalkJavaScript2/master/ExistingMVCAfter/LetsTalkJS2/gulpfile.js

#### If you use the exact same ```gulpfile.js``` you'll want to...
* Add the images ```Check.png``` and ```warning.png``` from here:<br/>
https://github.com/aikeru/LetsTalkJavaScript2/tree/master/ExistingMVCBefore/LetsTalkJS2
* Change the path of your JavaScript tests to match where you keep them<br/>
The example has two projects, ```LetsTalkJS2``` and ```Presentation.Tests```.
Since the tests are in the ```Presentation.Tests``` folder, you specify to go up one folder (to **solution root**) then into the ```Presentation.Tests``` project folder and into the ```Client``` folder where tests are stored.<br/>
**The relative path is configured on line 15 of ```gulpfile.js```.**
