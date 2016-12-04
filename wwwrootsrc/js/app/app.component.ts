// imports the Component decorator from the core
// Angular 2 module
import { Component } from '@angular/core';

// The Component Decorator configures this class
// to serve as a component in the Angular 2 application
@Component({
	// Used to identify the element the component will be applied to in
	// the DOM structure of the web page
	selector: 'main',
	// Loads the component's specific styles
	styles: [require('./app.component.scss')],
	// Loads the component's template
	template: require('./app.component.html')
})
export class AppComponent {

	// sets a property on the component which will be referenced
	// as a template variable in the template file
	message: string = 'Hello World!';

}