import { Component, OnInit,AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {Opinion} from "../opinion.model";

import {OpinionService} from "../opinion.service";

@Component({
  selector: 'app-view-opinion',
  templateUrl: './view-opinion.component.html',
  styleUrls: ['./view-opinion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewOpinionComponent implements OnInit {

  opinion : Opinion[] = [];

  constructor(private opinionService : OpinionService) { }

  ngOnInit() {
    this.loadOpinions();
  }

  loadOpinions() : void {
    this.opinionService.getOpinions().subscribe((opinion) => {
      this.opinion = opinion;
      
    });
  }

}
