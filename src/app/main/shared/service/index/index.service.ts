import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IndexService {

    constructor() {
        
    }

    private emitChangeSource = new Subject<any>();
    changeEmitted$ = this.emitChangeSource.asObservable();
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
    resizeWidth() {

    }
    getMockData() {
        setTimeout(() => {
            return of([
                { id: 11, name: 'Dr Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ])
        }, 500);
    }
    getToken(): Observable<any> {
        return of({
            idToken: 1,
            refreshToken: 2
        })
    }
}
