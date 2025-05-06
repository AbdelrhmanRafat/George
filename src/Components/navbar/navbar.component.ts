import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  isMobileMenuOpen = false;
  wishlistCount = 3;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const menu = this.mobileMenu.nativeElement;
  
    // Start hidden
    this.renderer.setStyle(menu, 'display', 'none');
    gsap.set(menu, { height: 0, opacity: 0 });
  }
    

  toggleMobileMenu(): void {
    const menu = this.mobileMenu.nativeElement;
  
    if (this.isMobileMenuOpen) {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.renderer.setStyle(menu, 'display', 'none');
        },
      });
    } else {
      this.renderer.setStyle(menu, 'display', 'block');
      gsap.to(menu, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
      });
    }
  
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }  
}
