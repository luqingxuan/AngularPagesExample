require('./app.component.less');

import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  providers: [HeroService]
})
export class AppComponent implements OnInit{

    title = 'class of heroes';

    heroes: Hero[] = [];
    stdHero: Hero = null;

    constructor(private heroService : HeroService) {}

    ngOnInit() : void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onHeroClick(hero) {
      this.stdHero = hero;
    }
}
