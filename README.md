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
