import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { NgModule } from '@angular/core';

export * from './buttons.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ButtonsComponent,
    ],
    exports: [
        ButtonsComponent,
    ],
    entryComponents: [
        ButtonsComponent,
    ]
})
export class ButtonsModule {

}
