import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // this.http.get('/api').subscribe(data => {
        //     console.log(data);
        // })
    }

}
