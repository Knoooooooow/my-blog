export interface SideBarNode {
    name: string;
    route?: string,
    children?: SideBarNode[];
}
export const sideBarData: SideBarNode[] = [
    {
        name: '简介',
        route: 'main/blog/index/canvas-arc'
    }, {
        name: '个人练习',
        children: [
            {
                name: '一些console',
                children: [
                    {
                        name: '个人练习console' ,
                        route:'main/blog/index/personal-practice'
                    },
                    {
                        name: 'Brussel sprouts' 
                    },
                ]
            }, {
                name: 'Orange',
                children: [
                    {
                        name: 'Pumpkins' 
                    },
                    {
                        name: 'Carrots' 
                    },
                ]
            },
        ]
    },
];