import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  exports: [SidebarComponent, BrowserModule, BrowserAnimationsModule],
})
export class LayoutModule {}
