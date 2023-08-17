import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit{

  projects: any[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        name: 'Covid response app',
        link: 'https://drive.google.com/file/d/17lDcdgtHUAyH6MZ8GNqjcmv0exDYE-mn/view?usp=sharing',
        about: ['Flutter', 'PHP', 'Google-APIs']
      },
      {
        name: 'Class manager app - Angular',
        link: 'https://github.com/Aswatth/classManager-Angular',
        about: ['Angular', 'Spring Boot', 'H2 Database', 'HTML', 'CSS', 'Typescript']
      },
      {
        name: 'Class manager app - Flutter',
        link: 'https://github.com/Aswatth/classManagerApp',
        about: ['Flutter', 'SQLite database', 'Dart']
      },
      {
        name: 'My Cash flow',
        link: 'https://github.com/Aswatth/myCashFlow',
        about: ['Flutter', 'SQLite database', 'Dart']
      },
    ];
  }  
}
