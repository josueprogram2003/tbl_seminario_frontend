import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuMainComponent } from './menu/menu-main/menu-main.component';
import { MenuModule } from './menu/menu.module';
import { NavComponent } from './menu/nav/nav.component';
import { SeminarioComponent } from './seminario/seminario.component';
import { TableComponent } from './seminario/table/table.component';

@NgModule({
  declarations: [AppComponent, NavComponent, MenuMainComponent, SeminarioComponent, TableComponent],
  imports: [BrowserModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
