import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('flip', [
      state('notFlipped', style({ transform: 'none' })),
      state('flipped', style({ transform: 'rotateY(180deg)' })),
      transition('notFlipped => flipped', animate('500ms ease-in')),
      transition('flipped => notFlipped', animate('500ms ease-out'))
    ])
  ]
})
export class ExperienceComponent implements OnInit{
  events: any[] = [];

  isFlipped = false;
  
  ngOnInit(): void {
    this.events = [
      {
        company: 'Barclays',
        designation: 'Graduate Analyst',
        duration: 'Aug 2021 - Aug 2023',
        role: ['Automating web-based applications using xUnit, Selenium and Xray.','Building custom reconciliation tools for automating data validations.']
      },
      {
        company: 'Barclays',
        designation: 'Graduate Intern',
        duration: 'Jun 2020 - Jul 2020',
        role: ['BDD testing using Cucumber for spring boot application.','Using Liquibase to manage database changes.']
      }
    ];
  }

  toggleCard() {
    this.isFlipped = !this.isFlipped;
    console.log("Flipping: "+this.isFlipped);    
  }
}
