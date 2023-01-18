import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills-page',
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

    index = 2;

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
        this.index = this.skills.indexOf(activeRoute);
    }

}
