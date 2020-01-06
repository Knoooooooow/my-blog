import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';




export interface DynamicFlatNode {
    nodeRef: string,
    name: string,
    level: number,
    hasChildren: boolean,
    isLoading?:boolean,
    children?:Array<DynamicFlatNode>
}
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
    data:Array<DynamicFlatNode> = [
        {
            nodeRef: '1',
            name: 'Tom',
            level: 0,
            hasChildren: true,
            // children: [{ name: 'Jack', level: 1, nodeRef: '11', hasChildren: false }]
        },
        {
            nodeRef: '2',
            name: 'Tom2',
            level: 0,
            hasChildren: true,
            // children: [{ name: 'Jack2', level: 1, nodeRef: '22', hasChildren: false }]
        }
    ];

    getChildrenCustom(nodeId) {
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            if (element.nodeRef == nodeId) {
                return element;
            }
        }
    }
    isHasChildren(nodeId): boolean {
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            if (element.nodeRef == nodeId) {
                return element.hasChildren;
            }
        }
    }

    /** Initial data from database */
    initialData() {
        return this.data;
    }

}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */

@Injectable()
export class DynamicDataSource {

    dataChange = new BehaviorSubject<any[]>([]);

    get data() { return this.dataChange.value; }
    set data(value: DynamicFlatNode[]) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }

    constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
        private _database: DynamicDatabase) { }

    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
        this._treeControl.expansionModel.onChange.subscribe(change => {
            if ((change as SelectionChange<DynamicFlatNode>).added ||
                (change as SelectionChange<DynamicFlatNode>).removed) {
                this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
            }
        });

        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }

    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }

    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: DynamicFlatNode, expand: boolean) {
        const children = this._database.getChildrenCustom(node.nodeRef);
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }

        node.isLoading = true;

        setTimeout(() => {
            if (expand) {
                const nodes = [{ name: 'Jack', level: 1, nodeRef: '11', hasChildren: false }];
                this.data.splice(index + 1, 0, ...nodes);
            } else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++ , count++) { }
                this.data.splice(index + 1, count);
            }

            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
        }, 1000);
    }
}


