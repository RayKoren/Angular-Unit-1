1)

Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?

Support, speed and the fact that it is taking over the industry.


People have some very strong opinions about Angular.
What are 3 common complaints people have about Angular?
 1 Parsing the entire DOM at load time is an issue
 2 Angular forces you to work in one specific way
 3 While Angular can be used to build mobile apps, it wasn't designed with them in mind. This includes everything from the fundamental performance issues , the inability to cache pre-compiled views and even lackluster touch support.


Is Angular an MVC framework?

MV*


Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?

Use ng-app to auto-bootstrap an AngularJS application. The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

2)

What does ng-model do?

The ngModel directive binds an input , select , textarea (or custom form control) to a property on the scope using NgModelController

What is "dirty checking"?

Every time there could be a potential change, Angular will do a dirty check inside its event loop to ensure everything is consistent.

Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

What are those {{ }} expressions? Are they Handlebars?

Explain what two-way data binding is.

This is called two-way or bi-directional binding.

when a model changes, the view knows about it.
when a view changes, the model also knows about it.

BONUS: Research the $digest loop

4)

What are Angular expressions?
Javascript-like snippets that are usually placed in bindings like "{{ expression }}".

 How do they compare to tags from templating engines you've used before?
Similar

What happens when you write invalid code in an expression?
the code shows on the page

What type of error do you get?
the code shows on the page


What are Angular filters?
Filters are simply bits of code that format data before displaying it.

Describe what a filter does and then name four built-in filters, including one that we haven't used yet.

currency - converts a number into a currency value
date - converts a string into a datetime or UNIX timestamp
filter - returns a subset of items from an array
json - converts a JavaScript object to JSON


What's the syntax for filters?
{{3.14159265359 | currency}}

Can you use more than one filter? yes

<tr ng-repeat="player in players | filter:{id: player_id, name:player_name} | filter:ageFilter">

$scope.ageFilter = function (player) {
    return (player.age > $scope.min_age && player.age < $scope.max_age);
}

5)

What is the purpose of ng-init?

The ngInit directive allows you to evaluate an expression in the current scope.
This directive can be abused to add unnecessary amounts of logic into your templates. There are only a few appropriate uses of ngInit, such as for aliasing special properties of ngRepeat, as seen in the demo below; and for injecting data via server side scripting. Besides these few cases, you should use controllers rather than ngInit to initialize values on a scope.

Why use ng-src and ng-href?
Only use ng-src and ng-href if you have dynamic links or have to load images dynamically

What are directives?
AngularJS directives are extended HTML attributes with the prefix ng-.


Does ng-class require an object to be passed in?
no
What order does an ng-repeat display items in?
low to high

How does ng-repeat handle duplicate data?
if an item is added to the collection, ngRepeat will know that all other items already have DOM elements, and will not re-render them.

6)
What is $scope?
 The $scope object is a JavaScript object that glues together controllers and views. Properties that are on the $scope object are available to both the view and the controller.


What are Angular modules? What's the syntax for defining a module?
What is a Module?
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.

Why?
Most applications have a main method that instantiates and wires together the different parts of the application.

Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped. There are several advantages to this approach:

The declarative process is easier to understand.
You can package code as reusable modules.
The modules can be loaded in any order (or even in parallel) because modules delay execution.
Unit tests only have to load relevant modules, which keeps them fast.
End-to-end tests can use modules to override configuration.


Why do we pass in $scope as an argument to controller functions?



In Express, what are Angular controllers most analogous to?
