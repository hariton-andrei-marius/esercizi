import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from '../../services/applications.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    applications: Array<any> = [];

    constructor(private appService: ApplicationsService) { }

    ngOnInit() {
        // here we need to load them from the service
        this.mode2();
    }

    async mode1() {
        let applications = await this.appService.getApplications().toPromise();
        this.applications = applications;
    }

    mode2() {
        this.appService.getApplications().subscribe((response: any) => {
            this.applications = response;
        });
    }
}