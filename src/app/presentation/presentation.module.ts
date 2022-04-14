import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantCardListComponent } from './elephant-card-list/elephant-card-list.component';

@NgModule({
  declarations: [ElephantCardListComponent],
  imports: [CommonModule],
  exports: [ElephantCardListComponent],
})
export class PresentationModule {}
