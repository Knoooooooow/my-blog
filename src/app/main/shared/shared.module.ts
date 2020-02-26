import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const MATERIAL_MODULES = [
    MatFormFieldModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatTreeModule,
    MatSelectModule,
    MatProgressBarModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ...MATERIAL_MODULES,
    ]
})
export class SharedModule { }
