import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgIf, NgFor,  } from '@angular/common'; //


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jeffry Portfolio';
  isScrolled = false;
  
  
  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Change navbar color if scrolled more than 50px
  }

  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show'); // Closes the menu
    }
  }
}
