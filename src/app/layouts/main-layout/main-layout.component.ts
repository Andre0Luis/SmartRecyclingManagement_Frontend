import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { CustomizerService } from "../../services/customizer.service";
import { SearchService } from 'src/app/services/search.service';
import { SharedAnimations } from 'src/app/animations/shared-animations';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

    moduleLoading: boolean;
    @ViewChild(PerfectScrollbarDirective, { static: true }) perfectScrollbar: PerfectScrollbarDirective;
  
    constructor(
      public navService: NavigationService,
      public customizer: CustomizerService,
      public searchService: SearchService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
          this.moduleLoading = true;
        }
        if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
          this.moduleLoading = false;
        }
      });
    }

   isHorizontalLayout() {
    	return this.customizer.isHorizontal(document.body, 'horizontal-menu-active');  	
    }
}
