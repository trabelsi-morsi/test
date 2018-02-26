import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AmChartsModule } from '@amcharts/amcharts3-angular';
@NgModule({
    imports: [
        CommonModule,
        BsComponentRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        Ng2Charts,
        AmChartsModule

    ],
    declarations: [
        BsComponentComponent
    ]
})
export class BsComponentModule {}
