import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { sideBarData, SideBarNode } from 'src/app/mock-data/mock-side-bar';


@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    treeControl = new NestedTreeControl<SideBarNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<SideBarNode>();

    constructor() {
        this.dataSource.data = sideBarData;
    }

    hasChild = (_: number, node: SideBarNode) => !!node.children && node.children.length > 0;

    ngOnInit() {

    }
    redirectTo(node,e:Event) {
        console.log(node);
        e.stopPropagation();
        // this.router.navigate(['/main/blog/index']);
    }



}
