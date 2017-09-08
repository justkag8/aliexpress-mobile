import { Component, OnInit } from '@angular/core';
import {Opinion} from "../opinion.model";
import {OpinionService} from "../opinion.service";
import { AlertService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss']
})
export class AddOpinionComponent implements OnInit {
  model: any = {};
  loading = false;
  idUser = null;

  constructor(private router: Router,private opinionService: OpinionService,
    private alertService: AlertService) { }
  ngOnInit() {
  }

  addOpinion() {
    this.loading = true;
    this.idUser = localStorage.getItem('idUser');
    this.model.idUser = this.idUser;
    this.opinionService.create(this.model)
        .subscribe(
            data => {
                this.alertService.success('Opinia dodana', true);
                this.router.navigate(['/viewOpinion']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

}
