import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { NavigationService } from "../services/navigation.service";
import { CustomizerService } from "../services/customizer.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.component.html",
  styleUrls: ["./customizer.component.scss"]
})
export class CustomizerComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  nav;
  routeInterceptorSub: Subscription;
  horizontalLayout : boolean;
  isRTL: boolean;
  disableIcon : boolean = true;
  largeSidebar : boolean;
  themeLayout = 'default-theme';
  screenWidth : any;
  screenHeight : any;
  constructor(
	 public navService: NavigationService,
	 public customizer: CustomizerService,
	 private router: Router
  ) {
      this.onResize();
  }

  ngOnInit() {
	 this.nav = [...this.navService.defaultMenu];
  }
  ngOnDestroy() {}

  	changeLayout(){
      this.customizer.toggleClass(document.body, 'horizontal-menu-active');
   }

   disableIconLayout(){
      this.customizer.toggleClass(document.body, 'disable-sidebar-text');
   }

   changeSidebarLayout(){
      this.customizer.toggleClass(document.body, 'large-sidebar');
   }

   selectLayoutColor(theme) {
      this.themeLayout = theme;
	   setTimeout(() => {
         this.customizer.changeTheme(theme);
	   }, 40);
   }

   toggleDir() {
		this.customizer.toggleDir(this.isRTL);
   }

   @HostListener('window:resize', ['$event'])
   onResize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      if(this.screenWidth < 700){
         this.customizer.removeClass(document.body, 'horizontal-menu-active');
      }
   }
}
