import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    exports: [FormsModule, MatDialogModule,
        MatFormFieldModule, MatButtonModule,
        MatInputModule, MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule, MatSelectModule, MatIconModule]
})
export class MaterialModule { }
