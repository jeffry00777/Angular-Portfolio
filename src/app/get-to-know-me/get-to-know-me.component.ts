import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-get-to-know-me',
  standalone: true,
  imports: [],
  templateUrl: './get-to-know-me.component.html',
  styleUrl: './get-to-know-me.component.css'
})
export class GetToKnowMeComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
