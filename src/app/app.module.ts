import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { TimelineModule } from 'primeng/timeline';
import { KnobModule } from 'primeng/knob';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './content/personal-info/personal-info.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { EducationComponent } from './content/education/education.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SkillsComponent } from './content/skills/skills.component';
import { AchievementsComponent } from './content/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabViewModule,
    CardModule,
    SpeedDialModule,
    TimelineModule,
    KnobModule,
    TagModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
