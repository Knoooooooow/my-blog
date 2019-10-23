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
                        name: '测试数据1',
                    },
                    {
                        name: '测试数据2' 
                    },
                ]
            }, {
                name: '还是点不了',
                children: [
                    {
                        name: '测试数据3' 
                    },
                    {
                        name: '测试数据4' 
                    },
                ]
            },
        ]
    }, {
        name: '七巧板',
        route:'main/blog/index/personal-practice'
    },
];