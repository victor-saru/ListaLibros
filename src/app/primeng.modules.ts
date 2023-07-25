import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
	exports: [
		DropdownModule,
		RippleModule,
		CardModule,
		CalendarModule,
		FormsModule,
		ButtonModule,
		MessagesModule,
		MessageModule,
		BrowserAnimationsModule,
		BrowserModule,
		InputTextModule,
		InputNumberModule,
		ProgressSpinnerModule,
		TabMenuModule,
		DialogModule,
		TableModule,
		ToastModule,
		InplaceModule,
		MenuModule,
		ToolbarModule,
		TabViewModule,
		DynamicDialogModule,
		PanelModule,
		TooltipModule,
		ConfirmPopupModule,
		CheckboxModule,
		StepsModule,
		RadioButtonModule
	]
})
export class PrimeNgModules {}
