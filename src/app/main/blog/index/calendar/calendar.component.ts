import { Component, OnInit } from '@angular/core';
import { Week } from 'src/app/mock-data/const-data';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    week: any;
    month: Array<any> = [];
    constructor() {
        this.week = Week;
    }
    ngOnInit() {
        this.initializeData();
    }
    initializeData() {
        let currentDate = new Date();
        let firstMonthWeek = currentDate.getDay();
        let monthLength = this.getMonthFullDay(currentDate);

        for (let i = 0; i < firstMonthWeek; i++) {
            this.month.push({
                text: '',
                holder: true
            });
        }

        for (let i = 1; i <= monthLength; i++) {
            this.month.push({
                text: i,
                date: new Date(currentDate).getDate(),
                selected: this.isSameDay(currentDate, new Date(currentDate.getFullYear(), currentDate.getMonth(), i))
            });
        }
    }

    /**
     * 
     * @param month Date格式的月份，并非时间戳
     * 
     * 返回传入时间月份的天数，不填参数返回当前时间
     */
    getMonthFullDay(date): number {
        let currentMonth = date.getMonth();
        let nextMonthFirstDay = new Date(date.getFullYear(), currentMonth + 1, 1).getTime();
        return new Date(nextMonthFirstDay - 1000 * 60 * 60 * 24).getDate();
    }
    getWeekDay(date: Date): number {
        return date.getDay();
    }
    isSameDay(date1: Date, date2: Date): boolean {
        return date1.getDate() == date2.getDate()
    }
}
