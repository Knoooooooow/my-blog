import { IndexService } from './../../shared/service/index/index.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-personal-practice',
    templateUrl: './personal-practice.component.html',
    styleUrls: ['./personal-practice.component.scss']
})
export class PersonalPracticeComponent implements OnInit {

    constructor(private indexService: IndexService) { }

    ngOnInit() {
        this.test.push({buy:123});
    }
    test:Array<NameArgs> = [];
    token() {
        this.indexService.getToken().subscribe(data => {
            console.log(data);
        })
        this.printName({buy:123,value: 'abc'});
    }
    printName<T extends NameArgs>(arg: T) {
        console.log(arg.buy);
        return arg;
    }
    

    getFind<T>(items: T[], callback: (item: T, index: number) => boolean): T | undefined {
        for (let i = 0, length = items.length; i < length; i++) {
            if (callback(items[i], i)) {
                return items[i]
            }
        }
    }

    items = [{ a: 1 }, { a: 2 }, { a: 4 }, null];
    result = this.getFind(this.items, (item, index) => item.a === 2);








    mockString = 'aasdasddddaaaaaabbbbbccasdawdxvxchjbnaw';
    mockArray = [1, 2, 3, 4, 5, 6];
    mockArray2 = [1, 2, 3, 4, 5, 6];
    findMaxString(str: string) {
        let obj = {};
        for (let i = 0; i < str.length; i++) {
            if (!obj[str.charAt(i)]) {
                obj[str.charAt(i)] = 1;
            } else {
                obj[str.charAt(i)] += 1;
            }
        }
        return obj;
    }
    distinct(a, b) {
        //需要去重的数组
        let arr = a.concat(b);
        //去重之后的数组
        let result = [];
        let obj = {};
        //如果对象没有当前属性，就给个属性并把当前未重复的推进去
        //如果对象有这个属性，就啥都不干，这样会只遍历一次
        //由于使用的是js内置的对象遍历引擎优化，效率奇高
        for (let i of arr) {
            if (!obj[i]) {
                result.push(i);
                obj[i] = 1;
            }
        }
        console.log(obj);
        return result
    }
}

interface NameArgs {
    buy: number;
    value?:any;
}