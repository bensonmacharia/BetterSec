import { Component, OnInit } from '@angular/core';
import { Elearn, ElearnService } from '../services/elearn.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  elearns: Elearn[];

  constructor(private elearnService: ElearnService) { }

  ngOnInit() {
    this.elearnService.getElearns().subscribe(res => {
      this.elearns = res;
    });
  }

  remove(item) {
    this.elearnService.removeElearn(item.id);
  }

}
