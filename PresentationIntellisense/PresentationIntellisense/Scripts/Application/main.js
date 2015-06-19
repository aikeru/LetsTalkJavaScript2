//We can use intellisense in Visual Studio 2013 without any plugins
//We can also use Go To Definition for these things. Batteries included.
//If autosync is turned on, new JavaScript files will be auto-added to _references.js, which gives us intellisense powers.

//Decorating fields in JavaScript (these are not technically properties)
// https://msdn.microsoft.com/en-us/library/hh542725.aspx
//How to: Create JavaScript XML Documentation Comments
// https://msdn.microsoft.com/en-us/library/bb514138.aspx

var x = globalFoo(5); //VS knows x is a number
var y = globalFooStr(5); //VS knows y is a string

//VS knows I have a module namespace
//...and that I have functions I expose from a closure
foospace.foomod.bar();
foospace.foomod.baz();

//Intellisense in VS2013 is powerful. It even recognizes this dynamic expression!
var bob = dynamicfoo.getFoo("bob");
//it knows bob has name, and I can go to definition on that
console.log(bob.name);
var who = dynamicfoo.getFoo("who");
//it knows 'who' does not have name, but does have unknown
console.log(who.unknown);

//Prototypal stuff works too
var c = new Car();
c.drive(); //Picks up inherited function
c.applyBreaks(); //Picks up own prototype
console.log(c.brand); //Picks up ctor initialized fields/functions and gives me xml comments for them (type + description)

//It IS possible to fool it, because JavaScript is a really dynamic language. This tooling gets even better in VS2015!