import { Component } from '@angular/core';
@Component({
	selector: 'hello-world',
	template: `<h4>{{title}}</h4>
		<ul>
			<li *ngFor="let it of list; let i=index">{{it}}</li>
		</ul>
	`
	// templateUrl:''
	// directives: [HeroDetailComponent],
	// providers: [HeroService]
})
export default class HelloWorld { 
	// private hero :Hero[];
	
	// private hero : Hero'
	
	private title :String = 'god help me';

	private list :String[] = ['jim','tom','sb','super'];

	// constructor
	constructor() { /** private helloService :HelloService* */}
	
	// init
	ngOnInit() {}
}