import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import APPLICATIONS from 'src/app/configuration/applications';

@Injectable({providedIn: 'root'})
export class ApplicationsService {
    constructor() { }

    getApplications(): Observable<any> {
        return of(APPLICATIONS);
    }
    
}