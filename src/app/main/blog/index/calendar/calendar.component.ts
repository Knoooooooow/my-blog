import { Component, OnInit } from '@angular/core';
import { Week } from 'src/app/mock-data/const-data';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    week: any;
    month: Array<any>;
    constructor() {
        this.week = Week;
        this.month = [];
        this.years = [];
        this.isShowSelectDay = true;
    }
    ngOnInit() {
        this.initializeData();
    }

    currentDate = new Date();
    showDate = new Date();
    showMonth = this.showDate.getMonth();
    showYear = this.showDate.getFullYear();

    years: Array<any>;

    isShowSelectYear: boolean;
    isShowSelectMonth: boolean;
    isShowSelectDay: boolean;
    /**
     * 初始化数据，也用于change日期方法，这么写似乎不太好，应该拆分出来
     */
    initializeData() {
        this.month = [];
        let firstMonthWeek = this.showDate.getDay();
        let monthLength = this.getMonthFullDay(this.showDate);

        for (let i = 0; i < firstMonthWeek; i++) {
            this.month.push({
                text: '',
                holder: true
            });
        }

        for (let i = 1; i <= monthLength; i++) {
            this.month.push({
                text: i,
                date: new Date(this.showDate).getDate(),
                selected: this.isSameDay(this.currentDate, new Date(this.showDate.getFullYear(), this.showDate.getMonth(), i))
            });
        }
    }
    selectYear(yearObj) {
        this.isShowSelectYear = false;
        this.showDate.setFullYear(yearObj.text);
        this.showYear = yearObj.text;
        this.resetMonth();
    }
    resetMonth() {
        this.month = [];
        let firstMonthWeek = this.showDate.getDay();
        let monthLength = this.getMonthFullDay(this.showDate);

        for (let i = 0; i < firstMonthWeek; i++) {
            this.month.push({
                text: '',
                holder: true
            });
        }

        for (let i = 1; i <= monthLength; i++) {
            this.month.push({
                text: i,
                date: new Date(this.showDate).getDate(),
                selected: this.isSameDay(this.currentDate, new Date(this.showDate.getFullYear(), this.showDate.getMonth(), i))
            });
        }
    }
    /**
     * 注意new Date()传入一个参数是字符串时会自动转为年，传入一个参数是数字时会识别为时间戳，两个参数是 年/月
     */
    resetYear() {
        this.years = [];
        for (let i = 1; i <= 3; i++) {
            this.years.unshift({
                text: this.showYear - i,
                selected: false
            });
        }
        for (let i = 0; i < 13; i++) {
            this.years.push({
                text: this.showYear + i,
                selected: this.isSameYear(new Date(this.showYear + ''), new Date(this.showYear + i + ''))
            });
        }
    }

    selectShowYear() {
        this.isShowSelectYear = true;
        this.isShowSelectDay = false;
        this.resetYear();
    }
    monthChange(number) {
        this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + number);
        this.showMonth = this.showDate.getMonth();
        this.showYear = this.showDate.getFullYear();
        this.resetMonth();
    }
    arrowClick(value) {
        if (value == 'previous') {
            if (this.isShowSelectYear) {
                this.previousYearPage();
            }
            if (this.isShowSelectDay) {
                this.monthChange(-1);
            }
        }
        if (value == 'next') {
            if (this.isShowSelectYear) {
                this.nextYearPage();
            }
            if (this.isShowSelectDay) {
                this.monthChange(1);
            }
        }
    }
    previousYearPage() {
        let firstYear = this.years[0].text;
        this.years = [];
        for (let i = 1; i <= 16; i++) {
            this.years.unshift({
                text: firstYear - i,
                selected: this.isSameYear(new Date(this.showYear + ''), new Date(firstYear - i + ''))
            });
        }
    }
    nextYearPage() {
        let nextYear = this.years[this.years.length - 1].text;
        console.log(nextYear);
        this.years = [];
        for (let i = 1; i <= 16; i++) {
            this.years.push({
                text: nextYear + i,
                selected: this.isSameYear(new Date(this.showYear + ''), new Date(nextYear + i + ''))
            });
        }
    }

    /**
     * 
     * @param month Date格式的月份，并非时间戳
     * 
     * 返回传入时间月份的天数
     */
    getMonthFullDay(date: Date): number {
        let currentMonth = date.getMonth();
        let nextMonthFirstDay = new Date(date.getFullYear(), currentMonth + 1, 1).getTime();
        return new Date(nextMonthFirstDay - 1000 * 60 * 60 * 24).getDate();
    }
    /**
     * 
     * 当前时间是周几，0为周日
     */
    getWeekDay(date: Date): number {
        return date.getDay();
    }
    /**
     * 
     * 比较两个时间天数是否相等
     */
    isSameDay(date1: Date, date2: Date): boolean {
        return date1.getDate() == date2.getDate() && date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth();
    }
    /**
     * 
     * 比较两个时间年份是否相等
     */
    isSameYear(date1: Date, date2: Date): boolean {
        return date1.getFullYear() == date2.getFullYear();
    }
}
