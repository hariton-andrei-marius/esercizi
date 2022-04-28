import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationsService } from '../../services/applications.service';

@Component({
    selector: 'app-apppage',
    templateUrl: 'app-page.component.html'
})

export class AppPageComponent implements OnInit {
    id!: string;
    name: string = "No App Loaded";
    applications = [];

    constructor(private route: ActivatedRoute, private appService: ApplicationsService) { }

    async ngOnInit() {
        this.applications = await this.appService.getApplications().toPromise();
        this.route.params.subscribe((params: any) => {
            this.name = (this.applications.find((app: any) => app.id === params.id) as any)?.name;
            this.id = params.id;
        });
    }
}