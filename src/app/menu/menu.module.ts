import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopComponent } from './navtop/navtop.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavtopComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavtopComponent],
})
export class MenuModule {}
