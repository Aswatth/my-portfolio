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
        name: 'Event management app',
        link: '',
        tech: ['Flutter', 'PHP',],
        about: [
          'A flutter app developed for college fest.',
          'Participants can scan QR code of an event to enroll.',
          'Participants can be notified about upcoming events and results of previously participated events.'
        ],
        icon: '',
        year: '2018'
      },
      {
        name: 'Covid response app',
        link: 'https://drive.google.com/file/d/17lDcdgtHUAyH6MZ8GNqjcmv0exDYE-mn/view?usp=sharing',
        tech: ['Flutter', 'PHP', 'Google-APIs'],
        about: [
          'A flutter app developed for a national level covid hackathon.',
          'Ability to calculate infection spread and notify users about infected zones.',
          'Request or enroll for volunteer services.',
          'Native language support for each state.'
        ],
        icon: 'pi pi-video',
        year: '2020'
      },
      {
        name: 'Leaf disease classification',
        link: '',
        tech: ['Python', 'Machine Learning', 'CNN'],
        about: [
          'A disease classification model using CNN and YOLO.',
          'Achieved an accuracy of 97% in CNN on plant village dataset along with prediction of spread and severity using YOLO algorithm.'
        ],
        icon: '',
        year: '2021'
      },
      {
        name: 'Class manager app - Flutter',
        link: 'https://github.com/Aswatth/classManagerApp',
        tech: ['Flutter', 'SQLite database', 'Dart'],
        about: [
          'A mobile app to manage student information with an in-app SQLite database.',
          'Visualize performance of students and track payments.'
        ],
        icon: 'pi pi-github',
        year: '2022'
      },
      {
        name: 'Fantasyer',
        link: 'https://github.com/Aswatth/fantasyer',
        tech: ['Python', 'StreamLit'],
        about: [
          'Developed a fantasy helper application to provide stats of players and teams to help build the right team on Fantasy.',
          'Scrapped data from cricsheet and calculated essential stats for batsmen and bowlers.',
          'Built front end using Stream Lit and deployed using Google sheets and Stream Lit.'
        ],
        icon: 'pi pi-github',
        year: '2022'
      },
      {
        name: 'Class manager app - Angular',
        link: 'https://github.com/Aswatth/classManager-Angular',
        tech: ['Angular', 'Spring Boot', 'H2 Database', 'HTML', 'CSS', 'Typescript'],
        about: [
          'A web-based application with a dedicated backend using Spring boot and H2 database to manage student data.',
          'Track performance, importing and exporting data using excel, generate payment reports as PDF'
        ],
        icon: 'pi pi-github',
        year: '2023'
      },
      {
        name: 'My Cash flow',
        link: 'https://github.com/Aswatth/myCashFlow',
        tech: ['Flutter', 'SQLite database', 'Dart'],
        about: [
          'A flutter app to track and manage budgets with an in-app SQLite database.',
          'Visualize expenses.',
          'Track transactions.',
          'Allocate budgets and investments.',
          'Manage multiple accounts'
        ],
        icon: 'pi pi-github',
        year: '2023'
      },
    ];
  }  
}
