
export type NavigationItem = any | any | any;

export interface NavigationLink {
  type: 'link';
  route: string | any;
  fragment?: string;
  label: string;
  icon?: string;
  isVisible?: boolean;
  routerLinkActive?: { exact: boolean };
  badge?: {
    value: string;
    background: any;
    color: any;
  };
}

export interface NavigationDropdown {
  type: 'dropdown';
  label: string;
  icon?: string;
  isVisible?: boolean;
  children?: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    background: any;
    color: any;
  };
}

export interface NavigationSubheading {
  type: 'subheading';
  label: string;
  children: Array<NavigationLink | NavigationDropdown>;
}
