import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ModulesPrime = [
  BrowserModule,
  BrowserAnimationsModule,
  SidebarModule,
  ButtonModule,
];

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, ModulesPrime],
  exports: [SidebarComponent],
})
export class LayoutModule {}
