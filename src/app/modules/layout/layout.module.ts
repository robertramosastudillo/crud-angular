import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { TableListComponent } from './table-list/table-list.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ConfirmationDialogComponent,
    TableListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule,
  ],
  exports: [SidebarComponent, ConfirmationDialogComponent, TableListComponent],
})
export class LayoutModule {}
