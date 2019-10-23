import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { digit } from 'src/app/mock-data/mock-canvas';
@Component({
    selector: 'app-canvas-arc',
    templateUrl: './canvas-arc.component.html',
    styleUrls: ['./canvas-arc.component.scss']
})
export class CanvasArcComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('canvasArc', { static: true }) canvasArc: ElementRef;

    WINDOW_WIDTH = 1024;
    WINDOW_HEIGHT = 768;
    RADIUS = 8;
    MARGIN_TOP = 60;
    MARGIN_LEFT = 30;
    endTime = new Date(2019, 9, 25, 6, 55, 55);
    curShowTimeSeconds = 0;
    numberOfFrames = 50;
    constructor(

    ) { }

    ngOnInit() {

    }
    refreshCanvas = null;
    ngAfterViewInit(): void {
        let context = this.canvasArc.nativeElement.getContext('2d');
        context.width = this.WINDOW_WIDTH;
        context.height = this.WINDOW_HEIGHT;
        this.curShowTimeSeconds = this.getCurrentShowTimeSeconds();
        this.refreshCanvas = setInterval(() => {
            this.render(context);
            this.upDate();
        }, Math.round(1000/this.numberOfFrames));
    }
    render(cxt) {

        cxt.clearRect(0, 0, this.WINDOW_WIDTH, this.WINDOW_HEIGHT);

        let hours: any = parseInt(this.curShowTimeSeconds / 3600 + '');
        let minutes: any = parseInt((this.curShowTimeSeconds - hours * 3600) / 60 + '');
        let seconds: any = this.curShowTimeSeconds % 60;
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
    getCurrentShowTimeSeconds() {
        let curTime = new Date();
        let ret = this.endTime.getTime() - curTime.getTime();
        ret = Math.round(ret / 1000);
        console.log(ret);
        return ret >= 0 ? ret : 0;
    }
    upDate() {
        let nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
        let nextHours: any = parseInt(nextShowTimeSeconds / 3600 + '');
        let nextMinutes: any = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60 + '');
        let nextSeconds: any = nextShowTimeSeconds % 60;

        let curHours: any = parseInt(this.curShowTimeSeconds / 3600 + '');
        let curMinutes: any = parseInt((this.curShowTimeSeconds - curHours * 3600) / 60 + '');
        let curSeconds: any = this.curShowTimeSeconds % 60;
        if (nextSeconds != curSeconds) {
            this.curShowTimeSeconds = nextShowTimeSeconds;
        }
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.refreshCanvas);
    }
}
