import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-github'
      },
      {
        icon: 'pi pi-linkedin'
      },
      {
        icon: 'pi pi-code'
      },
      {
        icon: 'pi pi-envelope'
      },
    ];
  }
  
}
