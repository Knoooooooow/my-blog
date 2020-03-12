export interface SideBarNode {
    name: string;
    route?: string,
    children?: SideBarNode[];
}
export const sideBarData: SideBarNode[] = [
    {
        name: '模拟倒计时',
        route: 'main/blog/index/canvas-arc'
    }, {
        name: '模拟数据',
        children: [
            {
                name: '点不了',
                children: [
                    {
                        name: '测试数据2'
                    },
                ]
            }, {
                name: '动态树',
                route: 'main/blog/index/dynamic-tree'
            },
        ]
    }, {
        name: '七巧板',
        route: 'main/blog/index/personal-practice'
    }, {
        name: '日历',
        route: 'main/blog/index/calendar'
    }, {
        name: '杂七杂八',
        route: 'main/blog/index/everything'
    }

];