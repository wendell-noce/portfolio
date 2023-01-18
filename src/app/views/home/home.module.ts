import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeTabsComponent } from './components/home-tabs/home-tabs.component';

import {MatTabsModule} from '@angular/material/tabs';
import { SkillsProgressComponent } from './components/skills-progress/skills-progress.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeBannerComponent,
    HomeTabsComponent,
    SkillsProgressComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTabsModule,
    TranslateModule
  ]
})
export class HomeModule { }
