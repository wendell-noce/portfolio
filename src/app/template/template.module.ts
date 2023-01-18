import { TranslateModule } from '@ngx-translate/core';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavMenuComponent } from './menu/nav-menu/nav-menu.component';
import { MenuButtonComponent } from './menu/menu-button/menu-button.component';
import { FooterComponent } from './footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UserLanguagesComponent } from './components/user-languages/user-languages.component';

//Materail Modules
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        MenuButtonComponent,
        NavMenuComponent,
        UserSidebarComponent,
        FooterComponent,
        AvatarComponent,
        UserLanguagesComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        TranslateModule
    ],
    exports: [
        MenuButtonComponent,
        NavMenuComponent,
        UserSidebarComponent,
        FooterComponent

    ]
})
export class TemplateModule { }
