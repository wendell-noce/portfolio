import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-skill-banner',
    templateUrl: './skill-banner.component.html',
    styleUrls: ['./skill-banner.component.scss']
})
export class SkillBannerComponent implements OnInit {

    index: number;

    skills = [
        'html5',
        'css3',
        'javascript',
        'angular',
        'wordpress',
        'php',
        'node',
        'git',
    ]

    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const activeRoute = this._route.snapshot.params.skillname;
        console.log(activeRoute);

        this.index = this.skills.indexOf(activeRoute);
        console.log(this.index);

    }
}
