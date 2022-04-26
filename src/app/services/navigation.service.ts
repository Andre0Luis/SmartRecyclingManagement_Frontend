import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;
    
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {   
            name: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'dashboard',
            sub: [
                { icon: 'dashboard', name: 'Version 1', state: '/dashboard/v1', type: 'link' },
                { icon: 'dashboard', name: 'Version 2', state: '/dashboard/v2', type: 'link' }
            ]
        },
        {
            name: 'UI kits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'web',
            sub: [
                { icon: 'info', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
                { icon: 'clear_all', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
                { icon: 'verified_user', name: 'Badges', state: '/uikits/badges', type: 'link' },
                { icon: 'radio_button_checked', name: 'Buttons', state: '/uikits/buttons', type: 'link' },
                { icon: 'recent_actors', name: 'Cards', state: '/uikits/cards', type: 'link' },
                { icon: 'insert_link', name: 'Modals', state: '/uikits/modals', type: 'link' },
                { icon: 'filter_frames', name: 'Popover', state: '/uikits/popover', type: 'link' },
                { icon: 'grade', name: 'Rating', state: '/uikits/rating', type: 'link' },
                { icon: 'hourglass_empty', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
            ]
        },
        {
            name: 'Apps',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'apps',
            sub: [
                { icon: 'receipt', name: 'Invoice', state: '/invoice', type: 'link' },
                { icon: 'inbox', name: 'Inbox', state: '/inbox', type: 'link' },
                { icon: 'chat', name: 'Chat', state: '/chat', type: 'link' },
                { icon: 'today', name: 'Calendar', state: '/calendar', type: 'link' },
            ]
        },
        {
            name: 'Forms',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'input',
            sub: [
                { icon: 'accessibility', name: 'Basic components', state: '/forms/basic', type: 'link' },
                { icon: 'list_alt', name: 'Form layouts', state: '/forms/layouts', type: 'link' },
                { icon: 'import_contacts', name: 'Input Group', state: '/forms/input-group', type: 'link' },
                { icon: 'contacts', name: 'Input Mask', state: '/forms/input-mask', type: 'link' },
                { icon: 'contact_phone', name: 'Tag Input', state: '/forms/tag-input', type: 'link' },
                { icon: 'contact_mail', name: 'Wizard', state: '/forms/wizard', type: 'link' },
                { icon: 'compare', name: 'Image Cropper', state: '/forms/img-cropper', type: 'link' },
            ]
        },
        {
            name: 'Data Tables',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'table_chart',
            sub: [
                { icon: 'fullscreen', name: 'Fullscreen', state: '/tables/full', type: 'link' },
                { icon: 'first_page', name: 'Paging', state: '/tables/paging', type: 'link' },
                { icon: 'sort', name: 'Filter', state: '/tables/filter', type: 'link' },
            ]
        },
        {
            name: 'Sessions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'account_circle',
            sub: [
                { icon: 'assignment_ind', name: 'Sign up', state: '/sessions/signup', type: 'link' },
                { icon: 'assignment_return', name: 'Sign in', state: '/sessions/signin', type: 'link' },
                { icon: 'warning', name: 'Forgot', state: '/sessions/forgot', type: 'link' }
            ]
        },
        {
            name: 'Pages',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'pages',
            sub: [
                { icon: 'face', name: 'User Profile', state: '/pages/profile', type: 'link' },
                { icon: 'help', name: 'Faq', state: '/pages/faq', type: 'link' },
                { icon: 'policy', name: 'Search', state: '/pages/search', type: 'link' }
            ]
        },
        // {
        //     name: 'Icons',
        //     description: '600+ premium icons',
        //     type: 'link',
        //     icon: 'insert_emoticon',
        //     state: '/icons/iconsmind'
        // },
        {
            name: 'Error',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'note_add',
            sub: [
                { icon: 'find_replace', name: 'Not found', state: '/error/404', type: 'link' },
                { icon: 'find_replace', name: '500 Error', state: '/error/500', type: 'link' }
            ]
        }
    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
