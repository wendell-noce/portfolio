import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-languages',
    templateUrl: './user-languages.component.html',
    styleUrls: ['./user-languages.component.scss']
})
export class UserLanguagesComponent implements OnInit {

    @Input() percentage = '';
    @Input() language = '';
    @Input() locale = '';

    constructor(
        public _translate: TranslateService
    ) { }

    ngOnInit(): void {
    }

    setLanguage() {
        this._translate.use(this.locale);
    }
}
