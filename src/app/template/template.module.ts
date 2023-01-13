import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavMenuComponent } from './menu/nav-menu/nav-menu.component';
import { MenuButtonComponent } from './menu/menu-button/menu-button.component';

@NgModule({
    declarations: [
        MenuButtonComponent,
        NavMenuComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MenuButtonComponent,
        NavMenuComponent
    ]
})
export class TemplateModule { }
