import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
    selector: 'app-canvas-arc',
    templateUrl: './canvas-arc.component.html',
    styleUrls: ['./canvas-arc.component.scss']
})
export class CanvasArcComponent implements OnInit, AfterViewInit {

    @ViewChild('canvasArc', { static: true }) canvasArc: ElementRef;

    constructor(
        
    ) { }

    ngOnInit() {
        
    }
    ngAfterViewInit(): void {
        let context = this.canvasArc.nativeElement.getContext('2d');
        context.lineWidth = 5;
        context.strokeStyle = '#005588';

        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 60, 40, 0, 2 * Math.PI * (i + 1) / 10);
            context.closePath();
            context.stroke();
        }
        context.strokeStyle = 'red';
        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 180, 40, 0, 2 * Math.PI * (i + 1) / 10);

            context.stroke();
        }
        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 300, 40, 0, 2 * Math.PI * (i + 1) / 10, true);
            context.closePath();
            context.stroke();
        }
        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 420, 40, 0, 2 * Math.PI * (i + 1) / 10, true);
            context.stroke();
        }
        context.closePath();
        context.fillStyle = "green";
        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 540, 40, 0, 2 * Math.PI * (i + 1) / 10, true);
            context.closePath();
            context.fill();
        }
        for (let i = 0; i < 10; i++) {
            context.beginPath();
            context.arc(50 + i * 100, 660, 40, 0, 2 * Math.PI * (i + 1) / 10, true);
            context.fill();
        }
    }

}
