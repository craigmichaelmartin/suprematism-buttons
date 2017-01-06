import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';

export * from './button.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ButtonComponent,
    ],
    exports: [
        ButtonComponent,
    ],
    entryComponents: [
        ButtonComponent,
    ]
})
export class ButtonModule { }
