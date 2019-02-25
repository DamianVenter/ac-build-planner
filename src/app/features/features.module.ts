import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { MaterialModule } from 'src/shared/material-module';

@NgModule({
  declarations: [HeroesListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeroesListComponent
  ]
})
export class FeaturesModule { }
