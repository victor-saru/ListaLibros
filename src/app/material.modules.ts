import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' }
		}
	],
	exports: [
		MatButtonModule,
		MatTableModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModules {}
