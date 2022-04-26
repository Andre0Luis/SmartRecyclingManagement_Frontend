import { Component, OnInit, HostListener, ViewChildren, QueryList } from '@angular/core';
import {
  NavigationService,
  IMenuItem,
  IChildItem
} from '../../../services/navigation.service';
import { SearchService } from '../../../services/search.service';
import { AuthService } from '../../../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrls: ['./horizontal-header.component.scss']
})
export class HorizontalHeaderComponent implements OnInit {
    selectedItem: IMenuItem;
    nav: IMenuItem[];
    notifications: any[];
    
    constructor(public router: Router, public navService: NavigationService,public searchService: SearchService,
      private auth: AuthService) {
    	this.notifications = [
        {
          icon: 'email',
          title: 'New message',
          badge: '2',
          text: 'Et aut officiis debitis',
          time: new Date(),
          status: 'primary',
          link: '/chat'
        },
        {
          icon: 'shopping_cart',
          title: 'Order received',
          badge: '$545',
          text: '7 More Order',
          time: new Date('05/08/2019'),
          status: 'success',
          link: '/dashboard/v1'
        },
        {
          icon: 'nights_stay',
          title: 'Mostly Sunny',
          text: 'Very warm with hazy sunshine',
          time: new Date('05/08/2019'),
          status: 'danger',
          link: '/dashboard/v1'
        },
        {
          icon: 'markunread',
          title: '2 Unread Emails ',
          text: 'Et aut officiis debitis aut offi',
          time: new Date('05/08/2019'),
          status: 'success',
          link: '/dashboard/v1'
        },
        {
          icon: 'chat_bubble_outline',
          title: '5 Chats Unread',
          badge: 'Resolved',
          text: 'Et aut officiis debitis aut',
          time: new Date('05/08/2019'),
          status: 'danger',
          link: '/dashboard/v1'
        }
      ];
    }
  
    ngOnInit() {
    // CLOSE SIDENAV ON ROUTE CHANGE
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(routeChange => {
        this.closeChildNav();
        if (Utils.isMobile()) {
          this.navService.sidebarState.sidenavOpen = false;
        }
      });

    this.navService.menuItems$.subscribe(items => {
      this.nav = items;
      this.setActiveFlag();
    });
  }

  selectItem(item) {
    this.navService.sidebarState.childnavOpen = true;
    this.navService.selectedItem = item;
    this.setActiveMainItem(item);
  }
  closeChildNav() {
    this.navService.sidebarState.childnavOpen = false;
    this.setActiveFlag();
  }

  onClickChangeActiveFlag(item) {
    this.setActiveMainItem(item);
  }
  setActiveMainItem(item) {
    this.nav.forEach(i => {
      i.active = false;
    });
    item.active = true;
  }

  setActiveFlag() {
    if (window && window.location) {
      const activeRoute = window.location.hash || window.location.pathname;
      this.nav.forEach(item => {
        item.active = false;
        if (activeRoute.indexOf(item.state) !== -1) {
          this.navService.selectedItem = item;
          item.active = true;
        }
        if (item.sub) {
          item.sub.forEach(subItem => {
            subItem.active = false;
            if (activeRoute.indexOf(subItem.state) !== -1) {
              this.navService.selectedItem = item;
              item.active = true;
            }
            if (subItem.sub) {
              subItem.sub.forEach(subChildItem => {
                if (activeRoute.indexOf(subChildItem.state) !== -1) {
                  this.navService.selectedItem = item;
                  item.active = true;
                  subItem.active = true;
                }
              });
            }
          });
        }
      });
    }
  }

  toggelSidebar() {
      const state = this.navService.sidebarState;
      if (state.childnavOpen && state.sidenavOpen) {
        return state.childnavOpen = false;
      }
      if (!state.childnavOpen && state.sidenavOpen) {
        return state.sidenavOpen = false;
      }
      // item has child items
      if (!state.sidenavOpen && !state.childnavOpen 
        && this.navService.selectedItem.type === 'dropDown') {
          state.sidenavOpen = true;
          setTimeout(() => {
              state.childnavOpen = true;
          }, 50);
      }
      // item has no child items
      if (!state.sidenavOpen && !state.childnavOpen) {
        state.sidenavOpen = true;
      }
    }
  
    signout() {
      this.auth.signout();
    }
}
