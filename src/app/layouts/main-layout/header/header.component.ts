import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { SearchService } from '../../../services/search.service';
import { AuthService } from '../../../services/auth.service';
import { CustomizerService } from "../../../services/customizer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    notifications: any[];

    constructor(
      private navService: NavigationService,
      public searchService: SearchService,
      public customizer: CustomizerService,
      private auth: AuthService
    ) {
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
    }
  
    toggelSidebar() {
      this.customizer.toggleClass(document.body, 'sidebar-closed');
      const state = this.navService.sidebarState;
      if (state.sidenavOpen) {
        return state.sidenavOpen = false;
      }
      // item has child items
      if (!state.sidenavOpen &&  
        this.navService.selectedItem.type === 'dropDown') {
          state.sidenavOpen = true;
      }
      // item has no child items
      if (!state.sidenavOpen) {
        state.sidenavOpen = true;
      }
    }
  
    signout() {
      this.auth.signout();
    }

}
