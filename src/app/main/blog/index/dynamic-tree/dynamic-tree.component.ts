import { Component, OnInit, Injectable } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicDataSource, DynamicFlatNode, DynamicDatabase } from './dynamic-tree.service';

@Component({
    selector: 'app-dynamic-tree',
    templateUrl: './dynamic-tree.component.html',
    styleUrls: ['./dynamic-tree.component.scss'],
    providers: [DynamicDatabase]
})
export class DynamicTreeComponent implements OnInit {

    constructor(database: DynamicDatabase) {
        this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);

        this.dataSource.data = database.initialData();
    }

    treeControl: FlatTreeControl<DynamicFlatNode>;

    dataSource: DynamicDataSource;

    getLevel = (node: DynamicFlatNode) => node.level;

    isExpandable = (node: DynamicFlatNode) => node.hasChildren;

    hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.hasChildren;
    ngOnInit() {
        console.log(this.dataSource.data);
        
    }

}
