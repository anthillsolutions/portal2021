import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-simple',
  templateUrl: './landing-simple.component.html',
  styleUrls: ['./landing-simple.component.scss']
})
export class LandingSimpleComponent {

  constructor(
    private meta: Meta
  ) {
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'anthillsolutions' });
    this.meta.addTag({ name: 'og:url', content: 'https://anthillsolutions.fr' });
    this.meta.addTag({ name: 'og:image', content: 'assets/images/logo_as.svg' });
  }

}
