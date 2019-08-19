import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

    @ViewChild('canvas', { static: true }) canvas: ElementRef;
    constructor() { }

    ngOnInit() {

    }
    mockData: Array<any> = [
        {
            p: [
                { x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }
            ],
            color: 'aqua'
        },
        {
            p: [
                { x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }
            ],
            color: 'green'
        },
        {
            p: [
                { x: 0, y: 800 }, { x: 400, y: 800 }, { x: 200, y: 600 }
            ],
            color: 'pink'
        },
        {
            p: [
                { x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }
            ],
            color: 'purple'
        },
        {
            p: [
                { x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }
            ],
            color: 'orange'
        },
        {
            p: [
                { x: 400, y: 400 }, { x: 600, y: 200 }, { x: 600, y: 600 }
            ],
            color: 'yellow'
        },
        {
            p: [
                { x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }
            ],
            color: 'red'
        },
    ]
    ngAfterViewInit(): void {
        console.log(this.canvas);
        let context = this.canvas.nativeElement.getContext('2d');
        this.mockData.forEach(element => {
            this.draw(element, context);
        })

    }
    draw(piece, cxt) {
        cxt.beginPath();
        cxt.moveTo(piece.p[0].x, piece.p[0].y);
        for (let i = 1; i < piece.p.length; i++) {
            const element = piece.p[i];
            cxt.lineTo(element.x, element.y);
        }
        cxt.closePath();
        cxt.fillStyle = piece.color;
        cxt.fill();
    }

}
