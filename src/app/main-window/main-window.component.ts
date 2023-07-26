import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-window',
	templateUrl: './main-window.component.html',
	styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
	@Input() booksArray: any;
	@Input() categoriesArray: any;

	selected: string = 'All'

	ngOnInit(): void {}
}
