import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { PlayComponent } from './play/play.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeListComponent, PlayComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, HttpClientModule],
  exports: [HomeListComponent],
})
export class HomeModule {}
