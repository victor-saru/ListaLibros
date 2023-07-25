import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { MaterialModules } from './material.modules';

// PrimeNG
import { PrimeNgModules } from './primeng.modules';

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModules,
		PrimeNgModules,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
