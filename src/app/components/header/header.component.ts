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
    console.log(this.currentRoute)
    if(this.currentRoute === '/') {
      return classList = 'navbar-background-home'
    }
    
    return classList = 'navbar-background-general';
  }

  ngOnInit(): void {
  }
}
