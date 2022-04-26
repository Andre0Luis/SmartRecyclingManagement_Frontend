import { Component, OnInit, AfterViewInit, HostListener, ViewChildren, QueryList } from '@angular/core';
import {
  NavigationService,
  IMenuItem,
  IChildItem
} from '../../../services/navigation.service';
import { CustomizerService } from "../../../services/customizer.service";
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import tooltipster from 'tooltipster';

import { filter } from 'rxjs/operators';
import { Utils } from '../../../shared/utils';
declare var $ : any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  selectedItem: IMenuItem;
  nav: IMenuItem[];
  screenHeight : any;
  screenWidth : any;
  @ViewChildren(PerfectScrollbarDirective) psContainers:QueryList<PerfectScrollbarDirective>;
  psContainerSecSidebar: PerfectScrollbarDirective;

  constructor(public router: Router, public navService: NavigationService, public customizer: CustomizerService) {
	 this.onResize();
	 setTimeout(() => {
		this.psContainerSecSidebar = this.psContainers.toArray()[1];
	 });
  }

  ngOnInit() {
	 this.updateSidebar();
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

  ngAfterViewInit(){
	// Side Menu
	setTimeout(() => {
	 $('.nav-menu').on('click', function() {
		  if ($(this).parent().find('ul').length) {
				if ($(this).parent().find('ul').first().is(':visible')) {
					 $(this).find('.side-menu__sub-icon').removeClass('transform rotate-180')
					 $(this).removeClass('side-menu--open')
					 $(this).parent().find('ul').first().slideUp({
						  done: function() {
								$(this).removeClass('side-menu__sub-open')
						  }
					 })
				} else {
               $('.nav-menu').find('.side-menu__sub-icon').removeClass('transform rotate-180')
               $('.nav-menu').removeClass('side-menu--open');
               $(".side-menu__sub-open").css("display", "none");
               $('.sub-menu-wrap').removeClass('side-menu__sub-open');
					 $(this).find('.side-menu__sub-icon').addClass('transform rotate-180')
					 $(this).addClass('side-menu--open')
					 $(this).parent().find('ul').first().slideDown({
						  done: function() {
								$(this).addClass('side-menu__sub-open')
						  }
					 })
				}
		  }
	 });
	}, 100);
  }

  selectItem(item) {
	 this.navService.sidebarState.childnavOpen = true;
	 this.navService.selectedItem = item;
	 this.setActiveMainItem(item);

	 // Scroll to top secondary sidebar
	 setTimeout(() => {            
		this.psContainerSecSidebar.update();
		this.psContainerSecSidebar.scrollToTop(0, 400);
	 });
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

   closeSidebar(){
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

  	updateSidebar() {
		if (Utils.isMobile()) {
			this.customizer.addClass(document.body, 'sidebar-closed');
			this.navService.sidebarState.sidenavOpen = false;
			this.navService.sidebarState.childnavOpen = false;
	 	} else {
	 		this.customizer.removeClass(document.body, 'sidebar-closed');
			this.navService.sidebarState.sidenavOpen = true;
	 	}
  	}

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
	this.screenHeight = window.innerHeight;
	this.screenWidth = window.innerWidth;
	if(this.screenWidth < 700){
		this.customizer.removeClass(document.body, 'horizontal-menu-active');
	}
	 this.updateSidebar();
  }
}
