import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomizerService {

  selectedSidebarColor;
  constructor(private router: Router) {}

    modifySidebarUrls(nav, selectedLayoutName: string) {
      nav.forEach(item => {
        if (item.state && item.state.indexOf("sessions") !== -1) {
          return;
        }
        if (item.type === "link" && item.state.indexOf("applayout-") === -1) {
          item.state = "/" + selectedLayoutName + item.state;
        } else if (item.type === "link") {
          item.state = this.replaceUrlString(selectedLayoutName, item.state);
        }
        if (item.type === "dropDown" && item.sub) {
          this.modifySidebarUrls(item.sub, selectedLayoutName);
        }
      });
    }
  replaceUrlString(inputString, fullString) {
    let currentRoute = fullString;
    let routeArray = currentRoute.split("/");

    routeArray = routeArray.map(r => {
      if (r.indexOf("applayout-") !== -1) {
        return inputString;
      }
      return r;
    });
    return routeArray.join("/");
  }

  removeClass(el, className) {
    if (!el || el.length === 0) return;
    if (!el.length) {
      el.classList.remove(className);
    } else {
      for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(className);
      }
    }
  }
  addClass(el, className) {
    if (!el) return;
    if (!el.length) {
      el.classList.add(className);
    } else {
      for (var i = 0; i < el.length; i++) {
        el[i].classList.add(className);
      }
    }
  }
  findClosest(el, className) {
    if (!el) return;
    while (el) {
      var parent = el.parentElement;
      if (parent && this.hasClass(parent, className)) {
        return parent;
      }
      el = parent;
    }
  }
  hasClass(el, className) {
    if (!el) return;
    return (
      ` ${el.className} `.replace(/[\n\t]/g, " ").indexOf(` ${className} `) > -1
    );
  }
  toggleClass(el, className) {
    if (!el) return;
    if (this.hasClass(el, className)) {
      this.removeClass(el, className);
    } else {
      this.addClass(el, className);
    }
  }
  toggleDir(isRTL) {
      let html = document.getElementsByTagName('html')[0];
      if(!html) {
          return;
      }
      if(isRTL) {
          html.setAttribute('dir', 'rtl');
      } else {
          html.setAttribute('dir', 'ltr');
      }
  }
    changeTheme(className) {
    	var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
      // this.removeClass('html', 'white-theme');
      // this.removeClass('html', 'dark-theme');
      // this.removeClass('html', 'grey-theme');
      // this.removeClass('html', 'black-n-white-active');
      // this.addClass('html', className);
      root.setAttribute( 'class', '' );
      root.setAttribute( 'class', className );
    }

   isHorizontal(el, className) {
    if (!el) return;
    if (this.hasClass(el, className)) {
      return true;
    } else {
      return false;
    }
  }
}
