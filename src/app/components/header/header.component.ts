import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) { 
    this.router = router
    this.currentRoute = this.router.url

    router.events.subscribe(val => {
      if (this.router.url != "") {
        return this.currentRoute = this.router.url;
      } 
        return this.currentRoute = "home";
    });
  }

  getClass() {
    let classList = '';
    if(this.currentRoute === '/') {
      return classList = 'navbar-background-home'
    }
    return classList = 'navbar-background-general';
  }

  heroVisible() {
    let classList = '';
    if(this.currentRoute === '/') {
      return classList = 'hero-background hero-color'
    }
    return classList = '';
  }

  displaySection() {
    let classList = '';
    if(this.currentRoute === '/') {
      return classList = 'header-section-container'
    }
    return classList = 'no-header-section-container-display';
    
  }

  ngOnInit(): void {
  }
}
