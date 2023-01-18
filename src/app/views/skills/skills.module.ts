import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillsRoutingModule } from './skills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { SkillBannerComponent } from './components/skill-banner/skill-banner.component';



@NgModule({
  declarations: [
    SkillsPageComponent,
    SkillBannerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SkillsRoutingModule,
    TranslateModule
  ]
})
export class SkillsModule { }
