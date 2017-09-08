import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { Opinion } from "../opinions/opinion.model";

import { OpinionService } from "../opinions/opinion.service";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    opinion: Opinion[] = [];

    constructor(
        private userService: UserService,
        private opinionService: OpinionService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadLastOpinions();
    }

    loadLastOpinions(): void {
        this.opinionService.getLastOpinions().subscribe((opinion) => {
            this.opinion = opinion;

        });
    }
}