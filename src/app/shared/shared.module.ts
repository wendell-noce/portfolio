import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ButtonComponent } from './components/button/button.component';

//Materail Modules
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        ButtonComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatRippleModule
    ],
    exports: [
        ButtonComponent,
        CardComponent
    ]
})
export class SharedModule { }
