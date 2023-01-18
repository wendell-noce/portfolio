import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-skills-progress',
    templateUrl: './skills-progress.component.html',
    styleUrls: ['./skills-progress.component.scss']
})
export class SkillsProgressComponent implements OnInit {

    @Input() label: string;
    @Input() skill: number;
    @Input() path: string;

    constructor(
        private _route: Router
    ) { }

    ngOnInit(): void {
    }

    goTo(route:string) {
        console.log(route);

        this._route.navigate([`/skill/${route}`]);
    }

}
