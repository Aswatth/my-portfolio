import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  events: any[] = [];
  
  ngOnInit(): void {
    this.events = [
      {
        school_university: 'Northeastern University, Boston, USA',
        course: 'Master of Science in Computer Science',
        duration: 'Sep 2023 - Present',
        gpa_percentage: 0
      },
      {
        school_university: 'Madras Institute of Technology, Chennai, India',
        course: 'Bachelor of Engineering, Computer Science',
        duration: 'Aug 2017 - April 2021',
        gpa_percentage: 85.4
      },
      {
        school_university: 'Vivekananda Vidyalaya Junior College, Chennai, India',
        course: 'Higher secondary',
        duration: 'June 2016 - May 2017',
        gpa_percentage: 87.6
      },
      {
        school_university: 'Vivekananda Vidyalaya Junior College, Chennai, India',
        course: 'Senior secondary',
        duration: 'June 2014 - May 2015',
        gpa_percentage: 96
      }
    ];
  }
}
