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

We'll soon see how to create custom filters. What is a use case for a custom filter?
