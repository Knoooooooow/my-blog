import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SET_APP_SETTINGS } from './../../settings/settings';

@Injectable({
    providedIn: 'root'
})
export class LoadServiceService {

    constructor(private httpClient: HttpClient) { }


    getSettings(): Promise<any> {

        const promise = new Promise((resolve, reject) => {
            console.log(`检查是否为PC端`);
            resolve();
            if (10 < 9) {
                reject();
            }
        })
            .then(settings => {
                function IsPC() {
                    var userAgentInfo = navigator.userAgent;
                    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                    var isPC = true;
                    for (var v = 0; v < Agents.length; v++) {
                        if (userAgentInfo.indexOf(Agents[v]) > 0) { isPC = false; break; }
                    }
                    if (!isPC) {
                        SET_APP_SETTINGS({
                            mode: 'over',
                            hasBackdrop: true,
                            opened: false
                        })
                    }
                }
                IsPC();
                return settings;
            }, error => {
                console.error(error);
            });

        return promise;
    }
    /*
     getSettings(): Promise<any> {
        
        const promise = this.httpClient.get('https://api.github.com/users/octocat/followers')
            .toPromise()
            .then(settings => {
                function IsPC() {
                    var userAgentInfo = navigator.userAgent;
                    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                    var isPC = true;
                    for (var v = 0; v < Agents.length; v++) {
                        if (userAgentInfo.indexOf(Agents[v]) > 0) { isPC = false; break; }
                    }
                    if (!isPC) {
                        SET_APP_SETTINGS({
                            mode : 'over',
                            hasBackdrop : true,
                            opened:false
                        })
                    }
                    console.log(`使用github接口模拟获取初始化数据，并检查是否为PC端 +${isPC}`);
                }
                IsPC();
                return settings;
            },error=>{
                console.error(error);
            });

        return promise;
    }
     */
}
