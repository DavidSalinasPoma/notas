import { NgModule } from '@angular/core';

import { MatNativeDateModule } from '@angular/material/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
    exports: [FormsModule, MatDialogModule,
        MatFormFieldModule, MatButtonModule,
        MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule]
})
export class MaterialModule { }
