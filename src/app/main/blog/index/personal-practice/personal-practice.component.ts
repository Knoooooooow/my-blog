import { IndexService } from './../../../shared/service/index/index.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
    selector: 'app-personal-practice',
    templateUrl: './personal-practice.component.html',
    styleUrls: ['./personal-practice.component.scss']
})
export class PersonalPracticeComponent implements OnInit, AfterViewInit {

    constructor(private indexService: IndexService) { }

    ngOnInit() {
        console.log(this.bubbleSort([6, 2, 3, 1, 2, 3, 4, 5]));
    }
    test: Array<NameArgs> = [];
    token() {
        this.indexService.getToken().subscribe(data => {
            console.log(data);
        })
        this.printName({ buy: 123, value: 'abc' });
    }
    printName<T extends NameArgs>(arg: T) {
        console.log(arg.buy);
        return arg;
    }


    getFind<T>(items: Array<T>, callback: (item: T, index: number) => boolean): T | undefined {
        for (let i = 0, length = items.length; i < length; i++) {
            if (callback(items[i], i)) {
                return items[i]
            }
        }
    }

    items = [{ a: 1 }, { a: 2 }, { a: 4 }, null];
    result = this.getFind(this.items, (item, index) => item.a === 2);





    test2() {
        let reverse = (x: number) => {
            let maxNumber = 2147483647;

            if (x >= maxNumber) {
                return 0;
            }
            let xArray = x.toString().split('');
            let newxArray = [];
            let result = null;
            if (x < 0) {
                xArray.shift();
            }
            for (let i = xArray.length - 1; i >= 0; i--) {
                newxArray.push(xArray[i])
            }
            if (x >= 0) {
                return newxArray.join('');
            }
            if (x < 0) {
                result = newxArray.join('');
                if (result >= maxNumber) {
                    return 0;
                }
                return result - (2 * result);
            }
        };
        let a = 1534236469;
        console.log(reverse(a));
    }


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

    bubbleSort(arr: Array<any>) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                    let temp = arr[j + 1];        //元素交换
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    anums = [2, 7, 11, 15, 2, 2, 2, 2, 7, 15];
    atarget = 30;
    twoSum(nums, target) {

        let targetMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            let key = target - element
            if (targetMap.has(key)) {
                return [targetMap.get(key), i]
            }
            targetMap.set(element, i)
        }
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
    @ViewChild('canvas', { static: true }) canvas: ElementRef;

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

interface NameArgs {
    buy: number;
    value?: any;
}