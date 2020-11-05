import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [SidebarComponent],
})
export class LayoutModule {}
