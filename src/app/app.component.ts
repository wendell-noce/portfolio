import { UserService } from './core/services/user.service';

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    theme: string;

    constructor(
        public _translate: TranslateService,
        private _userService: UserService
        ) {
        _translate.addLangs(['en', 'br']);
        _translate.setDefaultLang('en');
    }

    ngOnInit(){
        this._userService.getConfig().subscribe(
            (data: any) => {
                this.theme = data.theme;
            }
        )
    }

}
