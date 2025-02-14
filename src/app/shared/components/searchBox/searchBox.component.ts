import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'shared-searchBox',
	templateUrl: 'searchBox.component.html'
})

export class SearchBoxComponent implements OnInit {

	@Input()
	public placeholder: string = '';

	ngOnInit() { }
}