import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { digit } from 'src/app/mock-data/mock-canvas';
@Component({
    selector: 'app-canvas-arc',
    templateUrl: './canvas-arc.component.html',
    styleUrls: ['./canvas-arc.component.scss']
})
export class CanvasArcComponent implements OnInit, AfterViewInit {

    @ViewChild('canvasArc', { static: true }) canvasArc: ElementRef;

    WINDOW_WIDTH = 1024;
    WINDOW_HEIGHT = 768;
    RADIUS = 8;
    MARGIN_TOP = 60;
    MARGIN_LEFT = 30;
    constructor(

    ) { }

    ngOnInit() {

    }
    ngAfterViewInit(): void {
        let context = this.canvasArc.nativeElement.getContext('2d');
        context.width = this.WINDOW_WIDTH;
        context.height = this.WINDOW_HEIGHT;
        this.render(context);
    }
    render(cxt) {
        let hours: any = 12;
        let minutes: any = 34;
        let seconds: any = 56;
        this.renderDigit(this.MARGIN_LEFT, this.MARGIN_TOP, parseInt(hours / 10 + ''), cxt);
        this.renderDigit(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(hours % 10 + ''), cxt);
        this.renderDigit(this.MARGIN_LEFT + 30 * (this.RADIUS + 1), this.MARGIN_TOP, 10, cxt);
        this.renderDigit(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(minutes / 10 + ''), cxt);
        this.renderDigit(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(minutes % 10 + ''), cxt);
        this.renderDigit(this.MARGIN_LEFT + 69 * (this.RADIUS + 1), this.MARGIN_TOP, 10, cxt);
        this.renderDigit(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(seconds / 10 + ''), cxt);
        this.renderDigit(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(seconds % 10 + ''), cxt);
    }
    renderDigit(x, y, num, context) {
        context.fillStyle = 'rgb(0,102,153)';
        for (let i = 0; i < digit[num].length; i++) {
            for (let j = 0; j < digit[num][i].length; j++) {
                if (digit[num][i][j] == 1) {
                    context.beginPath();
                    context.arc(x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), this.RADIUS, 0, 2 * Math.PI);
                    context.closePath();
                    context.fill();
                }

            }

        }
    }
}
