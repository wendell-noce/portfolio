import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Materail Modules
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatRippleModule,
        TranslateModule
    ],
    exports: [
        CardComponent
    ]
})
export class SharedModule { }
