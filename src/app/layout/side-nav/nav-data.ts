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
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
  {
    routeLink: 'coupens',
    icon: 'tags',
    label: 'Check',
    expanded: false,
    items: [
      {
        routeLink: 'coupens/list',
        label: 'Coupens List',
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
];
