import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DialogService, DynamicDialogRef]
})
export class AppComponent {
	title = 'CalculoPlusvaliaFront';

	// Le especificas que el "changeValues" que recibe sea tipo booleano de valor "true".
	changeValues: boolean = true;

	nifOrganizacion: string = '';

	constructor(private translate: TranslateService) {
		translate.addLangs(['es']);
		translate.setDefaultLang('es');
		translate.use('es');
	}
}
