import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit{
  
  achievements: any[] = [];

  ngOnInit(): void {
    this.achievements = [
      {
        achievement: 'Recognized for picking out 150+ bugs in project, Barclays',
        year: '2022'
      },
      {
        achievement: 'National level Covid hackathon - 2nd place',
        year: '2021'
      },
      {
        achievement: 'German A1 level',
        year: '2019'
      },
      {
        achievement: 'Intra-college football - 1st place',
        year: '2018'
      },
      {
        achievement: 'Recognized as Computer Savvy',
        year: '2017'
      },
      {
        achievement: 'Interschool science fair - 2nd place',
        year: '2016'
      },
      {
        achievement: 'South zone football - 2nd place',
        year: '2016'
      },
      {
        achievement: 'Swimming - 2nd place',
        year: '2013'
      }      
    ];
  }
}
