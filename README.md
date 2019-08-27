# Angular8_Learning

Angular Architecture:
---------------------

Building Blocks:
	- Module
		- Angular apps are moduler in nature. Angular application is collection of many invidual modules.
		  every module represents a feature area of your application. it is a lines of core that can be import/export.
		  every angular application has atleast one module that is root module - appModule.
		  each module intern is a combination of components & services.
		  
	- Component
		- A component controls the portion of the view in the browser. RootComponent -> other will be nested in that component.
		  Component has one HTML Template & main class has the logic that controls the view.
	
	- Service
		- A class that contains the business logic of the application. 
		
	- Decorator
		- It is a method that provides information about that class attached to it.

		@Component:
			The metadata defines how that component would be initialized and used.
		@NgModule:
			Decorator that marks a class as an NgModule and supplies configuration metadata.
			
			declarations: has all the components listed which will be used in the application.

Interpolation:
	- A property or expression inside double curly brces is called "interpolation".
	- Though interpolation we are asking angular to evalute the content and show the value while loading the component.
	- simplest way is to bind it up to a class to template.

Property Binding:
	- important know the difference between dom property and html attribute.
	- Attributes and Properties are not same
	- Attributes - HTML, once they are rendered and they can't be changed. (Initial value)
	- properties - DOM, can be changed
	- [html_Attribute_name] = "class_attr_name" (boolean fields like disable button)

class binding:
	- [class] = "class_property"
	- [class.<class_name>]="hasError" (boolean condition)
	- [class] = "" and class = "" will consider the class_binding value
	- [ngClass]="messageClasses" - to apply multiple classes

style binding:
	- [style.<property>]="'<value>'"
	- [style.color]="hasError ? 'red' : 'green'"
	
Event Binding:
	- (click)="onClick($event)

Template Reference Variables:
	- #myInput type="text"

Two way inding:
	- [(ngModel)]="name" input box
	- {{name}}

Stuctural Binding:
	- add or remove HTML elements
		ngIf, ngSwitch, ngFor
	- *ngIf - <h2 *ngIf="displayName"> Text</h2>
	- <h2 *ngIf="displayName; then thenBlock; else elseBlock"> </h2> <ng-template #thenBlock>
	- <div [ngSwitch]="color">
		  <div *ngSwitchCase="'red'"> You picked red color </div>
		  <div *ngSwitchCase="'blue'"> You picked blue color </div>
		  <div *ngSwitchCase="'green'"> You picked green color </div>
		  <div *ngSwitchDefault> Pick again </div>
	  </div>
	- <div *ngFor="let color of colors; even as e"> // keywords -> index, odd, even, first, last
		<h2 [style.color]="e ? 'red' : 'blue' "> {{color}}</h2>
	  </div>
	  
Component Interation:
	- parent component might send the data to child component & child to parent.
	- by using @input & @output decorators the components interactions will happend.
	-  <div class="app-test" (childEvent)="message=$event" [parentData]="name"></div>
	   @Input('parentData') public name;
	   
	   <button (click)="fireEvent()"> Send Event </button>
	   @Output() public childEvent = new EventEmitter();
Pipes:
	- Allows us to transform the data before displaying them in the view. 
	- which doesn't change the value of the property in the class.
	<h2> {{name}} </h2>
    <h2> {{name | lowercase}} </h2>
    <h2> {{name | uppercase}} </h2>
    <h2> {{message | titlecase}} </h2>
    <h2> {{name | slice:1:7}} </h2>
    <h2> {{person | json}} </h2>

    <h2> {{5.678 | number:'1.2-3'}} </h2>
    <h2> {{5.678 | number:'3.4-5'}} </h2>
    <h2> {{5.678 | number:'3.1-2'}} </h2>

    <h2> {{0.25 | percent}} </h2>
    
    <h2> {{0.25 | currency}} </h2>
    <h2> {{0.25 | currency: 'INR': 'code' }} </h2>

    <h2> {{date}} </h2>
    <h2> {{date | date: 'short'}} </h2>
    <h2> {{date | date: 'shortDate'}} </h2>
    <h2> {{date | date: 'shortTime'}} </h2>

Services:
	- A class with a specific purpose.
		- to share data across components
		- to implement application logic
		- External Interation (DB connection)

Dependency Injection:
	DI as design pattern
	- DI is a coding pattern in which a class receives its dependencies 
	  from external sources rather than creating them itself.
	- var myEngine = new Engine();
	  var myTires = new Tires();
	  var myCar = new Car(myEngine, myTires);
	- Injected is container which maintains the dependencies and creates instances for you.
	 1. create a service
	 2. Inject it
	 3. use the service in the components by declaring in the constructor
		- @Component is already has injectable decorator to make the services available

HTTP & Observables and RxJS:
	- A sequence of items that arrive asynchronously over time.
	- HTTP call - single item
	- Single item - HTTP response
	1. HTTP Get request from EmployeeService
	2. Receive the observable and cast it into an emloyee array
	3. Subscribe to the observable from EmpList and EmpDetail
	4. Assign the employee array to a local variable.
	
	RxJS: 
		- Reactive Extentions for Javascript
		- External library to work with Observables

Routing and Navigation
Wildcard Route and Redirecting Routes
Route Parameters
paramMap Observable
Optional Route Parameters
Relative Navigation
Child Routes

Forms:
	- Template Driven Froms - heavy on the component template
	- Reactive Forms - heavy on the component class
	
