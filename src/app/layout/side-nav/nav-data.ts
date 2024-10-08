export interface INavData {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavData[];
}

export const sideNavData: INavData[] = [
  {
    routeLink: 'dashboard',
    icon: 'house',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'box-open',
    label: 'Products',
  },
  {
    routeLink: 'coupens',
    icon: 'tags',
    label: 'Coupens',
    expanded: false,
    items: [
      {
        routeLink: 'coupens/list',
        label: 'Coupens List',
        expanded: false,
        items: [
          {
            routeLink: 'coupens',
            label: 'list 1',
          },
        ],
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
];
